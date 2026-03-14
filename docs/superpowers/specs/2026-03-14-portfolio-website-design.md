# Portfolio Website Design Spec
**Date:** 2026-03-14
**Project:** heymervin — Personal Portfolio Website
**Status:** Approved

---

## Overview

Build Mervin's personal portfolio website as a Next.js 14 + Tailwind CSS app with three distinct brutalist design directions accessible at separate routes. Deploy to Vercel, push to GitHub.

---

## Content

All content is derived from README.md in the project root.

### Owner
**Mervin de Castro** — Full-Stack Developer building web apps, CRM systems, and AI-powered tools for real businesses.

### Sections (all three versions share the same sections)
1. **Hero** — Name, title, one-line positioning statement
2. **About / How I Work** — AI-augmented workflow, solo developer managing multiple client projects
3. **Projects** — 4 featured projects:
   - Luma: Business management platform — clients, proposals, invoices, Stripe Connect
   - Influence Flow: Influencer CRM with social analytics and campaign management
   - Property Pro: AI property matching with Mapbox visualization for Purple Homes
   - Haraya: The Philippines' first inclusive wedding planning platform
4. **Tech Stack** — React, TypeScript, Next.js, Vite, Tailwind CSS, Supabase, Node.js, Python, GoHighLevel, OpenAI, Claude
5. **Services / What I Build** — Client Platforms, AI-Powered Tools, SaaS Products, GoHighLevel Integrations
6. **Contact** — CTA to get in touch

---

## Architecture

### Framework
- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **TypeScript**

### Routes
| Route | Design |
|-------|--------|
| `/` | V1: Raw/Aggressive |
| `/v2` | V2: Editorial/Swiss |
| `/v3` | V3: Maximalist/Glitch |

### Project Structure
```
heymervin/
├── app/
│   ├── page.tsx          # V1: Raw/Aggressive
│   ├── v2/
│   │   └── page.tsx      # V2: Editorial/Swiss
│   ├── v3/
│   │   └── page.tsx      # V3: Maximalist/Glitch
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── v1/               # Raw/Aggressive components
│   ├── v2/               # Editorial/Swiss components
│   └── v3/               # Maximalist/Glitch components
├── lib/
│   └── data.ts           # Shared content data
├── public/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Design Specifications

### V1: Raw/Aggressive (`/`)
- **Palette:** Pure black `#000000` background, pure white `#FFFFFF` text, no softening
- **Typography:** `font-mono` (system monospace), ALL CAPS headers, pixel-sharp
- **Grid:** 1px white borders everywhere, exposed structure, no border-radius
- **Interaction:** Hover = color inversion (white bg, black text)
- **Vibe:** Confrontational, like a hacker terminal or a WARNING sign. Balenciaga/brutalist-aggressive.
- **Hero:** Full viewport, name in massive monospace, cursor blink animation
- **Cards:** Box bordered, no shadow, sharp corners

### V2: Editorial/Swiss (`/v2`)
- **Palette:** Off-white `#F5F0E8` bg, near-black `#1A1A18` text, one accent `#C8441B` (burnt orange/red)
- **Typography:** Heavy display (Black/900 weight) paired with light body (300), tight tracking on large type
- **Grid:** Strict 12-column Swiss grid, mathematical spacing, clear typographic rhythm
- **Interaction:** Accent color reveals on hover, underlines, precise micro-animations
- **Vibe:** High-end editorial magazine, authoritative designer with strong POV
- **Hero:** Giant display type, left-aligned, name fragmented across lines for visual drama
- **Cards:** Information directly on surface, no card boxes unless necessary

### V3: Maximalist/Glitch (`/v3`)
- **Palette:** Dark `#0A0A0A` bg, neon green `#00FF41` primary accent, white secondary, optional red `#FF0000` for glitch effects
- **Typography:** Oversized, layered, stacked — text as texture. Mix of weights.
- **Grid:** Deliberately broken — elements offset, overlapping, asymmetric
- **Interaction:** CSS glitch animations on hover, scanline effects, text flicker
- **Vibe:** Early-2000s web nostalgia + cyberpunk terminal. Matrix aesthetic.
- **Hero:** Glitch text animation on name, scanlines overlay, terminal-style typing effect
- **Cards:** Neon bordered, offset shadows, glitch on hover

---

## Shared Content Data (lib/data.ts)

```typescript
export const projects = [
  { name: "Luma", desc: "Business management platform — clients, proposals, invoices, Stripe Connect", tags: ["SaaS", "Stripe", "CRM"] },
  { name: "Influence Flow", desc: "Influencer CRM with social analytics and campaign management", tags: ["CRM", "Analytics", "AI"] },
  { name: "Property Pro", desc: "AI property matching with Mapbox visualization for Purple Homes", tags: ["AI", "Maps", "Real Estate"] },
  { name: "Haraya", desc: "The Philippines' first inclusive wedding planning platform", tags: ["SaaS", "Philippines", "Wedding"] },
]

export const stack = ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "Supabase", "Node.js", "Python", "GoHighLevel", "OpenAI", "Claude"]

export const services = [
  { name: "Client Platforms", desc: "Business management, invoicing, proposals, CRM dashboards" },
  { name: "AI-Powered Tools", desc: "Deep research automation, influencer analytics, property matching" },
  { name: "SaaS Products", desc: "Analytics dashboards, wedding planning platforms, outreach tools" },
  { name: "GoHighLevel Integrations", desc: "Custom marketplace apps, workflow automations, API integrations" },
]
```

---

## Deployment

1. Bootstrap Next.js app in the current repo
2. Implement all three design variants
3. `git add`, `git commit`, `git push origin main`
4. `vercel --prod` to deploy

---

## Success Criteria

- [ ] Three distinct brutalist designs accessible at `/`, `/v2`, `/v3`
- [ ] All six sections present in each design
- [ ] Responsive (mobile + desktop)
- [ ] Builds without errors (`next build`)
- [ ] Deployed to Vercel
- [ ] Pushed to GitHub
