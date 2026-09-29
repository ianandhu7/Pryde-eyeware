# PRYDE eyewear website

A local, informational Next.js App Router website. No commerce, customer accounts, or submission simulation. **Not deployed.** All copy and images are preview material until approved.

## Setup

Node.js >=20.9 is required by Next.js 16.3.6; developed with Node 22.22.3 and npm 10.9.8. The stable version was checked using npm on 25 September 2026. Official setup guidance: https://nextjs.org/docs/app/getting-started/installation

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. If the port is occupied, use `npm run dev -- --port 3002`. The development and production commands bind to loopback for local preview.

```sh
npm run lint
npm run typecheck
npm run test:seo
npm run build
npm start
```

For a hosted Node deployment, run `npx next start --hostname 0.0.0.0 --port 3000`, or use a Next.js-compatible platform. Install with the lockfile, configure environment variables at build time, and rebuild after content or SEO changes. Runtime image optimization requires a compatible Node server; this project does not use static export. Keep secrets server-side. Do not deploy until launch dependencies are supplied and approved.

## Structure

- `references/`: original design screenshots and source logo, never served as a page.
- `public/images/`: separate brand, hero, collection and about asset directories.
- `public/fonts/`: licensed local font slot. Current system Georgia/Arial stack avoids third-party font requests.
- `src/app/`: seven public routes, shared layout, global design variables, 404, sitemap and robots.
- `src/components/`: server-rendered layout, home, collection, UI and structured-data components. Only the mobile menu requires a Client Component. CSS Modules live beside components.
- `src/content/`: editable site/contact data, draft home/about copy, collections, and verified stockist records.
- `src/lib/`: metadata generation and small shared utilities.
- `src/types/`: content types.
- `scripts/`: local asset preparation and browser checks.
- `artifacts/`: generated screenshots and validation report; ignored by Git.

## Content and assets

The initial build had only the written brief. A subsequent message supplied two logo variants and the selected colour desktop reference in chat. The homepage layout has been revised against that reference. Local paths to the original logo files are still needed; the header remains plain text until they can be copied exactly. A related monochrome desktop reference found in Downloads is preserved in references/.

Supply the selected reference and original PRYDE logo in `references/`. Put the production logo in `public/images/brand/` and configure `site.logo` (path plus intrinsic width and height) in `src/content/site.ts`. Use a white/reversed logo suitable for the black header. Configure the approved favicon and social image there too.

The local WebP photos are **AI-generated illustrative placeholders, not actual PRYDE products**. They are identified in alt text, collection descriptions, a hero caption and the footer. No external photography was downloaded. Generation prompts and provenance are in [ASSETS.md](ASSETS.md). Replace them with licensed, approved PRYDE photographs. Keep the reference screenshots separate. Hero imagery should provide right-side dark negative space and keep the model on the left. Test mobile crops after replacing assets. Images use next/image, responsive sizes, reserved aspect ratios and lazy loading below the fold; only the main above-the-fold image is preloaded.

Edit the `src/content/` files to change editorial text. Add actual frames to each collection's `gallery` array, with verified names, descriptions, image paths and useful alt text. Set `placeholder:false` only for approved images and update the gallery note and footer disclosure once all placeholders have been replaced. No material, lens protection, manufacturing, sustainability, history, price or availability claims are made.

Add only verified stockists in `src/content/stockists.ts`; the layout uses those records directly. Set `site.email`, `site.phone` and/or `site.address` only after verification. A phone uses a human-readable `label` and a `tel:` URL as `href`. The contact page then renders those details. No contact form is present because no submission service has been configured. If adding one, implement server validation, abuse protection, real delivery, privacy copy, failure states and end-to-end delivery testing before showing success.

## SEO configuration

Copy `.env.example` to `.env.local`. Set `SITE_URL` only to the verified production HTTPS origin (no path), e.g. your actual domain, **not localhost or a made-up domain**. When it is absent, metadataBase, canonical URLs and URL-dependent social assets are intentionally omitted. Organization and WebSite JSON-LD still include the verified brand name.

Every route has a distinct title/description, canonical and Open Graph/Twitter metadata. A social photo is emitted only when its slot and the domain are configured. No ratings, product offers or LocalBusiness details are fabricated.

Indexing requires all of:
1. A valid `SITE_URL`.
2. `DEPLOYMENT_ENV=production`.
3. `ENABLE_INDEXING=true`.
4. `approved:true` on each finished route in `src/content/site.ts`.

If Vercel reports a preview environment, indexing stays disabled regardless of these settings. On other hosts explicitly set preview environments to `DEPLOYMENT_ENV=preview`. Preview robots disallows crawling, every page is noindex, and sitemap is empty. On production, sitemap contains only approved intended public pages. Unfinished pages remain noindex. These protections are for indexing, not access control: use host authentication if a future preview must be private.

For Google Search Console, verify the real domain using its DNS TXT verification, or put the HTML-tag token in `GOOGLE_SITE_VERIFICATION` and rebuild. After enabling indexing for approved pages, inspect the rendered canonical tags, robots.txt and sitemap.xml, then submit the full production sitemap URL in Search Console. Request inspection of key URLs and monitor indexing. No ranking outcome is guaranteed.

## Launch dependencies

- Selected desktop reference for final visual matching.
- Supplied PRYDE logo, approved favicon and social-sharing asset.
- Licensed approved hero, category and actual frame photos, plus brand fonts if required.
- Approved brand introduction/story and design approach.
- Verified frame names, descriptions and specifications.
- Verified contact details; verified stockists, or approval to retain the honest empty state.
- Real production origin, hosting choice and final indexing approval.

## Browser validation

```sh
npx playwright install chromium
npm run dev
npm run test:browser
```

Run the browser check in another terminal while the preview is running. It checks all seven routes, titles, descriptions, preview indexing, single H1s, image loading, internal links, source asset paths, JSON-LD, sitemap, robots, 404, horizontal overflow at 375/768/1440/1920 widths, and mobile menu open/close, Escape focus and navigation. Screenshots and a JSON report go to `artifacts/`. This automated coverage supplements visual review; it does not establish full accessibility conformance. See [VALIDATION.md](VALIDATION.md) for the recorded run.
