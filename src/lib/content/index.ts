import { aiToolsReviewsContent } from "./ai-tools-reviews";
import { chatgptTipsContent } from "./chatgpt-tips";
import { contentCreationContent } from "./content-creation";
import { techReviewsContent } from "./tech-reviews";
import { productivityContent } from "./productivity";
import { aiWritingContent } from "./ai-writing";

const allContent: Record<string, string> = {
  ...aiToolsReviewsContent,
  ...chatgptTipsContent,
  ...contentCreationContent,
  ...techReviewsContent,
  ...productivityContent,
  ...aiWritingContent,
};

export function getPostContent(slug: string): string | undefined {
  return allContent[slug];
}
