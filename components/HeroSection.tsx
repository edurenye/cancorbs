"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

const heroFilter =
  "grayscale(55%) brightness(0.52) contrast(1.05)" as const;

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative min-h-screen scroll-mt-0 overflow-hidden">
      {/* Tiled hero gallery — similar layout to rural / masía landing pages */}
      <div
        className="absolute inset-0 grid min-h-screen grid-cols-1 grid-rows-[minmax(0,1.1fr)_minmax(0,0.55fr)_minmax(0,0.55fr)] gap-1 sm:grid-cols-2 sm:grid-rows-[minmax(0,1fr)_minmax(0,0.9fr)] lg:grid-cols-12 lg:grid-rows-2 lg:gap-2"
      >
        <div className="relative min-h-[42vh] sm:min-h-0 sm:col-span-2 sm:row-span-1 lg:col-span-8 lg:row-span-2">
          <Image
            src="/images/hero/cansumoi-user.jpg"
            alt={t("hero.imageAltMain")}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
            style={{ filter: heroFilter }}
          />
        </div>
        <div className="relative min-h-[28vh] sm:min-h-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
          <Image
            src="/images/hero/cansumoi-slider-1.jpg"
            alt={t("hero.imageAltSideA")}
            fill
            sizes="(max-width: 1024px) 50vw, 34vw"
            className="object-cover"
            style={{ filter: heroFilter }}
          />
        </div>
        <div className="relative min-h-[28vh] sm:min-h-0 lg:col-span-4 lg:col-start-9 lg:row-start-2">
          <Image
            src="/images/hero/cansumoi-slider-2.jpg"
            alt={t("hero.imageAltSideB")}
            fill
            sizes="(max-width: 1024px) 50vw, 34vw"
            className="object-cover"
            style={{ filter: heroFilter }}
          />
        </div>
      </div>

      {/* Vignette + bottom fade into page */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(9,9,11,0.25) 0%, rgba(9,9,11,0.45) 35%, rgba(9,9,11,0.82) 78%, rgba(9,9,11,1) 100%), radial-gradient(ellipse at 50% 0%, transparent 0%, rgba(9,9,11,0.35) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end justify-start">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-32">
          <p className="mb-4 text-xs tracking-[0.3em] text-zinc-500 uppercase">
            {t("hero.locationTag")}
          </p>
          <h1 className="max-w-2xl font-serif text-5xl font-light leading-tight text-zinc-100 md:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-md text-lg font-light text-zinc-400">
            {t("hero.subtitle")}
          </p>
          <a
            href="#booking"
            className="mt-10 inline-block border border-zinc-500 px-8 py-3 text-sm tracking-widest text-zinc-300 uppercase transition-all hover:border-zinc-300 hover:text-zinc-100"
          >
            {t("nav.book")}
          </a>
        </div>
      </div>
    </section>
  );
}
