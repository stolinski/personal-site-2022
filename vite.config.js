import { sveltekit } from "@sveltejs/kit/vite";
import md, { Mode } from "vite-plugin-markdown";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [md.plugin({ mode: Mode.HTML }), sveltekit()],
};

export default config;
