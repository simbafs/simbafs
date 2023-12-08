/** @type {import("prettier").Config} */
module.exports = {
	// plugins: [require.resolve('prettier-plugin-astro')],
	// overrides: [
	// 	{
	// 		files: '*.astro',
	// 		options: {
	// 			parser: 'astro',
	// 		},
	// 	},
	// ],
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	// pluginSearchDirs: ["."],
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: false,
	singleQuote: true,
	arrowParens: 'avoid',
}
