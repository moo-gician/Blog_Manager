# Version Control History

This document tracks the deployment and major updates matching the GitHub release commits.

## v1.3.0 - Origin Stories Handling ('Episode 0: The Origin')
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Added Section `3.6. Special Handling for 'Origin Stories'` in [`context.md`](file:///c:/AppDev/Blog_Manager/context.md).
  - Modified [`sync-local-projects.js`](file:///c:/AppDev/Blog_Manager/scripts/sync-local-projects.js) to inspect project files for origin keywords ("시작", "문제", "아이디어", "Background", "Problem", "overall plan/timeline") and tag generated drafts with `'Episode 0: The Origin'` category.
  - Implemented UI pinning and premium gold border/badge layout highlighting on [`blog.astro`](file:///c:/AppDev/Blog_Manager/src/pages/blog.astro) for posts matching `'Episode 0: The Origin'` to establish the project's background context.
  - Created [`rebuild-drafts.js`](file:///c:/AppDev/Blog_Manager/scripts/rebuild-drafts.js) helper script to flush old drafts and trigger a clean sync of the new Origin logic.

## v1.2.0 - Global Rules Documentation & Supreme Logic Integration
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Documented `3.7. Global Rule Documentation & Interpretation` in `context.md`.
  - Injected 3 high-quality draft essays in `db.json` explaining Global Rules.
  - Modified `sync-local-projects.js` to enforce `SUPREME_LOGIC` context rules.

## v1.1.0 - Advanced Bidirectional Control Tower & Admin Workbench
- **Date**: 2026-07-10
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Integrated Tailwind CSS v4 in layout templates for modern responsive styling.
  - Built local scanning script (`scripts/sync-local-projects.js`) checking `C:/appdev/` for `plan.md`, `context.md`, `todo.md` and registering projects automatically.
  - Implemented interactive operator workbench (`/operator`) containing drafts queue, HTML preview, feedback loop, Flash Insights, and SNS ready buffer.

## v1.0.0 - Initial Control Tower Launch
- **Date**: 2026-07-09
- **Deployment URL**: [https://chicago-ai-web-factory.web.app](https://chicago-ai-web-factory.web.app)
- **Features**:
  - Astro.build framework initialized.
  - Initial configuration of layouts and pilot projects.
