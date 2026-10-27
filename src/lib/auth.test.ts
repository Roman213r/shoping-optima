import { describe, expect, it } from "vitest";
import { hashPassword, verifyPassword } from "@/lib/password";

describe("password hashing", () => {
  it("accepts the original password", () => {
    const stored = hashPassword("secret-1");
    expect(verifyPassword("secret-1", stored)).toBe(true);
  });

  it("rejects a wrong password", () => {
    const stored = hashPassword("secret-1");
    expect(verifyPassword("secret-2", stored)).toBe(false);
  });

  it("rejects a broken stored hash", () => {
    expect(verifyPassword("secret-1", "not-a-hash")).toBe(false);
  });
});
