import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkExternalLinks from "remark-external-links";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: {
    blog: "/src/routes/enseignements/_post.svelte",
  },
  smartypants: {
    dashes: "oldschool",
    ellipses: true,
  },

  remarkPlugins: [
    // adds target _blank to external links and defines an appropriate
    // link type of 'nofollow,noopener,noreferrer'
    // [
    remarkExternalLinks,
    //   { content: { type: "text", value: "(opens in a new window)" } },
    // ],
  ],
  rehypePlugins: [
    rehypeSlug, 
    rehypeAutolinkHeadings],
});

export default config;
