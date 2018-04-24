import Vue from 'vue';
import monoaxios from 'monuxt-axios';
import {captcha} from 'monuxt-captcha';
import {error} from 'monuxt-notify';

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
	options.errorFunction = error.push;
	
	Vue.use(monoaxios, context, options)
}