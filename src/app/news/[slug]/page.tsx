import { Suspense } from "react";
import { NewsArticle } from "@/components/NewsArticle";

export default function NewsArticlePage() {
  return (
    <Suspense
      fallback={
        <div className="rounded-xl bg-white p-8 text-center text-zinc-500">Завантаження новини...</div>
      }
    >
      <NewsArticle />
    </Suspense>
  );
}
