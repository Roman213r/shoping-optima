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
  image: string;
};

export const PAGE_SIZE = 12;

export const categories: { id: CategoryId; label: string }[] = [
  { id: "lighting", label: "Освітлення" },
  { id: "cleaning", label: "Прибирання" },
  { id: "control", label: "Керування" },
  { id: "climate", label: "Клімат" },
  { id: "security", label: "Безпека" },
  { id: "power", label: "Живлення" },
];

const catalog: Product[] = [
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
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1557597774-9d3bdab611c3?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1545454675-3538adf18110?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1558002038-df56cded2518?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lamp-floor-arc",
    title: "Торшер Arc Smart",
    short: "Підлогова лампа з димером і нічним режимом.",
    price: 2899,
    oldPrice: 3399,
    rating: 4.4,
    reviews: 76,
    category: "lighting",
    inStock: true,
    accent: "#fbbf24",
    image:
      "https://images.unsplash.com/photo-1507473881161-ead91b4b0c0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "curtain-motor",
    title: "Мотор штор Slide Quiet",
    short: "Тихий привід карниза, розклад сходу сонця.",
    price: 3799,
    rating: 4.5,
    reviews: 112,
    category: "control",
    inStock: true,
    accent: "#64748b",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "purifier-air",
    title: "Очищувач повітря Breeze HEPA",
    short: "Фільтр HEPA, індикатор якості повітря у застосунку.",
    price: 5499,
    oldPrice: 6299,
    rating: 4.6,
    reviews: 201,
    category: "climate",
    inStock: true,
    accent: "#38bdf8",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "humidifier-mist",
    title: "Зволожувач Mist Home",
    short: "Ультразвук, аромакапсула, автовимкнення без води.",
    price: 1599,
    rating: 4.3,
    reviews: 154,
    category: "climate",
    inStock: true,
    accent: "#67e8f9",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "doorbell-view",
    title: "Відеодзвінок View Bell",
    short: "Розмова з гостем з телефону, нічне відео.",
    price: 2499,
    oldPrice: 2999,
    rating: 4.4,
    reviews: 88,
    category: "security",
    inStock: true,
    accent: "#0f172a",
    image:
      "https://images.unsplash.com/photo-1558002038-1092192428b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cam-outdoor",
    title: "Камера двору Storm IP66",
    short: "Вулична 4 Мп, сирена, слот для карти пам’яті.",
    price: 2199,
    rating: 4.5,
    reviews: 173,
    category: "security",
    inStock: true,
    accent: "#1e293b",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "switch-wall",
    title: "Вимикач Wall Touch 2",
    short: "Сенсорна панель на 2 лінії, робота без нейтралі.",
    price: 899,
    rating: 4.2,
    reviews: 265,
    category: "power",
    inStock: true,
    accent: "#16a34a",
    image: "https://picsum.photos/seed/switch-wall-touch/800/600",
  },
  {
    id: "strip-power",
    title: "Подовжувач PowerBar USB",
    short: "4 розетки, 2 USB, захист від стрибків напруги.",
    price: 749,
    oldPrice: 899,
    rating: 4.3,
    reviews: 320,
    category: "power",
    inStock: true,
    accent: "#15803d",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ir-blaster",
    title: "ІЧ-пульт Blaster Air",
    short: "Керує кондиціонером і ТБ зі смартфона.",
    price: 499,
    rating: 4.1,
    reviews: 410,
    category: "control",
    inStock: true,
    accent: "#0284c7",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "leak-sensor",
    title: "Датчик протікання Aqua Ping",
    short: "Сирена і пуш, якщо з’явилась вода біля пральної.",
    price: 379,
    rating: 4.6,
    reviews: 97,
    category: "security",
    inStock: true,
    accent: "#0369a1",
    image: "https://picsum.photos/seed/aqua-leak-sensor/800/600",
  },
  {
    id: "window-bot",
    title: "Робот для вікон Glass Go",
    short: "Магнітна рамка, безпечний трос, автомийка скла.",
    price: 4599,
    oldPrice: 5299,
    rating: 4.2,
    reviews: 64,
    category: "cleaning",
    inStock: true,
    accent: "#0ea5e9",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "night-panel",
    title: "Нічник Panel Wood",
    short: "Дерев’яна панель з датчиком світла біля ліжка.",
    price: 1199,
    rating: 4.5,
    reviews: 142,
    category: "lighting",
    inStock: true,
    accent: "#d97706",
    image: "https://picsum.photos/seed/wood-night-panel/800/600",
  },
];

export const products: Product[] = catalog.map((item) => ({
  ...item,
  image: `https://picsum.photos/seed/${item.id}/800/600`,
}));

export function getProduct(id: string) {
  return products.find((item) => item.id === id);
}

export function categoryLabel(id: CategoryId) {
  return categories.find((item) => item.id === id)?.label ?? id;
}
