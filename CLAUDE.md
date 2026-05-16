# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The **public marketing site** for YeahApp at `yeahapp.co`. It exists for SEO and as a public demo surface — the actual product lives at `app.yeahapp.co` in a separate repo. Every CTA, sign-in, sign-up, or "go into the app" link from this site redirects cross-domain to `${NEXT_PUBLIC_APP_URL}/...`.

This is **not** the place to build product features. If you're implementing application logic, you're in the wrong repo.

## Commands

```bash
npm run dev          # Next dev server (turbo)
npm run build        # Next production build
npm run typecheck    # tsc --noEmit
npm run lint         # next lint (also auto-runs in CI)
npm run start        # serve the built output locally
```

There are no tests in this project — it's pure static UI. `npm run typecheck` and `npm run build` are the verification tools. Run `npm run typecheck` after every non-trivial edit to a `.tsx` file; run `npm run build` before pushing if you've touched server/client component boundaries (the build's "Collecting page data" step catches RSC mistakes that `tsc` doesn't).

## Environment

The site reads exactly one env var: `NEXT_PUBLIC_APP_URL`. Set in `.env.local` for dev (e.g. `http://localhost:3002`) and in Vercel project settings for production (`https://app.yeahapp.co`).

Because it's `NEXT_PUBLIC_*`, the value is inlined into client bundles at build/dev-server-start time — restart `npm run dev` after editing `.env.local` if you don't see it pick up.

## Architecture

### Pages & layout

- All pages live under `src/app/` as a flat Next 15 App Router structure. There's no route group — the site is entirely public.
- `src/app/layout.tsx` is a server component that loads Manrope, the global stylesheet, and wraps every page with `<LandingPageHeader />` + `<LandingFooter />`. Pages render only their body content.
- The home page (`src/app/page.tsx`) composes seven section components from `src/components/landing/` in a fixed order: Hero → Positioning → Builders → Privacy → ObjectionHandling → FAQ → FinalCTA. `BenefitsSection` exists in the tree but is currently unused on home (carried over from the source app, kept for parity).
- `/features`, `/terms`, `/privacy`, `/cookies` are placeholder stubs — heading + "Coming soon."

### Provenance: this site is a copy

The page bodies, header, footer, and section components are **byte-for-byte copies** of the corresponding files in the main YeahApp app repo at `/Users/haikal/Desktop/work/yeah/yeahapp new/yeahapp/src/app/(landing)/...`. The user has approved that design and copy. The only deviations from the source are:

1. Auth wiring stripped (no `authClient`, no `AppHeaderUser`, no signin/signup buttons in the bar — auth lives on the app).
2. Cross-domain rewrites for any link that targets an app-only route (`/signin`, `/signup`, `/discover/*`, etc.) — these become plain `<a href={`${APP_URL}/...`}>` so Next doesn't attempt client-side nav.
3. The `(landing)` route group was dropped (whole site is public), and `_components/` were moved from `(landing)/home/_components/` to `src/components/landing/`. Imports were updated; JSX was not.
4. The header has been deliberately reskinned for the marketing surface (dark `slate-900` island bar, Logo+Platform+App nav layout). The source remains the canonical copy reference; the marketing header has its own visual identity.

**When the user asks to "match the source" or fix copy:** the source file at `$APP_REPO/src/app/(landing)/...` is authoritative for the body content. Do not invent or rewrite copy.

### Component layers

- `src/components/landing/` — all landing-specific section components and `LandingPageHeader` / `LandingFooter`. Most are server components; only the ones with `useState` / `useRef` / `IntersectionObserver` are `"use client"` (Reveal, FAQSection, PositioningSection, LandingPageHeader, FAQ items).
- `src/components/main/` — generic `Button` and `Card` primitives copied from the main app's design system. Both are `"use client"` (cva + Slot).
- `src/components/core/Logo.tsx` — wordmark / icon variants, framer-motion entrance animation. Sourced from `public/logo-wordmark.png` and `public/logo-icon.png`.
- `src/components/pricing/` — `PricingPlans` (currently `"use client"`), `PlanCard`, `FeaturesList`. **`PricingPlans` hardcodes a snapshot of `basePlans` from the main app's `config/payment-plans.ts`.** If pricing tiers / fees change in the main app, mirror those changes here.
- `src/components/KitzeUIContext.tsx` — a single hook `useKitzeUI()` returning `{ isMobile }` driven by `window.matchMedia('(max-width: 767px)')`. The source app has a full provider here; the marketing site does not need one.

### Styling

- Tailwind v4 via `@tailwindcss/postcss` — no `tailwind.config.ts`. All theme tokens live in `src/styles/globals.css` via `@theme {}` and `@theme inline {}` blocks.
- The brand-blue and brand-orange swatches are hex literals (`#6f8eff`, `#fb8034`) used directly in classNames — there's also a set of `@utility yeah-*` shortcuts in globals.css.
- Custom `font-heading` class is referenced in several pages but **never defined**. It's a no-op carried over from the source; the inherited Manrope handles those headings. Don't waste time chasing it.

### Cross-domain link conventions

Inside this codebase:

- **Internal marketing routes** (`/`, `/about`, `/pricing`, `/contact`, `/features`, `/terms`, `/privacy`, `/cookies`) — use `next/link`.
- **App routes** (sign-in/up, dashboard, discover, settings) — use plain `<a href={`${APP_URL}/...`}>` without `target="_blank"` so the user transitions into the app same-tab.
- **Truly external** (Blog at `blog.yeahapp.co`, social links, `mailto:`) — use `<a target="_blank" rel="noreferrer">`.

The header's `NavRow` component has both an `external` flag (use plain `<a>`) and a `newTab` flag (also add `target="_blank"`). Don't conflate them.

## Deploy & git workflow

- Hosted on Vercel, project pointed at `github.com/yeahapp/landing-page`, deploys on push to `main`.
- Framework Preset must be **Next.js** in Vercel project settings; if it's set to "Other" the build silently publishes only `public/` and every route 404s.
- Local git in this repo is configured with `user.name = yeahapp` and `user.email = development@yeahapp.co` — this is intentional, so commits attribute correctly under the YeahApp account on Vercel's Hobby tier. **Don't change the local git config.** If you commit, your changes will go out under that author.
- The user pushes manually after reviewing. Don't push without an explicit request.

## Known carry-overs (not bugs — don't "fix" without asking)

- `font-heading` class referenced but undefined (see above).
- Pricing-page testimonials use placeholder names (Alex Johnson, Sarah Miller, Michael Chen). Source ships them this way.
- Footer links to `/careers`, `/help`, `/status` resolve to nothing. Carried over from the source footer.
- Contact form `POST`s to `/api/contact` which doesn't exist — submissions trigger the existing `toast.error` path. Wire it (Resend / Plunk) or swap to `mailto:` when the user asks.
- The header wordmark uses `invert` as a CSS filter to render light-on-dark. This is a placeholder — replace with a real dark logo asset when one exists.

## See also

`README.md` has the same context written for human readers, plus the deployment quick-reference.
