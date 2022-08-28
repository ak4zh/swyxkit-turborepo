import { l as listContent } from "../../../../chunks/content.js";
import "mdsvex";
import "gray-matter";
import "node-fetch";
import "../../../../chunks/siteConfig.js";
import "parse-link-header";
import "@sindresorhus/slugify";
import "rehype-stringify";
import "rehype-slug";
import "rehype-autolink-headings";
async function GET({ setHeaders }) {
  const list = await listContent();
  setHeaders({
    "Cache-Control": `max-age=0, s-maxage=${60}`
  });
  return new Response(JSON.stringify(list), {
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}
export {
  GET
};
