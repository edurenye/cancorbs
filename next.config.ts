import type { NextConfig } from "next";
import path from "path";

const staticExport = process.env.STATIC_EXPORT === "true";
/** Subpath for project pages, e.g. `/my-repo` on `https://user.github.io/my-repo/` */
const basePath = process.env.BASE_PATH?.trim() ?? "";

const nextConfig: NextConfig = {
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  ...(staticExport ? { output: "export" as const } : {}),
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: staticExport
    ? { unoptimized: true }
    : {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
        ],
      },
};

export default nextConfig;
