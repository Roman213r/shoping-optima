"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/components/StoreProvider";

type Mode = "login" | "register";

export function AuthForm() {
  const { login, user } = useStore();
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const message = login(email, password, mode === "register" ? name : undefined);
    if (message) {
      setError(message);
      return;
    }
    router.push("/");
  }

  if (user) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
        <p className="text-zinc-700">
          Ви вже увійшли як <b>{user.name}</b>
        </p>
        <button
          type="button"
          onClick={() => router.push("/")}
          className="mt-4 rounded-lg bg-[#00a046] px-4 py-2 text-white"
        >
          До каталогу
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-5 grid grid-cols-2 rounded-lg bg-zinc-100 p-1 text-sm font-semibold">
        <button
          type="button"
          onClick={() => {
            setMode("login");
            setError(null);
          }}
          className={`rounded-md py-2 ${mode === "login" ? "bg-white text-zinc-900 shadow" : "text-zinc-500"}`}
        >
          Вхід
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("register");
            setError(null);
          }}
          className={`rounded-md py-2 ${mode === "register" ? "bg-white text-zinc-900 shadow" : "text-zinc-500"}`}
        >
          Реєстрація
        </button>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        {mode === "register" && (
          <label className="text-sm text-zinc-600">
            Ім&apos;я
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 h-11 w-full rounded-lg border border-zinc-300 px-3 text-zinc-900"
              placeholder="Олена"
            />
          </label>
        )}
        <label className="text-sm text-zinc-600">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 h-11 w-full rounded-lg border border-zinc-300 px-3 text-zinc-900"
            placeholder="you@email.com"
          />
        </label>
        <label className="text-sm text-zinc-600">
          Пароль
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={4}
            className="mt-1 h-11 w-full rounded-lg border border-zinc-300 px-3 text-zinc-900"
            placeholder="мінімум 4 символи"
          />
        </label>
        {error && <p className="text-sm text-rose-600">{error}</p>}
        <button type="submit" className="mt-2 h-11 rounded-lg bg-[#00a046] font-semibold text-white hover:bg-[#008f3d]">
          {mode === "login" ? "Увійти" : "Створити акаунт"}
        </button>
      </form>
      <p className="mt-4 text-xs text-zinc-500">
        Макет без сервера: дані зберігаються лише в браузері (localStorage).
      </p>
    </div>
  );
}
