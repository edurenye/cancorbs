"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface ReviewCardProps {
  name: string;
  text: string;
  rating: number;
}

export default function ReviewCard({ name, text, rating }: ReviewCardProps) {
  const { t } = useTranslation();

  return (
    <div className="group relative border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-zinc-600 grayscale group-hover:grayscale-0">
      {/* Glitch overlay — appears on hover */}
      <div className="reviewCardGlitchOverlay" aria-hidden="true" />

      {/* Star rating */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-sm ${
              i < rating ? "text-zinc-400" : "text-zinc-700"
            }`}
          >
            {t("common.starFull")}
          </span>
        ))}
      </div>

      {/* Review text */}
      <p className="mb-5 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
        {t("common.quoteLeft")}
        {text}
        {t("common.quoteRight")}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-zinc-800" />
        <p className="text-xs tracking-widest text-zinc-600 uppercase">{name}</p>
      </div>
    </div>
  );
}
