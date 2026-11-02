# Ahmed Gad — Portfolio

Personal portfolio of Ahmed Gad, Senior Flutter Developer.

## Structure

```
site/                  ← the website (deploy this folder)
  index.html
  assets/css/style.css
  assets/js/main.js    ← content (apps, clients, stack) + all interactions
  img/                 ← posters, app icons, client logos
  api/contact.js       ← contact form → email (Vercel serverless function + Resend)
  vercel.json
posters/  logos/  favicon/   ← full-size design assets
```

Plain HTML/CSS/JS, no build step. Animations: GSAP + ScrollTrigger, smooth scroll: Lenis (both from CDN).

## Run locally

```bash
cd site
python3 -m http.server 8000   # → http://localhost:8000
```

The contact form needs the `/api/contact` function, so it only sends on Vercel (or with `vercel dev`).

## Deploy (Vercel)

1. vercel.com → **Add New → Project** → import this repo.
2. **Root Directory:** `site` · Framework preset: **Other** · no build command.
3. **Environment Variables:**
   - `RESEND_API_KEY` — from resend.com → API Keys
   - `CONTACT_TO` — inbox that receives messages (e.g. `softagi.tech@gmail.com`)
   - `CONTACT_FROM` — optional, after verifying your domain in Resend (e.g. `Portfolio <hello@yourdomain.com>`)
4. Deploy. Every push to `main` redeploys automatically.

## Custom domain

Vercel → Project → **Settings → Domains** → add your domain, then create the DNS records Vercel shows
(usually an `A` record `@ → 76.76.21.21` and a `CNAME` `www → cname.vercel-dns.com`).
