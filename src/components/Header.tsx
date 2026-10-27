"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useStore } from "@/components/StoreProvider";

export function Header() {
  const { ready, user, cartCount, logout } = useStore();
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/?q=${encodeURIComponent(q)}` : "/");
  }

  return (
    <header className="sticky top-0 z-20 shadow-md">
      <div className="bg-[#00a046] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
        <Link href="/" className="text-xl font-black tracking-tight">
          Optima<span className="text-lime-200">Smart</span>
        </Link>

        <form onSubmit={onSearch} className="order-3 flex min-w-[220px] flex-1 basis-full sm:order-none sm:basis-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Пошук: люстра, пилосос, пульт..."
            className="h-11 w-full rounded-l-md bg-white px-3 text-sm text-zinc-900 outline-none"
          />
          <button
            type="submit"
            className="h-11 rounded-r-md bg-lime-300 px-4 text-sm font-semibold text-green-900 hover:bg-lime-200"
          >
            Знайти
          </button>
        </form>

        <nav className="ml-auto flex items-center gap-3 text-sm font-medium">
          {ready && user ? (
            <button
              type="button"
              onClick={() => {
                void logout();
              }}
              className="rounded-md px-2 py-1 hover:bg-white/10"
            >
              {user.name} · вийти
            </button>
          ) : (
            <Link href="/login" className="rounded-md px-2 py-1 hover:bg-white/10">
              Увійти
            </Link>
          )}
          <Link href="/cart" className="relative rounded-md bg-white/15 px-3 py-2 hover:bg-white/25">
            Кошик
            {ready && cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-orange-400 px-1 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
      </div>
      <nav className="border-b border-zinc-300 bg-[#3a3a3a] text-sm text-zinc-100">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2 px-4 py-2">
          <Link href="/" className="hover:text-lime-300">
            Каталог
          </Link>
          <Link href="/sales" className="hover:text-lime-300">
            Акції
          </Link>
          <Link href="/news" className="font-semibold text-lime-300 hover:text-white">
            Новини
          </Link>
          <Link href="/delivery" className="hover:text-lime-300">
            Доставка
          </Link>
          <Link href="/warranty" className="hover:text-lime-300">
            Гарантія
          </Link>
          <Link href="/contacts" className="hover:text-lime-300">
            Контакти
          </Link>
        </div>
      </nav>
    </header>
  );
}
