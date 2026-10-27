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
      "https://images.unsplash.com/photo-1584907797015-7554e84d2b13?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1543512214-318c7703ecd5?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1565538810643-b5b1c3946aa5?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dimmer-slide",
    title: "Дімер Slide 200W",
    short: "Плавне світло зі смартфона, сумісний із лампами Orbit.",
    price: 649,
    rating: 4.3,
    reviews: 88,
    category: "power",
    inStock: true,
    accent: "#22c55e",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "usb-charger-gan",
    title: "Зарядка GaN 65W",
    short: "Швидка зарядка телефону і хаба, два USB-C.",
    price: 899,
    oldPrice: 1099,
    rating: 4.5,
    reviews: 210,
    category: "power",
    inStock: true,
    accent: "#15803d",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "socket-double",
    title: "Подвійна розетка Twin Pro",
    short: "Дві лінії в одному корпусі, облік споживання.",
    price: 799,
    rating: 4.2,
    reviews: 134,
    category: "power",
    inStock: true,
    accent: "#16a34a",
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "surge-guard",
    title: "Реле напруги Guard 40A",
    short: "Вимикає світло при стрибку, захищає холодильник і хаб.",
    price: 1299,
    oldPrice: 1499,
    rating: 4.6,
    reviews: 76,
    category: "power",
    inStock: true,
    accent: "#166534",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "battery-backup",
    title: "ДБЖ Mini Power 600",
    short: "Година роботи роутера і камер під час блекауту.",
    price: 2599,
    rating: 4.4,
    reviews: 59,
    category: "power",
    inStock: true,
    accent: "#14532d",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cable-pack",
    title: "Набір кабелів Power Kit",
    short: "USB-C, Lightning і подовжувач 3 м для розумного дому.",
    price: 349,
    rating: 4.1,
    reviews: 301,
    category: "power",
    inStock: true,
    accent: "#4ade80",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bulb-gu10",
    title: "Споти GU10 Smart 3 шт",
    short: "Комплект точкових ламп для кухні, сценарій «вечеря».",
    price: 999,
    oldPrice: 1299,
    rating: 4.4,
    reviews: 167,
    category: "lighting",
    inStock: true,
    accent: "#fbbf24",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "vacuum-mini",
    title: "Пилосос Lynx Mini",
    short: "Компактний робот для студії, зарядка 2 години.",
    price: 6999,
    oldPrice: 7999,
    rating: 4.3,
    reviews: 92,
    category: "cleaning",
    inStock: true,
    accent: "#64748b",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "remote-pro",
    title: "Пульт Pulse Remote Pro",
    short: "Фізичні кнопки сцен, підсвітка, робота з хабом Mini.",
    price: 899,
    rating: 4.5,
    reviews: 118,
    category: "control",
    inStock: true,
    accent: "#0284c7",
    image:
      "https://images.unsplash.com/photo-1584907797015-7554e84d2b13?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "heater-oil",
    title: "Обігрівач Heat Oil Smart",
    short: "Масляний радіатор із графіком і додатком.",
    price: 3199,
    oldPrice: 3699,
    rating: 4.2,
    reviews: 71,
    category: "climate",
    inStock: true,
    accent: "#ef4444",
    image:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "siren-home",
    title: "Сирена Home Alert",
    short: "105 дБ, зв’язок із датчиками руху та протікання.",
    price: 649,
    rating: 4.4,
    reviews: 83,
    category: "security",
    inStock: true,
    accent: "#334155",
    image:
      "https://images.unsplash.com/photo-1557597774-9d3bdab611c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plug-outdoor",
    title: "Вулична розетка Rain IP44",
    short: "Для гірлянди та насоса, волога захист, таймер.",
    price: 699,
    rating: 4.3,
    reviews: 54,
    category: "power",
    inStock: true,
    accent: "#22c55e",
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=800&q=80",
  },
];

export const products: Product[] = catalog;

export function getProduct(id: string) {
  return products.find((item) => item.id === id);
}

export function categoryLabel(id: CategoryId) {
  return categories.find((item) => item.id === id)?.label ?? id;
}
