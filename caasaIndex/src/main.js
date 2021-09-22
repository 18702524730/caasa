import babelpolyfill from 'babel-polyfill'
import Vue from 'vue';
import './assets/css/reset.css';
import './assets/css/common.css';
import './assets/iconfont/iconfont.css';
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/alibabaFont/alibaba-font.css'  //阿里巴巴普惠体
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
import './mock/index.js'
Vue.use(ElementUI);
import animated from 'animate.css'
Vue.use(animated)
Vue.config.productionTip = true;
Vue.config.devtools      = true;

import VueCookie from 'vue-cookie'
Vue.use(VueCookie)
// import * as utils from 'utils/ajax/ajax';
// Vue.prototype.utils = utils;
import router from 'router/';
import 'register/';
import store from 'store/';

import App from './App';
import api from './apis/api.js'






import {Loading} from 'element-ui'
let loading;//loading的实例对象
let loadingCount = 0;
function start(){
　　loading = Loading.service({
　　　　lock:true,
　　　　text:'加载中',
　　　　background:'rgba(0,0,0,0.6)'
　　})
};
function end(){
　　loading.close();
}
Vue.prototype.showLoaing = function (){
　　if( loadingCount==0){
　　　　start();
　　};
　　loadingCount++
};
Vue.prototype.hideLoading = function (){
　　loadingCount--;
　　if(loadingCount==0){
		end()
　　}
}
router.beforeEach((to, from, next) => {    
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})
Vue.prototype.$api=api
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
