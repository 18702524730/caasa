<template>
	<!-- 页尾 -->
	<div class="index-footer">
		<div class="kejilink">
			<h3>友情链接</h3>
			<ul>
				<li v-for="(item,key) in links" :key="key"><a target="_blank" :href="item.link">{{item.name}}</a></li>
			</ul>
		</div>
		<div class="footercont">
			<p>Copyright © 2019 长三角（杭州·江干）科技大市场版权所有 </p>
			<p>指导单位：杭州江干科技局 </p>
			<p>技术支持单位：杭州拾贝知识产权服务有限公司</p>
			<p>浙ICP备15042618号</p>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			links:[
                {name:'杭州市江干区人民政府网站',link:'http://www.jianggan.gov.cn/'},
                {name:'杭州市科技创新云服务平台',link:'http://115.238.84.53:36789/ccphangzhou/'},
                {name:'杭州市科技技术局',link:'http://kj.hangzhou.gov.cn/'},
                {name:'浙江政务服务网',link:'http://www.zjzwfw.gov.cn/zjservice/dept/deptQuery.do?deptId=001008001026011&webId=2'},
                {name:'中国浙江网上技术市场',link:'http://www.51jishu.com/index.do'},
				{name:'高新技术企业认定管理工作位',link:'http://www.innocom.gov.cn/'}
            ],
		}
	},
	methods: {
	},
	mounted () {}
}
</script>

<style lang="less">
/* 底部样式 */
.index-footer{
	font-size:14px;
	font-family:Helvetica;
	color:#fff;
	background-color: #001731;
	.kejilink{
		max-width: 1200px;
		padding: 24px 0 15px;
		margin: 0 auto;
		border-bottom: 1px solid rgba(218, 218, 218,0.2);;
		>h3{
			height:25px;
			font-size:18px;
			font-family:'PingFangSC-Regular','PingFang SC';
			
			color:rgba(255,255,255,1);
			line-height:25px;
			text-align: center;
		}
		>ul{
			display: -webkit-flex;
			display: flex;
			justify-content: space-between;
			padding-top: 9px;
			>li{
				line-height: 24px;
			}
			a{
				color:rgba(255,255,255,0.6);
				text-decoration: none;
			}
		}
	}
	.footercont{
		max-width: 1200px;
		padding: 23px 0 28px;
		margin: 0 auto;
		p{
			line-height: 24px;
			text-align: center;
			color:rgba(255,255,255,0.8);
		}
	}
}
</style>
