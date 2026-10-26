import { Suspense } from "react";
import { ProductDetails } from "@/components/ProductDetails";

export default function ProductPage() {
  return (
    <Suspense
      fallback={
        <div className="rounded-xl bg-white p-8 text-center text-zinc-500">
          Завантаження товару...
        </div>
      }
    >
      <ProductDetails />
    </Suspense>
  );
}
