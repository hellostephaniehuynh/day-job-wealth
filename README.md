# Day Job Wealth

Personal-brand site for Stephanie Huynh — blog, digital products, and a free
lead magnet, built with Next.js, Sanity, Stripe, and ConvertKit.

The site is fully functional out of the box with sample content. Each
integration below is optional and degrades gracefully (a clear inline
message instead of a crash) until you connect it.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/(site)/` — the public site: home, about, blog, shop, resources, contact
- `app/studio/` — embedded Sanity Studio at `/studio`
- `app/api/` — checkout, download, contact, and subscribe routes
- `lib/` — data layer (blog, products, Stripe, Sanity clients) and site config
  (`nav-links.ts`, `social-links.ts`)
- `sanity/` — Sanity schema definitions
- `private/pdfs/` — the source PDF files for the free guide and paid
  products. Never put these in `public/` — they're only served through the
  authenticated `/api/download` route so the paid ones can't be hot-linked.

## Connecting each service

Copy `.env.example` to `.env.local` and fill in values as you go — see that
file for where to find each key. None of this is required to preview or
work on the site.

### 1. Sanity (blog)

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage).
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.
3. Visit `/studio` on the site and log in with your Sanity account.
4. Add posts. The blog automatically switches from sample content to your
   real posts once at least one exists.

### 2. Stripe (paid guides)

1. In your Stripe dashboard, create a **Product + Price** for each paid
   guide (*The Home Asset Blueprint*, *The Home Income Snapshot*).
2. Set `STRIPE_SECRET_KEY` and the two `STRIPE_PRICE_...` env vars to those
   Price IDs.
3. Once deployed, add a webhook endpoint in Stripe pointing to
   `https://yourdomain.com/api/webhooks/stripe` for the
   `checkout.session.completed` event, and set `STRIPE_WEBHOOK_SECRET`.
   (Purchases already work without this — the webhook is just a hook for
   future fulfillment like a receipt email.)

### 3. ConvertKit (free guide opt-in)

1. Set `CONVERTKIT_API_KEY` (Account Settings → Advanced) and
   `CONVERTKIT_FORM_ID` (from the form you want subscribers added to).
2. Optionally set up a ConvertKit automation on that form to email the
   guide as a backup — the site already reveals a direct download link
   immediately after signup.

### 4. Contact form email (optional)

Without `RESEND_API_KEY` / `CONTACT_TO_EMAIL`, contact form submissions are
logged on the server instead of emailed. Get a key at
[resend.com](https://resend.com/api-keys).

### 5. Social links

Update the placeholder URLs in `lib/social-links.ts` with your real
handles. Add Skool there later — it's one more entry in the array.

## Deploying

This is a standard Next.js app — [Vercel](https://vercel.com/new) is the
simplest option (zero-config, and its free tier covers everything this
site needs, including the Stripe/ConvertKit API routes). Set the same
environment variables from `.env.local` in the Vercel project settings, and
set `NEXT_PUBLIC_SITE_URL` to your real domain.
