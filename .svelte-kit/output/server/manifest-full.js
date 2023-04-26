export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png",".css":"text/css",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.a84130f1.js","app":"_app/immutable/entry/app.9ec4a029.js","imports":["_app/immutable/entry/start.a84130f1.js","_app/immutable/chunks/index.5429c538.js","_app/immutable/chunks/singletons.856d0d5c.js","_app/immutable/entry/app.9ec4a029.js","_app/immutable/chunks/index.5429c538.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/speaking",
				pattern: /^\/speaking\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/uses",
				pattern: /^\/uses\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
