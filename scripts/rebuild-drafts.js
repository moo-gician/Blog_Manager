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

// Filter out all project drafts to force sync to regenerate them with the new Origin logic
// We keep 'general' category drafts (global rules)
db.drafts = db.drafts.filter(d => d.projectId === 'general');

fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
console.log('🧹 프로젝트 드래프트 비우기 완료. 동기화 스크립트를 재구동합니다...');

// Run the sync script dynamically
import('./sync-local-projects.js');
