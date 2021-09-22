import Vue from 'vue';
import Router from 'vue-router';
import  {myHome} from 'layout/'
import {admins} from 'views/'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  return originalPush.call(this, location).catch(err => {
    return err
  })
}
Vue.use(Router);
// import {Statisticals,Searchs,CloudPapers,Comcontent,Admins} from 'views/';

// import techAchievements from './techAchievements.js'
// import techRequirements from './techRequirements.js'

let files = require.context('./',false,/\.js$/)
let configRoutes = []
files.keys().forEach(key=>{
	if(key=='./index.js'){
		return
	}
	configRoutes = configRoutes.concat(files(key).default)
})
let results = configRoutes.filter(item=>{
	if(item){
		return item
	}
})
results.sort(function(a,b){
	return a.sort-b.sort
})
console.log(results)
export default new Router({
	routes: [
		{
			path     : '/',
			meta:{
				name: '首页'
			},
			hidden   : true,
			redirect:'/page',
		},
		{
			path: '/page',
			name: 'page',
			meta:{
				name:'首页'
			},
			component:myHome,
			redirect: '/page/homepage',
			children:[
				...results,
			]
		},
		{
			path:'/admin',
			name:'myiplist',
			meta:{
				name:'我的管理台'
			},
			component: admins.myiplist
		},
		{
			path:'/admin/:id',
			name:'myipdetail',
			meta:{
				name:'我的管理台'
			},
			component: admins.myipdetail
		},
		{
			path: '*',
			hidden: true,
			name: 'other',
			redirect: { path: '/' }
		}
	]
})
