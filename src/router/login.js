
import  {Content} from 'layout/'
import {homeview} from 'views/'
export default {
	path: 'login',
	name:'login',
	meta:{
		name:'首页',
	},
	sort: 9,
	component: Content,
	redirect: 'login/homelogin',
	children:[
		{
			path: 'homelogin',
			name:'homelogin',
			component: homeview.homelogin
		}
	]
}