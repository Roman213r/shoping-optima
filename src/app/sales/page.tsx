"use client";

import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function SalesPage() {
  const saleItems = products.filter((item) => item.oldPrice && item.oldPrice > item.price);

  return (
    <div>
      <h1 className="mb-1 text-2xl font-black">Акції</h1>
      <p className="mb-6 text-sm text-zinc-600">Товари зі знижкою прямо зараз</p>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {saleItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
