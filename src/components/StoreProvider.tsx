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
  user: User | null;
  cartCount: number;
  lines: CartLine[];
  total: number;
  addToCart: (productId: string) => void;
  changeQty: (productId: string, quantity: number) => void;
  login: (email: string, password: string, name?: string) => string | null;
  logout: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const USER_KEY = "optima-user";
const CART_KEY = "optima-cart";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(USER_KEY);
      const savedCart = localStorage.getItem(CART_KEY);
      if (savedUser) setUser(JSON.parse(savedUser) as User);
      if (savedCart) setCart(JSON.parse(savedCart) as Record<string, number>);
    } catch {
      /* ignore broken storage */
    }
    setReady(true);
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
      login: (email, password, name) => {
        if (!email.includes("@")) return "Вкажіть коректний email.";
        if (password.length < 4) return "Пароль має бути від 4 символів.";
        const nextUser = {
          email,
          name: name?.trim() || email.split("@")[0],
        };
        setUser(nextUser);
        localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
        return null;
      },
      logout: () => {
        setUser(null);
        localStorage.removeItem(USER_KEY);
      },
    };
  }, [cart, user]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
