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

## 3.6. Special Handling for 'Origin Stories'
- **Concept**: If a project log contains keywords like "시작", "문제", "아이디어", "Background", "Problem", or "overall plan/timeline", it is designated as `'Episode 0: The Origin'`.
- **Tone**: Personal, vulnerable, yet visionary. Focuses on the core human pain points to build client empathy.
- **UI Treatment**: Pinned/highlighted at the start of the project's timeline on the public blog to give readers immediate background context.

## 3.7. Global Rule Documentation & Interpretation
- **Source**: Root customization files (AGENTS.md / Global rules config).
- **Core Principle**: All generated blog drafts must refer to the Global Rules as the 'Supreme Logic' to maintain consistent tone, technical stack priorities (Google Ecosystem, Astro, Firebase), design constraints (Modern Light Design), and project tracking SOPs (3-core files, '약문통 원해자' framework).
- **Behind the Scenes Narrative**: Explain why each rule was established by the founder (e.g. why 3-core files are critical for context preservation, why dark mode is rejected for local biz sites, why Google Ecosystem is the default).
- **General Essays**: Write these interpretations as standalone thought-pieces under the 'General' tag.
