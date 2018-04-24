import Vue from 'vue';
import VeeValidate from 'vee-validate';

const userOptions = {

};

export default function(context){
 // Adding the i18n
 Object.assign(userOptions,{i18n:context.app.i18n});
 
 Vue.use(VeeValidate, userOptions);
}