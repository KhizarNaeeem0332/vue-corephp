

import Vue from 'vue';


window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.prototype.base_url = "]";
Vue.prototype.$eventBus = new Vue() ;// add this line of code


Vue.component("home-component" , require("./Home.vue"));

const app = new Vue({
    el: '#vue-app'
});
