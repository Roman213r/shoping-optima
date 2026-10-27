import {
  categories,
  PAGE_SIZE,
  type CategoryId,
  type Product,
} from "@/data/products";

export function catalogHref(opts: { q?: string; cat?: string; page?: number }) {
  const params = new URLSearchParams();
  if (opts.q) params.set("q", opts.q);
  if (opts.cat) params.set("cat", opts.cat);
  if (opts.page && opts.page > 1) params.set("page", String(opts.page));
  const query = params.toString();
  return query ? `/?${query}` : "/";
}

export function parseCatalogQuery(search: {
  q?: string | null;
  cat?: string | null;
  page?: string | null;
}) {
  const q = search.q ?? "";
  const cat = search.cat ?? "";
  const page = Math.max(1, Number(search.page ?? "1") || 1);
  const activeCat = categories.some((item) => item.id === cat)
    ? (cat as CategoryId)
    : undefined;
  return { q, query: q.trim().toLowerCase(), activeCat, page };
}

export function filterProducts(
  list: Product[],
  opts: { query: string; category?: CategoryId },
) {
  return list.filter((product) => {
    const byCat = !opts.category || product.category === opts.category;
    const byQuery =
      !opts.query ||
      product.title.toLowerCase().includes(opts.query) ||
      product.short.toLowerCase().includes(opts.query);
    return byCat && byQuery;
  });
}

export function paginate<T>(items: T[], page: number, pageSize = PAGE_SIZE) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), pageCount);
  const pageItems = items.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return { pageCount, currentPage, pageItems };
}
