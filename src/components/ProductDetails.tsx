"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductArt } from "@/components/ProductArt";
import { categoryLabel, getProduct } from "@/data/products";
import { formatPrice } from "@/lib/format";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id);

  if (!product) {
    return (
      <div className="rounded-xl bg-white p-8 text-center">
        <p>Товар не знайдено.</p>
        <Link href="/" className="mt-3 inline-block text-green-700 hover:underline">
          До каталогу
        </Link>
      </div>
    );
  }

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5">
      <Link href="/" className="text-sm text-green-700 hover:underline">
        ← До каталогу
      </Link>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductArt product={product} className="h-72 md:h-full min-h-72" />
        <div>
          <p className="text-sm text-zinc-500">{categoryLabel(product.category)}</p>
          <h1 className="mt-1 text-3xl font-black">{product.title}</h1>
          <p className="mt-2 text-amber-600">
            ★ {product.rating} · {product.reviews} відгуків
          </p>
          <p className="mt-4 text-zinc-600">{product.short}</p>
          {product.oldPrice && (
            <p className="mt-6 text-zinc-400 line-through">{formatPrice(product.oldPrice)}</p>
          )}
          <p className="text-3xl font-extrabold">{formatPrice(product.price)}</p>
          <p className="mt-2 text-sm text-zinc-500">
            {product.inStock ? "Є в наявності · доставка 1–3 дні" : "Очікується поставка"}
          </p>
          <div className="mt-6">
            <AddToCartButton productId={product.id} disabled={!product.inStock} />
          </div>
        </div>
      </div>
    </article>
  );
}
