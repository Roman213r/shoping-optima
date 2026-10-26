import { createHash, randomBytes, randomUUID, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import {
  deleteSessionById,
  deleteSessionByToken,
  findSessionByToken,
  findUserById,
} from "@/lib/db";

export const SESSION_COOKIE = "optima_session";
const SESSION_DAYS = 30;

export function newId() {
  return randomUUID();
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const next = scryptSync(password, salt, 64);
  const prev = Buffer.from(hash, "hex");
  if (next.length !== prev.length) return false;
  return timingSafeEqual(next, prev);
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
