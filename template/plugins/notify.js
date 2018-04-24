import Vue from 'vue';
import notify from './errorsmanager/index'; // TODO: change to node_modules path

const userOptions = {

};

export default function (context) {
	Vue.use(notify, context, userOptions)
}
