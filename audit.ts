import { posts } from './src/lib/posts';
import { aiToolsReviewsContent } from './src/lib/content/ai-tools-reviews';
import { chatgptTipsContent } from './src/lib/content/chatgpt-tips';
import { contentCreationContent } from './src/lib/content/content-creation';
import { techReviewsContent } from './src/lib/content/tech-reviews';
import { productivityContent } from './src/lib/content/productivity';
import { aiWritingContent } from './src/lib/content/ai-writing';

const allContentKeys = new Set([
  ...Object.keys(aiToolsReviewsContent),
  ...Object.keys(chatgptTipsContent),
  ...Object.keys(contentCreationContent),
  ...Object.keys(techReviewsContent),
  ...Object.keys(productivityContent),
  ...Object.keys(aiWritingContent),
]);

console.log('Posts without content:');
posts.forEach(post => {
  if (!allContentKeys.has(post.slug)) {
    console.log(`404: ${post.slug}`);
  }
});

console.log('\nContent without posts:');
allContentKeys.forEach(slug => {
  if (!posts.find(p => p.slug === slug)) {
    console.log(`Missing Post: ${slug}`);
  }
});
