# Radiant Grace Church Premium Template

Radiant Grace is a premium full-stack church website template built with React 18, Tailwind CSS, Framer Motion, GSAP, Express, MongoDB, and Stripe.

## Highlights

- Cinematic, motion-rich homepage with glassmorphism, responsive layouts, and immersive media.
- Sermon archive with audio playback, notes downloads, category filters, speaker filters, and scripture search.
- Events engine with calendar views, recurring support, online links, registrations, waitlist logic, and ICS downloads.
- Giving flow with Stripe Checkout, one-time and monthly donations, fund selection, anonymous giving, and receipt delivery.
- Gallery experience with masonry layout, lightbox navigation, video embeds, swipe support, and album/category filtering.
- Contact, prayer, newsletter, livestream, and ministry engagement flows.
- Admin-ready dashboard endpoints for sermons, events, donations, contacts, and subscribers.

## Setup

1. Copy `.env.example` to `.env` and configure MongoDB, Stripe, and SMTP credentials.
2. Install dependencies:
   - `cd client && npm install`
   - `cd ../server && npm install`
3. Start MongoDB locally or via Docker.
4. Run the apps:
   - `cd server && npm run dev`
   - `cd ../client && npm start`

## Production Notes

- Upload real optimized media into `client/public/assets`.
- Configure Stripe domain verification to enable Apple Pay and Google Pay within Checkout.
- Set a production-safe CORS origin and use a managed MongoDB cluster.
- Plug in a real SMTP provider for newsletter, event, donation, and contact emails.
