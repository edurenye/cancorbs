"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-serif text-lg font-semibold tracking-widest text-zinc-100 uppercase"
        >
          {t("common.brand")}
        </a>
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#"
              className="text-sm tracking-wider text-zinc-400 uppercase transition-colors hover:text-zinc-100"
            >
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a
              href="#history"
              className="text-sm tracking-wider text-zinc-400 uppercase transition-colors hover:text-zinc-100"
            >
              {t("nav.history")}
            </a>
          </li>
          <li>
            <a
              href="#booking"
              className="border border-zinc-600 px-4 py-1.5 text-sm tracking-wider text-zinc-300 uppercase transition-all hover:border-zinc-400 hover:text-zinc-100"
            >
              {t("nav.book")}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
