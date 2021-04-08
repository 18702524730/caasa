
import  {Content} from 'layout/'
import {cases} from 'views/'
export default {
	path: 'cases',
	name:'cases',
	meta:{
		name:'维权案例',
	},
	sort: 3,
	component: Content,
	redirect: 'cases/caselist',
	children:[
		{
			path: 'caselist',
			name:'caselist',
			component: cases.caselist
		},
	]
}