import Vue from 'vue';
import monoaxios from 'monuxt-axios';
import {captcha} from 'monuxt-captcha';

const options = {
	axiosDefaults: {
		withCredentials: true
	},
	captcha,
	errorDictType: 'i18n' // or 'object'
};

export default function (context) {
 // Adding the i18n & error manager
	options.i18n = context.app.i18n;
	
	// Add the error function only when not in server
	if(!process.server) options.errorFunction = context.app.$notify.push;
	
	Vue.use(monoaxios, context, options)
}