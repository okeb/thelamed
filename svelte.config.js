import preprocess from "svelte-preprocess";
import { windi } from "svelte-windicss-preprocess";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
  },

  preprocess: [
    mdsvex(mdsvexConfig),
    windi({}),
    preprocess({
    }),
  ],
};

export default config;
