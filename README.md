# Cendana — Modern Indonesian Fine Dining

Marketing site for Cendana, a fine dining restaurant in Menteng, Central
Jakarta. Next.js (App Router) + TypeScript + Tailwind CSS v4, with
Framer Motion and GSAP for scroll-driven animation.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4, semantic color tokens with light/dark support
- **Animation:** Framer Motion (scroll reveals, headline stagger), GSAP + ScrollTrigger (hero parallax)
- **Icons:** Phosphor Icons

## Pages

- `/` — Home
- `/menu` — Seasonal menu
- `/about` — Restaurant story
- `/gallery` — Interior/dish gallery
- `/reservations` — Reservation request form (`POST /api/reservations`)

Imagery is currently placeholder generative art (`src/components/placeholder-art.tsx`)
pending real photography — swap `<PlaceholderArt>` usages for `next/image`
once photos are available.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npm run build   # production build
```

## Reservation inquiries

`src/app/api/reservations/route.ts` validates and logs reservation requests
server-side. Wire it up to an email/CRM provider (e.g. Resend, SendGrid) or
a database before going live.
