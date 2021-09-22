<template>
	<div class="borderbox">
		<div class="LOGO">
			<div><img src="~assets/img/logo.png" alt=""></div>
			<div>国际反侵权假冒投申诉及纠纷调解平台</div>
		</div>
		<div class="userUl">
			<div>用户中心</div>
			<div>关于拾贝</div>
			<div>登录/注册</div>
		</div>
	</div>
	
</template>

<script>

export default {
	props: {
	},
	data () {
		return {
		}
	},
	mounted () {
		
	},
	methods: {

	},
	watch: {
	}
}
</script>

<style lang="less">
	.borderbox{
		display: flex;
		justify-content: space-between;
		line-height: 40px;
		background: #fff;
		padding: 8px 100px 20px;
		.LOGO{
			display: flex;
			align-items: center;
			font-size: 22px;
			font-weight: bold;
			img{
				width: 50px;
				display: block;
				margin-right: 10px;
			}
		}
		.userUl{
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 300px;
			>div{
				width: 100px;
				text-align: center;
				cursor: pointer;
			}
			>div:hover{
				background: #4395ff;
				color: #fff;
			}
		}
	}
</style>
