# Version Control History

This document tracks the deployment and major updates matching the GitHub release commits.

## v1.1.0 - Advanced Bidirectional Control Tower & Admin Workbench
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Integrated Tailwind CSS v4 in layout templates for modern responsive styling.
  - Built local scanning script (`scripts/sync-local-projects.js`) checking `C:/appdev/` for `plan.md`, `context.md`, `todo.md` and registering projects automatically.
  - Implemented interactive operator workbench (`/operator`) containing:
    - Double-Buffer Drafts queue viewer.
    - Markdown to Human-friendly clean HTML parser and Visual Guides recommendation placeholders.
    - Flash Insight memo input system linked with project tagging or General tags (highest priority).
    - Client-side mock feedback loop and Multi-Channel SNS snippet generation (LinkedIn, Twitter, Instagram).
  - Upgraded public blog listing (`/blog`) with category and tag-based client-side filters.
  - Added Like counters, interactive Comment sections, and Schema.org metadata structures (`Article` and `TechArticle`).

## v1.0.0 - Initial Control Tower Launch
- **Date**: 2026-07-09
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Astro.build framework initialized.
  - Initial configuration of layouts and pilot projects.
