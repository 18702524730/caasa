import Vue from 'vue';
import Router from 'vue-router';
import  {indexs} from 'views/'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  return originalPush.call(this, location).catch(err => {
    return err
  })
}
Vue.use(Router);
export default new Router({
	routes: [
		{
			path: '/test0508',
			name: 'test0508',
			component: resolve => require(['@/views/index/test0508'], resolve)
		},
		{
			path: '*',
			hidden: true,
			name: 'other',
			redirect: { path: '/' }
		},
		{
			path     : '/',
			name     : '',
			meta:{
				name: ''
			},
			hidden   : true,
			redirect:'/index',
		},
		{
			path: '/index',
			name: 'index',
			meta:{
				name:'首页'
			},
			component:indexs.index,
		},
		{
			path: '/index/allianceNewDetail/:contentId/:active',
			name: 'index',
			meta:{
				name:'首页'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'allianceNewDetail',
					meta:{
						name:'首页新闻详情'
					},
					component:indexs.allianceNewDetail,
				},
			]
		},
		{
			path: '/index/newsPolicy',
			name: 'newsPolicy',
			meta:{
				name:'新闻政策'
			},
			component:indexs.newsPolicy,
		},
		{
			path: '/index/newsPolicy/NewssPolicyList/:active',
			name: 'newsPolicy',
			meta:{
				name:'新闻政策'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'NewssPolicyList',
					meta:{
						name:'新闻政策列表'
					},
					component:indexs.NewssPolicyList,
				},
			]
		},
		{
			path: '/index/newsPolicy/allianceNewDetail/:contentId/:active',
			name: 'newsPolicy',
			meta:{
				name:'新闻政策'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'allianceNewDetail',
					meta:{
						name:'新闻政策详情'
					},
					component:indexs.allianceNewDetail,
				},
			]
		},
		{
			path: '/index/allianceNews',
			name: 'allianceNews',
			meta:{
				name:'联盟动态'
			},
			component:indexs.allianceNews,
		},
		{
			path: '/index/allianceNews/allianceNewlist/:active',
			name: 'allianceNews',
			meta:{
				name:'联盟动态'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'allianceNewlist',
					meta:{
						name:'联盟动态列表'
					},
					component:indexs.allianceNewlist,
				},
			]
		},
		{
			path: '/index/allianceNews/allianceNewDetail/:contentId/:active',
			name: 'allianceNews',
			meta:{
				name:'联盟动态'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'allianceNewDetail',
					meta:{
						name:'联盟动态详情'
					},
					component:indexs.allianceNewDetail,
				},
			]
		},
		{
			path: '/index/aboutAlliances',
			name: 'aboutAlliances',
			meta:{
				name:'关于联盟'
			},
			component:indexs.aboutAlliances,
		},
		{
			path: '/index/aboutAlliances/allianceNewDetail/:contentId/:active',
			name: 'aboutAlliances',
			meta:{
				name:'关于联盟'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'allianceNewDetail',
					meta:{
						name:'关于联盟详情'
					},
					component:indexs.allianceNewDetail,
				},
			]
		},
		{
			path: '/index/internationalExchange',
			name: 'internationalExchange',
			meta:{
				name:'国际交流'
			},
			component:indexs.internationalExchange,
		},
		{
			path: '/index/internationalExchange/allianceNewlist/:active',
			name: 'internationalExchange',
			meta:{
				name:'国际交流'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'allianceNewlist',
					meta:{
						name:'国际交流列表'
					},
					component:indexs.allianceNewlist,
				},
			]
		},
		{
			path: '/index/internationalExchange/allianceNewDetail/:contentId/:active',
			name: 'internationalExchange',
			meta:{
				name:'国际交流'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'allianceNewDetail',
					meta:{
						name:'国际交流详情'
					},
					component:indexs.allianceNewDetail,
				},
			]
		},
		{
			path: '/index/InternationalNews',
			name: 'InternationalNews',
			meta:{
				name:'国际交流'	//国际动态
			},
			component:indexs.InternationalNews,
		},
		{
			path: '/index/InternationalNews/allianceNewDetail/:contentId/:active',
			name: 'InternationalNews',
			meta:{
				name:'国际交流'	//国际动态
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'allianceNewDetail',
					meta:{
						name:'国际动态详情'
					},
					component:indexs.allianceNewDetail,
				},
			]
		},
		{
			path: '/index/serviceContent',
			name: 'serviceContent',
			meta:{
				name:'服务内容'	//服务内容
			},
			component:indexs.serviceContent,
		},
		{
			path: '/index/serviceContent/previousReview',
			name: 'serviceContent',
			meta:{
				name:'服务内容'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'previousReview',
					meta:{
						name:'往期回顾'
					},
					component:indexs.previousReview,
				},
			]
		},
		{
			path: '/index/memberClub',
			name: 'memberClub',
			meta:{
				name:'会员天地'	//会员天地
			},
			component:indexs.memberClub,
		},
		{
			path: '/index/memberClub/applyToJoin',
			name: 'memberClub',
			meta:{
				name:'会员天地'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'applyToJoin',
					meta:{
						name:'加入会员'
					},
					component:indexs.applyToJoin,
				},
			]
		},
		{
			path: '/index/memberClub/allianceNewDetail/:contentId/:active',
			name: 'memberClub',
			meta:{
				name:'会员天地'
			},
			component:indexs.contentbox,
			children:[
				{
					path: '/',
					name: 'allianceNewDetail',
					meta:{
						name:'会员天地详情'
					},
					component:indexs.allianceNewDetail,
				},
			]
		},
	]
})
