<template>
<div class="borderbox">
	<div class="header-box">
		<div class="pub_header">
			<ul class="clearfix">
				<li v-if="!userName"><span>欢迎来到江干区科技大市场！请</span> <span class="login" @click="tologin">登录</span> <span style="color:#DADADA">|</span> <span class="login" @click="toregister">注册</span></li>
				<li v-if="userName"><strong @click="tomy">{{this.$store.state.user.logininfo.userName}}</strong> <span>您好，欢迎来到江干区科技大市场！</span> <span class="login" @click="loginout">退出登录</span></li>
				
			</ul>
		</div>
	</div>
</div>
	
</template>

<script>
const outUrl = './techinnovation/loginOut'
export default {
	props: {
	},
	data () {
		return {
		}
	},
	computed:{
		userName(){
			return this.$store.state.user.logininfo.userName
		}
	},
	mounted(){
	},
	methods: {
		
		loginout(){
			let data = {
				phone: localStorage.getItem('techUserPhone')
			}
			this.$http.post(outUrl,data).then(res=>{
				// localStorage.removeItem('techUserName')
				// localStorage.removeItem('techUserPhone')
				this.$store.dispatch('remove_logininfo')
				// window.location.reload()
			})
		},
		tologin(){
			this.$router.push({path:'/login',query:{url:window.location.href}})
		},
		toregister(){
			this.$router.push({path:'/register',query:{url:window.location.href}})
		},
		tomy(){
			this.$router.push({name:'mine'})
		}
	},
	watch: {
	}
}
</script>

<style lang="less">
.borderbox{
    background-color: #F3F4F8;
}
.header-box{
    width: 1200px;
    margin: 0 auto;
}
	.pub_header {
		height: 25px;
		color: #333;
		.login{
			// margin-left: 10px;
			color: #255BDA;
			cursor: pointer;
		}
		ul{
			padding: 6px 0;
			li{
				height: 12px;
				line-height: 12px;
				span{
					float: left;
					margin-right: 10px;
					vertical-align: middle;
				}
			}
		}
		strong{
			float: left;
			margin-right: 5px;
			cursor: pointer;
		}
	}
</style>
