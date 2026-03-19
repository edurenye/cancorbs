"use client";

import { useLanguage } from "@/components/LanguageContext";
import { createTranslator } from "@/lib/i18n";

export function useTranslation() {
  const { locale, setLocale } = useLanguage();
  const t = createTranslator(locale);
  return { t, locale, setLocale };
}
