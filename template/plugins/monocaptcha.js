import Vue from 'vue';
import MonoCaptcha from './monocaptcha/index'; // TODO: change path to node_modules

const userOptions = {

};

export default function(){
 
 Vue.use(MonoCaptcha,userOptions);
}