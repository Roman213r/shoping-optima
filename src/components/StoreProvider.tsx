"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "@/data/products";

type User = { name: string; email: string };

type CartLine = { product: Product; quantity: number };

type StoreContextValue = {
  ready: boolean;
  user: User | null;
  cartCount: number;
  lines: CartLine[];
  total: number;
  addToCart: (productId: string) => void;
  changeQty: (productId: string, quantity: number) => void;
  login: (email: string, password: string, name?: string) => Promise<string | null>;
  logout: () => Promise<void>;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const CART_KEY = "optima-cart";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);
      if (savedCart) setCart(JSON.parse(savedCart) as Record<string, number>);
    } catch {
      /* ignore broken storage */
    }
    setReady(true);

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 4000);
    fetch("/api/auth/me", { signal: controller.signal })
      .then((res) => res.json())
      .then((data: { user?: User | null }) => setUser(data.user ?? null))
      .catch(() => setUser(null))
      .finally(() => window.clearTimeout(timer));
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  const value = useMemo<StoreContextValue>(() => {
    const lines = Object.entries(cart)
      .map(([id, quantity]) => {
        const product = getProduct(id);
        return product ? { product, quantity } : null;
      })
      .filter((line): line is CartLine => line !== null);

    return {
      ready,
      user,
      cartCount: lines.reduce((sum, line) => sum + line.quantity, 0),
      lines,
      total: lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
      addToCart: (productId) => {
        setCart((prev) => ({
          ...prev,
          [productId]: (prev[productId] ?? 0) + 1,
        }));
      },
      changeQty: (productId, quantity) => {
        setCart((prev) => {
          const next = { ...prev };
          if (quantity <= 0) delete next[productId];
          else next[productId] = quantity;
          return next;
        });
      },
      login: async (email, password, name) => {
        const isRegister = Boolean(name?.trim());
        const response = await fetch(isRegister ? "/api/auth/register" : "/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, name }),
        });
        const data = (await response.json()) as { error?: string; user?: User };
        if (!response.ok) return data.error ?? "Не вдалося увійти.";
        setUser(data.user ?? { email, name: name?.trim() || email.split("@")[0] });
        return null;
      },
      logout: async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        setUser(null);
      },
    };
  }, [cart, ready, user]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
