# PRYDE — Adding New Products

This guide explains exactly how to add a new frame to the PRYDE website.
No coding knowledge is required beyond copying and editing a text block.

---

## How the system works

All product information lives in one file:

    src/content/products.ts

Every page on the site (the home grid, the Optical page, the Sunglasses page)
reads from this file automatically. You never need to edit layout components.

Photographs live here, one folder per product:

    public/images/products/
      vanta/hero.jpg
      orbit/hero.jpg
      your-new-product/hero.jpg   <- you create this

---

## Step 1 — Prepare the photographs

1. Name the main product photo `hero.jpg`.
   Additional angles can be named `angle-2.jpg`, `angle-3.jpg`, etc.

2. Create a new folder inside `public/images/products/` using the product slug
   (lowercase, hyphens only, no spaces):

       public/images/products/silva/

3. Copy the photos into that folder:

       public/images/products/silva/hero.jpg
       public/images/products/silva/angle-2.jpg   <- optional

Photo recommendations:
- Minimum: 1200 x 1500 px, portrait orientation
- Format: JPEG (.jpg)
- Background: Consistent neutral surface matching existing shots

---

## Step 2 — Add the product entry

Open `src/content/products.ts` and scroll to the end of the `products` array
(just before the closing `];`). Copy this template and paste it in:

    {
      id: "silva-01",           // Unique. Use slug + "-01". Never change after publishing.
      slug: "silva",            // Matches the folder name in Step 1.
      name: "SILVA",            // Display name — use ALL CAPS.
      category: "optical",     // Either: "optical"  or  "sunglasses"
      description:
        "One to two sentences about the frame material, shape, and character.",
      images: [
        {
          src: "/images/products/silva/hero.jpg",
          alt: "PRYDE SILVA — [colour] [shape] frame, [angle] view on [surface].",
        },
      ],
      badge: "NEW ARRIVAL",     // Optional. Remove this line for no badge.
      published: false,         // Keep false until ready to go live.
      order: 60,                // Lower = appears first. Use gaps: 10, 20, 30...
    },

---

## Step 3 — Preview locally

Start the dev server if it is not already running:

    npm run dev

Open http://localhost:3000

The product will not appear yet (published: false). To preview it, temporarily
change `published: true`, save the file, and the page hot-reloads instantly.

---

## Step 4 — Publish

In `src/content/products.ts`, change:

    published: false,

to:

    published: true,

The product now appears on the home grid and its collection page.

---

## Step 5 — Deploy

Build first to check for errors:

    npm run build

If the build succeeds, deploy using your normal hosting workflow.
For Vercel (recommended for Next.js):

    vercel --prod

---

## Quick checklist

    [ ] hero.jpg placed in public/images/products/{slug}/
    [ ] Entry added to src/content/products.ts
    [ ] Unique id and slug set
    [ ] description is factual and spell-checked
    [ ] alt text describes colour, shape, angle, surface
    [ ] published: true when ready
    [ ] npm run build completes without errors
    [ ] Deployed

---

## Hiding a product without deleting it

Set `published: false`. The product disappears on next deploy but the data
is preserved for future use.

## Changing display order

Edit the `order` number. Lower = appears first within that category.
