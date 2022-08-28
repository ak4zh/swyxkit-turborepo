import RSS from "rss";
import { S as SITE_TITLE, a as SITE_URL } from "../../../chunks/siteConfig.js";
import { l as listContent } from "../../../chunks/content.js";
import "mdsvex";
import "gray-matter";
import "node-fetch";
import "parse-link-header";
import "@sindresorhus/slugify";
import "rehype-stringify";
import "rehype-slug";
import "rehype-autolink-headings";
async function GET({ setHeaders }) {
  const feed = new RSS({
    title: SITE_TITLE + " RSS Feed",
    site_url: SITE_URL,
    feed_url: SITE_URL + "/api/rss.xml"
  });
  const allBlogs = await listContent();
  allBlogs.forEach((post) => {
    feed.item({
      title: post.title,
      url: SITE_URL + `/${post.slug}`,
      date: post.date,
      description: post.description
    });
  });
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Cache-Control": `max-age=0, s-maxage=${600}`,
      "Content-Type": "application/rss+xml"
    }
  });
}
export {
  GET
};
