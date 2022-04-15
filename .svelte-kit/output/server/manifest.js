export const manifest = {
	appDir: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png",".css":"text/css",".json":"application/json"},
	_: {
		entry: {"file":"start-6d6794fe.js","js":["start-6d6794fe.js","chunks/index-434221ed.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "speaking.json",
				pattern: /^\/speaking\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/speaking/index.json.js')
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "speaking",
				pattern: /^\/speaking\/?$/,
				names: [],
				types: [],
				path: "/speaking",
				shadow: null,
				a: [0,4,5],
				b: [1]
			},
			{
				type: 'page',
				id: "uses",
				pattern: /^\/uses\/?$/,
				names: [],
				types: [],
				path: "/uses",
				shadow: () => import('./entries/endpoints/uses.js'),
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "work",
				pattern: /^\/work\/?$/,
				names: [],
				types: [],
				path: "/work",
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
