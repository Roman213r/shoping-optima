import { describe, expect, it } from "vitest";
import { discountPercent, formatPrice } from "@/lib/format";

describe("formatPrice", () => {
  it("adds hryvnia and thousands separator", () => {
    expect(formatPrice(6499)).toMatch(/6.?499\s*₴/);
  });
});

describe("discountPercent", () => {
  it("rounds sale percent", () => {
    expect(discountPercent(6499, 7999)).toBe(19);
  });

  it("is zero without a higher old price", () => {
    expect(discountPercent(100)).toBe(0);
    expect(discountPercent(100, 80)).toBe(0);
  });
});
