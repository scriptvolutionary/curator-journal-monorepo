/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./apps/journal/src/**/*.{html,js,jsx,ts,tsx}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {}
	},
	plugins: [require('tw-elements/dist/plugin'), require('@tailwindcss/forms')]
}
