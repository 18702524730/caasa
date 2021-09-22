<template>
	<div class="previousReviews">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/serviceContent/banner.png" alt="">
			<div class="policyTitle">往期回顾</div>
		</div>
		<div v-show="!isSearchList" class="serviceContentCont">
			<div class="conts1">
				<div class="contTitle">
					<el-divider direction="vertical"></el-divider>大型会议
				</div>
				<div class="zodhCont">
					<h2>中欧大会</h2>
					<div class="zodh4">
						<img src="~assets/img/serviceContent/zodh4.png" alt="">
					</div>
					<div class="zodhtxt">国务院参事室国际战略研究中心研究员、全国打击侵权假冒工作领导小组办公室原副主任柴海涛主持。商务部条法司、 国家市场监督管理总局主要领导， 欧盟驻华代表团贸易处、IPKey中国项目负责人出席并致辞。每年11月底举办，是联盟与欧盟官方在互联网知识产权保护领域最高级别的国际会议之一。</div>
					<div class="zodh4">
						<img src="~assets/img/serviceContent/zodh5.png" alt="">
					</div>
					<div class="zodhtxt">
						<p>相关单位</p>
						国家市场监督管理总局、商务部、公安部、海关总署、国家知识产权局等相关部委代表，北京、浙江、重庆等地方市场监管部门和公安部门代表
						<p>国际/国内行业组织</p>
						欧盟驻华代表团、欧盟知识产权局、英国、德国、美国、韩国、日本等驻华机构代表，各行业商协会、浙江清华长三角研究院等高校、科研机构代表
						<p>企业</p>
						阿里巴巴集团、京东集团、亚马逊、拼多多、小米科技、字节跳动、腾讯(微信)、百度、网易、微店、鄂尔多斯、剑南春、长城葡萄酒、 小罐茶、普盛食品(红牛)、安妮股份、杭州拾贝等
					</div>
					<h2>京交会</h2>
					<div class="zodh4">
						<img src="~assets/img/serviceContent/zodh6.png" alt="">
					</div>
					<div class="zodhtxt">
						全国打击侵犯知识产权和制售假冒伪劣商品工作领导小组办公室、北京市市场监督管理局、海关总署主要领导， 世界知识产权组织、欧盟驻华代表团出席负责人出席并致辞。
						<br>以保护知识产权、打击侵权假冒为主题的展区，全面展示京津冀晋蒙地区打击侵权假冒工作成果。
						<br>每年5月底在京举办，是我国在服务贸易领域打击侵权假冒、保护知识产权的最高级别国际会议之一。
					</div>
					<div class="zodh4">
						<img src="~assets/img/serviceContent/zodh7.png" alt="">
					</div>
					<div class="zodhtxt">
						<p>相关单位</p>
						国家市场监督管理总局、海关总署、国家知识产权局，以及北京、天 津、河北、山西、内蒙古自治区打击侵权假冒工作领导小组办公室及相关成员单位
						<p>国际/国内行业组织</p>
						欧、英、美、法、俄、日等驻华使领馆，世界知识产权组织、欧盟知识产权局、欧盟IP Key、美国商标专利局、日本贸易振兴机构、各行业商协会、高校、科研机构等代表
						<p>企业</p>
						阿里巴巴集团、京东集团、拼多多、小米科技、腾讯(微信)、百度、 网易、微店、360、茅台、五粮液、剑南春、汾酒、小罐茶、香飘飘、 绝味、达能、安妮股份、杭州拾贝等
					</div>
					<h2>商业秘密保护学术论坛</h2>
					<div class="zodh4">
						<img src="~assets/img/serviceContent/zodh8.png" alt="">
					</div>
					<div class="zodhtxt">
						为促进海峡两岸学术交流，推动海峡两岸商业秘密保护的互动与借鉴
						<br>论坛每年举办两次，上半年在台北，下半年在大陆。
					</div>
					<div class="zodhtxt">
						<p>高校</p>
						中国人民大学、中国厦门大学、北京大学、北京理工大学、中国政法大学、华东政法大学、武汉大学、北京航空航天大学、中国社会科学院等专家
						<p>企业</p>
						台积电、友达光电、联发科技、宸鸿光电、索尼、RPX、北方华创、康佳等企业代表
					</div>
					<div class="zodh9">
						<img src="~assets/img/serviceContent/zodh9.png" alt="">
					</div>
				</div>
			</div>
			<div class="conts1">
				<div class="contTitle">
					<el-divider direction="vertical"></el-divider>特色会议
				</div>
				<div class="zodhCont tshyCont">
					<h2>地方行</h2>
					<div class="hyimages">
						<img src="~assets/img/serviceContent/zodh10.png" alt="">
						<img src="~assets/img/serviceContent/zodh11.png" alt="">
						<img src="~assets/img/serviceContent/zodh12.png" alt="">
					</div>
					<div class="zodhtxt">
						中国反侵权假冒经验交流地方行活动由联盟 和地级市打击侵权假冒工作领导小组办公室 共同主办。 来自国家部委单位、地方政府部门、国内外 行业组织、高校科研机构、电商及社交媒体 平台、品牌权利人、知识产权服务机构等 300余人出席。
						<br>活动设置了保护知识产权、打击侵权假冒成 果展区，展示了地方一年来知识产权保护工 作及打击侵权假冒10大案例，以及10家企 业知识产权保护体系和经典案例。 人民日报、新华网等30余家媒体进行报道。
					</div>
					<h2>国际考察交流会</h2>
					<div class="gjkc">
						<div>
							<img src="~assets/img/serviceContent/zodh13.png" alt="">
							<div>欧洲考察</div>
						</div>
						<div>
							<img src="~assets/img/serviceContent/zodh14.png" alt="">
							<div>日本考察</div>
						</div>
						<div>
							<img src="~assets/img/serviceContent/zodh15.png" alt="">
							<div>中欧交流会</div>
						</div>
						<div>
							<img src="~assets/img/serviceContent/zodh16.png" alt="">
							<div>英国考察</div>
						</div>
					</div>
				</div>
			</div>
			<div class="conts1">
				<div class="contTitle">
					<el-divider direction="vertical"></el-divider>研讨沙龙
				</div>
				<div class="ytslCont">
					<div class="ytsllist">
						<img src="~assets/img/serviceContent/zodh17.png" alt="">
						<div>打击侵权假冒区域协作推进会</div>
					</div>
					<div class="ytsllist">
						<img src="~assets/img/serviceContent/zodh18.png" alt="">
						<div>巾帼建功座谈会</div>
					</div>
					<div class="ytsllist">
						<img src="~assets/img/serviceContent/zodh19.png" alt="">
						<div>反侵权假冒学习培训</div>
					</div>
					<div class="ytsllist">
						<img src="~assets/img/serviceContent/zodh20.png" alt="">
						<div>专利法修正案（草案）研讨沙龙</div>
					</div>
				</div>
			</div>
		</div>
		<newsList v-show="isSearchList" :searchCont='searchCont'></newsList>
		<myfooter></myfooter>
	</div>
