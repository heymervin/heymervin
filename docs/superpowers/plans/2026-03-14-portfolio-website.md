# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Mervin's personal portfolio website with three brutalist design variants (Raw/Aggressive, Editorial/Swiss, Maximalist/Glitch) deployed to Vercel.

**Architecture:** Next.js 14 App Router with three routes (`/`, `/v2`, `/v3`), each fully self-contained with their own component set loaded from a shared `lib/data.ts` content store. Fonts loaded per-page to prevent cross-contamination. Custom CSS utilities in `globals.css`.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, next/font/google, Vercel

**Spec:** `docs/superpowers/specs/2026-03-14-portfolio-website-design.md`

---

## File Map

### Created
| File | Responsibility |
|------|---------------|
| `lib/data.ts` | All portfolio content (hero, about, projects, stack, services, contact) |
| `app/layout.tsx` | Bare root layout with metadata only |
| `app/globals.css` | Tailwind directives, CSS reset, blink/glitch/scanline keyframes, reduced-motion |
| `tailwind.config.ts` | Font family extensions for all 4 fonts |
| `app/page.tsx` | V1 page — assembles V1 components |
| `app/v2/page.tsx` | V2 page — assembles V2 components |
| `app/v3/page.tsx` | V3 page — assembles V3 components |
| `components/v1/Hero.tsx` | V1 hero section |
| `components/v1/About.tsx` | V1 about section |
| `components/v1/Projects.tsx` | V1 projects grid |
| `components/v1/Stack.tsx` | V1 tech stack |
| `components/v1/Services.tsx` | V1 services grid |
| `components/v1/Contact.tsx` | V1 contact section |
| `components/v1/VersionSwitcher.tsx` | V1 fixed nav to switch designs |
| `components/v2/Hero.tsx` | V2 hero section |
| `components/v2/About.tsx` | V2 about section |
| `components/v2/Projects.tsx` | V2 projects list |
| `components/v2/Stack.tsx` | V2 tech stack |
| `components/v2/Services.tsx` | V2 services grid |
| `components/v2/Contact.tsx` | V2 contact section |
| `components/v2/VersionSwitcher.tsx` | V2 fixed nav |
| `components/v3/Hero.tsx` | V3 hero with glitch |
| `components/v3/About.tsx` | V3 about section |
| `components/v3/Projects.tsx` | V3 projects grid |
| `components/v3/Stack.tsx` | V3 tech stack |
| `components/v3/Services.tsx` | V3 services list |
| `components/v3/Contact.tsx` | V3 contact with glitch |
| `components/v3/VersionSwitcher.tsx` | V3 fixed nav |

### Modified
| File | Change |
|------|--------|
| `tailwind.config.ts` | Replace generated config with font-extended version |
| `app/globals.css` | Replace generated CSS with custom utilities |
| `app/layout.tsx` | Replace generated layout with bare version |

---

## Chunk 1: Bootstrap + Shared Infrastructure

> **All commands run from the repo root:** `/Users/mervindecastro/Documents/Projects/apps/heymervin`

### Task 1: Bootstrap Next.js app

- [ ] **Step 1: Preserve original README**
```bash
cp README.md README.original.md
```

- [ ] **Step 2: Run create-next-app**
```bash
echo y | npx create-next-app@14 . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --use-npm --eslint
```
The `echo y |` handles the "directory not empty, OK to proceed?" confirmation. All other prompts are covered by the explicit flags.

- [ ] **Step 3: Restore original README**
```bash
cp README.original.md README.md && rm README.original.md
```

