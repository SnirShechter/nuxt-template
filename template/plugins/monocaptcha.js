import Vue from 'vue';
import MonoCaptcha from 'monuxt-captcha';

const userOptions = {

};

export default function(){
 
 Vue.use(MonoCaptcha,userOptions);
}