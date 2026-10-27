import { describe, expect, it } from "vitest";
import { PAGE_SIZE, products } from "@/data/products";
import { catalogHref, filterProducts, paginate, parseCatalogQuery } from "@/lib/catalog";

describe("catalogHref", () => {
  it("returns home without query", () => {
    expect(catalogHref({})).toBe("/");
  });

  it("omits page=1", () => {
    expect(catalogHref({ cat: "power", page: 1 })).toBe("/?cat=power");
  });

  it("keeps search, category and page 2", () => {
    expect(catalogHref({ q: "люстра", cat: "lighting", page: 2 })).toBe(
      "/?q=%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0&cat=lighting&page=2",
    );
  });
});

describe("parseCatalogQuery", () => {
  it("ignores unknown category", () => {
    const parsed = parseCatalogQuery({ cat: "unknown", page: "0" });
    expect(parsed.activeCat).toBeUndefined();
    expect(parsed.page).toBe(1);
  });

  it("normalizes search text", () => {
    expect(parseCatalogQuery({ q: "  Lynx  " }).query).toBe("lynx");
  });
});

describe("filterProducts + paginate", () => {
  it("keeps full catalog on two pages", () => {
    const filtered = filterProducts(products, { query: "" });
    expect(filtered.length).toBeGreaterThan(PAGE_SIZE);
    const first = paginate(filtered, 1);
    const second = paginate(filtered, 2);
    expect(first.pageCount).toBeGreaterThanOrEqual(2);
    expect(first.pageItems).toHaveLength(PAGE_SIZE);
    expect(second.pageItems.length).toBeGreaterThan(0);
    expect(second.pageItems[0]?.id).not.toBe(first.pageItems[0]?.id);
  });

  it("filters by category without dropping remaining SKUs", () => {
    const power = filterProducts(products, { query: "", category: "power" });
    expect(power.length).toBeGreaterThan(0);
    expect(power.every((item) => item.category === "power")).toBe(true);
  });

  it("finds a vacuum by title", () => {
    const found = filterProducts(products, { query: "пилосос" });
    expect(found.some((item) => item.id === "vacuum-lynx")).toBe(true);
  });

  it("clamps page past the end", () => {
    const { currentPage, pageItems } = paginate([1, 2, 3], 99, 2);
    expect(currentPage).toBe(2);
    expect(pageItems).toEqual([3]);
  });
});
