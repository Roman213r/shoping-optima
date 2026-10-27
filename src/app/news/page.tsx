import Link from "next/link";
import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <div>
      <h1 className="mb-1 text-2xl font-black">Новини</h1>
      <p className="mb-6 text-sm text-zinc-600">Акції, новинки та поради з розумного дому</p>
      <div className="grid gap-4 md:grid-cols-2">
        {news.map((item) => (
          <Link
            key={item.slug}
            href={`/news/${item.slug}`}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase text-green-700">
              {item.tag} · {item.date}
            </p>
            <h2 className="mt-2 text-lg font-bold text-zinc-900">{item.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{item.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-green-700">Читати →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
