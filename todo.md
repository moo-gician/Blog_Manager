# Todo: Chicago AI-Local Web Factory Setup

## Phase 1: Foundation & Core Setup
- [x] Initialize Astro project in the current directory.
- [x] Install dependencies (`npm install`).
- [x] Configure Astro to support Blog content collections (Migration to `projects/*/published/*.md` completed).
- [x] Initialize Firebase configuration (`firebase.json`, `.firebaserc`).

## Phase 2: Design & Layouts
- [x] Create `src/layouts/ControlTowerLayout.astro` using Modern Light Design.
- [x] Create `src/components/BuildLogCard.astro` for rendering active local projects.
- [x] Create `src/components/GeminiBot.astro` for the AI consulting widget.
- [x] Implement the Home page (`src/pages/index.astro`) showcasing:
  - Lead Generation Hero section.
  - Project Build Logs (Olivia Choi Photography pilot).
  - Web Factory Features.

## Phase 3: Content Ingestion & Operator Simulation
- [x] Create first pilot build log in `src/content/projects/olivia-choi-wedding/published/olivia-choi-wedding.md` using the Olivia Choi plan/context/todo story.
- [x] Create Operator Simulation UI/scripts (Knowledge Vault accordion UI and master.md integration).
- [x] Integrate client-side dynamic LocalStorage synchronization script on index and blog pages.

## Phase 4: Verification & Deployment
- [x] Build the project locally (`npm run build`) with zero compilation errors.
- [x] Deploy to Firebase Hosting and verify live publish simulations.
