const en = require('../lang/en.sample.json');

module.exports = {
	detectBrowserLanguage: true,
	useRedirectCookie: true,
	loadLanguagesAsync: true,
	defaultLocale: 'en',
	langDir: 'lang/',
	locales: [
		{
			code: 'en',
			iso: 'en',
			name: 'English',
			langFile: 'en.sample.json'
		}
	],
	vueI18n: {
		fallbackLocale: 'en',
		messages: {
			en
		}
	}
};