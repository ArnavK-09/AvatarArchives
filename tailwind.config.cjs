/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: "#2b2d31", // For lighter primary color
					DEFAULT: "#5865F2", // Normal primary color
					dark: "#3442d9", // Used for hover, active, etc.
					extra: "#27292c"
				},
			},
		},
	},
	plugins: [require("kutty"), require('@tailwindcss/typography'),],
}
