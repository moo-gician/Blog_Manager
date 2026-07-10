import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DEV_PATH = 'C:/appdev';
const DB_PATH = path.join(__dirname, '../src/data/db.json');

console.log('🔄 시카고 AI 웹 공장: 로컬 프로젝트 동기화 가동...');

// Ensure C:/appdev exists
if (!fs.existsSync(ROOT_DEV_PATH)) {
  console.log(`📁 ${ROOT_DEV_PATH} 디렉토리가 없어 새로 생성합니다...`);
  fs.mkdirSync(ROOT_DEV_PATH, { recursive: true });
}

// Create a dummy pilot folder in C:/appdev if it's completely empty, to show local file ingestion in action!
const demoProjectPath = path.join(ROOT_DEV_PATH, 'olivia-choi-wedding');
if (!fs.existsSync(demoProjectPath)) {
  fs.mkdirSync(demoProjectPath, { recursive: true });
  fs.writeFileSync(path.join(demoProjectPath, 'plan.md'), '# Plan\n- Wedding Photography Portfolio\n- 3-day turnaround promise.');
  fs.writeFileSync(path.join(demoProjectPath, 'context.md'), '# Context\n- Location: Chicago, IL\n- Keywords: Lincoln Park 스냅, 시카고 야외 웨딩');
  fs.writeFileSync(path.join(demoProjectPath, 'todo.md'), '# Todo\n- [x] Configure routing\n- [ ] Design gallery layout');
  console.log(`✨ 데모 프로젝트를 ${demoProjectPath}에 생성했습니다.`);
}

