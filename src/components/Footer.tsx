import Link from "next/link";
import { categories } from "@/data/products";

export function Footer() {
  return (
    <footer className="mt-8 bg-[#2d2d2d] text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Інформація</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-lime-300">
                Про магазин
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-lime-300">
                Новини
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-lime-300">
                Контакти
              </Link>
            </li>
            <li>
              <Link href="/sales" className="hover:text-lime-300">
                Акції
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Покупцям</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/delivery" className="hover:text-lime-300">
                Доставка і оплата
              </Link>
            </li>
            <li>
              <Link href="/warranty" className="hover:text-lime-300">
                Гарантія
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-lime-300">
                Повернення товару
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-lime-300">
                Особистий кабінет
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Каталог</p>
          <ul className="space-y-2 text-sm">
            {categories.map((item) => (
              <li key={item.id}>
                <Link href={`/?cat=${item.id}`} className="hover:text-lime-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Контакти</p>
          <p className="text-lg font-bold text-white">0 800 500 210</p>
          <p className="mt-1 text-sm">Безкоштовно по Україні</p>
          <p className="mt-3 text-sm">Пн–Нд: 8:00–21:00</p>
          <p className="mt-1 text-sm">hello@optimasmart.ua</p>
          <p className="mt-3 text-sm">Київ, вул. Хрещатик, 1</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-zinc-400">
          <p>© 2026 Optima Smart. Інтернет-магазин техніки для розумного дому.</p>
          <p>Оплата: Visa · Mastercard · Apple Pay · Google Pay</p>
        </div>
      </div>
    </footer>
  );
}
