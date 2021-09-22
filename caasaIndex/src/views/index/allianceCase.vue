<template>
	<div class="allianceCases">
		<!-- <div class="StructuresTitle">联盟案例</div> -->
		<div class="hyzls pad">
			<div class="eg1Img"><img src="~assets/img/aboutAlliances/eg1.png" alt=""></div>
			<div class="hyzlCont">
				<div class="title">行业治理——智能短交通行业治理</div>
				<div class="text">构建了多方参与的社会共治体系，通过侵权投诉、质量管控、海关知识产权备案扣押、公安线下精准打击、专利授权许可等立体保护机制，对智能短交通行业进行行业治理，规范了行业秩序。</div>
				<div class="text gou"><i class="el-icon-check"></i>专利侵权投诉：与各大电商平台建立绿色诚信投诉通道，投诉成功率<span>95%</span>，删除链接<span>1000</span>余条；</div>
				<div class="text gou"><i class="el-icon-check"></i>授权许可：完成百余家店铺专利授权许可；</div>
				<div class="text gou"><i class="el-icon-check"></i>质量管控：协助执法部门每年开展2次质量抽检专项行动，曝光涉及质量严重问题品牌50余个；</div>
				<div class="text gou"><i class="el-icon-check"></i>规范行业: 组织百余家企业成立行业联盟，制定行业知识产权保护及质量工作标准，打击恶意低价竞争行为，使规范经企业的利润提高<span>300%</span>。</div>
			</div>
		</div>
		<div class="egsConts">
			<img src="~assets/img/aboutAlliances/lct.png" alt="">
		</div>
		<div class="hyzls">
			<div class="eg1Img"><img src="~assets/img/aboutAlliances/eg2.png" alt=""></div>
			<div class="hyzlCont">
				<div class="title">线上线下联动——打击假冒“江中猴姑”米稀</div>
				<div class="text">公安机关、社会组织、电商企业、权利人多方联动、精准定位、果敢出击，不给造假、售假人员以任何喘息之机，有效开展专项打假行动，是社会共治模式的成功实践。</div>
				<div class="text gou"><i class="el-icon-check"></i>权利人：信心坚定，积极寻求维权帮助。</div>
				<div class="text gou"><i class="el-icon-check"></i>社会组织：分发挥桥梁作用，协调各方联合行动。</div>
				<div class="text gou"><i class="el-icon-check"></i>电商企业：通过现代科技对海量数据的统计，准确分析得出售假犯罪行为的规律，调取犯罪证据。</div>
				<div class="text gou"><i class="el-icon-check"></i>公安部门：反应迅速，果断采取行动，该案仅历时短短10余天，现场捣毁1个制假窝点及2个网络销售点，抓获犯罪嫌疑人3名。</div>
			</div>
		</div>
		<div class="hyzls mar">
			<div class="eg1Img"><img src="~assets/img/aboutAlliances/eg3.png" alt=""></div>
			<div class="hyzlCont">
				<div class="title">线上线下联动——保护“小猪佩奇”国际知名企业</div>
				<div class="text">公安机关、社会组织、电商企业、权利人多方联动，线上线下配合，有效开展专项打假行动，是社会共治模式的成功实践。</div>
				<div class="text gou"><i class="el-icon-check"></i>权利人：信心坚定，积极寻求维权帮助。</div>
				<div class="text gou"><i class="el-icon-check"></i>社会组织：分发挥桥梁作用，协调各方联合行动。</div>
				<div class="text gou"><i class="el-icon-check"></i>电商企业：通过现代科技对海量数据的统计，准确分析得出售假犯罪行为的规律，调取犯罪证据。</div>
				<div class="text gou"><i class="el-icon-check"></i>公安部门：迅速出击，查获儿童牙膏10余万支、儿童牙刷20余万支、儿童洗发沐浴露二合一2万余瓶、儿童湿纸巾10余万包、儿童漱口杯8万余只，查获侵权产品涉案金额高达450余万元。</div>
			</div>
		</div>
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
.allianceCases{
	.StructuresTitle{
		font-size: 28px;
		font-family: AlibabaPuHuiTiM;
		color: #333333;
		line-height: 38px;
		text-align: center;
		position: relative;
		margin: 98px 0 81px;
	}
	.StructuresTitle::before{
		content: '1111111111111111';
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
	.hyzls{
		display: flex;
		width: 1200px;
		margin: 0 auto;
		.eg1Img{
			width: 390px;
			height: 270px;
			flex-shrink: 0;
			margin-right: 57px;
			img{width: 100%;}
		}
		.hyzlCont{
			.title{
				font-size: 24px;
				font-family: AlibabaPuHuiTiM;
				color: #333333;
				line-height: 33px;
				margin-bottom: 50px;
			}
			.text{
				font-size: 14px;
				font-family: AlibabaPuHuiTiR;
				color: #666666;
				line-height: 24px;
				>span{
					color: #333;
				}
				>i{
					color: #1357A4;
					margin-right: 8px;
					font-size: 16px;
				}
			}
		}
	}
	.mar{
		margin: 180px 0 240px;
	}
	.pad{
		margin-top: 138px;
	}
	.egsConts{
		width: 1200px;
		height: 600px;
		margin: 56px auto;
		background: url('../../assets/img/aboutAlliances/bg1.png') no-repeat;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>