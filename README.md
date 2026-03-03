# House of Peace — Landing Page

Next.js 14 + Tailwind CSS landing page for House of Peace Hypnotherapy and Wellness Center.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Connect repo to Vercel (vercel.com)
3. Deploy — zero config needed

## Before Launch Checklist

### Replace placeholder content:
- [ ] `components/ui/Navbar.tsx` — Line 5: replace WA_NUMBER with real WhatsApp number
- [ ] `components/sections/FAQ.tsx` — Line in WA link: replace number
- [ ] `components/sections/Booking.tsx` — Line 1: replace WA_NUMBER
- [ ] `components/sections/Hero.tsx` — Add real illustration: /public/illustrations/hero.png
- [ ] `components/sections/Trust.tsx` — Add Dr. Yuliana photo: /public/dr-yuliana.jpg
- [ ] `components/sections/Trust.tsx` — Replace logo text with actual logo <Image> components
- [ ] `app/layout.tsx` — Update metadata (URL, OG image)

### Client provides:
- [ ] WhatsApp number (replace all WA_NUMBER = "6281234567890")
- [ ] Dr. Yuliana high-res photo
- [ ] Hero illustration (PNG, min 800x800)
- [ ] 20+ media logo files (PNG transparent)
- [ ] 2-4 additional testimonials (anonymized)
- [ ] Confirm operating hours
- [ ] Domain purchase

## Project Structure

```
app/
  layout.tsx        ← Root layout + metadata
  page.tsx          ← Assembles all 11 sections
  globals.css       ← Tailwind + Google Fonts
components/
  sections/
    Hero.tsx         ← Section 1
    PainMirror.tsx   ← Section 2
    DeeperPain.tsx   ← Section 3
    Agitation.tsx    ← Section 4
    Urgency.tsx      ← Section 5 (moved up from original PDF)
    Solution.tsx     ← Section 6 (6 USPs)
    Trust.tsx        ← Section 7 (Dr. Yuliana + media)
    Process.tsx      ← Section 8
    Testimonials.tsx ← Section 9
    FAQ.tsx          ← Section 10
    Booking.tsx      ← Section 11 (price revealed last)
  ui/
    Navbar.tsx
    Footer.tsx
```
