This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Docker Compose + HTTPS (Let's Encrypt)

The stack includes **Caddy** as a reverse proxy: it obtains and renews TLS certificates automatically for **`cancorbs.ydns.eu`** and proxies to the Next.js container.

1. Create an **A record** at ydns: `cancorbs.ydns.eu` → your server’s **public IP**.
2. Open host firewall / router: **3401/tcp** and **4403/tcp** (and **4403/udp** if you use HTTP/3) to this machine.
3. Start:

   ```bash
   docker compose up --build -d
   ```

4. Open **https://cancorbs.ydns.eu** (first request may take a few seconds while ACME completes).

Optional: add a global ACME email in [Caddyfile](./Caddyfile) (recommended for expiry notices):

```caddyfile
{
	email you@example.com
}
```

Direct HTTP without TLS (debug): **http://localhost:3401** still maps to the app if you keep the `web` port publish in [compose.yaml](./compose.yaml).

## Hero imagery

The landing hero uses a **tiled photo collage** (large panel + two side panels). The files under `public/images/hero/` are **local copies** of images from [cansumoi.cat](https://cansumoi.cat/) (the main panel matches the URL you shared under `/api/uploads/organizepdf/...`; the side panels match that site’s homepage slider). **Those images are not yours**—swap them for **your own Can Corbs photos** before any public launch to avoid copyright issues.

The **gallery** lives under `public/images/gallery/` (see filenames in `components/GallerySection.tsx`). Copy is driven by `locales/*.json` under `gallery.*`; set `gallery.subtitle` to an empty string `""` if you want no subtitle line.
