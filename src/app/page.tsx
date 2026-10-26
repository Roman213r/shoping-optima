import { Suspense } from "react";
import { Catalog } from "@/components/Catalog";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="rounded-xl bg-white p-10 text-center text-zinc-500">
          Завантаження каталогу...
        </div>
      }
    >
      <Catalog />
    </Suspense>
  );
}
