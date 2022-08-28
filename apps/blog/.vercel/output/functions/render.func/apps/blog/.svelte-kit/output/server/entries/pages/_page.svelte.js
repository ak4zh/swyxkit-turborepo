import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import { N as Newsletter } from "../../chunks/Newsletter.js";
import { a as SITE_URL, S as SITE_TITLE, c as SITE_DESCRIPTION, D as DEFAULT_OG_IMAGE, M as MY_TWITTER_HANDLE, R as REPO_URL } from "../../chunks/siteConfig.js";
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Untitled post" } = $$props;
  let { href = "#" } = $$props;
  let { stringData } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.stringData === void 0 && $$bindings.stringData && stringData !== void 0)
    $$bindings.stringData(stringData);
  return `<a class="${"w-full transform rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1 transition-all hover:scale-[1.01] md:w-1/3"}"${add_attribute("href", href, 0)}><div class="${"flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-gray-900"}"><div class="${"flex flex-col justify-between md:flex-row"}"><h4 class="${"mb-6 w-full text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg"}">${escape(title)}</h4></div>
		<div class="${"capsize flex items-center text-gray-800 dark:text-gray-200"}">${escape(stringData)}</div></div></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${$$result.head += `${$$result.title = `<title>${escape(SITE_TITLE)}</title>`, ""}<link rel="${"canonical"}"${add_attribute("href", SITE_URL, 0)} data-svelte="svelte-1voan3v"><link rel="${"alternate"}" type="${"application/rss+xml"}"${add_attribute("href", SITE_URL + "/rss.xml", 0)} data-svelte="svelte-1voan3v"><meta property="${"og:url"}"${add_attribute("content", SITE_URL, 0)} data-svelte="svelte-1voan3v"><meta property="${"og:type"}" content="${"article"}" data-svelte="svelte-1voan3v"><meta property="${"og:title"}"${add_attribute("content", SITE_TITLE, 0)} data-svelte="svelte-1voan3v"><meta name="${"Description"}"${add_attribute("content", SITE_DESCRIPTION, 0)} data-svelte="svelte-1voan3v"><meta property="${"og:description"}"${add_attribute("content", SITE_DESCRIPTION, 0)} data-svelte="svelte-1voan3v"><meta property="${"og:image"}"${add_attribute("content", DEFAULT_OG_IMAGE, 0)} data-svelte="svelte-1voan3v"><meta name="${"twitter:card"}" content="${"summary"}" data-svelte="svelte-1voan3v"><meta name="${"twitter:creator"}"${add_attribute("content", "@" + MY_TWITTER_HANDLE, 0)} data-svelte="svelte-1voan3v"><meta name="${"twitter:title"}"${add_attribute("content", SITE_TITLE, 0)} data-svelte="svelte-1voan3v"><meta name="${"twitter:description"}"${add_attribute("content", SITE_DESCRIPTION, 0)} data-svelte="svelte-1voan3v"><meta name="${"twitter:image"}"${add_attribute("content", DEFAULT_OG_IMAGE, 0)} data-svelte="svelte-1voan3v">`, ""}

<div class="${"mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8"}"><div class="${"flex flex-col-reverse items-start sm:flex-row"}"><div class="${"flex flex-col pr-8"}"><h1 class="${"mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl"}">This is

				<span class="${"relative ml-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"}"><span class="${"relative skew-y-3 text-yellow-400"}">${escape(SITE_TITLE)}</span></span>
				!
			</h1>
			<h2 class="${"mb-4 text-gray-700 dark:text-gray-200"}">An opinionated blog starter for <span class="${"font-semibold"}">SvelteKit + Tailwind + Netlify.</span> Refreshed <a href="${"https://github.com/sveltejs/kit/discussions/5774"}">the great SvelteKit redesign of Summer 2022</a></h2>
			<p class="${"mb-16 text-gray-600 dark:text-gray-400"}"><a${add_attribute("href", REPO_URL, 0)}>View source here!</a></p></div>
		</div>

	<section class="${"mb-16 w-full"}"><h3 class="${"mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl"}">Featured Posts
		</h3>
		<div class="${"flex flex-col gap-6 md:flex-row"}">${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Welcome to swyxkit 2022!",
      href: "/welcome",
      stringData: "Jan 2022"
    },
    {},
    {}
  )}
			${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Moving to a GitHub CMS",
      href: "/moving-to-a-github-cms",
      stringData: "Jan 2022"
    },
    {},
    {}
  )}
			${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "HTML Ipsum demo",
      href: "/moo",
      stringData: "Jan 2022"
    },
    {},
    {}
  )}</div>
		<a class="${"mt-8 flex h-6 rounded-lg leading-7 text-gray-600 transition-all dark:text-gray-400 dark:hover:text-gray-200"}" href="${"/blog"}">See latest posts<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"ml-1 h-6 w-6"}"><path stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"}"></path></svg></a></section>
	${validate_component(Newsletter, "Newsletter").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
