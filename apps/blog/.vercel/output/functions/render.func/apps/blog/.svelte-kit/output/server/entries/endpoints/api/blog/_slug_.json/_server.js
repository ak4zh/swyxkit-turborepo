import { g as getContent } from "../../../../../chunks/content.js";
import { e as error } from "../../../../../chunks/index2.js";
import "mdsvex";
import "gray-matter";
import "node-fetch";
import "../../../../../chunks/siteConfig.js";
import "parse-link-header";
import "@sindresorhus/slugify";
import "rehype-stringify";
import "rehype-slug";
import "rehype-autolink-headings";
async function GET({ params }) {
  const { slug } = params;
  let data;
  try {
    data = await getContent(slug);
    return new Response(JSON.stringify(data), {
      headers: {
        "Cache-Control": `max-age=0, s-maxage=${60}`
      }
    });
  } catch (err) {
    throw error(404, err.message);
  }
}
export {
  GET
};
