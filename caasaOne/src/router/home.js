
import  {Content} from 'layout/'
import {homeview} from 'views/'
export default {
	path: 'homepage',
	name:'homepage',
	meta:{
		name:'首页',
	},
	sort: 1,
	component: Content,
	redirect: 'homepage/home',
	children:[
		{
			path: 'home',
			name:'homelist',
			component: homeview.homelist
		},
		// {
		// 	path: 'login',
		// 	name:'homelogin',
		// 	component: homeview.homelogin
		// }
	]
}