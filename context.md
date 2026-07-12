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

## 5. Architectural Pivot: Project-Centric Knowledge Vault & master.md System (2026-07-10)
- **지식 저장소(Vault) 도입**: 각 프로젝트를 `src/content/projects/[project-name]/` 하위의 독립된 지식 베이스로 재편하여 `master.md`, `/published/`, `/drafts/`를 체계적으로 격리 보관.
- **master.md (Source of Truth)**: 프로젝트 비전, 로컬 SEO 타겟, 히스토리 타임라인을 총망라하여 AI 작가에게 고정 컨텍스트로 주입함으로써 연재 에세이의 톤앤매너와 논리적 일관성을 확보함.
- **실시간 클라이언트 상태 동기화**: 정적 호스팅(Firebase Hosting)의 API 제약을 극복하고 라이브 웹 시뮬레이션을 가능하게 하기 위해, `/operator`에서 발행한 데이터(LocalStorage)를 메인 피드 및 저널 목록에 클라이언트 사이드에서 동적으로 가산/병합하는 동기화 엔진을 구축함.