- [ ] **Step 4: Verify the project builds clean**
```bash
npm run build
```
Expected: Build succeeds (may show "Hello World" page — that's fine).

- [ ] **Step 5: Commit**
```bash
git add -A
git commit -m "chore: bootstrap Next.js 14 app"
```

---

### Task 2: Replace tailwind.config.ts

- [ ] **Step 1: Replace the file**

Replace the entire contents of `tailwind.config.ts` with:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["var(--font-space-mono)", "monospace"],
        "playfair": ["var(--font-playfair)", "serif"],
        "inter": ["var(--font-inter)", "sans-serif"],
        "share-tech": ["var(--font-share-tech)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

### Task 3: Replace app/globals.css

- [ ] **Step 1: Replace the entire file**

Replace `app/globals.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* V1: cursor blink (hard on/off) */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s step-start infinite;
}

/* V3: glitch effect
   Usage: <element className="glitch-hover" data-text="SAME TEXT">SAME TEXT</element>
   .glitch-hover already sets position:relative — do NOT add it separately */
@keyframes glitch {
  0%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); color: inherit; }
  20%       { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 2px); color: #FF0000; }
  40%       { clip-path: inset(50% 0 30% 0); transform: translate(4px, -2px); color: #00FF41; }
  60%       { clip-path: inset(80% 0 5% 0);  transform: translate(-2px, 1px); color: inherit; }
  80%       { clip-path: inset(10% 0 85% 0); transform: translate(2px, -1px); color: inherit; }
}
.glitch-hover {
  position: relative;
}
.glitch-hover::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
.glitch-hover:hover::after {
  animation: glitch 0.3s steps(1) infinite;
}

/* V3: scanline overlay
   Usage: add className="scanlines" to the outermost div of the V3 page only */
.scanlines::before {
  content: "";
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.08) 2px,
    rgba(0, 0, 0, 0.08) 4px
  );
  pointer-events: none;
  z-index: 9999;
}

/* Global: disable ALL animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Task 4: Replace app/layout.tsx

- [ ] **Step 1: Replace the file**

Replace `app/layout.tsx` with:
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mervin de Castro — Full-Stack Developer",
  description: "Full-stack developer building web apps, CRM systems, and AI-powered tools for real businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### Task 5: Create lib/data.ts

- [ ] **Step 1: Create the lib directory**
```bash
mkdir -p lib
```

- [ ] **Step 2: Create the file**

Create `lib/data.ts`:
```typescript
export const hero = {
  name: "Mervin de Castro",
  title: "Full-Stack Developer",
  tagline: "Building web apps, CRM systems, and AI-powered tools for real businesses.",
};

export const about = {
  headline: "How I Work",
  body: `I'm a solo developer managing multiple client projects simultaneously. I run an AI-augmented development workflow: automated documentation, scheduled code health checks, governance-controlled system improvements, and a multi-agent team that handles research, building, and review. The goal is to ship quality software consistently across many projects without burning out.`,
};

export const projects = [
  { name: "Luma", desc: "Business management platform — clients, proposals, invoices, Stripe Connect", tags: ["SaaS", "Stripe", "CRM"] },
  { name: "Influence Flow", desc: "Influencer CRM with social analytics and campaign management", tags: ["CRM", "Analytics", "AI"] },
  { name: "Property Pro", desc: "AI property matching with Mapbox visualization for Purple Homes", tags: ["AI", "Maps", "Real Estate"] },
  { name: "Haraya", desc: "The Philippines' first inclusive wedding planning platform", tags: ["SaaS", "Philippines", "Wedding"] },
];

export const stack = [
  "React", "TypeScript", "Next.js", "Vite", "Tailwind CSS",
  "Supabase", "Node.js", "Python", "GoHighLevel", "OpenAI", "Claude",
];

export const services = [
  { name: "Client Platforms", desc: "Business management, invoicing, proposals, CRM dashboards" },
  { name: "AI-Powered Tools", desc: "Deep research automation, influencer analytics, property matching" },
  { name: "SaaS Products", desc: "Analytics dashboards, wedding planning platforms, outreach tools" },
  { name: "GoHighLevel Integrations", desc: "Custom marketplace apps, workflow automations, API integrations" },
];

export const contact = {
  headline: "Let's Build Something.",
  body: "I'm open to new projects, collaborations, and consulting work.",
  github: "https://github.com/heymervin",
  email: "hello@heymervin.com",
};
```

- [ ] **Step 3: Verify the build still passes with the updated config files**
```bash
npm run build
```
Expected: Build succeeds. This catches any malformed `tailwind.config.ts`, `globals.css`, or `layout.tsx` early.

- [ ] **Step 4: Commit infrastructure**
```bash
git add -A
git commit -m "chore: add shared infrastructure (data, globals, layout, tailwind config)"
```

---

## Chunk 2: V1 Raw/Aggressive Components

V1 palette: black `#000000` bg, white `#FFFFFF` text. Font: Space Mono. Borders everywhere. Zero softness.

### Task 6: Create components/v1/VersionSwitcher.tsx

- [ ] **Step 1: Create the component directories**
```bash
mkdir -p components/v1 components/v2 components/v3
```

- [ ] **Step 2: Create the file**

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "V1" },
  { href: "/v2", label: "V2" },
  { href: "/v3", label: "V3" },
];

