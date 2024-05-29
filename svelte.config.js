import adapter from "@sveltejs/adapter-cloudflare";
import preprocess from "svelte-preprocess";
import md, { Mode } from "vite-plugin-markdown";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess()],

  kit: {
    adapter: adapter(),
  },
};

export default config;
