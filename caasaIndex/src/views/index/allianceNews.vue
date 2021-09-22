<template>
	<div class="allianceNewss">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/newsPolicy/banner2.png" alt="">
			<div class="policyTitle">联盟动态</div>
		</div>
		<div class="navTop" v-if="!isSearchList">
			<div class="navTabs">
				<div><a href="#lmhd" class="maodian1">联盟活动</a></div>
				<div><a href="#zxdt" class="maodian1">最新动态</a></div>
				<div><a href="#tzgg" class="maodian1">通知公告</a></div>
			</div>
		</div>
		<div v-if="!isSearchList" class="allianceNewsCont">
			<div class="activitys" id="lmhd">
				<div class="activityTitle">
					<el-divider direction="vertical"></el-divider>联盟活动
				</div>
				<div class="dynamic">
					<el-tabs :tab-position="tabPosition" style="height: 200px;"  @tab-click="handleClick">
						<el-tab-pane label="联盟峰会">
							<div class="dts" v-for="(item,index) in lmfhData" :key="index"  @click="toDetail(item.contentId)">
								<div class="dtImg"><img :src="item.thumb" alt=""></div>
								<div class="dtTit">{{item.title | val29}}</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="特色活动">
							<div class="dts" v-for="(item,index) in tshdData" :key="index" @click="toDetail(item.contentId)">
								<div class="dtImg"><img :src="item.thumb" alt=""></div>
								<div class="dtTit">{{item.title | val29}}</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="主题沙龙">
							<div class="dts" v-for="(item,index) in ztslData" :key="index" @click="toDetail(item.contentId)">
								<div class="dtImg"><img :src="item.thumb" alt=""></div>
								<div class="dtTit">{{item.title | val29}}</div>
							</div>
						</el-tab-pane>
					</el-tabs>
					<a class="next" @click="tolink(activehandle)">查看关于更多“{{activehandle==0?'联盟峰会':activehandle==1?'特色活动':'主题沙龙'}}”的活动>></a>
				</div>
			</div>
			<div class="whatsNew">
				<div class="whatsTitle" id="zxdt">
					<el-divider direction="vertical"></el-divider>最新动态
				</div>
				<div class="whatsCont">
					<div class="whatsLeft">
						<el-carousel height="337px" :autoplay="false" arrow="never">
							<el-carousel-item v-for="(item,key) in zxdtData1" :key="key">
								<div class="lbImg">
									<img :src="item.img" alt="">
									<div class="lbBgs">
										<div class="lbTit" :title="item.title">{{item.title}}</div>
									</div>
								</div>
							</el-carousel-item>
						</el-carousel>
					</div>
					<div class="whatsRight">
						<a v-for="(item,key) in zxdtData2" :key="key" class="whatsList" @click="toDetail(item.contentId)">
							<div class="title" :title="item.title">{{item.title | val25}}</div>
							<div>{{item.inputdate | dateFormat | splits}}</div>
						</a>
					</div>
				</div>
			</div>
			<div class="notices">
				<div class="noticeTitle" id="tzgg">
					<el-divider direction="vertical"></el-divider>通知公告
				</div>
				<div class="noticeCont">
					<div class="noticeList">
						<div class="noticeCT"><img src="~assets/img/newsPolicy/gonggao.png" alt="">公告栏: </div>
						<div class="title" v-if="tzggData&&tzggData[0]" @click="newsDetail(tzggData[0].contentId)">{{tzggData[0].title}}</div>
					</div>
				</div>
			</div>
			<el-dialog
				title=""
				:visible.sync="dialogVisible"
				width="700px">
				<div class="contentcss">
					<div class="title">{{contentDetail.title}}</div>
					<div class="laiyuan"><span v-if="contentDetail.laiyuan">来源：{{contentDetail.laiyuan}} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>{{contentDetail.inputdate | dateFormat}}</div>
					<div v-html="contentDetail.content" class="contTxt"></div>
				</div>
			</el-dialog>
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
      tabPosition: 'left',
			lmfhData: null,
			tshdData: null,
			ztslData: null,
			zxdtData1: null,
			zxdtData2: null,
			tzggData: null,
			activehandle: 0,
			dialogVisible: false,
			contentDetail: '',
		}
	},
	components:{
		myfooter,cloudnav,newsList
	},
	mounted(){
		this.listFn18()
		this.listFn19()
		this.listFn20()
		this.listFn21one()
		this.listFn21two()
		this.listFn23()
		$(".maodian1").click(function(){
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
					if ($target.length) {
							var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset},800);
					return false;
					}
			}
   	});
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
			this.activehandle = tab.index;
		},
		tolink(k){
			// activehandle==0?'联盟峰会':activehandle==1?'特色活动':'主题沙龙'
			this.$router.push({ path:`/index/allianceNews/allianceNewlist/${this.activehandle}`})
		},
		toDetail(contentId){
			this.$router.push({ path:`/index/allianceNews/allianceNewDetail/${contentId}/${this.activehandle}`})
		},
		newsDetail(k){//新闻详情
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/'+k)
      .then((res) => {
        this.hideLoading()
				this.contentDetail = res.data.data
				console.log(this.contentDetail)
        this.dialogVisible = true
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn23(){//通知公告
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:23,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          // isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:1   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.tzggData = res.data.list
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn18(){//联盟峰会
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:18,    //栏目ID
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
				this.lmfhData = res.data.list
				this.lmfhData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn19(){//特色活动
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:19,    //栏目ID
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
				this.tshdData = res.data.list
				this.tshdData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn20(){//主题沙龙
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:20,    //栏目ID
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
				this.ztslData = res.data.list
				this.ztslData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn21one(){//最新动态
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/searchAdList?sildeName=联盟动态')
      .then((res) => {
        this.hideLoading()
				this.zxdtData1 = res.data.data
				this.zxdtData1.forEach(element => {
					element.img = CONFIG.indexUrl + element.img
				});
				this.$nextTick(() => {
					$(".whatsLeft .el-carousel__indicator").toArray().forEach((element,index) => {
						$(element).html(index+1)
					});
				})
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn21two(){//最新动态
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:21,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:'',    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:8   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.zxdtData2 = res.data.list
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
.allianceNewss{
	.el-dialog__body{
		text-align: center;
		.contentcss{
			.title{
				font-size: 28px;
				font-family: AlibabaPuHuiTiM;
				color: #333333;
				line-height: 38px;
				text-align: center;
				font-weight: 550px;
				margin: 40px 0 20px;
			}
			.laiyuan{
				margin-bottom: 40px;
				font-size: 14px;
				font-family: AlibabaPuHuiTiR;
				color: #666666;
				line-height: 20px;
				text-align: center;
			}
			.contTxt{
				margin: 0 auto;
				line-height: 30px;
				// text-indent: 28px;
				img{
					max-width: 100%;
				}
			}
		}
	}
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
			.whatsCont{
				display: flex;
				.whatsRight{
					width: 573px;
					padding: 21px 28px;
					.whatsList{
						margin-top: 17px;
						display: flex;
						cursor: pointer;
						justify-content: space-between;
						font-size: 16px;
						font-family: AlibabaPuHuiTiR;
						color: #333333;
						>div:last-child{color: #999;}
					}
					.whatsList:first-child{
						margin-top: 0;
					}
				}
				.whatsLeft{
					width: 627px;
					height: 337px;
					.lbImg{
						position: relative;
						height: 100%;
						overflow: hidden;
						>img{display: block;width: 100%;}
						.lbBgs{
							height: 244px;
							background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(33, 33, 33, 0.82) 100%);
							position: absolute;
							bottom: 0;
							padding: 0 20px;
							width: 100%;
							.lbTit{
								height: 78px;
								font-size: 26px;
								color: #FFFFFF;
								line-height: 39px;
								margin-top: 146px;
							}
						}
					}
					.el-carousel__indicators{
						right: 0;
						left: auto;
						transform: translateX(0);
						margin-bottom: 13px;
						.el-carousel__indicator{
							width: 30px;
							height: 34px;
							background: #333333;
							color: #fff;
							text-align: center;
							padding: 0;
							font-size: 16px;
							font-family: AlibabaPuHuiTiR;
							line-height: 34px;
							button{
								height: 0;
							}
						}
						.is-active{
							background: #1357A4;
						}
					}
					.el-carousel__item h3 {
						color: #475669;
						font-size: 14px;
						opacity: 0.75;
						line-height: 200px;
						margin: 0;
					}
					.el-carousel__item:nth-child(2n) {
						background-color: #99a9bf;
					}
					.el-carousel__item:nth-child(2n+1) {
						background-color: #d3dce6;
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
			.noticeCont{
				padding: 0 18px;
				.noticeList{
					display: flex;
					align-items: center;
					height: 50px;
					line-height: 50px;
					font-size: 16px;
					.noticeCT{
						color: #FFA13E;
						margin-right: 8px;
					}
					.title{
						cursor: pointer;
					}
					img{width: 27px;margin-right: 11px;}
				}
			}
		}
	}
}
</style>