# Todo: Chicago AI-Local Web Factory Setup

## Phase 1: Foundation & Core Setup
- [ ] Initialize Astro project in the current directory with `npx create-astro@latest ./ --no-install` (or similar non-interactive options).
- [ ] Install dependencies (`npm install`).
- [ ] Configure Astro to support Blog content collections.
- [ ] Initialize Firebase configuration (`firebase.json`, `.firebaserc`).

## Phase 2: Design & Layouts
- [ ] Create `src/layouts/ControlTowerLayout.astro` using Modern Light Design (Bright Light, White background, Electric Blue accents, great typography, SEO tags).
- [ ] Create `src/components/BuildLogCard.astro` for rendering active local projects (such as Olivia Choi Wedding Photography).
- [ ] Create `src/components/GeminiBot.astro` for the AI consulting widget.
- [ ] Implement the Home page (`src/pages/index.astro`) showcasing:
  - Lead Generation Hero section ("Get an AI-Powered Site in 3 Days").
  - Project Build Logs (Olivia Choi Photography pilot).
  - Web Factory Features.

## Phase 3: Content Ingestion & Operator Simulation
- [ ] Create first pilot build log in `src/content/blog/olivia-choi-wedding.md` using the Olivia Choi plan/context/todo story.
- [ ] Create Operator Simulation UI/scripts:
  - Mock Gemini Blog Generator utility/page.
  - SNS Amplification post snippet generator.

## Phase 4: Verification & Deployment
- [ ] Build the project locally (`npm run build`) to ensure zero build errors.
- [ ] Deploy to Firebase Hosting.
