export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo-192.png","logo-512.png","manifest.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.1af6b46f.js","app":"_app/immutable/entry/app.4318ed8a.js","imports":["_app/immutable/entry/start.1af6b46f.js","_app/immutable/chunks/index.9e113df3.js","_app/immutable/chunks/singletons.254110ff.js","_app/immutable/entry/app.4318ed8a.js","_app/immutable/chunks/index.9e113df3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set(["/","/about","/speaking","/talks","/talks/fresh-style","/uses","/uses/__data.json","/work"]);
