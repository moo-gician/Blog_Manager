const fs = require('fs');
const dbPath = './src/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const content = fs.readFileSync('./src/content/blog/olivia-choi-wedding.md', 'utf8');
const parts = content.split('---');
if (db.posts && db.posts.length > 0) {
    db.posts[0].content = parts[2].trim();
    db.posts[0].title = 'Olivia Choi Photography - Premium Wedding Portfolio';
}
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
