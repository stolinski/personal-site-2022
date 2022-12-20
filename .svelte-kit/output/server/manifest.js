export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png",".css":"text/css",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-7904da04.js","imports":["_app/immutable/start-7904da04.js","_app/immutable/chunks/index-7a0d8702.js","_app/immutable/chunks/singletons-bfa2b400.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
