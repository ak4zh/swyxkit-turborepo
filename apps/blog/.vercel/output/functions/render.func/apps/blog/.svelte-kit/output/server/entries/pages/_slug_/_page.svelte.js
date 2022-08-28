import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component, b as subscribe } from "../../../chunks/index.js";
import { a as SITE_URL, M as MY_TWITTER_HANDLE } from "../../../chunks/siteConfig.js";
import formatDistance from "date-fns/formatDistance/index.js";
import snarkdown from "snarkdown";
import { N as Newsletter } from "../../../chunks/Newsletter.js";
import { p as page } from "../../../chunks/stores.js";
const Reactions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { reactions } = $$props;
  let { issueUrl } = $$props;
  let emojiMap = {
    "+1": "\u{1F44D}",
    "-1": "\u{1F44E}",
    laugh: "\u{1F606}",
    hooray: "\u{1F389}",
    confused: "\u{1F615}",
    heart: "\u2764\uFE0F",
    rocket: "\u{1F680}",
    eyes: "\u{1F440}"
  };
  if ($$props.reactions === void 0 && $$bindings.reactions && reactions !== void 0)
    $$bindings.reactions(reactions);
  if ($$props.issueUrl === void 0 && $$bindings.issueUrl && issueUrl !== void 0)
    $$bindings.issueUrl(issueUrl);
  return `<a${add_attribute("href", `${issueUrl}#issuecomment-new`, 0)} class="${"no-underline"}">${each(Object.keys(reactions), (reaction) => {
    return `${Object.keys(emojiMap).includes(reaction) && reactions[reaction] > 0 ? `<span class="${"reaction-button"}"><span class="${"space-x-1 rounded border-blue-800 p-2"}"><span class="${"reaction-button-emoji"}">${escape(emojiMap[reaction])}</span>
					<span class="${"reaction-button-count"}">${escape(reactions[reaction])}</span></span>
			</span>` : ``}`;
  })}</a>`;
});
function _sanitize(node) {
  if (node.nodeType === 3)
    return;
  if (node.nodeType !== 1 || /^(script|iframe|object|embed|svg)$/i.test(node.tagName)) {
    return node.remove();
  }
  for (let i = node.attributes.length; i--; ) {
    const name = node.attributes[i].name;
    if (!/^(class|id|name|href|src|alt|align|valign)$/i.test(name)) {
      node.attributes.removeNamedItem(name);
    }
  }
  for (let i = node.childNodes.length; i--; )
    _sanitize(node.childNodes[i]);
}
const Comment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comment } = $$props;
  const doc = new DOMParser().parseFromString(snarkdownEnhanced(comment.body.replace(/\r\n/g, "\n")), "text/html");
  doc.normalize();
  _sanitize(doc.body);
  let body = doc.body.innerHTML;
  function snarkdownEnhanced(markdown) {
    return markdown.split(/(?:\r?\n){2,}/).map((l) => [" ", "	", "#", "-", "*", ">"].some((char) => l.startsWith(char)) ? snarkdown(l) : `<p>${snarkdown(l)}</p>`).join("\n");
  }
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  return `<div class="${"mb-4 border-y-2 px-2 pt-4 dark:border-blue-700 sm:border-x sm:border-blue-200 sm:border-opacity-40 sm:px-4"}"><div class="${"flex flex-row md-10"}"><img class="${"w-12 h-12 border-2 border-gray-300 rounded-full"}"${add_attribute("alt", `avatar of commenter ${comment.user.login}`, 0)}${add_attribute("src", comment.user.avatar_url, 0)}>
		<div class="${"flex-col mt-1"}"><div class="${[
    "flex items-center flex-1 px-4 font-bold leading-tight",
    comment.author_association === "OWNER" ? "text-green-600" : ""
  ].join(" ").trim()}">${escape(comment.user.login)}
				<span class="${"ml-2 text-xs font-normal text-gray-500"}"><a${add_attribute("href", comment.html_url, 0)} class="${"no-underline"}" rel="${"external"}" target="${"_blank"}"><time>${escape(formatDistance(new Date(comment.created_at), new Date()))} ago</time></a></span></div>
			<div class="${"flex-1 px-2 ml-2"}"><!-- HTML_TAG_START -->${body}<!-- HTML_TAG_END --></div>
			<div class="${"flex-1 px-2 ml-2 mb-4"}">${validate_component(Reactions, "Reactions").$$render(
    $$result,
    {
      issueUrl: comment.issue_url,
      reactions: comment.reactions
    },
    {},
    {}
  )}</div></div></div></div>`;
});
const Comments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ghMetadata } = $$props;
  let data = [];
  if ($$props.ghMetadata === void 0 && $$bindings.ghMetadata && ghMetadata !== void 0)
    $$bindings.ghMetadata(ghMetadata);
  return `<div class="${"prose mb-8 w-full dark:prose-invert"}">${each(data, (comment) => {
    return `${validate_component(Comment, "Comment").$$render($$result, { comment }, {}, {})}`;
  })}</div>
