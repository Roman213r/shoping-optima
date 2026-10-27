"use client";

import Link from "next/link";
import { ProductArt } from "@/components/ProductArt";
import { useStore } from "@/components/StoreProvider";
import type { Product } from "@/data/products";
import { discountPercent, formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();
  const discount = discountPercent(product.price, product.oldPrice);

  return (
    <article className="flex flex-col rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative">
          <ProductArt product={product} />
          {discount > 0 && (
            <span className="absolute left-2 top-2 rounded bg-rose-500 px-1.5 py-0.5 text-xs font-bold text-white">
              -{discount}%
            </span>
          )}
        </div>
        <h2 className="mt-3 line-clamp-2 min-h-12 text-sm font-semibold text-zinc-900">
          {product.title}
        </h2>
      </Link>
      <p className="mt-1 text-xs text-amber-600">
        ★ {product.rating} · {product.reviews} відгуків
      </p>
      {product.oldPrice ? (
        <p className="mt-2 text-sm text-zinc-400 line-through">{formatPrice(product.oldPrice)}</p>
      ) : (
        <p className="mt-2 h-5" />
      )}
      <p className="text-xl font-extrabold text-zinc-900">{formatPrice(product.price)}</p>
      <button
        type="button"
        disabled={!product.inStock}
        onClick={() => addToCart(product.id)}
        className="mt-3 h-10 rounded-lg bg-[#00a046] text-sm font-semibold text-white hover:bg-[#008f3d] disabled:cursor-not-allowed disabled:bg-zinc-300"
      >
        {product.inStock ? "Купити" : "Немає в наявності"}
      </button>
    </article>
  );
}
