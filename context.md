# Context: Chicago AI-Local Web Factory

## 1. Local Chicago Market Context
- **Target Audience**: Chicago local service providers (Photographers, Plumbers, Contractors, Gyms, Cafes, Dental Clinics).
- **Core Competition**: Traditional web agency agencies charging high upfront retainers and monthly maintenance fees.
- **Key Local Keywords**: 
  - "Chicago Local SEO Website"
  - "Fast Small Business Websites Chicago"
  - "Chicago AI Web Development"
  - "Olivia Choi Photography Chicago Wedding"

## 2. Technical Stack Definition
- **Framework**: Astro.build (SSG, Zero-JS by default, ultra-fast loading speed).
- **Hosting**: Firebase Hosting (CDN backed by Google Infrastructure).
- **AI Engine**: Gemini API (for content amplification, blog generation, bot response).
- **Design Philosophy**: Modern Light Design. High-contrast typography, electric blue accents on bright white (#FFFFFF) background, clean cards with soft shadows, responsive layouts, Framer Motion (or simple CSS transitions for Zero-JS speed).

## 3. Pilot Project Case Study: Olivia Choi Photography
- **Niche**: Premium Wedding Photography in Chicago (serving downtown, Lincoln Park, West Loop, suburbs).
- **Core Problem**: Her beautiful photos are locked in raw folders. She needs a fast portfolio site and a way to turn every wedding gig's prep notes, location details, and final delivery details into a localized blog post targeting local couples.
- **Pilot Artifacts**: The Control Tower includes a content collection representing Olivia's project story to showcase our system's capabilities.

## 4. Operational Decisions
- **Synchronization Trigger**: Manual / On-demand. Real-time background file watching is disabled by preference to conserve resources. File ingestion and drafts queue generation occur when the operator triggers it via the CLI (`node scripts/sync-local-projects.js`) or the Admin workbench UI.