export default function VersionSwitcher() {
  const pathname = usePathname();
  return (
    <nav className="font-space-mono text-xs border border-white px-3 py-2 flex gap-4 bg-black fixed bottom-4 right-4 z-50">
      {routes.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-1 ${pathname === href ? "bg-white text-black" : "hover:bg-white hover:text-black"}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
```

---

### Task 7: Create components/v1/Hero.tsx

- [ ] **Step 1: Create the file**

Do NOT import fonts in components — fonts are loaded in the page file only. Components just use the font class name.

```tsx
import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 border-b border-white">
      <h1 className="text-5xl md:text-9xl font-bold uppercase tracking-widest leading-none">
        {hero.name.toUpperCase()}
        <span className="animate-blink ml-2">|</span>
      </h1>
      <p className="text-xl md:text-2xl uppercase tracking-widest mt-6">{hero.title}</p>
      <p className="text-sm tracking-widest mt-3 opacity-80">{hero.tagline.toUpperCase()}</p>
    </section>
  );
}
```

---

### Task 8: Create components/v1/About.tsx

- [ ] **Step 1: Create the file**

```tsx
import { about } from "@/lib/data";

export default function About() {
  return (
    <section className="border-b border-white px-8 md:px-16 py-16">
      <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">HOW I WORK</h2>
      <p className="text-sm leading-relaxed max-w-2xl">{about.body}</p>
    </section>
  );
}
```

---

### Task 9: Create components/v1/Projects.tsx

- [ ] **Step 1: Create the file**

```tsx
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="border-b border-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="border border-white p-8 -mt-px -ml-px">
            <h3 className="text-2xl font-bold uppercase mb-2">{project.name}</h3>
            <p className="text-sm leading-relaxed mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white px-2 py-1 text-xs uppercase hover:bg-white hover:text-black cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### Task 10: Create components/v1/Stack.tsx

- [ ] **Step 1: Create the file**

```tsx
import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section className="border-b border-white px-8 md:px-16 py-16">
      <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">TECH STACK</h2>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <span
            key={item}
            className="border border-white px-4 py-2 text-sm uppercase hover:bg-white hover:text-black -mb-px -mr-px cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
```

---

### Task 11: Create components/v1/Services.tsx

- [ ] **Step 1: Create the file**

```tsx
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="border-b border-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.name} className="border border-white p-8 -mt-px -ml-px">
            <h3 className="text-xl font-bold uppercase mb-2">{service.name}</h3>
            <p className="text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### Task 12: Create components/v1/Contact.tsx

- [ ] **Step 1: Create the file**

```tsx
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section className="px-8 md:px-16 py-16">
      <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-widest">
        {contact.headline.toUpperCase()}
      </h2>
      <p className="text-sm mt-4">{contact.body}</p>
      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-6 py-3 uppercase text-sm hover:bg-white hover:text-black"
        >
          GitHub
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="border border-white px-6 py-3 uppercase text-sm hover:bg-white hover:text-black"
        >
          {contact.email}
        </a>
      </div>
    </section>
  );
}
```

---

### Task 13: Create app/page.tsx (V1)

- [ ] **Step 1: Create the file**

```tsx
import { Space_Mono } from "next/font/google";
import Hero from "@/components/v1/Hero";
import About from "@/components/v1/About";
import Projects from "@/components/v1/Projects";
import Stack from "@/components/v1/Stack";
import Services from "@/components/v1/Services";
import Contact from "@/components/v1/Contact";
import VersionSwitcher from "@/components/v1/VersionSwitcher";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function V1Page() {
  return (
    <div className={`${spaceMono.variable} font-space-mono bg-black text-white min-h-screen`}>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Services />
      <Contact />
      <VersionSwitcher />
    </div>
  );
}
```

Note: `app/page.tsx` already exists from the bootstrap. Replace its entire contents with the code above.

- [ ] **Step 2: Run build**
```bash
npm run build
```
Expected: Build succeeds. V1 page renders at `/`.

- [ ] **Step 3: Commit V1**
```bash
git add -A
git commit -m "feat: add V1 Raw/Aggressive design"
```

---

## Chunk 3: V2 Editorial/Swiss Components

V2 palette: bg `#F5F0E8`, text `#1A1A18`, accent `#C8441B`. Fonts: Playfair Display (display) + Inter (body). No card borders. Content on surface.

### Task 14: Create components/v2/VersionSwitcher.tsx

- [ ] **Step 1: Create the file**

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "V1" },
  { href: "/v2", label: "V2" },
  { href: "/v3", label: "V3" },
];

