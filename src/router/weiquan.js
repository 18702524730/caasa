
import  {Content} from 'layout/'
import {weiquan,czpages} from 'views/'
export default {
	path: 'weiquan',
	name:'weiquan',
	meta:{
		name:'我的',
	},
	sort: 4,
	component: Content,
	redirect: 'weiquan/wqlist',
	children:[
		{
			path: 'wqlist',
			name:'wqlist',
			component: weiquan.wqlist
		},
		{
			path: 'mycz',
			name:'mycz',
			component: czpages.mycz
		}
	]
}