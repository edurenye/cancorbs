"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const { t, locale, setLocale } = useTranslation();

  const caLabel = t("footer.lang.ca");
  const esLabel = t("footer.lang.es");

  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-serif text-sm tracking-widest text-zinc-500 uppercase">
              {t("common.brand")}
            </p>
            <p className="mt-1 text-xs text-zinc-600">{t("footer.tagline")}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs tracking-widest text-zinc-600 uppercase">
              {t("footer.language")}
            </span>
            <span className="text-zinc-700">{t("footer.sepDot")}</span>
            <span className="flex items-center gap-2">
              <button
                onClick={() => setLocale("ca")}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  locale === "ca"
                    ? "text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {caLabel}
              </button>
              <span className="text-zinc-700">{t("footer.sepPipe")}</span>
              <button
                onClick={() => setLocale("es")}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  locale === "es"
                    ? "text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {esLabel}
              </button>
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800/40 pt-6 text-center">
          <p className="text-xs text-zinc-600">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
