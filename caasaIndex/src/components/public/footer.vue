<template>
	<!-- 页尾 -->
	<footer class="fac_footer">
		<div class="footer_wid">
			<!-- <div>
				政府平台：
				<a href="">国家市场监督管理局</a> | 
				<a href="">国家知识产权局</a> | 
				<a href="">中华人民共和国海关总署</a> | 
				<a href="">中华人民共和国公安部</a> | 
				<a href="">全国12315平台</a>
			</div> -->
			<div class="ewmimg">
				<img src="~assets/img/index/ewm.png" alt="">
				<span>联盟公众号</span>
			</div>
			<div>Copyright © 2005-2019 caasa.org.cn Inc. All Rights Reserved. 反侵权假冒联盟 版权所有</div>
			<div>会员部：13381444090； 商务合作：18310783818</div>
			<div>地址：北京市朝阳区外贸安贞大楼C座711室   E-mail：caasa@caasa.org.cn</div>
			<div>主办单位: 反侵权假冒联盟 备案号：<a href="https://beian.miit.gov.cn/#/Integrated/index">京ICP备17048943号-1</a></div>
			
		</div>
	</footer>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	methods: {
	},
	mounted () {}
}
</script>

<style lang="less">
/* 底部样式 */
.fac_footer{
	background: #1357A4;
	color: #fff;
	padding: 30px 0;
	.footer_wid{
		width: 1200px;
		margin: 0 auto;
		font-size: 14px;
		position: relative;
		>div{
			text-align: center;
			line-height: 24px;
			a{color: #fff;}
		}
		.ewmimg{
			position: absolute;
			left: 100px;
			top: 0;
			width: 100px;
			img{width: 100%;display: block;}
			span{
				font-size: 12px;
			}
		}
	}
	
}
</style>
