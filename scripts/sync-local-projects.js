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
        for (let i = 0; i < gap; i++) {
          const draftId = `draft-${folderName}-${Date.now()}-${i}`;
          db.drafts.push({
            id: draftId,
            projectId: folderName,
            title: `${project.name}의 AI 기반 마케팅 에세이 #${projectDrafts.length + i + 1}`,
            content: `# ${project.name} - 현장 로그에서 얻은 비즈니스 가치\n\n## 1. Why (전략)\n이 프로젝트는 3대 핵심 파일(Plan/Context/Todo)을 토대로 고성능 로컬 SEO 인프라를 지향합니다.\n\n## 2. Human Struggle (인간적 극복)\n이 과정에서 발생하는 수동 관리 리소스 문제를 극복했습니다.\n\n[📷 이미지 추천 포인트: 개발 코드 검토 화면 및 모바일 최적화 레이아웃 스크린샷]\n\n## 3. AI Insight (AI의 통찰)\n로컬 시장 키워드를 유기적으로 연합하여 최상의 상위 노출 기회를 유도합니다.`,
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
