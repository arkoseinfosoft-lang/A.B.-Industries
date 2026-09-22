# A.B. Bags — Website

A single-page, animated marketing website for **A.B. Industries (A.B. Bags)**,
built with React + Vite + Tailwind CSS + Framer Motion.

- One page, five nav sections (Home / About / Collections / Why Us / Contact)
  that scroll smoothly to anchors — no separate routes.
- "Order Now" and every "Enquire" link opens WhatsApp (`wa.me`) with a
  prefilled message.
- The contact form requires **Name, Phone and Quantity**, then opens WhatsApp
  with all the details filled in (there's no backend — it's a static site).
- Fully responsive, mobile-first, with a floating WhatsApp chat button.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 2. Edit your business details

Everything editable lives in **one file**: `src/data/content.js`.

- `business` — brand name, tagline, email, WhatsApp number, phone display.
- `categories` — the four product/collection cards (name, description, image).
- `stats`, `whyUs` — the "Why choose us" numbers and features.
- `galleryImages`, `heroImage`, `aboutImage` — photos used across the site
  (currently linked from Unsplash; swap in your own photos any time by
  replacing the URLs, or by importing local images the same way `logo.jpg`
  is imported in the components).
- `bagTypeOptions` — the dropdown options in the contact form.

To change the WhatsApp number, edit `whatsappNumber` (country code + number,
no `+`, no spaces, e.g. `919250130858`).

## 3. Build for production

```bash
npm run build
```

This outputs a static site to `dist/`. `npm run preview` serves that build
locally so you can double-check it before deploying.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

(`node_modules` and `dist` are already excluded via `.gitignore`.)

## 5. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Vercel auto-detects **Vite** — leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Click **Deploy**. No environment variables are needed — everything runs
   client-side.

That's it — every push to `main` will auto-redeploy.

## Notes

- The favicon and navbar/footer logo use the logo image you supplied
  (`src/assets/logo.jpg` / `public/logo-icon.jpg`).
- Product photography is sourced from Unsplash (free-to-use stock photos) and
  loads directly from Unsplash's CDN, so the repo stays lightweight. Replace
  any image URL in `src/data/content.js` with your own product photography
  whenever you're ready.
