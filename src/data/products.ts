export type CategoryId =
  | "lighting"
  | "cleaning"
  | "control"
  | "climate"
  | "security"
  | "power";

export type Product = {
  id: string;
  title: string;
  short: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  category: CategoryId;
  inStock: boolean;
  accent: string;
};

export const categories: { id: CategoryId; label: string }[] = [
  { id: "lighting", label: "Освітлення" },
  { id: "cleaning", label: "Прибирання" },
  { id: "control", label: "Керування" },
  { id: "climate", label: "Клімат" },
  { id: "security", label: "Безпека" },
  { id: "power", label: "Живлення" },
];

export const products: Product[] = [
  {
    id: "chandelier-aurora",
    title: "Люстра Aurora LED 80 см",
    short: "Розумна стельова люстра з RGB, сценаріями та керуванням з телефону.",
    price: 6499,
    oldPrice: 7999,
    rating: 4.8,
    reviews: 214,
    category: "lighting",
    inStock: true,
    accent: "#f59e0b",
  },
  {
    id: "vacuum-lynx",
    title: "Розумний пилосос Lynx S7",
    short: "Лазерна навігація, волога протирка, станція самоочищення.",
    price: 12999,
    oldPrice: 15499,
    rating: 4.7,
    reviews: 482,
    category: "cleaning",
    inStock: true,
    accent: "#64748b",
  },
  {
    id: "hub-pulse",
    title: "Пульт і хаб Pulse Hub Mini",
    short: "Єдиний пульт для світла, штор, клімату та розеток.",
    price: 2199,
    oldPrice: 2699,
    rating: 4.6,
    reviews: 167,
    category: "control",
    inStock: true,
    accent: "#0ea5e9",
  },
  {
    id: "bulb-orbit",
    title: "Лампа Orbit E27 12W",
    short: "Тепле/холодне світло, розклад і голос через хаб.",
    price: 349,
    oldPrice: 449,
    rating: 4.5,
    reviews: 901,
    category: "lighting",
    inStock: true,
    accent: "#fde68a",
  },
  {
    id: "plug-socket",
    title: "Розумна розетка Socket Pro",
    short: "Вимірювання споживання, таймери, захист від перевантаження.",
    price: 599,
    rating: 4.4,
    reviews: 356,
    category: "power",
    inStock: true,
    accent: "#22c55e",
  },
  {
    id: "thermostat-niva",
    title: "Термостат Niva Heat",
    short: "Підлогове опалення та радіатори, графік по кімнатах.",
    price: 3299,
    oldPrice: 3899,
    rating: 4.6,
    reviews: 128,
    category: "climate",
    inStock: true,
    accent: "#ef4444",
  },
  {
    id: "camera-look",
    title: "Камера Look 2K Indoor",
    short: "Нічне бачення, детекція руху, сповіщення в застосунку.",
    price: 1899,
    rating: 4.3,
    reviews: 240,
    category: "security",
    inStock: true,
    accent: "#334155",
  },
  {
    id: "lock-keyless",
    title: "Замок Keyless Door",
    short: "Відбиток, код, картка та відкриття з телефону.",
    price: 4599,
    oldPrice: 5299,
    rating: 4.7,
    reviews: 93,
    category: "security",
    inStock: true,
    accent: "#1e293b",
  },
  {
    id: "strip-neon",
    title: "LED стрічка Neon 5 м",
    short: "Клейка стрічка для ніш і стелі, музичний режим.",
    price: 799,
    oldPrice: 999,
    rating: 4.4,
    reviews: 510,
    category: "lighting",
    inStock: true,
    accent: "#a855f7",
  },
  {
    id: "speaker-echo",
    title: "Колонка Echo Home",
    short: "Голосове керування будинком українською та музика.",
    price: 2799,
    rating: 4.2,
    reviews: 188,
    category: "control",
    inStock: true,
    accent: "#0369a1",
  },
  {
    id: "sensor-motion",
    title: "Датчик руху Guard PIR",
    short: "Автосвітло в коридорі та сигналізація, батарея 2 роки.",
    price: 429,
    rating: 4.5,
    reviews: 277,
    category: "security",
    inStock: true,
    accent: "#94a3b8",
  },
  {
    id: "mop-duo",
    title: "Миючий робот Duo Floor",
    short: "Дві ганчірки, що крутяться, бак 300 мл, карта квартири.",
    price: 9999,
    oldPrice: 11999,
    rating: 4.6,
    reviews: 141,
    category: "cleaning",
    inStock: false,
    accent: "#0f766e",
  },
];

export function getProduct(id: string) {
  return products.find((item) => item.id === id);
}

export function categoryLabel(id: CategoryId) {
  return categories.find((item) => item.id === id)?.label ?? id;
}
