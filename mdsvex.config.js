import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],

	rehypePlugins: [],
  
	layout: {
		_: "./src/routes/blog/_blog.svelte",
		blog: "./src/routes/blog/_blog.svelte",
		// docs: "./src/routes/docs/_docs.svelte",
		// shop: "./src/routes/shop/_shop.svelte",
	}
});

export default config;
