export const manifest = {
	appDir: "_app",
	assets: new Set(["_redirects","android-chrome-192x192.png","android-chrome-256x256.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","mstile-150x150.png","robots.txt","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".txt":"text/plain",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-4539f942.js","imports":["_app/immutable/start-4539f942.js","_app/immutable/chunks/index-660a2877.js","_app/immutable/chunks/singletons-86fae66e.js","_app/immutable/chunks/index-e4a5a582.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
					id: "",
					pattern: /^\/$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":2},
					endpoint: null
				},
			{
					id: "rss.xml",
					pattern: /^\/rss\.xml$/,
					names: [],
					types: [],
					page: null,
					endpoint: () => import('../output/server/entries/endpoints/rss.xml/_server.js')
				},
			{
					id: "sitemap.xml",
					pattern: /^\/sitemap\.xml$/,
					names: [],
					types: [],
					page: null,
					endpoint: () => import('../output/server/entries/endpoints/sitemap.xml/_server.js')
				},
			{
					id: "about",
					pattern: /^\/about\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":4},
					endpoint: null
				},
			{
					id: "blog",
					pattern: /^\/blog\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":5},
					endpoint: null
				},
			{
					id: "api/listContent.json",
					pattern: /^\/api\/listContent\.json$/,
					names: [],
					types: [],
					page: null,
					endpoint: () => import('../output/server/entries/endpoints/api/listContent.json/_server.js')
				},
			{
					id: "api/blog/[slug].json",
					pattern: /^\/api\/blog\/([^/]+?)\.json$/,
					names: ["slug"],
					types: [null],
					page: null,
					endpoint: () => import('../output/server/entries/endpoints/api/blog/_slug_.json/_server.js')
				},
			{
					id: "[slug]",
					pattern: /^\/([^/]+?)\/?$/,
					names: ["slug"],
					types: [null],
					page: {"layouts":[0],"errors":[1],"leaf":3},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
