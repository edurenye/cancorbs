"use client";

import { useId, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const INTRO_KEYS = ["p1", "p2"] as const;
const MORE_KEYS = ["p3", "p4", "p5", "p6"] as const;

export default function HistorySection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <section
      id="history"
      className="scroll-mt-24 border-t border-zinc-800/60 bg-zinc-950 py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500 uppercase">
          {t("history.sectionKicker")}
        </p>
        <h2 className="font-serif text-3xl font-light leading-tight text-zinc-100 md:text-4xl">
          {t("history.title")}
        </h2>
        <p className="mt-2 text-sm tracking-wide text-zinc-500">
          {t("history.location")}
        </p>
        <div className="mt-12 space-y-8 text-base font-light leading-relaxed text-zinc-400">
          {INTRO_KEYS.map((key) => (
            <p key={key}>{t(`history.${key}`)}</p>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((v) => !v)}
          className="mt-8 border border-zinc-600 px-6 py-2.5 text-sm tracking-widest text-zinc-400 uppercase transition-all hover:border-zinc-400 hover:text-zinc-200"
        >
          {expanded ? t("history.readLess") : t("history.readMore")}
        </button>

        <div
          id={panelId}
          role="region"
          aria-label={t("history.sectionKicker")}
          hidden={!expanded}
          className="mt-8 space-y-8 text-base font-light leading-relaxed text-zinc-400"
        >
          {MORE_KEYS.map((key) => (
            <p key={key}>{t(`history.${key}`)}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
