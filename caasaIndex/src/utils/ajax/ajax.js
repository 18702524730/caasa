import Vue from 'vue';
import axios from 'axios';
import VueCookie from 'vue-cookie'
import VueAxios from 'vue-axios';
import Qs from 'qs';
import {Loading} from 'element-ui'
require('es6-promise').polyfill();
Vue.use(VueAxios, axios);

// 导入封装的回调函数
import {
	cbs,
	gbs,
	CONFIG
} from 'config/';
window.CONFIG = CONFIG;
// 动态设置本地和线上接口域名
// Vue.axios.defaults.baseURL = CONFIG.rootUrl;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 15000;

axios.interceptors.request.use(config => {
	return config;
}, err => {
	console.log(res);
	return Promise.resolve(err);
});
// 拦截未登录
axios.interceptors.response.use(response => {
//   var status = response.status;
//   var data = response.data;
  console.log(response);
  return response;
  
}, function (error) {
	console.log("-------");
	console.log(error);
	//var data = error.response.data;
	
    return Promise.reject(error);
});

/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * @param  {boolean}   tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，都需要
 */



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
function showLoaing(){
　　if( loadingCount==0){
　　　　start();
　　};
　　loadingCount++
};
function hideLoading(){
　　loadingCount--;
　　if(loadingCount==0){
		end()
　　}
}
export const formdata= (
	type,
	path,
	data,
	fn,
	errFn
	= {}) => {
	showLoaing();
	axios({
		method: type,
		url: CONFIG.indexUrl + path,
		data: data,
		headers: {
			"Content-Type": "multipart/form-data" 		//formdata
		},
	}).then((data) => {
		hideLoading();
		if(data.success==true){
			fn(data);
		}else{
			fn(data);
		};
	}).catch(error => {
		//超时之后在这里捕抓错误信息.
		hideLoading();
		if (error.response) {
			console.log('error.response')
			console.log(error.response);
			alert(error.response.data.msg)
		} else if (error.request) {
			console.log(error.request)
			console.log('error.request')
			// if(error.request.readyState == 4 && error.request.status == 0){
			// 	//这里重新请求
			// }
		} else {
			console.log('Error', error.message);
		}
		console.log(error.config);
	});
}
export const  request= (
	type,
	path,
	data,
	fn,
	errFn
	= {}) => {
	showLoaing();
	axios({
		method: type,
		url: CONFIG.indexUrl + path,
		data: data,
		// data: Qs.stringify(data),
		headers: {
			'Content-Type': 'application/json',		//sjon
			// 'Content-Type': 'application/x-www-form-urlencoded',	//键值对
		},
	}).then((data) => {
		hideLoading();
		if(data.success==true){
			fn(data);
		}else{
			fn(data);
		};
	}).catch(error => {
		hideLoading();
		//超时之后在这里捕抓错误信息.
		if (error.response) {
			console.log('error.response')
			console.log(error.response);
			alert(error.response.data.msg)
		} else if (error.request) {
			console.log(error.request)
			console.log('error.request')
			// if(error.request.readyState == 4 && error.request.status == 0){
			// 	//这里重新请求
			// }
		} else {
			console.log('Error', error.message);
		}
		console.log(error.config);
	});

	return
};
