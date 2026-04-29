# YeahApp marketing site

Public marketing site for **yeahapp.co** — exists for SEO and as a public
demo surface. Sister project to the YeahApp main app at `app.yeahapp.co`
(separate repo at `../yeahapp new/yeahapp`).

This repo is a deployable Next.js 15 / React 19 / Tailwind v4 scaffold that
mirrors the existing landing pages from the main app, with auth/server/db
plumbing stripped out.

## Develop

```bash
cp .env.example .env.local
# edit NEXT_PUBLIC_APP_URL to point at the running app instance

npm install
npm run dev
```

The Sign-in / Start-for-free buttons and the Communities / Events links in the
header all redirect to `${NEXT_PUBLIC_APP_URL}/...`, so set that to your local
or production app URL depending on what you're testing against.

## Routes

| Route        | Source                                            | Notes                |
| ------------ | ------------------------------------------------- | -------------------- |
| `/`          | `(landing)/home/page.tsx`                         | Verbatim copy        |
| `/about`     | `(landing)/about/page.tsx` + `inside.tsx`         | Verbatim copy        |
| `/pricing`   | `(landing)/pricing/page.tsx`                      | Verbatim copy        |
| `/contact`   | `(landing)/contact/page.tsx`                      | Verbatim copy — see note |
| `/features`  | new                                               | Stub                 |
| `/terms`     | new                                               | Stub                 |
| `/privacy`   | new                                               | Stub                 |
| `/cookies`   | new                                               | Stub                 |

Header (`src/components/landing/LandingPageHeader.tsx`) and footer
(`src/components/landing/LandingFooter.tsx`) are both rendered from the root
layout, so all pages get them automatically.

## Hand-off notes — things worth knowing

These are deliberate carry-overs / known issues. Read before changing.

- **Header / footer fidelity.** Both files are byte-for-byte copies of the
  source apart from the documented adaptations (auth removal in header,
  cross-domain rewrites in both). When editing, keep the diff small and
  targeted — the user has approved the existing design.

- **`useKitzeUI` was reimplemented.** The source `KitzeUIContext` relied on a
  provider in the root layout. The marketing site has no provider — the
  `useKitzeUI` hook here uses `window.matchMedia('(max-width: 767px)')`
  directly. Same return shape (`{ isMobile }`), no wrapper needed.

- **Header right-slot static buttons.** The source rendered
  `<AppHeaderUser />`, which is auth-aware. We inlined the JSX from
  `AppHeaderUser`'s logged-out, non-mobile branch verbatim — Login (ghost
  variant, with `<SignIn />` icon) and Start-for-free (default variant). Both
  link cross-domain via plain `<a>` tags.

- **Discover links are same-tab `<a>`.** Source had `Communities` and `Events`
  as Next `<Link>` (same-domain client nav). Now they're cross-domain — but
  rendered as plain `<a>` (no `target="_blank"`) so the user navigates into
  the app in the same tab, matching source UX. Blog still opens in a new tab
  (it's a different host, `blog.yeahapp.co`).

- **`/home#features` is now `/features`.** The source header pointed to
  `/home#features` (the in-page anchor on home). We swapped to the standalone
  `/features` stub per spec. The home page itself still has the section, so
  the visual content is unchanged — only the destination of the nav link
  differs.

- **Contact form posts to `/api/contact`.** That route doesn't exist in this
  repo. Submitting the form will trigger the existing `toast.error("Failed to
  send message", ...)` toast. Either:
  1. Add a Next route handler at `src/app/api/contact/route.ts` that emails
     the form (e.g. via Resend / Plunk), or
  2. Replace the form with a `mailto:hello@yeahapp.co` link.

- **PricingPlans stubbed.** The source `PricingPlans` reads tier features
  from `@/config/payment-plans` and gates CTAs through
  `@/lib/payment-utils.getCheckoutUrl()` (auth-aware). Our copy in
  `src/components/pricing/PricingPlans.tsx` hardcodes the same Starter / Pro
  / Business plans (`$99 / $249 / $499`) with the same feature list and
  highlights, and points the CTA at `${NEXT_PUBLIC_APP_URL}/signup?plan=...`.
  **Keep this file in sync if `payment-plans.ts` changes in the main app.**

- **Pricing page testimonials are placeholders in the source.** Alex Johnson,
  Sarah Miller, Michael Chen — none of these are real customers; the source
  ships them as-is and so do we. Editorial decision is the user's.

- **`/careers`, `/help`, `/status` in the footer are dead.** These come
  straight from the source footer. They do not resolve to anything. Spec said
  not to change footer link composition, so they stay; user can replace later.

- **About-page CTA references "Bring events, members, and payments onto a
  single platform purpose-built for community teams" with a Start-free
  button.** Source had this targeting `/signup` (in-app). We rewrote the
  href to cross-domain. Copy unchanged.

- **`font-heading` class is referenced in several pages but never defined.**
  This came from the source. Tailwind silently ignores it; the pages render
  in the inherited `--font-sans` (Manrope). If you later define a separate
  display font, hook it up to `font-heading` in `globals.css`.

- **`(landing)` route group dropped.** The source isolated landing in
  `src/app/(landing)/...`. The marketing site is entirely public, so we
  flattened to `src/app/...` and moved the section components from
  `(landing)/home/_components/` to `src/components/landing/`. Page imports
  changed accordingly — JSX/classNames untouched.

- **Server-only imports trimmed.** Source root layout pulled in `TRPCReactProvider`,
  `KitzeUIProviders` (which depends on app-side things), `Toaster` from
  `@/components/ui/toaster`, `RegisterHotkeys`, `LevaPanel`,
  `SpeedInsights`, etc. The marketing root layout includes only
  `<LandingPageHeader>`, `<LandingFooter>`, and Sonner's `<Toaster />` (used
  by the contact form).

- **Stripped deps.** Drizzle, tRPC, Better Auth, Stripe, React Email, Vitest,
  uploadthing, recharts, dnd-kit, tiptap, etc. — none of these are pulled in.
  If you find yourself reaching for one of them, reconsider whether it
  belongs on a marketing site.

## Deploy

Vercel — point at this directory, set `NEXT_PUBLIC_APP_URL=https://app.yeahapp.co`.
