
import { posts } from "./src/lib/posts";
import { aiToolsReviewsContent } from "./src/lib/content/ai-tools-reviews";
import { chatgptTipsContent } from "./src/lib/content/chatgpt-tips";
import { contentCreationContent } from "./src/lib/content/content-creation";
import { techReviewsContent } from "./src/lib/content/tech-reviews";
import { productivityContent } from "./src/lib/content/productivity";
import { aiWritingContent } from "./src/lib/content/ai-writing";

const allContent = {
  ...aiToolsReviewsContent,
  ...chatgptTipsContent,
  ...contentCreationContent,
  ...techReviewsContent,
  ...productivityContent,
  ...aiWritingContent,
};

const missing = [];
posts.forEach((post) => {
  if (!allContent[post.slug]) {
    missing.push(post.slug);
  }
});

console.log("Total Posts:", posts.length);
console.log("Total Content Keys:", Object.keys(allContent).length);

if (missing.length > 0) {
  console.log("\nMISSING CONTENT FOR SLUGS (" + missing.length + "):");
  console.log(missing.join("\n"));
} else {
  console.log("\nALL SLUGS HAVE CONTENT.");
}