export default function VersionSwitcher() {
  const pathname = usePathname();
  return (
    <nav className="text-xs uppercase tracking-[0.2em] flex gap-4 fixed bottom-4 right-4 z-50 bg-[#F5F0E8] px-3 py-2">
      {routes.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`font-inter ${pathname === href ? "border-b-2 border-[#C8441B] text-[#C8441B]" : "text-[#1A1A18] hover:text-[#C8441B]"}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
```

---

### Task 15: Create components/v2/Hero.tsx

- [ ] **Step 1: Create the file**

```tsx
import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 px-8 md:px-16 bg-[#F5F0E8]">
      <span className="hidden md:block absolute top-8 right-8 font-inter font-medium text-xs uppercase tracking-[0.3em] text-[#1A1A18]">
        PORTFOLIO 2026
      </span>
      <div>
        <h1 className="font-playfair font-black leading-none tracking-tight text-7xl md:text-[10rem] text-[#1A1A18]">
          MERVIN
        </h1>
        <h1 className="font-playfair font-black leading-none tracking-tight text-7xl md:text-[10rem] text-[#1A1A18]">
          DE <span className="text-[#C8441B]">CASTRO</span>
        </h1>
      </div>
      <p className="font-inter font-light text-xl text-[#1A1A18] mt-6">{hero.title}</p>
      <p className="font-inter font-light text-sm text-[#1A1A18] mt-2 opacity-70">{hero.tagline}</p>
    </section>
  );
}
```

---

### Task 16: Create components/v2/About.tsx

- [ ] **Step 1: Create the file**

```tsx
import { about } from "@/lib/data";

export default function About() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-[#F5F0E8]">
      <p className="font-inter font-medium text-xs uppercase tracking-[0.2em] text-[#C8441B] mb-6">HOW I WORK</p>
      <p className="font-inter font-light text-base leading-relaxed text-[#1A1A18] max-w-2xl">{about.body}</p>
    </section>
  );
}
```

---

### Task 17: Create components/v2/Projects.tsx

- [ ] **Step 1: Create the file**

```tsx
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#F5F0E8]">
      <p className="font-inter text-xs uppercase tracking-[0.2em] text-[#C8441B] mb-12">SELECTED WORK</p>
      <div>
        {projects.map((project) => (
          <div
            key={project.name}
            className="border-b border-[#1A1A18]/20 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8"
          >
            <h3 className="font-playfair font-black text-3xl md:text-5xl text-[#1A1A18] leading-tight">
              {project.name}
            </h3>
            <div className="md:max-w-xs">
              <p className="font-inter font-light text-sm text-[#1A1A18]/70 mb-2">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-inter text-xs uppercase tracking-widest text-[#C8441B]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### Task 18: Create components/v2/Stack.tsx

- [ ] **Step 1: Create the file**

```tsx
import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#F5F0E8]">
      <p className="font-inter font-medium text-xs uppercase tracking-[0.2em] text-[#C8441B] mb-8">BUILT WITH</p>
      <p className="font-inter font-light text-sm text-[#1A1A18]">
        {stack.join(" — ")}
      </p>
    </section>
  );
}
```

---

### Task 19: Create components/v2/Services.tsx

- [ ] **Step 1: Create the file**

```tsx
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#F5F0E8]">
      <p className="font-inter text-xs uppercase tracking-[0.2em] text-[#C8441B] mb-12">WHAT I BUILD</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => (
          <div key={service.name}>
            <h3 className="font-playfair font-bold text-2xl text-[#1A1A18] mb-2">{service.name}</h3>
            <p className="font-inter font-light text-sm text-[#1A1A18]/70">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### Task 20: Create components/v2/Contact.tsx

- [ ] **Step 1: Create the file**

```tsx
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#1A1A18]">
      <h2 className="font-playfair font-black text-5xl md:text-8xl text-[#F5F0E8] tracking-tight leading-tight">
        {contact.headline}
      </h2>
      <p className="font-inter font-light text-[#F5F0E8]/70 mt-6">{contact.body}</p>
      <div className="flex flex-wrap gap-8 mt-10">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-sm text-[#F5F0E8] border-b border-[#C8441B] hover:text-[#C8441B] pb-1"
        >
          GitHub
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="font-inter text-sm text-[#F5F0E8] border-b border-[#C8441B] hover:text-[#C8441B] pb-1"
        >
          {contact.email}
        </a>
      </div>
    </section>
  );
}
```

---

### Task 21: Create app/v2/page.tsx

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p app/v2
```

Then create `app/v2/page.tsx`:
```tsx
import { Playfair_Display, Inter } from "next/font/google";
import Hero from "@/components/v2/Hero";
import About from "@/components/v2/About";
import Projects from "@/components/v2/Projects";
import Stack from "@/components/v2/Stack";
import Services from "@/components/v2/Services";
import Contact from "@/components/v2/Contact";
import VersionSwitcher from "@/components/v2/VersionSwitcher";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export default function V2Page() {
  return (
    <div className={`${playfair.variable} ${inter.variable} font-inter bg-[#F5F0E8] text-[#1A1A18] min-h-screen`}>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Services />
      <Contact />
      <VersionSwitcher />
    </div>
  );
}
```

- [ ] **Step 2: Run build**
```bash
npm run build
```
Expected: Build succeeds. `/v2` renders the editorial design.

- [ ] **Step 3: Commit V2**
```bash
git add -A
git commit -m "feat: add V2 Editorial/Swiss design"
```

---

## Chunk 4: V3 Maximalist/Glitch Components

V3 palette: bg `#0A0A0A`, text `#FFFFFF`, accent neon `#00FF41`. Font: Share Tech Mono. Glitch animations, scanlines, terminal aesthetic.

### Task 22: Create components/v3/VersionSwitcher.tsx

- [ ] **Step 1: Create the file**

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "V1" },
  { href: "/v2", label: "V2" },
  { href: "/v3", label: "V3" },
];

