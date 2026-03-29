const fs = require('fs');
const contentFiles = [
  'src/lib/content/ai-tools-reviews.ts',
  'src/lib/content/chatgpt-tips.ts',
  'src/lib/content/content-creation.ts',
  'src/lib/content/tech-reviews.ts',
  'src/lib/content/productivity.ts',
  'src/lib/content/ai-writing.ts'
];
const allKeys = [];
contentFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.matchAll(/^\s*"([a-z0-9-]+)": `/gm);
  for (const match of m) allKeys.push(match[1]);
});
const posts = fs.readFileSync('src/lib/posts.ts', 'utf8');
const slugs = [...posts.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map(m => m[1]);
console.log('404 Slugs:');
slugs.forEach(s => {
  if (!allKeys.includes(s)) console.log(s);
});
console.log('\nOrphan Content:');
allKeys.forEach(k => {
  if (!slugs.includes(k)) console.log(k);
});
