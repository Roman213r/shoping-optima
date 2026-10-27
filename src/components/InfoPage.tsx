import type { ReactNode } from "react";

export function InfoPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl rounded-xl border border-zinc-200 bg-white p-6">
      <h1 className="text-2xl font-black">{title}</h1>
      <div className="mt-4 space-y-3 text-zinc-700">{children}</div>
    </article>
  );
}
