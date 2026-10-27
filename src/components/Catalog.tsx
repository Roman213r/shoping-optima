"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { catalogHref, filterProducts, paginate, parseCatalogQuery } from "@/lib/catalog";
import { categories, products } from "@/data/products";

export function Catalog() {
  const searchParams = useSearchParams();
  const { q, query, activeCat, page } = parseCatalogQuery({
    q: searchParams.get("q"),
    cat: searchParams.get("cat"),
    page: searchParams.get("page"),
  });
  const filtered = filterProducts(products, { query, category: activeCat });
  const { pageCount, currentPage, pageItems } = paginate(filtered, page);

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <aside className="h-fit rounded-xl border border-zinc-200 bg-white p-3">
        <p className="px-2 pb-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
          Категорії
        </p>
        <Link
          href="/"
          className={`block rounded-md px-2 py-2 text-sm ${!activeCat ? "bg-green-50 font-semibold text-green-800" : "text-zinc-700 hover:bg-zinc-50"}`}
        >
          Усі товари ({products.length})
        </Link>
        {categories.map((item) => {
          const count = products.filter((product) => product.category === item.id).length;
          return (
            <Link
              key={item.id}
              href={catalogHref({ cat: item.id })}
              className={`block rounded-md px-2 py-2 text-sm ${activeCat === item.id ? "bg-green-50 font-semibold text-green-800" : "text-zinc-700 hover:bg-zinc-50"}`}
            >
              {item.label} ({count})
            </Link>
          );
        })}
      </aside>

      <section>
        <div className="mb-4 rounded-xl bg-gradient-to-r from-green-700 to-emerald-500 p-5 text-white">
          <p className="text-sm text-green-100">Каталог як стрічка з цінами</p>
          <h1 className="text-2xl font-black">Розумний дім: люстри, пилососи, пульти</h1>
        </div>

        {activeCat && (
          <p className="mb-3 rounded-lg bg-white px-3 py-2 text-sm text-zinc-600">
            Фільтр: {categories.find((item) => item.id === activeCat)?.label}. Показано {filtered.length} з{" "}
            {products.length}.{" "}
            <Link href="/" className="font-semibold text-green-700 hover:underline">
              Відкрити всі сторінки каталогу
            </Link>
          </p>
        )}
        <p className="mb-3 text-sm text-zinc-500">
          {query ? `Пошук: «${q}» · ` : null}
          {filtered.length} товарів · сторінка {currentPage} з {pageCount}
        </p>

        {filtered.length === 0 ? (
          <p className="rounded-xl bg-white p-8 text-center text-zinc-500">
            Нічого не знайдено. Спробуйте інший запит.
          </p>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {pageItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {pageCount > 1 && (
              <nav className="mt-6 flex items-center justify-center gap-2">
                {currentPage > 1 && (
                  <Link
                    href={catalogHref({ q: query ? q : undefined, cat: activeCat, page: currentPage - 1 })}
                    className="rounded-lg border bg-white px-3 py-2 text-sm hover:bg-zinc-50"
                  >
                    Назад
                  </Link>
                )}
                {Array.from({ length: pageCount }, (_, index) => index + 1).map((num) => (
                  <Link
                    key={num}
                    href={catalogHref({ q: query ? q : undefined, cat: activeCat, page: num })}
                    className={`grid h-10 w-10 place-items-center rounded-lg text-sm font-semibold ${
                      num === currentPage
                        ? "bg-[#00a046] text-white"
                        : "border bg-white hover:bg-zinc-50"
                    }`}
                  >
                    {num}
                  </Link>
                ))}
                {currentPage < pageCount && (
                  <Link
                    href={catalogHref({ q: query ? q : undefined, cat: activeCat, page: currentPage + 1 })}
                    className="rounded-lg border bg-white px-3 py-2 text-sm hover:bg-zinc-50"
                  >
                    Далі
                  </Link>
                )}
              </nav>
            )}
          </>
        )}
      </section>
    </div>
  );
}
