/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');
import Vue from 'vue'
import router from './routes/index'
import vuetify from './plugins/vuetify' // path to vuetify export
import store from "./store/store";

import App from './App.vue'


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
