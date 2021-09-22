<template>
	<div class="cooperativePartnerss">
		<div class="StructuresTitle">合作伙伴</div>
		<div class="PartnersCont">
			<div class="Partnerslist">
				<h3>
					<img src="~assets/img/aboutAlliances/ab1.png" alt="">
					<span>执法及司法部门</span>
				</h3>
				<ul>
					<li>• 国家市场监督管理总局</li>
					<li>• 公安部</li>
					<li>• 商务部</li>
					<li>• 海关总署</li>
					<li>• 国家知识产权局</li>
					<li>• 各省市知识产权行政执法部门</li>
				</ul>
			</div>
			<div class="Partnerslist">
				<h3>
					<img src="~assets/img/aboutAlliances/ab2.png" alt="">
					<span>高校</span>
				</h3>
				<ul>
					<li>• 中国人民大学</li>
					<li>• 中国厦门大学</li>
					<li>• 北京大学</li>
					<li>• 浙江清华长三角研究院</li>
					<li>• 中国人民公安大学</li>
					<li>• 中国政法大学</li>
					<li>• 西南政法大学</li>
					<li>• 华东政法大学</li>
					<li>• 中国石油大学</li>
				</ul>
			</div>
			<div class="Partnerslist">
				<h3>
					<img src="~assets/img/aboutAlliances/ab3.png" alt="">
					<span>国内组织</span>
				</h3>
				<ul>
					<li>• 中国产学研合作促进会</li>
					<li>• 中国防伪行业协会</li>
					<li>• 中华商标协会</li>
					<li>• 中国版权协会</li>
					<li>• 中国互联网协会</li>
					<li>• 中国渔业协会</li>
					<li>• 中国茶叶流通协会</li>
					<li>• 中国酒类流通协会</li>
					<li>• 台湾营业秘密促进会</li>
					<li>• 中国知识产权研究会</li>
					<li>• 中国质量万里行促进会</li>
					<li>• 中国外商投资企业协会优质品牌保护委员会</li>
				</ul>
			</div>
			<div class="Partnerslist">
				<h3>
					<img src="~assets/img/aboutAlliances/ab4.png" alt="">
					<span>国际组织</span>
				</h3>
				<ul>
					<li>• IP Key中国</li>
					<li>• CBBC(英中贸易协会)</li>
					<li>• JETOR(日本贸易振兴机构)</li>
					<li>• USCBC(美中贸易委员会)</li>
					<li>• KOTRA(大韩贸易投资振兴公社)</li>
					<li>• EUIPO(欧盟知识产权局)</li>
					<li>• WIPO(世界知识产权组织)</li>
					<li>• INTA(国际商标协会)</li>
					<li>• EUSMECentre(欧盟中小企业中心)</li>
					<li>• EUROCHAMBRES</li>
					<li>• EUCCC(中国欧盟商会)</li>
					<li>• CICC(中国意大利商会)</li>
					<li>• DCCC(中欧丹麦商会)</li>
				</ul>
			</div>
			<div class="Partnerslist">
				<h3>
					<img src="~assets/img/aboutAlliances/ab5.png" alt="">
					<span>媒体传媒</span>
				</h3>
				<ul>
					<li>• 新华社</li>
					<li>• 人民日报</li>
					<li>• 法制日报</li>
					<li>• 经济日报</li>
					<li>• 中国知识产权报</li>
					<li>• 国际商报</li>
					<li>• 人民网</li>
					<li>• 新华网</li>
					<li>• 中国网</li>
					<li>• 光明网</li>
					<li>• 今日头条</li>
					<li>• 搜狐</li>
					<li>• 腾讯</li>
					<li>• 爱奇艺</li>
				</ul>
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
.cooperativePartnerss{
	.PartnersCont{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding-bottom: 446px;
		.Partnerslist{
			margin-top: 54px;
			min-height: 503px;
			width: 344px;
			background: #FBFBFB;
			border-bottom: 6px solid #1357A4;
			h3{
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				padding: 27px 0 22px;
				margin: 0 30px;
				border-bottom: 1px solid #D3D3D3;
				>img{
					width: 80px;
					height: 80px;
					display: block;
				}
				>span{
					display: inline-block;
					width: 124px;
					font-size: 30px;
					color: #1357A4;
					line-height: 42px;
				}
			}
			ul{
				margin-top: 18px;
				padding-left: 20px;
				li{
					font-size: 16px;
					font-family: AlibabaPuHuiTiR;
					color: #666666;
					line-height: 24px;
				}
			}
		}
		// .Partnerslist:nth-child(n+1){
		// 	margin: 54px 82px 0;
		// }
	}
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
		content: 'partner';
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
}
</style>