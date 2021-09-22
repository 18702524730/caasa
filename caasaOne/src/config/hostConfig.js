var rootConfig = {
	rootUrl: 'http://wq.caasa.org.cn',
	indexUrl: 'http://wq.caasa.org.cn',
	wwwUrl:'https://www.ipsebe.com',
	wxUrl:'https://wechat.ipsebe.com',
	mpUrl: 'https://mp.ipsebe.com/iprp_middleground',
	indexNewUrl: 'http://www.caasa.org.cn',
};
//localhost和ip的简单正则匹配
if (location.host.indexOf('localhost') === 0) {
	rootConfig = {
	  rootUrl: '//' + location.host + '/lmwq',//ajax根路径
	  indexUrl: '//' + location.host,//ajax根路径
	  wwwUrl: '//' + location.host+'/www_proxy',
	  wxUrl:'//' + location.host,
	  mpUrl: '//' + location.host+'/iprp_middleground',
		indexNewUrl: 'http://testwww.caasa.org.cn',
	};
	rootConfig = {
	  rootUrl: 'http://testwq.caasa.org.cn',
	  indexUrl: '//' + location.host,//ajax根路径
	  wwwUrl:'https://testwww.ipsebe.com',
	  wxUrl:'https://testwechat.ipsebe.com',
	  mpUrl: 'https://testmp.ipsebe.com/iprp_middleground',
		indexNewUrl: 'http://testwww.caasa.org.cn',
	};
}
if (location.host.indexOf('test') === 0) {
	rootConfig = {
	  rootUrl: 'http://testwq.caasa.org.cn',
	  indexUrl: 'http://testwq.caasa.org.cn',
	  wwwUrl:'https://testwww.ipsebe.com',
	  wxUrl:'https://testwechat.ipsebe.com',
	  mpUrl: 'https://testmp.ipsebe.com/iprp_middleground',
		indexNewUrl: 'http://testwww.caasa.org.cn',
	};
}

export default rootConfig;



