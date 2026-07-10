import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, '../src/data/db.json');

if (!fs.existsSync(DB_PATH)) {
  console.error('❌ db.json 파일이 없습니다.');
  process.exit(1);
}

const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

// Define the Global Rules drafts to inject under 'general'
const globalRulesDrafts = [
  {
    id: "draft-general-rule-memory",
    projectId: "general",
    title: "💡 [글로벌 룰] 1장: 3대 필수 문서와 에이전트의 뇌가 된 기억 시스템",
    content: `# 글로벌 룰 1장: 3대 필수 문서와 기억 시스템\n\n시카고 AI 웹 공장의 모든 개발과 의사결정은 plan.md, context.md, todo.md라는 3대 기억 장치에서 출발합니다.\n\n## 1. Why (창립자의 의도)\n개발 과정에서 AI 에이전트는 대화창 리셋이나 컨텍스트 윈도우 한계로 인해 이전의 중요한 비즈니스 규칙과 피드백을 유실하곤 했습니다. 사령관은 매번 똑같은 설명을 되풀이하고 코드가 롤백되는 재앙을 막기 위해, 대화의 한계를 초월하여 영구히 지속되는 3대 기억 문서를 모든 워크플로우의 'Supreme Logic'으로 명시했습니다.\n\n## 2. Behind the Scenes (탄생 비화)\n초기 빌드 테스트 중, 갤러리 로딩 방식을 최적화해 두었던 코드가 세션이 바뀐 에이전트에 의해 구형 템플릿 코드로 롤백된 사건이 있었습니다. 이에 격분한 창립자는 "기록하지 않는 에이전트는 퇴출한다"는 선언과 함께, 프로젝트 진입 직후 무조건 plan/context/todo부터 삼키는 /start 매커니즘을 전격 탑재했습니다.\n\n[📷 이미지 추천 포인트: plan, context, todo 파일들이 1:1로 깃 브랜치와 실시간 연동되어 버전을 형성하는 시스템 구조도]\n\n## 3. AI Insight (AI의 통찰)\n기억을 로컬 디렉토리의 단일 소스(Single Source of Truth)로 격리해 관리함으로써, 어떤 AI 코더가 들어와도 이전 결정을 100% 흡수하여 실수를 예방하고 롤백 없는 초고속 빌드를 가능하게 합니다.`,
    status: "review"
  },
  {
    id: "draft-general-rule-lightdesign",
    projectId: "general",
    title: "💡 [글로벌 룰] 2장: 다크 모드를 거부하는 Modern Light 디자인의 미학",
    content: `# 글로벌 룰 2장: 다크 모드를 거부하는 Modern Light 디자인\n\n왜 시카고 AI 웹 공장은 수많은 개발자들이 선호하는 다크 모드를 배제하고 순백색(Bright Light) 테마를 강제할까요?\n\n## 1. Why (창립자의 의도)\n웹사이트는 개발자를 위한 것이 아닙니다. 로컬 비즈니스의 최종 소비자인 예비 부부, 학부모, 로컬 매장 방문 고객들에게 다크 모드는 어둡고 불안정한 느낌을 주기 쉽습니다. 대중에게 가장 높은 시인성과 깨끗한 전문성을 전달하기 위해 흰색(#FFFFFF) 배경과 신뢰의 일렉트릭 블루 포인트를 채택했습니다.\n\n## 2. Behind the Scenes (탄생 비화)\n초기 사진작가 포트폴리오를 다크 그레이 톤으로 퍼블리싱했을 때, 시카고의 예비 부부 고객들로부터 "웨딩의 밝고 숭고한 분위기가 살지 않는다"는 피드백을 받았습니다. 창립자는 즉각 "실제 비즈니스 매출을 견인하는 디자인은 눈부시게 밝은 순백 테마에서 시작한다"며 디자인 헌법을 Modern Light 스타일로 엄격하게 리포맷했습니다.\n\n[📷 이미지 추천 포인트: 밝은 대낮의 햇빛 아래에서도 완벽한 대비를 이루는 일렉트릭 블루 포인트와 Plus Jakarta Sans 타이포그래피 모바일 화면 스크린샷]\n\n## 3. AI Insight (AI의 통찰)\n다크 모드가 제공하는 눈의 피로 감소보다, 첫 인상에서 구매 전환을 유도하는 'Bright Light'의 감성적 가치가 3배 높습니다. AI는 디자인 설계 시 이 심리학적 가치(Value Creation)를 최우선으로 준수합니다.`,
    status: "review"
  },
  {
    id: "draft-general-rule-yakmunton",
    projectId: "general",
    title: "💡 [글로벌 룰] 3장: 고객의 뼈를 때리는 '약문통 원해자' 마케팅 6단계 공식",
    content: `# 글로벌 룰 3장: '약문통 원해자' 6단계 공식\n\n기술의 우수성만 늘어놓는 웹사이트는 망합니다. 핵심은 사용자의 고통을 해결하는 가치의 제안입니다.\n\n## 1. Why (창립자의 의도)\n개발자들은 흔히 기능 개발에 취해 사용자가 진정 필요로 하는 이익을 설명하지 못합니다. 고객이 최소의 인풋으로 최대의 아웃풋을 낸다는 마케팅적 메커니즘을 기획 초기부터 탑재해 기형적인 기술 만능주의를 예방하기 위함입니다.\n\n## 2. Behind the Scenes (탄생 비화)\n창립자가 수많은 개발 외주 프로젝트를 관찰한 결과, $10,000가 넘는 화려한 사이트들도 정작 "이 사이트가 나에게 무슨 이익을 주는가?"에 답하지 못해 버려지는 것을 보았습니다. 이에 마케팅의 정수인 [약속-문제-통념-원인-해법-자각] 단계를 공식화하여, 모든 프로젝트의 기획 단계에서 이 순서를 밟지 않으면 빌드 프로세스를 차단하도록 SOP를 정의했습니다.\n\n[📷 이미지 추천 포인트: 약문통 원해자 단계별 깔끔한 도표 그래픽 및 미션 선언서 강조 인포그래픽]\n\n## 3. AI Insight (AI의 통찰)\nAI 오퍼레이터가 글을 쓰거나 코드를 작성할 때 '약문통 원해자' 프레임워크는 강력한 필터가 됩니다. 단순한 텍스트 나열을 넘어 독자가 자신의 문제를 깨닫고 전환(CTA) 버튼을 누르게 만드는 최강의 전환율 상승 엔진입니다.`
  }
];

// Ingest drafts avoiding duplicates
globalRulesDrafts.forEach(newDraft => {
  const exists = db.drafts.some(d => d.id === newDraft.id);
  if (!exists) {
    db.drafts.unshift(newDraft); // Place at the top of the review queue
    console.log(`➕ 글로벌 룰 해석 드래프트 큐에 주입 완료: ${newDraft.id}`);
  }
});

fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
console.log('✅ db.json 드래프트 리스트 최신화 완료.');
