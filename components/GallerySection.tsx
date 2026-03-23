"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { withBasePath } from "@/lib/withBasePath";
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    src: "/images/gallery/slider-a.jpg",
    altKey: "gallery.alt1" as const,
  },
  {
    src: "/images/gallery/slider-b.jpg",
    altKey: "gallery.alt2" as const,
  },
  {
    src: "/images/gallery/slider-c.jpg",
    altKey: "gallery.alt3" as const,
  },
  {
    src: "/images/gallery/slider-d.jpg",
    altKey: "gallery.alt4" as const,
  },
  {
    src: "/images/gallery/slider-e.jpg",
    altKey: "gallery.alt5" as const,
  },
  {
    src: "/images/gallery/slider-f.jpg",
    altKey: "gallery.alt6" as const,
  },
  {
    src: "/images/gallery/slider-g.jpg",
    altKey: "gallery.alt7" as const,
  },
] as const;

export default function GallerySection() {
  const { t } = useTranslation();
  const gallerySubtitle = t("gallery.subtitle").trim();

  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-t border-zinc-800/60 bg-zinc-950 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500 uppercase">
          {t("gallery.sectionKicker")}
        </p>
        <h2 className="font-serif text-3xl font-light text-zinc-100 md:text-4xl">
          {t("gallery.title")}
        </h2>
        {gallerySubtitle ? (
          <p className="mt-3 max-w-2xl text-base font-light text-zinc-500">
            {gallerySubtitle}
          </p>
        ) : null}

        <div
          className={
            gallerySubtitle
              ? "mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 lg:gap-3"
              : "mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 lg:gap-3"
          }
        >
          {GALLERY_ITEMS.map((item, i) => (
            <figure
              key={item.src}
              className={[
                "group relative min-h-[220px] overflow-hidden bg-zinc-900 sm:min-h-[200px]",
                i === 0 ? "lg:col-span-2 lg:row-span-2 lg:min-h-0" : "",
                i >= 5 ? "lg:col-span-2" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Image
                src={withBasePath(item.src)}
                alt={t(item.altKey)}
                fill
                priority={i === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.03] grayscale-[45%] group-hover:grayscale-0"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
