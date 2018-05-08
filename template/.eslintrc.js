module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		"cypress/globals": true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'plugin:vue/essential'
	],
	plugins: [
		'vue',
		"cypress"
	],
	rules: {}
};