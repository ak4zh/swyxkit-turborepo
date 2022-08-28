import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1rahwcp,p.svelte-1rahwcp{margin:0 auto}h1.svelte-1rahwcp{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-1rahwcp{margin:1em auto}@media(min-width: 480px){h1.svelte-1rahwcp{font-size:4em}}",
  map: null
};
function displayPathname(str) {
  return decodeURIComponent(str).replaceAll("-", " ");
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const offline = typeof navigator !== "undefined" && navigator.onLine === false;
  let message = offline ? "Find the internet and try again" : (_a = $page.error) == null ? void 0 : _a.message;
  let title = offline ? "Offline" : $page.status;
  if ($page.status === 404) {
    title = "Page not found :(";
    message = "Sorry! If you think this URL is broken, please let me know!";
  }
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}

<section class="${"container prose mx-auto py-12 dark:prose-invert"}"><h1 class="${"svelte-1rahwcp"}">${escape($page.status)}: ${escape(title)}</h1>

	${$page.status === 404 ? `<p class="${" svelte-1rahwcp"}">There is no post at the slug <code>${escape($page.url.pathname)}</code>.</p>
		<p class="${"svelte-1rahwcp"}"><a${add_attribute("href", "/blog/?filter=" + $page.url.pathname.slice(1), 0)}>Try searching for &quot;${escape(displayPathname($page.url.pathname.slice(1)))}&quot; here!</a></p>
		<p class="${" svelte-1rahwcp"}">If you believe this was a bug, please let me know!</p>` : `<p class="${"font-mono svelte-1rahwcp"}">${escape(message)}</p>`}
	${``}
</section>`;
});
export {
  Error as default
};
