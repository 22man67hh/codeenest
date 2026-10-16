# CodeNest — Modern 1-Page Portfolio & Service Website

A high-converting, modern 1-page portfolio and service website for **CodeNest**, engineered for tech freelance website development and Meta Ads (Facebook & Instagram) boosting for small businesses.

The visual branding and color scheme faithfully match `image_6.png`:
- **Color Palette**: Deep midnight blue (`#0b132b`), electric blue (`#00b4d8`), and neon blue accents with glowing gradients.
- **Theme**: Dark Mode, highly professional, futuristic tech badges, glowing UI elements, clean typography (`Plus Jakarta Sans` & `JetBrains Mono`).
- **Brand Tagline**: `Build • Grow • Succeed`

---

## 🏗️ Modular Component Architecture

The codebase has been decomposed into dedicated, easily maintainable and debuggable components:

```
src/
├── types/
│   └── index.ts                 # Clean TypeScript interfaces & type models
├── data/
│   └── content.ts               # Content data (services, pricing, portfolio cases, FAQs)
├── components/
│   ├── Logo.tsx                 # </> code brackets + nest cradle SVG icon & typography
│   ├── Navbar.tsx               # Glassmorphic header with logo, navigation & "Get Free Quote" CTA
│   ├── Hero.tsx                 # Headline, dual CTAs ("Start Your Project" & "Book Consultation"), badges
│   ├── HeroVisual.tsx           # 3D interactive tilt laptop, smartphone, floating Meta & IG 3D cubes, chart
│   ├── ValueMarkers.tsx         # 4 Icon-based value markers from image_6.png (Targeted Audience, etc.)
│   ├── CoreServices.tsx         # Modern service cards with glowing border hover effects
│   ├── WhyCodeNest.tsx          # Comparative breakdown & CodeNest vs Agency table
│   ├── Portfolio.tsx            # Interactive 1-page site preview (Desktop/Mobile) & Meta Ads Manager dashboard
│   ├── RoiCalculator.tsx        # Interactive Live Growth & ROI Estimator with budget sliders
│   ├── PricingPlans.tsx         # Budget-friendly starter plans (72h delivery & no retainers)
│   ├── FaqAccordion.tsx         # Collapsible interactive FAQ accordion
│   ├── Footer.tsx               # "Let’s Grow Together ➜" high-contrast CTA banner, quick links, copyright
│   ├── QuoteModal.tsx           # Multi-step project quote modal with direct WhatsApp & email routing
│   └── FloatingWhatsApp.tsx     # Floating WhatsApp button with active pulse & helper chat bubble
├── App.tsx                      # Root coordinator assembling components
├── main.tsx                     # React application entry point
└── index.css                    # Tailwind CSS base, glassmorphism, and neon glow utilities
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```
# codeenest
