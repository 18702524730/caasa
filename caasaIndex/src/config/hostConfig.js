
var rootConfig = {
	rootUrl: 'http://www.caasa.org.cn',
  indexUrl: 'http://www.caasa.org.cn',
	submitUrl: 'http://wq.caasa.org.cn'
};
if (location.host.indexOf('localhost') === 0) {
	rootConfig = {
	  // 本地测试环境
	  // rootUrl: 'http://192.168.1.241:8088',
	  // indexUrl: 'http://192.168.1.241:8088',
		// admin: http://192.168.1.241:8088/admin/login
		// 联盟正式环境
	  // rootUrl: 'http://120.27.148.19:8086',
	  // indexUrl: 'http://120.27.148.19:8086',
		// admin: http://caasa.org.cn:8086/admin/login
	  rootUrl: 'http://www.caasa.org.cn',
	  indexUrl: 'http://www.caasa.org.cn',
		submitUrl: 'http://wq.caasa.org.cn',
	};
}
if (location.host.indexOf('pre') != -1) {
	rootConfig = {
	  rootUrl: 'http://pre.caasa.org.cn',
	  indexUrl: 'http://pre.caasa.org.cn',
		submitUrl: 'http://testwq.caasa.org.cn',
	};
}
export default rootConfig;



