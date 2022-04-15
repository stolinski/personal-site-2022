export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/speaking/__layout.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/speaking/index.svelte"),
	() => import("../../src/routes/uses.svelte"),
	() => import("../../src/routes/work.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"about": [[0, 3], [1]],
	"speaking": [[0, 2, 5], [1]],
	"uses": [[0, 6], [1], 1],
	"work": [[0, 7], [1]]
};