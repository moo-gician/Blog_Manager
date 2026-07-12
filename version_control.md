# Version Control History

This document tracks the deployment and major updates matching the GitHub release commits.

## v1.9.0 - Minimal Tech SaaS Redesign for Control Tower (index.astro)
- **Date**: 2026-07-12
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Overhauled `index.astro` to a 4-column minimal tech SaaS layout.
  - Implemented sticky sidebar with category filtering.
  - Applied Pure White background, Dark Gray typography, and Purple accent colors.
  - Removed all borders and shadows in favor of `rounded-3xl` spacing and clean aesthetics.

## v1.8.0 - DALO UI Overhaul & Premium SaaS Aesthetics (Luna Standard)
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - **Depth Layering (bg-slate-50 + bg-white)**: Reconfigured body background color to slate-50 (`#F8FAFC`) and card/sidebar backgrounds to white (`#ffffff`), producing clear depth layer.
  - **Floating Glassmorphism Header**: Centered navigation header floating with top margin, `backdrop-filter: blur(20px)`, thin borders, and soft shadows.
  - **Premium Bento Grid**: Configured project logs in an offset Bento grid structure, upgrading the layout visual.
  - **Build Log Card Upgrades**: Overhauled `BuildLogCard.astro` by removing heavy borders, applying `rounded-[24px]`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, and pastel pills for tag labels.
  - **Interactive Space Hero**: Overhauled main landing hero with `py-36` padding, space-themed radial gradient light source, and high contrast indigo-600 vs. ghost CTAs.
  - **Luna Mascot speech bubble UI**: Injected mascot dialogue guidelines with speech bubbles within index and blog.
  - **Stories and About Overhaul**: Configured `about.astro` in a centered, floating storytelling block.

## v1.7.0 - Code Refactoring & Stale Cache Error Prevention
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Smart Database Merger inside operator, defensive null checks, and try-catch directory scans.

## v1.6.0 - DALO Brand Launch & Interactive Search Platform
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Created SVG logo and favicon, added slogan, installed cursor-following radial gradient hero, real-time keyword search modal, 2-column magazine blog layout with sidebar filters, and Storytelling About Page.

## v1.5.0 - Layout Stabilization & Visual Refinement (Josh Comeau Style)
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Global Navigation fixes, sticky backdrop blur header, Inter typography stack, bento grid layout and simplified preview cards.

## v1.4.0 - Strategic Pivot: AI Build Lab & Journal Launch
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Pivoted public branding from "Web Factory Sales" to "AI Experiment Lab & Journal".
  - Redesigned landing page and added left sidebar projects list with milestone filtering.

## v1.3.0 - Origin Stories Handling ('Episode 0: The Origin')
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Added Origin Stories handling and keywords check.
  - Highlighted and pinned Origin posts on `blog.astro` with premium gold layouts.

## v1.2.0 - Global Rules Documentation & Supreme Logic Integration
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Documented `3.7. Global Rule Documentation & Interpretation` in `context.md`.
  - Injected 3 draft essays in `db.json` explaining Global Rules.

## v1.1.0 - Advanced Bidirectional Control Tower & Admin Workbench
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Integrated Tailwind CSS v4.
  - Built local scanning script (`scripts/sync-local-projects.js`) checking `C:/appdev/`.
  - Implemented interactive operator workbench (`/operator`) with feedback loop, Flash Insights, and SNS ready buffer.

## v1.0.0 - Initial Control Tower Launch
- **Date**: 2026-07-09
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Astro.build framework initialized.
