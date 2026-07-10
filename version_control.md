# Version Control History

This document tracks the deployment and major updates matching the GitHub release commits.

## v1.7.0 - Code Refactoring & Stale Cache Error Prevention
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - **Smart Database Merger**: Refactored `/operator` page to intelligently merge newly synchronized projects and drafts from build-time static JSON (`db.json`) into the browser's `localStorage` state, eliminating cache desynchronization.
  - **Defensive Null Checking**: Removed all strict non-null assertion operations (`!`) across client-side scripts inside `operator.astro` and `blog.astro` to ensure high runtime stability.
  - **Try-Catch Scanner Boundaries**: Integrated error handling boundaries inside local file ingestion backend script (`sync-local-projects.js`), making the scanner resilient against folder read failures.

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
