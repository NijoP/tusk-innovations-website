# TUSK INNOVATIONS GLOBAL PRIVATE LIMITED — Official Corporate Website

Official corporate website and engineering knowledge portal of **TUSK INNOVATIONS GLOBAL PRIVATE LIMITED**, showcasing its flagship initiative: **Electronics Agent Kit (EAK)**.

---

## 1. Company Overview

- **Legal Name:** TUSK INNOVATIONS GLOBAL PRIVATE LIMITED
- **CIN:** U62011KL2026PTC106386
- **Registered Office:** 26/378(1), Thekkumoodu, Vanchiyoor P.O., Thiruvananthapuram, Kerala 695035, India
- **Official Inquiries:** [tuskinnovationsglobal@gmail.com](mailto:tuskinnovationsglobal@gmail.com)
- **Direct Phone:** [+91 62823 53042](tel:+916282353042)
- **Flagship Product:** Electronics Agent Kit (EAK)
- **EAK Repository:** [https://github.com/NijoP/electronics-agent-kit-proto](https://github.com/NijoP/electronics-agent-kit-proto)

---

## 2. Technical Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript 5
- **UI Architecture:** Tailored design system, Tailwind CSS
- **CMS:** Sanity Studio v3 (`next-sanity`), accessible at `/studio`
- **Iconography:** Lucide Icons (restrained, technical application)
- **Styling Direction:** Apple-level whitespace, typography precision, Linear-inspired technical metadata, and restrained technical accents (orange derived from official company brand mark).

---

## 3. Website Architecture & Pages

1. **Home (`/`)**: Executive overview, text-led hero, company introduction, flagship EAK showcase, engineering problem breakdown, connected 7-stage pipeline, technology foundation, and open-source contribution CTA.
2. **About TUSK (`/about`)**: Factual corporate profile, statutory data, core engineering doctrine, and executive leadership (Nijo Ponnachan, Founder & CEO; Anjai Itty Jacob, CTO).
3. **Electronics Agent Kit (`/electronics-agent-kit`)**: Comprehensive product page featuring the canonical engineering model, non-negotiable principles, Rust workspace crate topology (13 crates), verifiable capability matrix (`Implemented`, `Partially Implemented`, `Experimental`, `Planned`), and the Master Implementation Roadmap (Stages 0–9).
4. **Technology & Architecture (`/technology`)**: In-depth analysis of Clean Architecture rings enforced at compile time in Rust, immutable event sourcing, and multi-provider AI model isolation seams.
5. **Open Source & Community (`/open-source`)**: Permissive licensing philosophy (dual MIT / Apache-2.0), public GitHub repository references, and developer contribution guidelines.
6. **Insights (`/insights` & `/insights/[slug]`)**: Technical essays and engineering deep dives with dynamic routing and Sanity CMS fallback support.
7. **Contact (`/contact`)**: Official registered office address, interactive Google Maps directions link, statutory identifiers, and categorized inquiry dispatch form.
8. **Privacy Policy (`/privacy`)**: Corporate data governance and local-first runtime privacy guarantees.
9. **CMS Studio (`/studio`)**: Integrated Sanity CMS Studio with 10 schemas.
10. **SEO & Discovery**: Automated dynamic XML sitemap (`/sitemap.xml`) and robots file (`/robots.txt`).

---

## 4. Local Development

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Setup
```bash
# Clone the repository
git clone https://github.com/NijoP/tusk-innovations-website.git
cd tusk-innovations-website

# Install dependencies (respecting peer dependencies)
npm install --legacy-peer-deps

# Run local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

---

## 5. Sanity CMS Setup & Studio Access

The website includes pre-configured fallback data representing verified EAK technical facts. To manage live content via Sanity Studio:

1. Create a free project at [https://www.sanity.io](https://www.sanity.io).
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Update the variables with your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
   SANITY_API_READ_TOKEN=optional_read_token
   NEXT_PUBLIC_SITE_URL=https://tusk-innovations-website.vercel.app
   ```
4. Access the embedded Sanity Studio at:
   [http://localhost:3000/studio](http://localhost:3000/studio)

---

## 6. Production Build & Verification

```bash
# Compile and test static page generation
npm run build
```

---

## 7. Vercel Deployment

1. Push your repository to GitHub (`NijoP/tusk-innovations-website`).
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the `tusk-innovations-website` repository.
4. Set the Framework Preset to **Next.js**.
5. Add the environment variables from your `.env.local`.
6. Click **Deploy**.
