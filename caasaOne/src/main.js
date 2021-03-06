import babelpolyfill from 'babel-polyfill'
import Vue from 'vue';
import './assets/css/reset.css';
import './assets/css/common.css';
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.use(ElementUI);

Vue.config.productionTip = true;
Vue.config.devtools      = true;

import router from 'router/';
import store from 'store/';
import 'register/';


import App from './App';

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
