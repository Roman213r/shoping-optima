import { mkdirSync } from "fs";
import path from "path";
import { DatabaseSync } from "node:sqlite";

const dataDir = path.join(process.cwd(), "data");
mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(path.join(dataDir, "auth.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    token TEXT NOT NULL UNIQUE,
    user_id TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`);

export type DbUser = {
  id: string;
  email: string;
  name: string;
  password_hash: string;
};

export function createUser(input: {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
}) {
  const now = new Date().toISOString();
  db.prepare(
    "INSERT INTO users (id, email, name, password_hash, created_at) VALUES (?, ?, ?, ?, ?)",
  ).run(input.id, input.email, input.name, input.passwordHash, now);
}

export function findUserByEmail(email: string) {
  return db
    .prepare("SELECT id, email, name, password_hash FROM users WHERE email = ?")
    .get(email) as DbUser | undefined;
}

export function findUserById(id: string) {
  return db
    .prepare("SELECT id, email, name, password_hash FROM users WHERE id = ?")
    .get(id) as DbUser | undefined;
}

export function createSession(input: {
  id: string;
  token: string;
  userId: string;
  expiresAt: Date;
}) {
  db.prepare(
    "INSERT INTO sessions (id, token, user_id, expires_at, created_at) VALUES (?, ?, ?, ?, ?)",
  ).run(input.id, input.token, input.userId, input.expiresAt.toISOString(), new Date().toISOString());
}

export function findSessionByToken(token: string) {
  return db
    .prepare(
      "SELECT id, token, user_id, expires_at FROM sessions WHERE token = ?",
    )
    .get(token) as
    | { id: string; token: string; user_id: string; expires_at: string }
    | undefined;
}

export function deleteSessionByToken(token: string) {
  db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
}

export function deleteSessionById(id: string) {
  db.prepare("DELETE FROM sessions WHERE id = ?").run(id);
}
