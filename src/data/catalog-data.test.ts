import { describe, expect, it } from "vitest";
import { getProduct, products } from "@/data/products";
import { news } from "@/data/news";

describe("catalog data", () => {
  it("has unique product ids", () => {
    const ids = products.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("looks up a known SKU", () => {
    expect(getProduct("chandelier-aurora")?.title).toMatch(/Aurora/);
    expect(getProduct("missing")).toBeUndefined();
  });

  it("has unique news slugs", () => {
    const slugs = news.map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
