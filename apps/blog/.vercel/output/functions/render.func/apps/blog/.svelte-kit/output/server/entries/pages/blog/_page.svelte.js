import { c as create_ssr_component, d as add_attribute, e as escape, b as subscribe, f as each, v as validate_component } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { S as SITE_TITLE, P as POST_CATEGORIES } from "../../../chunks/siteConfig.js";
const IndexCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "#" } = $$props;
  let { ghMetadata = null } = $$props;
  let { title = "Untitled post" } = $$props;
  let { stringData = "no date" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ghMetadata === void 0 && $$bindings.ghMetadata && ghMetadata !== void 0)
    $$bindings.ghMetadata(ghMetadata);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.stringData === void 0 && $$bindings.stringData && stringData !== void 0)
    $$bindings.stringData(stringData);
  return `<a sveltekit:prefetch class="${"w-full text-gray-900 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-yellow-100"}"${add_attribute("href", href, 0)}><div class="${"mb-8 w-full"}"><div class="${"flex flex-col justify-between md:flex-row"}"><h4 class="${"mb-2 w-full flex-auto text-lg font-medium md:text-xl"}">${escape(title)}</h4>
			<div class="${"inline-flex flex-1 items-center"}">${ghMetadata && ghMetadata.reactions.total_count ? `<span class="${"mr-2 min-w-[2rem] font-mono text-xs text-gray-700 text-opacity-70 dark:text-gray-300"}">${escape(ghMetadata.reactions.total_count)} \u2665</span>` : ``}
				<p class="${"mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right"}">${escape(stringData)}</p></div></div>
		<p class="${"text-gray-600 dark:text-gray-400"}">${slots.default ? slots.default({}) : ``}</p></div></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let list;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  function searchParamToArray(key) {
    return ($page.url.searchParams.get(key) || "").split(",").filter((e) => e);
  }
  let selectedCategories = searchParamToArray("show");
  let search = $page.url.searchParams.get("filter") || "";
  let inputEl;
  let isTruncated = (items == null ? void 0 : items.length) > 20;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  items = data.items;
  list = items.filter((item) => {
    if (selectedCategories.length) {
      return selectedCategories.map((element) => {
        return element.toLowerCase();
      }).includes(item.category.toLowerCase());
    }
    return true;
  }).filter((item) => {
    if (search) {
      return item.title.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  }).slice(0, isTruncated ? 2 : items.length);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(SITE_TITLE)} Blog Index</title>`, ""}<meta name="${"description"}"${add_attribute("content", `Latest ${SITE_TITLE} posts`, 0)} data-svelte="svelte-pgcn0t">`, ""}



<section class="${"mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center px-4 sm:px-8"}"><h1 class="${"mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl"}">Blog
	</h1>
	<p class="${"mb-4 text-gray-600 dark:text-gray-400"}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sunt reprehenderit alias rerum
		dolor impedit. In total, I&#39;ve written ${escape(items.length)} articles on my blog. Use the search below to
		filter by title.
	</p>
	<div class="${"relative mb-4 w-full"}"><input aria-label="${"Search articles"}" type="${"text"}" placeholder="${"Hit / to search"}" class="${"block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"}"${add_attribute("value", search, 0)}${add_attribute("this", inputEl, 0)}><svg class="${"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
	<div class="${"mb-12 mt-2 flex items-center "}"><div class="${"mr-2 text-gray-900 dark:text-gray-400"}">Filter:</div>
		<div class="${"grid grid-cols-3 rounded-md shadow-sm sm:grid-cols-6"}">${each(POST_CATEGORIES, (availableCategory) => {
    return `<div><input id="${"category-" + escape(availableCategory, true)}" class="${"peer sr-only"}" type="${"checkbox"}"${add_attribute("value", availableCategory, 0)}${~selectedCategories.indexOf(availableCategory) ? add_attribute("checked", true, 1) : ""}>
					<label for="${"category-" + escape(availableCategory, true)}" class="${"inline-flex justify-between items-center px-4 py-2 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"}">${escape(availableCategory)}</label>
				</div>`;
  })}</div></div>

	${!search ? `<h3 class="${"mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl"}">Most Popular
		</h3>
		${validate_component(IndexCard, "IndexCard").$$render(
    $$result,
    {
      href: "/foo",
      title: "Hardcoded Blogpost # 1",
      stringData: "106,255 views"
    },
    {},
    {
      default: () => {
        return `Just a hardcorded blogpost or you can use the metadata up to you
		`;
      }
    }
  )}
		${validate_component(IndexCard, "IndexCard").$$render(
    $$result,
    {
      href: "/welcome",
      title: "Welcome to Swyxkit",
      stringData: "106,255 views"
    },
    {},
    {
      default: () => {
        return `Just a hardcorded blogpost or you can use the metadata up to you
		`;
      }
    }
  )}
		${validate_component(IndexCard, "IndexCard").$$render(
    $$result,
    {
      href: "/moo",
      title: "Hardcoded Blogpost # 3",
      stringData: "106,255 views"
    },
    {},
    {
      default: () => {
        return `Just a hardcorded blogpost or you can use the metadata up to you
		`;
      }
    }
  )}

		<h3 class="${"mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl"}">All Posts
		</h3>` : ``}

	${list.length ? `<ul class="${""}">${each(list, (item) => {
    return `<li class="${"mb-8 text-lg"}">
					${validate_component(IndexCard, "IndexCard").$$render(
      $$result,
      {
        href: item.slug,
        title: item.title,
        stringData: new Date(item.date).toISOString().slice(0, 10),
        ghMetadata: item.ghMetadata
      },
      {},
      {
        default: () => {
          return `${escape(item.description)}
					`;
        }
      }
    )}
				</li>`;
  })}</ul>
		${isTruncated ? `<div class="${"flex justify-center"}"><button class="${"inline-block rounded bg-blue-100 p-4 text-lg font-bold tracking-tight text-black hover:text-yellow-900 dark:bg-blue-900 dark:text-white hover:dark:text-yellow-200 md:text-2xl"}">Load More Posts...
				</button></div>` : ``}` : `${search ? `<div class="${"prose dark:prose-invert"}">No posts found for
			<code>${escape(search)}</code>.
		</div>
		<button class="${"p-2 bg-slate-500"}">Clear your search</button>` : `<div class="${"prose dark:prose-invert"}">No blogposts found!</div>`}`}</section>`;
});
export {
  Page as default
};
