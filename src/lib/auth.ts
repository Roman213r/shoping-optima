import { createHash, randomBytes, randomUUID } from "crypto";
import { cookies } from "next/headers";
import {
  deleteSessionById,
  deleteSessionByToken,
  findSessionByToken,
  findUserById,
} from "@/lib/db";
import { hashPassword, verifyPassword } from "@/lib/password";

export { hashPassword, verifyPassword };

export const SESSION_COOKIE = "optima_session";
const SESSION_DAYS = 30;

export function newId() {
  return randomUUID();
}

export function createSessionToken() {
  return createHash("sha256").update(randomBytes(32)).digest("hex");
}

export function sessionExpiry() {
  return new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
}

export async function getSessionUser() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const session = findSessionByToken(token);
  if (!session || new Date(session.expires_at) < new Date()) {
    if (session) deleteSessionById(session.id);
    return null;
  }

  const user = findUserById(session.user_id);
  if (!user) {
    deleteSessionByToken(token);
    return null;
  }

  return { id: user.id, name: user.name, email: user.email };
}
