<template>
	<div class="serviceContents">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/serviceContent/banner.png" alt="">
			<div class="policyTitle">服务内容</div>
		</div>
		<!-- <div class="navTop" v-if="!isSearchList">
			<div class="navTabs">
				<div><a href="#zyfw">专业服务</a></div>
				<div><a href="#hyfw">会员服务</a></div>
				<div><a href="#hyfw">会议服务</a></div>
				<div><a href="#gjhz">国际合作</a></div>
				<div><a href="#ktcg">课题成果</a></div>
			</div>
		</div> -->
		<navService v-show="!isSearchList" @toactive=toactive></navService>
		<div v-show="!isSearchList" class="serviceContentCont">
			<div v-show="isActive==1" class="conts1 zyfw">
				<div class="contTitle" id="zyfw">
					<el-divider direction="vertical"></el-divider>专业服务
				</div>
				<div class="pageTitle">反侵权假冒</div>
				<div class="contuls">
					<div class="contlis">
						<div class="image"><img src="~assets/img/serviceContent/cont11.png" alt=""></div>
						<div class="title">侵权检索及检测</div>
						<div class="xian"></div>
					</div>
					<div class="contlis">
						<div class="image"><img src="~assets/img/serviceContent/cont12.png" alt=""></div>
						<div class="title">侵权认定</div>
						<div class="xian"></div>
					</div>
					<div class="contlis">
						<div class="image"><img src="~assets/img/serviceContent/cont13.png" alt=""></div>
						<div class="title">保全公证</div>
						<div class="xian"></div>
					</div>
					<div class="contlis">
						<div class="image"><img src="~assets/img/serviceContent/cont14.png" alt=""></div>
						<div class="title">侵权投诉</div>
						<div class="xian"></div>
					</div>
					<div class="contlis">
						<div class="image"><img src="~assets/img/serviceContent/cont15.png" alt=""></div>
						<div class="title">侵权处置</div>
						<div class="xian"></div>
					</div>
				</div>
				<div class="pageTitle pageTitle1">保护知识产权</div>
				<div class="contuls contuls1">
					<div class="contlis">
						<div class="image"><img src="~assets/img/serviceContent/cont21.png" alt=""></div>
						<div class="title">权利完善</div>
						<div class="xian"></div>
					</div>
					<div class="contlis">
						<div class="image"><img src="~assets/img/serviceContent/cont22.png" alt=""></div>
						<div class="title">知识产权与质量体系建设</div>
						<div class="xian"></div>
					</div>
					<div class="contlis">
						<div class="image"><img src="~assets/img/serviceContent/cont23.png" alt=""></div>
						<div class="title">专家预警与咨询</div>
						<div class="xian"></div>
					</div>
					<div class="contlis">
						<div class="image"><img src="~assets/img/serviceContent/cont24.png" alt=""></div>
						<div class="title">交易授权</div>
						<div class="xian"></div>
					</div>
				</div>
			</div>
			<div v-show="isActive==2" class="conts1 conts2">
				<div class="contTitle" id="hyfw">
					<el-divider direction="vertical"></el-divider>会员服务
				</div>
				<div class="biao1"><img src="~assets/img/serviceContent/biao1.png" alt=""></div>
				<!-- <table class="tables">
					<thead>
						<tr>
							<th rowspan="2" colspan="2">项目</th>
							<th rowspan="2">服务内容</th>
							<th rowspan="2">单位</th>
							<th colspan="3">会员级别</th>
						</tr>
						<tr>
							<th>理事成员单位1万/年</th>
							<th>副理事长成员单位3万/年</th>
							<th>常务副理事长成员单位10万/年</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="3" colspan="2">品牌溯源</td>
							<td>品牌防伪技术支持</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>品质溯源技术咨询</td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>数字化营销技术咨询</td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td rowspan="4" colspan="2" style="background:#fff">监测</td>
							<td>品牌侵权线索检索</td>
							<td>次</td>
							<td></td>
							<td>1</td>
							<td>4</td>
						</tr>
						<tr>
							<td>品牌侵权线索监测报告</td>
							<td>分</td>
							<td></td>
							<td>1</td>
							<td>4</td>
						</tr>
						<tr>
							<td>品牌知名度检索监测</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>品牌监测报告</td>
							<td>份</td>
							<td>1</td>
							<td>2</td>
							<td>4</td>
						</tr>
						<tr>
							<td rowspan="4" colspan="2" style="background:#fff">存证、取证、公证</td>
							<td>确权存证</td>
							<td>次</td>
							<td>10</td>
							<td>25</td>
							<td>60</td>
						</tr>
						<tr>
							<td>线上侵权取证</td>
							<td>次</td>
							<td>10</td>
							<td>25</td>
							<td>60</td>
						</tr>
						<tr>
							<td>线下侵权取证咨询</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>公证咨询</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td rowspan="3" colspan="2" style="background:#fff">投申诉平台</td>
							<td>专案投申诉、仲裁、调解咨询</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>电商专利侵权判定咨询报告</td>
							<td>份</td>
							<td></td>
							<td></td>
							<td>1</td>
						</tr>
						<tr>
							<td>电商投诉快速通道</td>
							<td></td>
							<td></td>
							<td>1</td>
							<td>3</td>
						</tr>
						<tr>
							<td rowspan="15">解决方案</td>
							<td rowspan="2">体系建设咨询</td>
							<td>知识产权与质量体系建设咨询</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>专业技术咨询</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td rowspan="2">政策咨询</td>
							<td>国内/国际法规政策</td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>专项咨询</td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td rowspan="4">协调促进</td>
							<td>行政执法保护咨询</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>司法保护咨询</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>促进与国内执法部门、司法部门、行业商协会的合作交流</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>行业反侵权假冒整治行动咨询</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td rowspan="7">顾问服务</td>
							<td>促进与国内外政府、商协会、国际组织合作交流</td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>促进跨平台反侵权假冒合作</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>促进与品牌权利人合作</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>反侵权假冒专项课题研究</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>美国“恶名市场”与欧盟“观察清单”应对方案</td>
							<td></td>
							<td></td>
							<td>提供导读和目录</td>
							<td>提供完整篇报告、核心内容分享</td>
						</tr>
						<tr>
							<td>反垄断法与不正当竞争应对</td>
							<td></td>
							<td></td>
							<td>提供相关政策导读</td>
							<td>提供完整篇政策文件、核心内容分享</td>
						</tr>
						<tr>
							<td>1V1专家论证意见座谈</td>
							<td>次</td>
							<td></td>
							<td>1</td>
							<td>3</td>
						</tr>
						<tr>
							<td rowspan="7" style="background:#fff">公关宣传</td>
							<td rowspan="3" style="background:#fff">会议活动</td>
							<td>大型峰会</td>
							<td></td>
							<td>免费参会1名，大会logo墙。</td>
							<td>分会场VIP座位1名，分会场论坛参与、大会logo墙，会议手册广告题名，午餐1名，定向晚宴1名。</td>
							<td>主题演讲、品牌展览展示、主会场宣传片30秒，主会场VIP座位1名，分会场VIP座位2名，大会logo墙，会议手册广告宣传，合作媒体通稿露出，午餐2名，定向晚宴2名。</td>
						</tr>
						<tr>
							<td>特色会议</td>
							<td></td>
							<td>免费参会1名，会议logo墙。</td>
							<td>VIP座位1名，会议logo墙。</td>
							<td>主题演讲、品牌展览展示、VIP座位1名，会议logo墙，合作媒体通稿露出。</td>
						</tr>
						<tr>
							<td>研讨沙龙</td>
							<td></td>
							<td>免费参会</td>
							<td>演讲1场</td>
							<td>演讲2场</td>
						</tr>
						<tr>
							<td rowspan="2">课题报告</td>
							<td>指定报告</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>定制报告</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>专业培训</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td style="background:#fff">领域重大舆情支持</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
					</tbody>
				</table> -->
			</div>
			<div v-show="isActive==3" class="conts1 conts2">
				<div class="contTitle" id="hyfw">
					<el-divider direction="vertical"></el-divider>会议服务
				</div>
				<table class="tables tables2">
					<thead>
						<tr>
							<th>会议类型</th>
							<th>会议名称</th>
							<th>规模</th>
							<th>互联网知识产权保护领域最高级别的国际会议之一</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="3" style="background:#fff;">大型会议</td>
							<td>中欧互联网知识产权保护与创新大会</td>
							<td>500人</td>
							<td>互联网</td>
						</tr>
						<tr>
							<td>中国国际服务贸易交易会</td>
							<td>500人</td>
							<td>我国在服务贸易领域打击侵权假冒、保护知识产权的最高级别国际会议之一</td>
						</tr>
						<tr>
							<td>商业秘密保护学术论坛</td>
							<td>200人</td>
							<td>推动商业秘密保护的互动与借鉴</td>
						</tr>
						<tr>
							<td rowspan="2" style="background:#fff;">特色会议</td>
							<td>中国反侵权假冒经验交流地方行</td>
							<td>300人</td>
							<td>推动政企、企企交流，进一步提升企业知识产权保护意识</td>
						</tr>
						<tr>
							<td>国际考察交流会</td>
							<td>30人</td>
							<td>共赴英国、西班牙等国家，加强知识产权国际交流合作</td>
						</tr>
						<tr>
							<td rowspan="4" style="background:#fff;">沙龙研讨会</td>
							<td>《互联网不正当竞争案件分析及对策》沙龙</td>
							<td>30人</td>
							<td>各方专家汇集一堂针对热点问题展开交流讨论</td>
						</tr>
						<tr>
							<td>日中知识产权保护研讨会</td>
							<td>100人</td>
							<td>推动中日合作交流与知识产权保护的对话窗口</td>
						</tr>
						<tr>
							<td>第十五届中国茶业经济年会茶业知识产权保护论坛</td>
							<td>200人</td>
							<td>就产业知识产权保护进行交流</td>
						</tr>
						<tr>
							<td>知识产权巾帼建功座谈会</td>
							<td>50人</td>
							<td>共庆“三八”国际劳动妇女节</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div v-show="isActive==3" class="huigus">
				<!-- <div class="contTitle">
					<el-divider direction="vertical"></el-divider>往届会议回顾
				</div> -->
				<div class="contTit2">往届会议回顾</div>
				<div class="lists">
					<div class="dts" v-for="(item,index) in hyhgData" :key="index" @click="toDetail(item.contentId)">
						<div class="dtImg"><img :src="item.thumb" alt=""></div>
						<div class="dtTit" :title="item.title">{{item.title | val29}}</div>
					</div>
					<div class="wqhg" @click="wqhgFn">往期回顾</div>
				</div>
			</div>
			<div v-show="isActive==3" class="jcsjs">
				<!-- <div class="contTitle">
					<el-divider direction="vertical"></el-divider>精彩瞬间
				</div> -->
				<div class="contTit2">精彩瞬间</div>
				<div class="jcsjCont">
					<img class="jcsj1" src="~assets/img/serviceContent/jcsj1.png" alt="">
					<img class="jcsj2" src="~assets/img/serviceContent/jcsj2.png" alt="">
					<img class="jcsj3" src="~assets/img/serviceContent/jcsj3.png" alt="">
					<img class="jcsj4" src="~assets/img/serviceContent/jcsj4.png" alt="">
				</div>
			</div>
			<div v-show="isActive==4" class="gjhzs">
				<div class="contTitle" id="gjhz">
					<el-divider direction="vertical"></el-divider>国际合作
				</div>
				<div class="gjhzCont">
					<div class="detailtxt">联盟致力于打造国际知识产权交流合作平台，为国内外权利人提供高效畅通的沟通渠道。目前，联盟已与主 要国家(地区)驻华使领馆、具有影响力的全球性国际组织和区域性国际组织建立了常态化联系，并与欧盟 IPKey中国、CBBC、 JETRO、USCBC等组织开展务实合作，建立国际合作机制，为中国企业和外商投资 企业提供知识产权保护服务。</div>
					<div><img src="~assets/img/serviceContent/gjhzicon.png" alt=""></div>
				</div>
			</div>
			<div v-show="isActive==5" class="ktcgs">
				<div class="contTitle" id="ktcg">
					<el-divider direction="vertical"></el-divider>课题成果
				</div>
				<div class="ktcgCont">
					<div class="ktcgimages">
						<img src="~assets/img/serviceContent/ktcgicon1.png" alt="">
						<div>中国反侵权假冒年度报告</div>
					</div>
					<div class="ktcgimages">
						<img src="~assets/img/serviceContent/ktcgicon2.png" alt="">
						<div>知识产权的社会共治与立体保护</div>
					</div>
					<div class="ktcgimages">
						<img src="~assets/img/serviceContent/ktcgicon3.png" alt="">
						<div>中国电商平台反侵权假冒趋势报告</div>
					</div>
					<div class="ktcgimages">
						<img src="~assets/img/serviceContent/ktcgicon4.png" alt="">
						<div>电商平台极限施压咨询报告</div>
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
import navService from './navService.vue'
export default {
	data(){
		return {
			isSearchList: false,
			searchCont: '',
			hyhgData:null,
			pageNumber1: 1,
			pageSize: 3,
			total1: 1,
			isActive: 1,
		}
	},
	components:{
		myfooter,cloudnav,newsList,navService
	},
	mounted(){
		this.listFn45()
	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
		toactive(val){
			this.isActive = val
		},
		wqhgFn(){
			this.$router.push({ path:'/index/serviceContent/previousReview'})
		},
		listFn45(){//会议回顾
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:45,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber1,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.hyhgData = res.data.list
				this.hyhgData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total1 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
		val29: function (value) {
			if(value.length>29) return value.substr(0,29)+'...'
			else return value
		},
  },
}
</script>

<style lang='less'>
.serviceContents{
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
	.navTop{
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
	.serviceContentCont{
		width: 1200px;
		margin: 50px auto 0;
		.zyfw{
			margin-bottom: 60px;
		}
		.contTitle{
			height: 51px;
			line-height: 51px;
			font-size: 18px;
			font-family: AlibabaPuHuiTiR;
			color: #FFFFFF;
			background: #1357A4;
			padding-left: 18px;
		}
		.contTit2{
			height: 51px;
			line-height: 51px;
			font-size: 20px;
			font-family: AlibabaPuHuiTiR;
			color: #1357A4;
			padding-left: 18px;
			text-align: center;
		}
		.conts1{
			.pageTitle{
				font-size: 28px;
				font-family: AlibabaPuHuiTiM;
				color: #333333;
				line-height: 38px;
				text-align: center;
				position: relative;
				margin: 48px 0 50px;
			}
			.pageTitle::before{
				content: 'Anti infringement';
				position: absolute;
				display: block;
				width: 100%;
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
			.pageTitle1{
				margin: 68px auto 50px;
			}
			.pageTitle1::before{
				content: 'Intellectual property protection';
			}
			.biao1>img{
				width: 100%;
				display: block;
			}
			.contuls{
				display: flex;
				justify-content: space-between;
				.contlis{
					width: 218px;
					height: 186px;
					box-shadow: 0px 9px 17px 0px rgba(0, 0, 0, 0.05);
					text-align: center;
					.image{
						width: 100px;
						height: 100px;
						margin: 18px auto 16px;
						display: block;
						>img{width: 100%;height: 100%;}
					}
					.title{
						font-size: 16px;
						font-family: AlibabaPuHuiTiM;
						color: #333333;
						line-height: 22px;
						text-align: center;
					}
					.xian{
						width: 12px;
						height: 3px;
						margin: 13px auto 0;
						background: #1F90DA;
					}
				}
				
			}
			.contuls1{
				justify-content: center;
				.contlis{
					margin: 0 13px;
				}
			}
		}
		.conts2{
			margin: 76px 0;
			.tables{
				width: 100%;
				border:1px solid #D0D0D0;
				i{color: #1357A4;}
				th{
					min-width: 150px;
				}
				th:first-child{
					min-width: 300px;
				}
				th,td{
					border:1px solid #D0D0D0;
					height: 48.5px;
					padding: 0 8px;
				}
				thead{
					background: #F0F7FF;
					font-size: 16px;
					font-family: AlibabaPuHuiTiR;
					color: #333333;
					>tr:nth-child(2){
						>th:first-child{
							min-width: 160px;
						}
					}
				}
				tbody{
					font-size: 16px;
					font-family: AlibabaPuHuiTiR;
					color: #333333;
					text-align: center;
					tr:nth-child(2n){
						background: #F0F7FF;
					}
				}
			}
			.tables2{
				th:first-child{
					min-width: 150px;
				}
			}
		}
		.huigus{
			border: 1px solid #F0F7FF;
			margin-bottom: 78px;
			.lists{
				display: flex;
				flex-wrap: wrap;
				min-height: 257px;
				align-items: center;
				margin: 30px 0 0 0;
				.wqhg{
					width: 108px;
					height: 108px;
					background: #F0F7FF;
					font-size: 18px;
					font-family: AlibabaPuHuiTiR;
					color: #1357A4;
					line-height: 108px;
					text-align: center;
					margin-left: 23px;
					cursor: pointer;
				}
				.dts{
					width: 311px;
					background: #FFFFFF;
					border: 1px solid #E6E6E6;
					cursor: pointer;
					flex-shrink: 0;
					overflow: hidden;
					padding-bottom: 19px;
					margin-top: 30px;
					margin-bottom: 78px;
					margin: 0 28px 0 0;
					.dtTit{
						font-size: 18px;
						font-family: AlibabaPuHuiTiM;
						color: #333333;
						line-height: 25px;
						padding: 0 19px;
						font-weight: 550;
						margin-top: 15px;
						height: 50px;
					}
					.dtImg{
						width: 310px;
						height: 173px;
						overflow: hidden;
						img{display: block;width: 100%;height: 100%;transition: .3s;}
					}
				}
				.dts:hover{
					box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
					.dtImg>img{
						transform: scale(1.2);
					}
				}
			}
		}
		.jcsjs{
			margin-bottom: 78px;
			border: 1px solid #F0F7FF;
			.jcsjCont{
				position: relative;
				height: 698px;
				>img{
					position: absolute;
					padding: 10px;
					cursor: pointer;
					transition: .2s;
				}
				>img:hover{
					z-index: 10;
					transform: scale(1.3);
				}
				.jcsj1{
					top: 18px;
					left: 114px;
					width: 586px;
					height: 338px;
					z-index: 1;
				}
				.jcsj2{
					top: 71px;
					right: 79px;
					width: 531px;
					height: 342px;
					z-index: 2;
				}
				.jcsj3{
					top: 325px;
					left: 35px;
					width: 586px;
					height: 281px;
				}
				.jcsj4{
					top: 382px;
					right: 78px;
					width: 532px;
					height: 309px;
				}
			}
		}
		.gjhzs{
			.gjhzCont{
				margin-bottom: 78px;
				border: 1px solid #F0F7FF;
				.detailtxt{
					padding: 31px 30px 31px 36px;
					font-size: 18px;
					font-family: AlibabaPuHuiTiR;
					color: #666666;
					line-height: 27px;
				}
			}
		}
		.ktcgs{
			margin-bottom: 138px;
			.ktcgCont{
				border: 1px solid #F0F7FF;
				display: flex;
				justify-content: space-between;
				padding: 58px 140px 0;
				.ktcgimages{
					width: 184px;
					>img{
						width: 100%;
						height: 250px;
						display: block;
					}
					>div{
						font-size: 16px;
						font-family: AlibabaPuHuiTiM;
						color: #333333;
						line-height: 22px;
						padding: 25px 5px 55px;
						text-align: center;
					}
				}
			}
		}
	}
}
</style>