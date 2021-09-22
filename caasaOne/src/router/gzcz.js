
import  {Content} from 'layout/'
import {czpages} from 'views/'
export default {
	path: 'gzcz',
	name:'gzcz',
	meta:{
		name:'公证存证',
	},
	sort: 2,
	component: Content,
	redirect: 'gzcz/czhome',
	children:[
		{
			path: 'czhome',
			name:'czhome',
			component: czpages.czhome
		},
		
	]
}