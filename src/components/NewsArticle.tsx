"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getNews } from "@/data/news";

export function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const item = getNews(slug);

  if (!item) {
    return (
      <div className="rounded-xl bg-white p-8 text-center">
        <p>Новину не знайдено.</p>
        <Link href="/news" className="mt-3 inline-block text-green-700 hover:underline">
          До всіх новин
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl rounded-xl border border-zinc-200 bg-white p-6">
      <Link href="/news" className="text-sm text-green-700 hover:underline">
        ← Усі новини
      </Link>
      <p className="mt-4 text-xs font-semibold uppercase text-green-700">
        {item.tag} · {item.date}
      </p>
      <h1 className="mt-2 text-3xl font-black">{item.title}</h1>
      <div className="mt-5 space-y-3 text-zinc-700">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
