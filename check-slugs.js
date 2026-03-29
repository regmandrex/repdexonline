
const { posts } = require('./src/lib/posts');
const { aiToolsReviewsContent } = require('./src/lib/content/ai-tools-reviews');
const { chatgptTipsContent } = require('./src/lib/content/chatgpt-tips');
const { contentCreationContent } = require('./src/lib/content/content-creation');
const { techReviewsContent } = require('./src/lib/content/tech-reviews');
const { productivityContent } = require('./src/lib/content/productivity');
const { aiWritingContent } = require('./src/lib/content/ai-writing');

const allContent = {
  ...aiToolsReviewsContent,
  ...chatgptTipsContent,
  ...contentCreationContent,
  ...techReviewsContent,
  ...productivityContent,
  ...aiWritingContent,
};

const missing = [];
posts.forEach(post => {
  if (!allContent[post.slug]) {
    missing.push(post.slug);
  }
});

if (missing.length > 0) {
  console.log('MISSING CONTENT FOR SLUGS:');
  console.log(missing.join('\n'));
} else {
  console.log('ALL SLUGS HAVE CONTENT.');
}
