export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png",".css":"text/css",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.a84130f1.js","app":"_app/immutable/entry/app.9ec4a029.js","imports":["_app/immutable/entry/start.a84130f1.js","_app/immutable/chunks/index.5429c538.js","_app/immutable/chunks/singletons.856d0d5c.js","_app/immutable/entry/app.9ec4a029.js","_app/immutable/chunks/index.5429c538.js"],"stylesheets":[],"fonts":[]},
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
