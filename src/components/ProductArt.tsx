import type { Product } from "@/data/products";

export function ProductArt({
  product,
  className = "h-44",
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl bg-zinc-100 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt={product.title}
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