function sync() {
  if (!fs.existsSync(DB_PATH)) {
    console.error('❌ db.json 파일이 없습니다. 초기화가 필요합니다.');
    return;
  }

  const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  const folders = fs.readdirSync(ROOT_DEV_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let updatedCount = 0;

  folders.forEach(folderName => {
    const projectPath = path.join(ROOT_DEV_PATH, folderName);
    const planFile = path.join(projectPath, 'plan.md');
    const contextFile = path.join(projectPath, 'context.md');
    const todoFile = path.join(projectPath, 'todo.md');

    // Ingest if at least one file exists
    if (fs.existsSync(planFile) || fs.existsSync(contextFile) || fs.existsSync(todoFile)) {
      const planContent = fs.existsSync(planFile) ? fs.readFileSync(planFile, 'utf-8') : '';
      const contextContent = fs.existsSync(contextFile) ? fs.readFileSync(contextFile, 'utf-8') : '';
      const todoContent = fs.existsSync(todoFile) ? fs.readFileSync(todoFile, 'utf-8') : '';

      // Check if project exists in database
      let project = db.projects.find(p => p.id === folderName);

      if (!project) {
        // Automatically register new project
        project = {
          id: folderName,
          name: `${folderName.replace(/-/g, ' ')} (Sync)`,
          path: projectPath,
          status: 'planning',
          tags: ['Chicago', 'AI-Factory'],
          lastSync: new Date().toISOString()
        };
        db.projects.push(project);
        console.log(`➕ 새 프로젝트 자동 감지 및 등록: ${folderName}`);
      }

      // Sync documents contents inside project object (or store separately)
      project.plan = planContent;
      project.context = contextContent;
      project.todo = todoContent;
      project.lastSync = new Date().toISOString();
      updatedCount++;

      // Double-Buffer Drafts queue check: Ensure exactly 2 drafts exist for this project
      const projectDrafts = db.drafts.filter(d => d.projectId === folderName);
      if (projectDrafts.length < 2) {
        const gap = 2 - projectDrafts.length;
        console.log(`🤖 [Gemini 이중 버퍼 큐 채우기] ${folderName} 프로젝트에 드래프트 ${gap}개 자동 대기열 생성...`);
        
        // Supreme Logic Rule: Context Injection
        const SUPREME_LOGIC_PROMPT = `
          [SUPREME LOGIC - Global Rules Context]
          1. Memory System: Ingest 3-core files (plan.md, context.md, todo.md) to maintain development integrity.
          2. Modern Light Design: Neutral white background (#FFFFFF) with electric blue highlights. High contrast.
          3. Google Ecosystem: Leverage Firebase and Google APIs for high speed and low cost.
          4. Process: Analyze before code modifications, implement modular steps, perform QA checks.
          5. Marketing: Apply '약문통 원해자' framework ('Why', 'Human Struggle', 'AI Insight').
        `;

        const mergedContent = planContent + ' ' + contextContent + ' ' + todoContent;
        const originKeywords = ["시작", "문제", "아이디어", "Background", "Problem", "overall plan/timeline"];
        const hasOriginKeyword = originKeywords.some(keyword => mergedContent.includes(keyword));
        const determinedCategory = hasOriginKeyword ? 'Episode 0: The Origin' : 'Build Log';
        
        for (let i = 0; i < gap; i++) {
          const draftId = `draft-${folderName}-${Date.now()}-${i}`;
          db.drafts.push({
            id: draftId,
            projectId: folderName,
            title: determinedCategory === 'Episode 0: The Origin' 
              ? `🎬 [Episode 0: Origin] ${project.name}의 시작점과 아이디어의 태동`
              : `${project.name}의 AI 기반 마케팅 에세이 #${projectDrafts.length + i + 1}`,
            content: determinedCategory === 'Episode 0: The Origin'
              ? `# Episode 0: The Origin - ${project.name}의 시작\n\n모든 프로젝트에는 깊은 문제의식이 존재합니다.\n\n## 1. Why (시작과 아이디어)\n이 프로젝트는 구체적인 Pain Point인 업무 불일치와 수동 수집의 한계라는 문제(Problem)에서 시작되었습니다. Background는 시카고 로컬 생태계의 비효율성이었으며, 이를 해결하기 위한 아이디어가 떠올랐습니다.\n\n## 2. Human Struggle (인간적 고뇌)\n아이디어는 있었지만, 바쁜 일과 중에서 기술적 스택(Astro, Firebase)과 구도를 연계하는 과정은 고난의 연속이었습니다.\n\n[📷 이미지 추천 포인트: 프로젝트의 아이디어와 전체 일정 타임라인(overall plan/timeline)이 화이트보드에 자유롭게 스케치된 현장 사진]\n\n## 3. AI Insight (AI의 통찰)\n'Episode 0'의 가치 제안은 비즈니스의 영혼입니다. AI는 사령관의 이 시작 스토리를 첫 페이지에 고정(Pin)하여, 모든 테크니컬 빌드 로그에 신뢰의 토대를 제공합니다.`
              : `# ${project.name} - 현장 로그에서 얻은 비즈니스 가치\n\n## 1. Why (전략)\n${project.name} 프로젝트는 3대 핵심 파일(Plan/Context/Todo)의 'Supreme Logic'에 기반하여 설계되었습니다. 기술 스택은 Google Ecosystem인 Firebase Hosting을 선택하여 3일 만에 빠른 구축과 탄탄한 보안을 약속합니다.\n\n## 2. Human Struggle (인간적 극복)\n이 과정에서 발생한 수작업 갱신 문제를 해결하고 모던 라이트 디자인을 이식하기 위한 개발자들의 땀방울이 녹아있습니다.\n\n[📷 이미지 추천 포인트: 화이트 배경에 일렉트릭 블루 포인트로 구현된 로컬 비즈니스 모바일 캘린더 화면과 0.4초의 로딩속도를 자랑하는 모바일 최적화 스크린샷]\n\n## 3. AI Insight (AI의 통찰)\n로컬 시카고 시장의 높은 키워드 경쟁 속에서, 오직 현장에서 도출된 실제 데이터를 마케팅 스토리로 증폭시킴으로써 광고비 없이도 압도적인 구글 맵 최적화 순위를 유지하게 됩니다.`,
            category: determinedCategory,
            status: "review"
          });
        }
      }
    }
  });

  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
  console.log(`✅ 동기화 완료! 총 ${updatedCount}개 프로젝트 동기화 처리됨.`);
}

sync();
