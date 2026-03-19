import ca from "@/locales/ca.json";
import es from "@/locales/es.json";

export type Locale = "ca" | "es";

type NestedValue = string | number | NestedRecord;
type NestedRecord = { [key: string]: NestedValue };

const dictionaries: Record<Locale, NestedRecord> = {
  ca: ca as unknown as NestedRecord,
  es: es as unknown as NestedRecord,
};

function getNestedValue(obj: NestedRecord, path: string): string {
  const keys = path.split(".");
  let current: NestedValue = obj;
  for (const key of keys) {
    if (typeof current !== "object" || current === null) return path;
    current = (current as NestedRecord)[key];
    if (current === undefined) return path;
  }
  if (typeof current === "string") return current;
  if (typeof current === "number") return String(current);
  return path;
}

export function createTranslator(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries["ca"];
  return function t(key: string): string {
    return getNestedValue(dict, key);
  };
}
