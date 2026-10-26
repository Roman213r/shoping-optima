"use client";

import Link from "next/link";
import { useStore } from "@/components/StoreProvider";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { lines, total, changeQty, user } = useStore();

  if (lines.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        <h1 className="text-2xl font-bold">Кошик порожній</h1>
        <Link href="/" className="mt-4 inline-block text-green-700 hover:underline">
          Перейти до стрічки товарів
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <section className="rounded-xl border border-zinc-200 bg-white">
        <h1 className="border-b px-4 py-3 text-xl font-bold">Кошик</h1>
        <ul>
          {lines.map(({ product, quantity }) => (
            <li key={product.id} className="flex items-center justify-between gap-4 border-b px-4 py-4 last:border-0">
              <div>
                <Link href={`/product/${product.id}`} className="font-semibold hover:text-green-700">
                  {product.title}
                </Link>
                <p className="text-sm text-zinc-500">{formatPrice(product.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="h-8 w-8 rounded border"
                  onClick={() => changeQty(product.id, quantity - 1)}
                >
                  −
                </button>
                <span className="w-6 text-center">{quantity}</span>
                <button
                  type="button"
                  className="h-8 w-8 rounded border"
                  onClick={() => changeQty(product.id, quantity + 1)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <aside className="h-fit rounded-xl border border-zinc-200 bg-white p-4">
        <p className="text-sm text-zinc-500">До сплати</p>
        <p className="text-2xl font-black">{formatPrice(total)}</p>
        {user ? (
          <button type="button" className="mt-4 h-11 w-full rounded-lg bg-orange-500 font-semibold text-white">
            Оформити замовлення
          </button>
        ) : (
          <Link
            href="/login"
            className="mt-4 flex h-11 items-center justify-center rounded-lg bg-orange-500 font-semibold text-white"
          >
            Увійдіть, щоб оформити
          </Link>
        )}
      </aside>
    </div>
  );
}
