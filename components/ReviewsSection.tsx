"use client";

import { useTranslation } from "@/hooks/useTranslation";
import ReviewCard from "./ReviewCard";
import Image from "next/image";

export default function ReviewsSection() {
  const { t } = useTranslation();

  const reviews = [
    {
      name: t("reviews.user1.name"),
      text: t("reviews.user1.text"),
      rating: 4,
    },
    {
      name: t("reviews.user2.name"),
      text: t("reviews.user2.text"),
      rating: 5,
    },
    {
      name: t("reviews.user3.name"),
      text: t("reviews.user3.text"),
      rating: 3,
    },
  ];

  return (
    <section
      id="reviews"
      className="relative bg-zinc-950 py-24 overflow-hidden"
    >
      {/* Atmospheric background placeholders (kept non-interactive) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/crow-in-woods.svg"
          alt={t("reviews.bgCrowAlt")}
          width={520}
          height={520}
          className="absolute -left-20 -top-16 opacity-10 grayscale blur-3xl"
        />
        <Image
          src="/images/empty-dining-room.svg"
          alt={t("reviews.bgDiningAlt")}
          width={680}
          height={680}
          className="absolute -right-28 -bottom-28 opacity-10 grayscale blur-3xl"
        />
      </div>

      {/* Subtle divider */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-px flex-1 bg-zinc-800" />
          <div className="text-center">
            <p className="mb-1 text-xs tracking-[0.3em] text-zinc-600 uppercase">
              {t("reviews.kicker")}
            </p>
            <h2 className="font-serif text-3xl font-light text-zinc-100">
              {t("reviews.title")}
            </h2>
            <p className="mt-2 text-sm text-zinc-600">{t("reviews.subtitle")}</p>
          </div>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>

        {/* Atmospheric footnote */}
        <p className="mt-12 text-center text-xs text-zinc-700">
          {t("common.starPrefix")}
          {t("footer.tagline")}
        </p>
      </div>
    </section>
  );
}
