import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
  
	layout: {
		blog: "./src/lib/Blog.svelte",
		// article: "./path/to/article/layout.svelte"
	}
});

export default config;
