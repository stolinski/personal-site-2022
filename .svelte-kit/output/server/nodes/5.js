import * as server from '../entries/pages/uses/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/uses/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/uses/+page.server.js";
export const imports = ["_app/immutable/entry/uses-page.svelte.45d59318.js","_app/immutable/chunks/index.5429c538.js","_app/immutable/chunks/Fade.75c9041b.js"];
export const stylesheets = [];
export const fonts = [];
