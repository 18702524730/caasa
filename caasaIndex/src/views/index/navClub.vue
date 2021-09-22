<template>
	
		<div class="navClub">
			<div class="navTabs">
				<div @click="checkoutAct(1)" :class="{'active':isactive==1}"><a>会员动态</a></div>
				<div @click="checkoutAct(2)" :class="{'active':isactive==2}"><a>会员权益</a></div>
				<div @click="checkoutAct(3)" :class="{'active':isactive==3}"><a>加入联盟</a></div>
				<div @click="checkoutAct(4)" :class="{'active':isactive==4}"><a>会员风采</a></div>
				<div @click="checkoutAct(5)" :class="{'active':isactive==5}"><a>人物风采</a></div>
			</div>
		</div>
</template>

<script>
export default {
	data(){
		return {
			isactive:1
		}
	},
	mounted(){
		this.isactive = this.$route.query.isactive?this.$route.query.isactive:3
	},
	methods:{
		checkoutAct(k){
			this.isactive = k
			this.$emit('isactive',this.isactive)
			if(k === 3) {
				this.$router.push({ path:'/index/memberClub/applyToJoin'})
				return
			}
			this.$router.replace({ path:'/index/memberClub?isactive='+k})
		},
	},
}
</script>

<style lang='less'>
	.navClub{
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
				width: 150px;
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