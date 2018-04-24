import Vue from 'vue';
import notify from 'monuxt-notify';

const userOptions = {

};

export default function (context) {
	Vue.use(notify, context, userOptions)
}
