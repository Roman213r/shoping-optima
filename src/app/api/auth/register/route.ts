import { NextResponse } from "next/server";
import {
  createSessionToken,
  hashPassword,
  newId,
  SESSION_COOKIE,
  sessionExpiry,
} from "@/lib/auth";
import { createSession, createUser, findUserByEmail } from "@/lib/db";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { name?: string; email?: string; password?: string }
    | null;

  const name = body?.name?.trim() ?? "";
  const email = body?.email?.trim().toLowerCase() ?? "";
  const password = body?.password ?? "";

  if (!name) return NextResponse.json({ error: "Вкажіть ім'я." }, { status: 400 });
  if (!email.includes("@")) {
    return NextResponse.json({ error: "Вкажіть коректний email." }, { status: 400 });
  }
  if (password.length < 4) {
    return NextResponse.json({ error: "Пароль має бути від 4 символів." }, { status: 400 });
  }

  if (findUserByEmail(email)) {
    return NextResponse.json({ error: "Користувач з таким email уже є." }, { status: 409 });
  }

  const userId = newId();
  const token = createSessionToken();
  const expiresAt = sessionExpiry();

  createUser({
    id: userId,
    name,
    email,
    passwordHash: hashPassword(password),
  });
  createSession({ id: newId(), token, userId, expiresAt });

  const response = NextResponse.json({ user: { name, email } });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
  return response;
}
