import { NextResponse } from "next/server";
import {
  createSessionToken,
  newId,
  SESSION_COOKIE,
  sessionExpiry,
  verifyPassword,
} from "@/lib/auth";
import { createSession, findUserByEmail } from "@/lib/db";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: string; password?: string }
    | null;

  const email = body?.email?.trim().toLowerCase() ?? "";
  const password = body?.password ?? "";

  if (!email.includes("@") || password.length < 4) {
    return NextResponse.json({ error: "Невірний email або пароль." }, { status: 400 });
  }

  const user = findUserByEmail(email);
  if (!user || !verifyPassword(password, user.password_hash)) {
    return NextResponse.json({ error: "Невірний email або пароль." }, { status: 401 });
  }

  const token = createSessionToken();
  const expiresAt = sessionExpiry();
  createSession({ id: newId(), token, userId: user.id, expiresAt });

  const response = NextResponse.json({ user: { name: user.name, email: user.email } });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
  return response;
}