export default function VersionSwitcher() {
  const pathname = usePathname();
  return (
    <nav className="font-share-tech text-xs text-[#00FF41] flex gap-4 fixed bottom-4 right-4 z-50 bg-[#0A0A0A] px-2 py-1 border border-[#00FF41]/30">
      {routes.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? "underline" : "hover:underline opacity-60 hover:opacity-100"}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
```

---

### Task 23: Create components/v3/Hero.tsx

- [ ] **Step 1: Create the file**

```tsx
import { hero } from "@/lib/data";

export default function Hero() {
  const nameUpper = hero.name.toUpperCase();
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative">
      <span className="hidden md:block absolute top-8 left-8 text-[#00FF41] text-xs opacity-30 select-none">
        // PORTFOLIO.EXE
      </span>
      <h1
        className="glitch-hover text-4xl md:text-9xl font-bold leading-none"
        data-text={nameUpper}
      >
        {nameUpper}
      </h1>
      <p className="text-[#00FF41] text-xl mt-4">{hero.title.toUpperCase()}</p>
      <p className="text-sm mt-2 text-white/60">{hero.tagline}</p>
      <p className="hidden md:block text-xs text-[#00FF41]/20 mt-8" style={{ marginLeft: "-0.5rem" }}>
        LOADING PROJECTS... [████████████] 100%
      </p>
    </section>
  );
}
```

---

### Task 24: Create components/v3/About.tsx

- [ ] **Step 1: Create the file**

```tsx
import { about } from "@/lib/data";

export default function About() {
  return (
    <section className="py-20 px-8 md:px-16 border-t border-[#00FF41]/20">
      <h2 className="text-2xl text-[#00FF41] mb-6">&gt; HOW I WORK</h2>
      <p className="text-sm leading-relaxed text-white/80 max-w-2xl">{about.body}</p>
      <span className="block text-[10px] text-[#00FF41]/20 mt-4">// END PROCESS</span>
    </section>
  );
}
```

---

### Task 25: Create components/v3/Projects.tsx

- [ ] **Step 1: Create the file**

```tsx
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="py-20 px-8 md:px-16">
      <h2 className="text-2xl text-[#00FF41] mb-8">&gt; PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-[#00FF41]/40 p-6 hover:border-[#00FF41] hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all"
          >
            <h3 className="text-xl font-bold text-[#00FF41] mb-2">{project.name}</h3>
            <p className="text-sm text-white/70 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#00FF41]/60 border border-[#00FF41]/30 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### Task 26: Create components/v3/Stack.tsx

- [ ] **Step 1: Create the file**

```tsx
import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section className="py-20 px-8 md:px-16 border-t border-[#00FF41]/20">
      <h2 className="text-2xl text-[#00FF41] mb-6">&gt; STACK</h2>
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="text-xs border border-[#00FF41]/40 px-3 py-1 text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
      <span className="block text-[10px] text-[#00FF41]/20 mt-6 ml-4">
        TOTAL: {stack.length} TECHNOLOGIES LOADED
      </span>
    </section>
  );
}
```

---

### Task 27: Create components/v3/Services.tsx

- [ ] **Step 1: Create the file**

```tsx
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="py-20 px-8 md:px-16">
      <h2 className="text-2xl text-[#00FF41] mb-8">&gt; SERVICES</h2>
      <div>
        {services.map((service) => (
          <div key={service.name} className="border-b border-[#00FF41]/10 py-6">
            <h3 className="text-lg text-[#00FF41] mb-1">{service.name}</h3>
            <p className="text-sm text-white/60">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### Task 28: Create components/v3/Contact.tsx

- [ ] **Step 1: Create the file**

```tsx
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section className="py-20 px-8 md:px-16 border-t border-[#00FF41]/20">
      <h2
        className="glitch-hover text-4xl md:text-6xl font-bold"
        data-text={contact.headline}
      >
        {contact.headline}
      </h2>
      <p className="text-sm text-white/60 mt-4">{contact.body}</p>
      <div className="flex flex-wrap gap-6 mt-8">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00FF41] text-sm hover:underline"
        >
          GitHub
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="text-[#00FF41] text-sm hover:underline"
        >
          {contact.email}
        </a>
      </div>
    </section>
  );
}
```

---

### Task 29: Create app/v3/page.tsx

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p app/v3
```

