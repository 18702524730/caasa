<template>
	<div class="navTwoTop">
		<div class="navTabs">
			<div :class="{active:isroute==='internationalExchange'}"><a @click="toroute('gjjl')">国际交流</a></div>
			<div :class="{active:isroute==='InternationalNews'}"><a @click="toroute('gjdt')">国际动态</a></div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			isroute: 'internationalExchange'
		}
	},
	mounted(){
		this.isroute = this.$route.name
	},
	methods:{
		toroute(k){
      if(k == 'gjdt') this.$router.push({ path:'/index/InternationalNews'})
      else if(k == 'gjjl') this.$router.push({ path:'/index/internationalExchange'})
		},
	},
}
</script>

<style lang='less'>
	.navTwoTop{
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