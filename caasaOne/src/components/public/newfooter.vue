<template>
	<!-- 页尾 -->
	<div class="index-footer">
		<div class="footercont">
			<p>Copyright © 2005-2019 caasa.org.cn Inc. All Rights Reserved. 北京反侵权假冒联盟 版权所有</p>
			<p>地址：北京市朝阳区外贸安贞大楼C座711室 电话：010-84109061 传真：010-84109021 E-mail：caasa@caasa.org.cn</p>
			<p>主办单位: 北京反侵权假冒联盟 &nbsp; 备案号：<a href="https://beian.miit.gov.cn/#/Integrated/index">京ICP备17048943号-1</a></p>
		</div>
	</div>
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
.index-footer{
	font-size:14px;
	font-family:Helvetica;
	color:#fff;
	background-color: #001731;
	.footercont{
		max-width: 1200px;
		padding: 38px 0;
		margin: 0 auto;
		p{
			line-height: 24px;
			text-align: center;
			color:rgba(255,255,255,0.8);
			a{color:rgba(255,255,255,0.8);}
		}
	}
}
</style>
