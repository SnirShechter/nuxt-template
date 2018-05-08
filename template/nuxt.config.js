const nodeExternals = require('webpack-node-externals');
const i18nOptions = require('./plugins/i18n.js');
const config = require('./config/config.js');


module.exports = {
	env: {
		config: config.env
	},
	axios: {
		browserBaseURL: config.BASE_PATH
	},
	head: {
		title: '{{ name }}',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: '{{escape description }}'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		],
		base: {
			href: config.env.site_base_path
		},
		script: [
			{src: config.env.site_base_path + 'config/master.js'},
		]
	},
	css: [
		'~/styles/main.scss',
	],
	router: {
		base: config.env.site_base_path
	},
	transition: 'fade',
	loading: {color: '#3B8070'},
	modules: [
		'@nuxtjs/axios',
		['nuxt-i18n', i18nOptions],
		['@nuxtjs/google-analytics', {
			id: config.env.ga_id
		}]
	],
	plugins: [
		'~/plugins/notify.js',
		'~/plugins/monoaxios.js',
		{src: '~/plugins/monocaptcha.js', ssr: false},
		'~/plugins/veeValidate.js',
	],
	build: {
		vendor: ['babel-polyfill'],
		babel: {
			presets: [
				['vue-app', {
					useBuiltIns: true,
					targets: {ie: 11, uglify: true}
				}
				]
			]
		},
		extend (webpackConfig, {isDev, isClient, isServer}) {
			if (isDev && isClient) {
				webpackConfig.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			if (isServer) {
				webpackConfig.externals = [
					nodeExternals({
						whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^monuxt/] // Whitelists all monuxt packages
					})
				]
			}
		}
	}
};
