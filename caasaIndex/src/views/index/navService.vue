<template>
	<div class="navService">
		<div class="navTabs">
			<div :class="{'active':isActive==1}" @click="acticeFn(1)"><a>专业服务</a></div>
			<div :class="{'active':isActive==2}" @click="acticeFn(2)"><a>会员服务</a></div>
			<div :class="{'active':isActive==3}" @click="acticeFn(3)"><a>会议服务</a></div>
			<div :class="{'active':isActive==4}" @click="acticeFn(4)"><a>国际合作</a></div>
			<div :class="{'active':isActive==5}" @click="acticeFn(5)"><a>课题成果</a></div>
		</div>
	</div>
</template>

<script>
import merge from 'webpack-merge'
export default {
	data(){
		return {
			isActive: 1,
		}
	},
	mounted(){
		this.isActive = this.$route.query.isActive
		this.acticeFn(this.isActive)
	},
	methods:{
		acticeFn(k){
			this.$emit('toactive',k)
			this.isActive = k
			this.$router.push({
					query:merge(this.$route.query,{'isActive':k})
			})
		}
	}
}
</script>

<style lang='less'>
	.navService{
		background: #414142;
		.navTabs{
			display: flex;
			width: 1200px;
			margin: 0 auto;
			>div{
				font-size: 16px;
				font-family: AlibabaPuHuiTiR;
				color: #FFFFFF;
				height: 50px;
				line-height: 50px;
				padding: 0 30px;
				text-align: center;
				cursor: pointer;
				>a{
					color: #FFFFFF;
				}
				>a:hover{
					text-decoration: none;
				}
			}
			>div:hover{
				background: #1357A4;
			}
			.active{
				background: #1357A4;
			}
		}
	}
</style>