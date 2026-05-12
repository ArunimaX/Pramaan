# Pramaan AI — Heritage Authentication Platform

> AI-powered blockchain authentication for India's GI-tagged heritage crafts. Verify provenance, protect artisans, and ensure fair trade through cryptographic certainty.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ What is Pramaan?

**Pramaan** (प्रमाण — Sanskrit for "proof") is a decentralized authentication platform that protects India's Geographical Indication (GI) heritage crafts using:

- 🎙️ **AI Voice Onboarding** — Artisans describe products in regional languages; AI structures the data
- 🛡️ **Cryptographic Verification** — Every product gets an unforgeable QR/NFC tag linked to the blockchain
- 💰 **Direct-to-Artisan Escrow** — Fair trade payments flow directly to creators, no middlemen
- 🗺️ **GI Heritage Explorer** — Discover authenticated crafts from 12+ GI regions across India

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + Custom CSS Design System |
| Fonts | Cormorant Garamond + DM Sans (Google Fonts) |
| Blockchain | Polygon L2 (Phase 2) |
| AI | OpenAI / Mistral API (Phase 2) |
| Storage | IPFS via Pinata (Phase 2) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── globals.css             # Design system & animations
│   ├── page.tsx                # Landing page
│   ├── explore/
│   │   └── page.tsx            # GI Heritage Explorer
│   ├── artisan/
│   │   └── dashboard/
│   │       └── page.tsx        # Artisan AI Onboarding & Dashboard
│   └── verify/
│       └── [productId]/
│           ├── page.tsx        # Server component (param resolver)
│           └── VerifyClient.tsx # Consumer verification portal
├── components/
│   ├── Navbar.tsx              # Sticky nav with glass-morph effect
│   └── Footer.tsx              # Footer with link columns
└── lib/
    └── mock-data.ts            # Mock artisans, products, regions
```

---

## 🖥️ Pages

### `/` — Landing Page
Split-screen hero with dual CTA ("Verify a Product" / "Protect Your Craft"), animated phone mockup, live blockchain ticker, feature cards, product showcase grid, stats strip, and verification widget.

### `/artisan/dashboard` — Artisan Dashboard
Mic-based AI voice onboarding with processing animation, 3-step minting flow (AI Details → Upload Photo → Mint GI Tag), and inventory grid with QR codes.

### `/verify/[productId]` — Consumer Verification Portal
Full verification page with green checkmark hero, holographic authenticity badge, heritage journey timeline, artisan story with audio player, tip/buy CTAs, and AI trust metrics (carbon saved, fair wage %).

### `/explore` — GI Heritage Explorer
Interactive region filter map (12 GI regions), search bar, and filterable product grid with status badges.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/your-username/Pramaan-AI-powered-authentication-platform.git
cd Pramaan-AI-powered-authentication-platform

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
npm run build
npm start
```

---

## 🗺️ Roadmap

### Phase 1 — Frontend ✅
- [x] Landing page with hero, features, products, stats, verify widget
- [x] Artisan AI onboarding dashboard with mic interface
- [x] Consumer verification portal with timeline & trust metrics
- [x] GI Heritage Explorer with region filters
- [x] Responsive navbar & footer with wallet connect placeholders

### Phase 2 — Backend & AI (Coming Soon)
- [ ] Neon DB + Prisma schema (User, Product models)
- [ ] AI voice-to-text route handlers (`/api/ai/parse-voice`)
- [ ] IPFS upload via Pinata for artisan photos/videos
- [ ] Smart contract integration on Polygon (wagmi/viem)
- [ ] QR code generation with `qrcode.react`
- [ ] RainbowKit wallet connection

---

## 📄 License

MIT — Built with ❤️ for India's heritage artisans.
