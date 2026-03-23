/**
 * Prefix public asset paths when the app is served under `basePath` (e.g. GitHub Pages project sites).
 * `next/image` does not always rewrite root-absolute `/images/...` URLs in static export.
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
