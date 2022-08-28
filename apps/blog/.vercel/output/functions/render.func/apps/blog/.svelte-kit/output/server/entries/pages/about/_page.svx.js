import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const Mdsvexlayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<article class="${"container prose mx-auto mb-12 hover:prose-a:text-blue-300 prose-ul:list-disc dark:prose-invert "}">${slots.default ? slots.default({}) : ``}</article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvexlayout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props), {}, {
    default: () => {
      return `<h1 id="${"about-swyxkit"}"><a href="${"#about-swyxkit"}">About swyxkit!</a></h1>
<p>This is swyx\u2019s preferred starter for Svelte projects:</p>
<ul><li>SvelteKit</li>
<li>Tailwind 3 + Tailwind Typography</li>
<li>Netlify</li>
<li>GitHub Issues as CMS</li></ul>
<p>Feel free to rip out these opinions as you see fit of course.</p>
<h2 id="${"live-demo"}"><a href="${"#live-demo"}">Live Demo</a></h2>
<p>See <a href="${"https://swyxkit.netlify.app/"}" rel="${"nofollow"}">https://swyxkit.netlify.app/</a></p>
<p><img src="${"https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png"}" alt="${"screenshot of swyxkit in action"}"></p>
<p><img src="${"https://user-images.githubusercontent.com/6764957/147861337-d40a1798-e7ff-40e1-8dd8-ba1350fd3784.png"}" alt="${"screenshot of swyxkit in action"}"></p>
<h2 id="${"key-features-and-design-considerations"}"><a href="${"#key-features-and-design-considerations"}">Key Features and Design Considerations:</a></h2>
<ul><li>Features<ul><li>Dark mode</li>
<li>Github-issues-driven Blog with blog index<ul><li>Blog content pulled from the GitHub Issues API - make to set your <code>GH_USER_REPO</code> variable!</li>
<li>Comment and Reaction system from Github Issues</li>
<li>Consumes markdown/MDSveX<ul><li>with syntax highlighting</li></ul></li></ul></li>
<li>RSS (at <code>/rss.xml</code>) with caching</li></ul></li>
<li>Performance touches<ul><li>no <code>hydrate</code> on about and blog pages<ul><li><em>update: temporarily disabled while we figure out mobile nav without hydration</em></li></ul></li>
<li>set <code>maxage</code> to 1 minute to cache (consider making it 1-7 days on older posts)<ul><li>for API endpoints as well as pages</li></ul></li>
<li>Security headers in <code>netlify.toml</code><ul><li><a href="${"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options"}" rel="${"nofollow"}">X-Content-Type</a></li>
<li><a href="${"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"}" rel="${"nofollow"}">X-Frame-Options</a></li>
<li><a href="${"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection"}" rel="${"nofollow"}">X-XSS-Protection</a></li>
<li>SvelteKit does not yet support <a href="${"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"}" rel="${"nofollow"}">CSP</a> - <a href="${"https://github.com/sveltejs/kit/pull/2394/files"}" rel="${"nofollow"}">PR pending here</a></li></ul></li>
<li><a href="${"https://app.netlify.com/sites/swyxkit/deploys"}" rel="${"nofollow"}">Builds and Deploys in ~40 seconds on Netlify</a></li></ul></li>
<li>Minor design/UX touches<ul><li>Top level blog URLs (<code>/myblog</code> instead of <code>/blog/myblog</code> - sliiightly better SEO/url design)</li>
<li>Blog index truncates at 20 posts to make sure to render quickly</li>
<li><a href="${"https://github.com/developit/snarkdown/issues/70"}" rel="${"nofollow"}">Comments are rendered and sanitized</a></li>
<li>Error page (try going to URL that doesnt exist)<ul><li>including nice error when github api rate limit exceeded</li></ul></li>
<li>Navlink hover effect</li>
<li><a href="${"https://swyxkit.netlify.app/mobileresponsive-styling-with-tailwind"}" rel="${"nofollow"}">Mobile/Responsive styling</a></li>
<li>Mobile menu with animation</li>
<li>Og:image and meta tags for social unfurls (not automatically generated though)</li>
<li>Accessibility<ul><li>SVG Icons <a href="${"https://github.com/sw-yx/spark-joy/blob/master/README.md#general--misc"}" rel="${"nofollow"}">https://github.com/sw-yx/spark-joy/blob/master/README.md#general\u2014misc</a></li>
<li><a href="${"https://web.dev/tap-targets/?utm_source=lighthouse&utm_medium=lr"}" rel="${"nofollow"}">Tap targets</a></li></ul></li>
<li>Custom scrollbar <a href="${"https://css-tricks.com/strut-your-stuff-with-a-custom-scrollbar/"}" rel="${"nofollow"}">https://css-tricks.com/strut-your-stuff-with-a-custom-scrollbar/</a></li>
<li>Defensive CSS touches <a href="${"https://ishadeed.com/article/defensive-css"}" rel="${"nofollow"}">https://ishadeed.com/article/defensive-css</a></li></ul></li></ul>
<blockquote><p>\u26A0\uFE0F known issue - syntax highlighting of mdsvex currently adds extra <code>@html</code> for no reason. <a href="${"https://github.com/pngwn/MDsveX/issues/392"}" rel="${"nofollow"}">We use a workaround</a></p></blockquote>
<h2 id="${"setup"}"><a href="${"#setup"}">Setup</a></h2>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">npx degit https://github.com/sw-yx/swyxkit
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GH_TOKEN</span><span class="token operator">=</span>your_gh_token_here <span class="token comment"># can skip if just trying out this repo casually</span>
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run start</code>`}<!-- HTML_TAG_END --></pre>
<p>You should be able to deploy this project straight to Netlify as is, just <a href="${"https://app.netlify.com/sites/swyxkit/deploys/"}" rel="${"nofollow"}">like this project is</a>.</p>
<p>Before deploying, remember to configure <code>/lib/siteConfig.js</code> - just some hardcoded vars i want you to remember to configure.</p>
<p>This blog uses GitHub as a CMS - if you are doing any serious development at all, you should give <code>process.env.GH_TOKEN</code> to raise rate limit from 60 to 5000. Just make a really basic personal access token, should be enough.
<a href="${"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting"}" rel="${"nofollow"}">https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting</a></p>
<p>When deploying, don\u2019t forget to set it in Netlify: <a href="${"https://app.netlify.com/sites/YOUR_SITE/settings/deploys#environment"}" rel="${"nofollow"}">https://app.netlify.com/sites/YOUR_SITE/settings/deploys#environment</a></p>
<h2 id="${"further-reading"}"><a href="${"#further-reading"}">Further Reading</a></h2>
<p>You can read:</p>
<ul><li><a href="${"https://www.swyx.io/svelte-why/"}" rel="${"nofollow"}">Why I Enjoy Svelte</a>, <a href="${"https://www.swyx.io/svelte-sites-react-apps/"}" rel="${"nofollow"}">Svelte for Sites, React for Apps</a></li>
<li><a href="${"https://www.swyx.io/why-tailwind/"}" rel="${"nofollow"}">Why Tailwind CSS</a></li>
<li><a href="${"https://dev.to/swyx/how-to-set-up-svelte-with-tailwind-css-4fg5"}" rel="${"nofollow"}">How to Setup Svelte with Tailwind</a></li></ul>
<h2 id="${"acknowledgements"}"><a href="${"#acknowledgements"}">Acknowledgements</a></h2>
<ul><li>Design from Lee Robinson: <a href="${"https://github.com/leerob/leerob.io/"}" rel="${"nofollow"}">https://github.com/leerob/leerob.io/</a></li>
<li>MDSvex from Pngwn is amazing <a href="${"https://mdsvex.pngwn.io/docs#layout"}" rel="${"nofollow"}">https://mdsvex.pngwn.io/docs#layout</a></li>
<li>Other people\u2019s code I borrowed from<ul><li><a href="${"https://github.com/mvasigh/sveltekit-mdsvex-blog"}" rel="${"nofollow"}">https://github.com/mvasigh/sveltekit-mdsvex-blog</a></li>
<li><a href="${"https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/%5Blist%5D/rss.js"}" rel="${"nofollow"}">https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/%5Blist%5D/rss.js</a></li>
<li>RSS<ul><li><a href="${"https://scottspence.com/posts/make-an-rss-feed-with-sveltekit"}" rel="${"nofollow"}">https://scottspence.com/posts/make-an-rss-feed-with-sveltekit</a></li>
<li><a href="${"https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit"}" rel="${"nofollow"}">https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit</a></li></ul></li></ul></li>
<li>Find more sveltekit projects at <a href="${"https://github.com/janosh/awesome-svelte-kit"}" rel="${"nofollow"}">https://github.com/janosh/awesome-svelte-kit</a></li></ul>
<h2 id="${"todos"}"><a href="${"#todos"}">Todos</a></h2>
<ul><li>implement etag header for github api</li>
<li>store results in netlify build cache</li>
<li>separate hydration path for mobile nav</li>
<li>custom components in MDX, and rehype plugins</li></ul>`;
    }
  })}`;
});
export {
  Page as default
};
