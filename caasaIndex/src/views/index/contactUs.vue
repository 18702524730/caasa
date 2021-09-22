<template>
	<div class="contactUss">
		
					<!-- <img src="~assets/img/aboutAlliances/mingpian2.png" alt=""> -->
		<div class="StructuresTitle">联系我们</div>
		<div class="Uslists">
			<div class="Usli">
				<div class="litop">
					<div class="title">国际部</div>
				</div>
			</div>
			<div class="Usli">
				<div class="litop">
					<div class="title">会员部</div>
				</div>
			</div>
			<div class="Usli">
				<div class="litop">
					<div class="title">技术部</div>
				</div>
			</div>
			<div class="Usli">
				<div class="litop">
					<div class="title">产业保护中心</div>
				</div>
			</div>
			<div class="Usli">
				<div class="litop">
					<div class="title">品牌宣传部</div>
				</div>
			</div>
			<div class="Usli">
				<div class="litop">
					<div class="title">研究院</div>
				</div>
			</div>
		</div>
		<div class="tel">咨询电话：010-84109061</div>
	</div>
</template>
<script>
import $ from 'jquery'
import filters from '../../utils/filters/filters.js'
export default {
	data(){
		return {

		}
	},
	mounted(){

	},
	methods:{
		
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
  },
}
</script>

<style lang='less'>
.contactUss{
	.StructuresTitle{
		font-size: 28px;
		font-family: AlibabaPuHuiTiM;
		color: #333333;
		line-height: 38px;
		text-align: center;
		position: relative;
		margin: 98px 0 0;
	}
	.StructuresTitle::before{
		content: 'contact us';
    position: absolute;
    display: block;
    width: 169px;
    height: 38px;
    font-size: 28px;
    font-family: AlibabaPuHuiTiM;
    color: #1357A4;
    line-height: 38px;
    left: 50%;
    letter-spacing: 1px;
    opacity: .1;
    transform: translateX(-50%);
    top: 6px;
	}
	.Uslists{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 1100px;
		padding-bottom: 24px;
		margin: 0 auto 0;
		background: url(../../assets/img/aboutAlliances/mingpian2.png) no-repeat;
		background-size: contain;
		background-position: center;
	}
	.Usli{
		width: 255px;
		margin-right: 122px;
		margin-top: 40px;
		.litop{
			height: 130px;
			background: linear-gradient(90deg, #F9FAFC 0%, #F9FBFD 100%);
			box-shadow: 0px 2px 10px 0px rgba(209, 216, 238, 0.5);
			border: 1px solid #E9E9E9;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #70757A;
			width: 100%;
			.title{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				-webkit-transform: translate(-50%,-50%);
				-o-transform: translate(-50%,-50%);
				-ms-transform: translate(-50%,-50%);
				-moz-transform: translate(-50%,-50%);
				font-size: 24px;
				font-family: AlibabaPuHuiTiM;
				line-height: 38px;
				width: 100%;
				text-align: center;
			}
		}
		.litop:hover{
			color: #fff;
			background: linear-gradient(122deg, #2272CC 0%, #1960B1 100%);
		}
	}
	.Usli:nth-child(3n){
		margin-right: 0;
	}
	.tel{
		width: 496px;
		height: 69px;
		background: linear-gradient(180deg, #1F68BB 0%, #0C509D 100%);
		box-shadow: 0px 2px 4px 0px rgba(88, 100, 158, 0.77);
		border-radius: 7px;
		border: 1px solid #0E54D1;
		margin: 24px auto 45px;
		font-size: 20px;
		font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
		font-weight: normal;
		color: #FFFFFF;
		line-height: 69px;
		text-align: center;
	}
}
</style>