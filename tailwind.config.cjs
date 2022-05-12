const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

  darkMode: 'class',

	theme: {
		extend: {},
    fontFamily: {
      'sans': ['Custom Font', ...defaultTheme.fontFamily.sans],
      'serif': ['Custom Font', ...defaultTheme.fontFamily.serif],
      'mono': ['Custom Font', ...defaultTheme.fontFamily.mono]
    },
	},

	plugins: [
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;