<a${add_attribute("href", `${ghMetadata.issueUrl}#issuecomment-new`, 0)} rel="${"external"}" target="${"_blank"}" class="${"flex justify-center border-y border-blue-700 p-4 no-underline hover:text-yellow-700 dark:hover:text-yellow-200 sm:inline sm:rounded-xl sm:border-x"}">Leave a new comment!
</a>


`;
});
const prismShadesOfPurple_min = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let json;
  let canonical;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  json = data.json;
  canonical = SITE_URL + $page.url.pathname;
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(json.title)}</title>`, ""}<meta name="${"description"}" content="${"swyxkit blog"}" data-svelte="svelte-1634d4k"><link rel="${"canonical"}"${add_attribute("href", canonical, 0)} data-svelte="svelte-1634d4k"><meta property="${"og:url"}"${add_attribute("content", canonical, 0)} data-svelte="svelte-1634d4k"><meta property="${"og:type"}" content="${"article"}" data-svelte="svelte-1634d4k"><meta property="${"og:title"}"${add_attribute("content", json.title, 0)} data-svelte="svelte-1634d4k"><meta name="${"Description"}"${add_attribute("content", json.description, 0)} data-svelte="svelte-1634d4k"><meta property="${"og:description"}"${add_attribute("content", json.description, 0)} data-svelte="svelte-1634d4k"><meta name="${"twitter:card"}"${add_attribute("content", json.image ? "summary_large_image" : "summary", 0)} data-svelte="svelte-1634d4k"><meta name="${"twitter:creator"}"${add_attribute("content", "@" + MY_TWITTER_HANDLE, 0)} data-svelte="svelte-1634d4k"><meta name="${"twitter:title"}"${add_attribute("content", json.title, 0)} data-svelte="svelte-1634d4k"><meta name="${"twitter:description"}"${add_attribute("content", json.description, 0)} data-svelte="svelte-1634d4k">${json.image ? `<meta property="${"og:image"}"${add_attribute("content", json.image, 0)} data-svelte="svelte-1634d4k">
		<meta name="${"twitter:image"}"${add_attribute("content", json.image, 0)} data-svelte="svelte-1634d4k">` : ``}`, ""}

<article class="${"mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center px-4 sm:px-8"}"><h1 class="${"mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl "}">${escape(json.title)}</h1>
	<div class="${"bg mt-2 flex w-full justify-between sm:flex-col sm:items-start md:flex-row md:items-center"}"><p class="${"flex items-center text-sm text-gray-700 dark:text-gray-300"}">swyx</p>
		<p class="${"min-w-32 flex items-center text-sm text-gray-600 dark:text-gray-400 md:mt-0"}"><a${add_attribute("href", json.ghMetadata.issueUrl, 0)} rel="${"external"}" class="${"no-underline"}" target="${"_blank"}"><span class="${"mr-4 font-mono text-xs text-gray-700 text-opacity-70 dark:text-gray-300"}">${escape(json.ghMetadata.reactions.total_count)} reactions</span></a>
			${escape(new Date(json.date).toISOString().slice(0, 10))}</p></div>
	<div class="${"-mx-4 my-2 flex h-1 w-[100vw] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 sm:mx-0 sm:w-full"}"></div>

	<div class="${"prose mt-16 mb-32 w-full max-w-none dark:prose-invert"}"><!-- HTML_TAG_START -->${json.content}<!-- HTML_TAG_END --></div></article>
<div class="${"mx-auto max-w-2xl"}"><div class="${"prose mb-12 border-t border-b border-blue-800 p-4 dark:prose-invert"}">${json.ghMetadata.reactions.total_count > 0 ? `Reactions: ${validate_component(Reactions, "Reactions").$$render(
    $$result,
    {
      issueUrl: json.ghMetadata.issueUrl,
      reactions: json.ghMetadata.reactions
    },
    {},
    {}
  )}` : `<a${add_attribute("href", json.ghMetadata.issueUrl, 0)}>Leave a reaction </a>
			if you liked this post! \u{1F9E1}`}</div>
	<div class="${"mb-8"}">${validate_component(Comments, "Comments").$$render($$result, { ghMetadata: json.ghMetadata }, {}, {})}</div>

	${validate_component(Newsletter, "Newsletter").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
