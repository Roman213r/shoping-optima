"use client";

import { useStore } from "@/components/StoreProvider";

export function AddToCartButton({
  productId,
  disabled,
}: {
  productId: string;
  disabled?: boolean;
}) {
  const { addToCart } = useStore();
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => addToCart(productId)}
      className="h-12 rounded-lg bg-[#00a046] px-6 font-semibold text-white hover:bg-[#008f3d] disabled:bg-zinc-300"
    >
      {disabled ? "Немає в наявності" : "Купити"}
    </button>
  );
}
