import Vue from 'vue';
import monoaxios from './monoaxios/index'; // TODO: change paths to node_modules
import {captcha} from './monocaptcha/index';// TODO: change paths to node_modules
import {error} from './errorsmanager/index';// TODO: change paths to node_modules

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