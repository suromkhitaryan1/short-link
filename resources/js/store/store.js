/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Author: Anushavan Mesropyan
  Author email: anuashavan@gmail.com
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
   axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

import moduleShortLink from './modules/shortLink/moduleShortLink'


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        moduleShortLink,

    },
  //  strict: process.env.NODE_ENV !== 'production'
})
