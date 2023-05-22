import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.39be7764.js","_app/immutable/chunks/index.9e113df3.js","_app/immutable/chunks/singletons.254110ff.js"];
export const stylesheets = ["_app/immutable/assets/0.65c4b68f.css"];
export const fonts = [];
