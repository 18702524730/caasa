<template>
	<div class="internationalExchanges">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/internationalExchange/banner.png" alt="">
			<div class="policyTitle">国际交流</div>
		</div>
		<navInternational  v-if="!isSearchList"></navInternational>
		<div v-if="!isSearchList" class="allianceNewsCont">
			<div class="activitys" id="gjjl">
				<div class="activityTitle">
					<el-divider direction="vertical"></el-divider>国际交流
				</div>
				<div class="dynamic">
					<el-tabs :tab-position="tabPosition" style="height: 200px;"  @tab-click="handleClick">
						<el-tab-pane label="订阅新闻">
							<div class="dts" v-for="(item,index) in dlxwData" :key="index"  @click="toDetail(item.contentId)">
								<div class="dtImg"><img :src="item.thumb" alt=""></div>
								<div class="dtTit">{{item.title | val29}}</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="订阅活动">
							<div class="dts" v-for="(item,index) in dlhdData" :key="index" @click="toDetail(item.contentId)">
								<div class="dtImg"><img :src="item.thumb" alt=""></div>
								<div class="dtTit">{{item.title | val29}}</div>
							</div>
						</el-tab-pane>
					</el-tabs>
					<a class="next" @click="tolink(activehandle)">查看关于更多“{{activehandle==10?'订阅新闻':activehandle==11?'订阅活动':''}}”>></a>
				</div>
			</div>
			<!-- <div class="whatsNew">
				<div class="whatsTitle">
					<el-divider direction="vertical"></el-divider>活动计划
				</div>
				<div class="eltabs">
					<el-tabs>
						<el-tab-pane>
							<div slot="label">
								<div class="time">{{new Date().getFullYear()+'年'+(new Date().getMonth()+1)+'月'}}</div>
								<div class="status">{{searchAdData1.statedesc}}</div>
							</div>
							<div class="tabCont">
								<img :src="searchAdData1.img" alt="">
								<div class="bg">
									<div class="title">{{searchAdData1.title}}</div>
								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane>
							<div slot="label">
								<div class="time">{{((new Date().getMonth()+1)==12?(new Date().getFullYear()+1):new Date().getFullYear())+'年'+(new Date().getMonth()+1==12?1:new Date().getMonth()+2)+'月'}}</div>
								<div class="status">{{searchAdData2.statedesc}}</div>
							</div>
							<div class="tabCont">
								<img :src="searchAdData2.img" alt="">
								<div class="bg">
									<div class="title">{{searchAdData2.title}}</div>
								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane>
							<div slot="label">
								<div class="time">{{((new Date().getMonth()+1)>=11?(new Date().getFullYear()+1):new Date().getFullYear())+'年'+(new Date().getMonth()+1==11?1:new Date().getMonth()+1==12?2:new Date().getMonth()+3)+'月'}}</div>
								<div class="status">{{searchAdData3.statedesc}}</div>
							</div>
							<div class="tabCont">
								<img :src="searchAdData3.img" alt="">
								<div class="bg">
									<div class="title">{{searchAdData3.title}}</div>
								</div>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div> -->
			<div class="notices">
				<div class="noticeTitle" id="hyzz">
					<el-divider direction="vertical"></el-divider>会议赞助商业服务内容及对接机构
				</div>
				<div class="huiyis">
					<div class="hyimg"><img src="~assets/img/internationalExchange/huiyi.png" alt=""></div>
					<div class="hyCont">
						<h3>会议赞助商业服务内容及对接机构</h3>
						<div>
							联盟每年会与相关国际组织合作开展高规格活动，为企业及品牌权利人提供沟通渠道的同时帮助其提升国内与国际知名度。其中联盟与IPKey（中国）携手打造的“中欧互联网知识产权保护与创新大会”已于全国各地成功举办多年并享有一定社会知名度。会议汇集国内外政、产、学、研代表，为电商、企业及品牌权利人提供平台，与国内外相关政府及行业协会组织展开深入对话。会议结合全球知识产权最新动态与经济形式，针对时下热点难点问题展开交流讨论，同时联盟与IPKey（中国）也会于会上发布最新知识产权相关研究报告。
							<br><br>赞助相关信息请联系：国际部 华霄：13910228627
						</div>
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
import navInternational from "./NavInternational.vue"
export default {
	data(){
		return {
			isSearchList: false,
			searchCont: '',
			searchCont: '',
      tabPosition: 'left',
			dlxwData: null,
			dlhdData: null,
			zxdtData2: null,
			activehandle: 10,
			searchAdData1: '',
			searchAdData2: '',
			searchAdData3: '',
		}
	},
	components:{
		myfooter,cloudnav,newsList,navInternational
	},
	mounted(){
		this.listFn26()
		this.listFn27()
		this.searchAdList1()
		this.searchAdList2()
		this.searchAdList3()
	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
		handleClick(tab, event) {
			this.activehandle = parseInt(tab.index)+10;
		},
		tolink(k){
			this.$router.push({ path:`/index/internationalExchange/allianceNewlist/${this.activehandle}`})
		},
		toDetail(contentId){
			this.$router.push({ path:`/index/internationalExchange/allianceNewDetail/${contentId}/${this.activehandle}`})
		},
		listFn26(){//订阅新闻
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:26,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:3   //每页条数
        }
      })
      .then((res) => {
				console.log(res.data)
        this.hideLoading()
				this.dlxwData = res.data.list
				console.log(this.dlxwData)
				this.dlxwData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		listFn27(){//订阅活动
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:27,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:3   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.dlhdData = res.data.list
				this.dlhdData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		searchAdList1(){//活动计划1
      this.showLoaing()
			console.log(new Date().getMonth()+1)
      this.axios.get(CONFIG.indexUrl+'/api/content/searchAdList?sildeName='+ (new Date().getMonth()+1) + '月')
      .then((res) => {
        this.hideLoading()
				this.searchAdData1 = res.data.data[0]
				this.searchAdData1.img = CONFIG.indexUrl + this.searchAdData1.img
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		searchAdList2(){//活动计划2
      this.showLoaing()
			var Months = new Date().getMonth()+1==11?12:new Date().getMonth()+1==12?1:new Date().getMonth()+2
      this.axios.get(CONFIG.indexUrl+'/api/content/searchAdList?sildeName='+ Months + '月')
      .then((res) => {
        this.hideLoading()
				this.searchAdData2 = res.data.data[0]
				this.searchAdData2.img = CONFIG.indexUrl + this.searchAdData2.img
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		searchAdList3(){//活动计划3
      this.showLoaing()
			var Months = new Date().getMonth()+1==11?1:new Date().getMonth()+1==12?2:new Date().getMonth()+3
      this.axios.get(CONFIG.indexUrl+'/api/content/searchAdList?sildeName='+ Months + '月')
      .then((res) => {
        this.hideLoading()
				this.searchAdData3 = res.data.data[0]
				this.searchAdData3.img = CONFIG.indexUrl + this.searchAdData3.img
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
		splits: function (value) {
			if (!value) return ''
			return value.split(" ")[0]
		},
		val29: function (value) {
			if(value.length>29) return value.substr(0,29)+'...'
			else return value
		},
		val25: function (value) {
			if(value.length>25) return value.substr(0,25)+'...'
			else return value
		},
  },
}
</script>

<style lang='less'>
.internationalExchanges{
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
	.allianceNewsCont{
		width: 1200px;
		margin: 51px auto 0;
		.activitys{
			border: 1px solid #E6E6E6;
			.activityTitle{
				height: 51px;
				line-height: 51px;
				font-size: 18px;
				font-family: AlibabaPuHuiTiR;
				color: #FFFFFF;
				background: #1357A4;
				padding-left: 18px;
			}
			.dynamic{
				padding: 30px 25px 0;
				.next{
					text-align: center;
					font-size: 14px;
					font-family: AlibabaPuHuiTiR;
					color: #666666;
					line-height: 20px;
					margin: 30px 0;
					display: block;
					cursor: pointer;
				}
				.dts{
					width: 315px;
					background: #FFFFFF;
					border: 1px solid #E6E6E6;
					cursor: pointer;
					overflow: hidden;
					margin-right: 14px;
					.dtTit{
						width: 273px;
						height: 50px;
						font-size: 18px;
						font-family: AlibabaPuHuiTiM;
						color: #333333;
						line-height: 25px;
						margin: 28px auto;
						flex-shrink: 0;
					}
					.dtImg{
						width: 314px;
						height: 176px;
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
				.dts:last-child{
					margin-right: 0;
				}
				.el-tab-pane{
					display: flex;
				}
				.el-tabs--left{
					height: 284px !important;
				}
				.el-tabs__active-bar{
					background: transparent;
				}
				.el-tabs__nav-wrap::after{
					width: 0;
				}
				.el-tabs__header{
					margin-right: 57px;
				}
				.el-tabs__item{
					border: 0;
					width: 119px;
					height: 47px;
					text-align: center;
					padding: 0;
					font-size: 19px;
					line-height: 47px;
					color: #666666;
				}
				.el-tabs__item.is-active{
					background: #1357A4;
					color: #FFFFFF;
				}
			}
		}
		.whatsNew{
			border: 1px solid #E6E6E6;
			margin-top: 56px;
			.whatsTitle{
				height: 51px;
				line-height: 51px;
				font-size: 18px;
				font-family: AlibabaPuHuiTiR;
				color: #FFFFFF;
				background: #1357A4;
				padding-left: 18px;
			}
		}
		.eltabs{
			padding: 42px 0 49px;
			.el-tabs__header{
				.el-tabs__active-bar,.el-tabs__nav-wrap::after{
					height: 0;
				}
				.el-tabs__nav-scroll{
					display: flex;
					justify-content: center;
				}
				.el-tabs__nav{
					display: flex;
					justify-content: space-between;
					width: 817px;
					height: 136px;
					position: relative;
					.el-tabs__item{
						width: 198px;
						height: 98px;
						background: #F9F9F9;
						border-radius: 7px;
						text-align: center;
						padding: 0;
						.time{
							height: 25px;
							font-size: 18px;
							width: 100%;
							font-family: AlibabaPuHuiTiM;
							line-height: 25px;
							text-shadow: 7px 8px 4px rgba(0, 0, 0, 0.12);
							margin-top: 22px;
						}
						.status{
							height: 20px;
							width: 100%;
							margin-top: 10px;
							font-size: 14px;
							font-family: AlibabaPuHuiTiM;
							line-height: 20px;
							text-shadow: 7px 8px 4px rgba(0, 0, 0, 0.12);
						}
					}
					.el-tabs__item:hover{
						color: #333;
					}
					.is-active,.is-active:hover{
						background: #F09049;
						box-shadow: 7px 8px 4px 0px rgba(0, 0, 0, 0.12);
						color: #fff;
					}
					.is-active::after{
						content: "\e790";
						color: #333;
						position: absolute;
						left: 86px;
						bottom: -32px;
						font-size: 25px;
						font-family: element-icons!important;
						speak: none;
						font-style: normal;
						font-weight: 400;
						font-variant: normal;
						text-transform: none;
						line-height: 1;
						vertical-align: baseline;
						display: inline-block;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}
				}
			}
			.el-tabs__content{
				.tabCont{
					width: 817px;
					height: 456px;
					overflow: hidden;
					margin: 0 auto;
					position: relative;
					img{width: 100%;}
					.bg{
						width: 818px;
						height: 372px;
						background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(33, 33, 33, 0.82) 100%);
						display: flex;
						align-items: flex-end;
						position: absolute;
						bottom: 0;
						.title{
							padding: 0 20px;
							width: 100%;
							height: 112px;
							font-size: 26px;
							font-family: AlibabaPuHuiTiM;
							color: #FFFFFF;
							line-height: 39px;
						}
					}
				}
			}
		}
		.notices{
			border: 1px solid #E6E6E6;
			margin: 56px 0;
			.noticeTitle{
				height: 51px;
				line-height: 51px;
				font-size: 18px;
				font-family: AlibabaPuHuiTiR;
				color: #FFFFFF;
				background: #1357A4;
				padding-left: 18px;
			}
			.huiyis{
				display: flex;
				.hyimg{
					width: 627px;
					height: 337px;
					flex-shrink: 0;
					img{width: 100%;}
				}
				.hyCont{
					margin-left: 45px;
					padding-right: 30px;
					h3{
						font-size: 20px;
						font-family: AlibabaPuHuiTiM;
						color: #333333;
						line-height: 27px;
						text-align: center;
						margin: 31px 0 25px;
					}
					>div{
						font-size: 16px;
						font-family: AlibabaPuHuiTiR;
						color: #333333;
						line-height: 22px;
					}
				}
			}
		}
	}
}
</style>