</template>

<script>
import cloudnav from 'cps/public/cloudnav.vue'
import $ from 'jquery'
import myfooter from 'cps/public/footer.vue'
import newsList from './newsList.vue'
import filters from '../../utils/filters/filters.js'
export default {
	data(){
		return {
			isSearchList: false,
			searchCont: '',
		}
	},
	components:{
		myfooter,cloudnav,newsList
	},
	mounted(){
	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
  },
}
</script>

<style lang='less'>
.previousReviews{
	.banner{
		position: relative;
		>img{width: 100%;display: block;}
		.policyTitle{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			font-size: 28px;
			font-family: AlibabaPuHuiTiM;
			color: #FFFFFF;
		}
	}
	.serviceContentCont{
		width: 1200px;
		margin: 50px auto 0;
		.contTitle{
			height: 51px;
			line-height: 51px;
			font-size: 18px;
			font-family: AlibabaPuHuiTiR;
			color: #FFFFFF;
			background: #1357A4;
			padding-left: 18px;
		}
		.conts1{
			border: 1px solid #E6E6E6;
			margin-bottom: 40px;
			.zodhCont{
				padding-bottom: 37px;
				>h2{
					font-size: 28px;
					font-family: AlibabaPuHuiTiM;
					color: #333333;
					line-height: 38px;
					text-align: center;
					margin: 50px 0;
				}
				.zodh4>img{
					width: 751px;
					height: 418px;
					display: block;
					margin: 0 auto;
				}
				.zodh9>img{
					width: 1015px;
					height: 478px;
					display: block;
					margin: 0 auto;
				}
				.zodhtxt{
					font-size: 16px;
					font-family: AlibabaPuHuiTiR;
					color: #333333;
					line-height: 24px;
					margin: 34px 225px;
					>p{
						margin-top: 34px;
						font-weight: bold;
					}
					>p:first-child{margin: 0;}
				}
			}
			.tshyCont{
				.hyimages{
					display: flex;
					flex-wrap: wrap;
					width: 750px;
					margin: 0 auto;
					>img{width: 50%;}
					>img:last-child{width: 100%;}
				}
				.gjkc{
					display: flex;
					justify-content: space-between;
					padding: 0 77px 43px;
					>div{
						width: 221px;
						>img{width: 100%;display: block;}
						>div{
							font-size: 17px;
							font-family: AlibabaPuHuiTiR;
							color: #333333;
							line-height: 23px;
							text-align: center;
							margin-top: 16px;
						}
					}
				}
			}
			.ytslCont{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
				padding-bottom: 28px;
				>div{
					width: 50%;
					text-align: center;
					margin-top: 50px;
					>div{
						margin: 16px 0 0;
						text-align: center;
						font-size: 16px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 22px;
					}
				}
			}
		}
	}
}
</style>