import { e as error } from "../../../chunks/index2.js";
import { R as REPO_URL } from "../../../chunks/siteConfig.js";
const hydrate = true;
async function load({ params, fetch, setHeaders }) {
  const slug = params.slug;
  let res = null;
  res = await fetch(`/api/blog/${slug}.json`);
  if (res.status > 400) {
    throw error(res.status, await res.text());
  }
  setHeaders({
    "cache-control": "public, max-age=60"
  });
  return {
    json: await res.json(),
    slug,
    REPO_URL
  };
}
export {
  hydrate,
  load
};
