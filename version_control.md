# Version Control History

This document tracks the deployment and major updates matching the GitHub release commits.

## v1.5.0 - Layout Stabilization & Visual Refinement (Josh Comeau Style)
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - **Global Navigation & Branding**: Fixed Header branding to `"LAB: AI Experiment Lab"`. Corrected home path to `href="/"`. Implemented backdrop blur (`backdrop-filter: blur(16px)`) with transparent header style.
  - **Layout Centering**: Centered all views (Home, Blog, Operator) using `max-w-6xl mx-auto px-6` container alignments to create structured focus.
  - **Typography & Whitespace**: Upgraded font stack to `Inter` and global line-height to `1.6`. Increased vertical margins and section padding (`py-24` and `gap-8`) for breathable layouts.
  - **Admin Bento Grid & Workbench**: Reconstructed Operator Panel into a clean Bento Grid layout using off-white card backgrounds (`bg-slate-50`), `border-radius: 24px` (`rounded-[24px]`), and soft shadows. High contrast black-border workbench area as the central visual focal point.
  - **Blog Cards & Sidebar**: Compacted project listing sidebar inside `/blog`. Simplified build log card parameters (BuildLogCard.astro) to show clean previews with minimized metadata.

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
