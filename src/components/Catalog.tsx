"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, type CategoryId } from "@/data/products";

export function Catalog() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const cat = searchParams.get("cat") ?? "";
  const query = q.trim().toLowerCase();
  const activeCat = categories.some((item) => item.id === cat)
    ? (cat as CategoryId)
    : undefined;

  const filtered = products.filter((product) => {
    const byCat = !activeCat || product.category === activeCat;
    const byQuery =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.short.toLowerCase().includes(query);
    return byCat && byQuery;
  });

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
          Усі товари
        </Link>
        {categories.map((item) => (
          <Link
            key={item.id}
            href={`/?cat=${item.id}`}
            className={`block rounded-md px-2 py-2 text-sm ${activeCat === item.id ? "bg-green-50 font-semibold text-green-800" : "text-zinc-700 hover:bg-zinc-50"}`}
          >
            {item.label}
          </Link>
        ))}
      </aside>

      <section>
        <div className="mb-4 rounded-xl bg-gradient-to-r from-green-700 to-emerald-500 p-5 text-white">
          <p className="text-sm text-green-100">Каталог як стрічка з цінами</p>
          <h1 className="text-2xl font-black">Розумний дім: люстри, пилососи, пульти</h1>
        </div>

        {query && (
          <p className="mb-3 text-sm text-zinc-500">
            Пошук: «{q}» · знайдено {filtered.length}
          </p>
        )}

        {filtered.length === 0 ? (
          <p className="rounded-xl bg-white p-8 text-center text-zinc-500">
            Нічого не знайдено. Спробуйте інший запит.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
