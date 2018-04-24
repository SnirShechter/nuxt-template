const nodeExternals = require('webpack-node-externals');
const i18nOptions = require('./plugins/i18n.js');

const envConfig = {
 default: {
	ga_id: '1',
	site_base_path: '/'
 },
 production: {
	ga_id: '2',
	site_base_path: '/'
 },
 dev: {
	ga_id: '3',
	site_base_path: '/'
 },
 stage: {
	ga_id: '4',
	site_base_path: '/'
 }
};
const envCurrent = envConfig[process.env.NODE_ENV] || envConfig.default;

module.exports = {
 env: {
	config: envCurrent
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
	 href: envCurrent.site_base_path
	},
	script: [
	 {src: envCurrent.site_base_path + 'config/master.js'},
	]
 },
 css: [
	'~/styles/main.scss',
 ],
 router: {
	base: envCurrent.site_base_path
 },
 transition: 'fade',
 loading: {color: '#3B8070'},
 modules: [
	'@nuxtjs/axios',
	['nuxt-i18n', i18nOptions],
	['@nuxtjs/google-analytics', {
	 id: envCurrent.ga_id
	}]
 ],
 plugins: [
	{src:'~/plugins/notify.js',ssr:false},
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
	extend (config, {isDev, isClient,isServer}) {
	 if (isDev && isClient) {
		config.module.rules.push({
		 enforce: 'pre',
		 test: /\.(js|vue)$/,
		 loader: 'eslint-loader',
		 exclude: /(node_modules)/
		})
	 }
	 if(isServer){
		config.externals = [
		 nodeExternals({
			whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^monuxt/] // Whitelists all monuxt packages
		 })
		]
	 }
	}
 }
};