Then create `app/v3/page.tsx`:
```tsx
import { Share_Tech_Mono } from "next/font/google";
import Hero from "@/components/v3/Hero";
import About from "@/components/v3/About";
import Projects from "@/components/v3/Projects";
import Stack from "@/components/v3/Stack";
import Services from "@/components/v3/Services";
import Contact from "@/components/v3/Contact";
import VersionSwitcher from "@/components/v3/VersionSwitcher";

const shareTech = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-tech",
});

export default function V3Page() {
  return (
    <div className={`${shareTech.variable} font-share-tech scanlines min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden`}>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Services />
      <Contact />
      <VersionSwitcher />
    </div>
  );
}
```

- [ ] **Step 2: Run build**
```bash
npm run build
```
Expected: Build succeeds. All three routes build cleanly with 0 TypeScript errors.

- [ ] **Step 3: Commit V3**
```bash
git add -A
git commit -m "feat: add V3 Maximalist/Glitch design"
```

---

## Chunk 5: Final Verification + Deployment

### Task 30: Full build verification

- [ ] **Step 1: Run TypeScript check**
```bash
npx tsc --noEmit
```
Expected: 0 errors.

- [ ] **Step 2: Run production build**
```bash
npm run build
```
Expected: All routes compile. No errors.

- [ ] **Step 3: Spot check routes locally**
```bash
npm run start &
```
Open `http://localhost:3000` — V1 should show black bg with monospace type.
Open `http://localhost:3000/v2` — V2 should show off-white with Playfair Display type.
Open `http://localhost:3000/v3` — V3 should show dark bg with neon green accents.
Kill the server after checking: `kill %1`

---

### Task 31: Push to GitHub

- [ ] **Step 1: Verify remote is set**
```bash
git remote -v
```
Expected: `origin` pointing to the GitHub repo.

- [ ] **Step 2: Push**
```bash
git push origin main
```
Expected: Push succeeds.

---

### Task 32: Deploy to Vercel

- [ ] **Step 1: Login to Vercel (if needed)**
```bash
npx vercel login
```
Follow the browser authentication flow.

- [ ] **Step 2: Link the project**
```bash
npx vercel link --yes --project heymervin
```
If prompted for organization/scope, press Enter to accept the default. Project name must be `heymervin`.

- [ ] **Step 3: Deploy to production**
```bash
npx vercel --prod
```
Expected: Deployment URL printed. Visit the URL to verify all three routes load.

- [ ] **Step 4: Final commit with Vercel URL (optional)**

If Vercel assigned a URL (e.g. `heymervin.vercel.app`), note it. No code changes needed.

---

## Success Checklist

- [ ] `npm run build` passes with 0 errors
- [ ] `npx tsc --noEmit` passes with 0 errors
- [ ] `/` shows V1: black background, Space Mono, ALL CAPS, sharp borders
- [ ] `/v2` shows V2: off-white background, Playfair Display hero, Inter body
- [ ] `/v3` shows V3: dark background, neon green accents, monospace, scanlines
- [ ] Version switcher present and functional on all three routes
- [ ] All 6 sections present on each route
- [ ] Pushed to GitHub `main`
- [ ] Deployed to Vercel production
