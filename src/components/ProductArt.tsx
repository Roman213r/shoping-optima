"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

export function ProductArt({
  product,
  className = "h-44",
}: {
  product: Product;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-100 ${className}`}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={product.image}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <svg viewBox="0 0 120 90" className="h-28 w-36" aria-hidden>
          {product.category === "lighting" && (
            <>
              <ellipse cx="60" cy="28" rx="34" ry="10" fill={product.accent} />
              <path d="M26 28c8 22 20 36 34 36s26-14 34-36" fill={`${product.accent}99`} />
              <circle cx="60" cy="72" r="6" fill="#facc15" />
            </>
          )}
          {product.category === "cleaning" && (
            <>
              <ellipse cx="60" cy="58" rx="38" ry="16" fill="#cbd5e1" />
              <circle cx="60" cy="46" r="28" fill={product.accent} />
              <circle cx="60" cy="46" r="10" fill="#e2e8f0" />
            </>
          )}
          {product.category === "control" && (
            <>
              <rect x="28" y="12" width="64" height="66" rx="12" fill={product.accent} />
              <circle cx="60" cy="38" r="10" fill="#e2e8f0" />
              <rect x="42" y="56" width="36" height="8" rx="4" fill="#94a3b8" />
            </>
          )}
          {product.category === "climate" && (
            <>
              <rect x="30" y="18" width="60" height="54" rx="8" fill={product.accent} />
              <circle cx="60" cy="45" r="14" fill="#fee2e2" />
              <path d="M60 31v28" stroke="#b91c1c" strokeWidth="3" />
            </>
          )}
          {product.category === "security" && (
            <>
              <rect x="34" y="22" width="52" height="42" rx="10" fill={product.accent} />
              <circle cx="60" cy="43" r="12" fill="#e2e8f0" />
              <circle cx="60" cy="43" r="5" fill="#0f172a" />
            </>
          )}
          {product.category === "power" && (
            <>
              <rect x="32" y="20" width="56" height="50" rx="8" fill={product.accent} />
              <circle cx="48" cy="44" r="7" fill="#f8fafc" />
              <circle cx="72" cy="44" r="7" fill="#f8fafc" />
            </>
          )}
        </svg>
      )}
    </div>
  );
}
