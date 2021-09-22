<template>
	<div class="NewssPolicyLists">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/newsPolicy/banner.png" alt="">
			<div class="policyTitle">新闻政策</div>
		</div>
		<div class="navTop" v-if="!isSearchList">
			<div class="navTabs">
				<div @click="handletwoClick('国内新闻')" :class="{active:activeName==='国内新闻'}"><a>国内新闻</a></div>
				<div @click="handletwoClick('国际新闻')" :class="{active:activeName==='国际新闻'}"><a>国际新闻</a></div>
				<div @click="handletwoClick('国内法规')" :class="{active:activeName==='国内法规'}"><a>国内法规</a></div>
				<div @click="handletwoClick('国际法规')" :class="{active:activeName==='国际法规'}"><a>国际法规</a></div>
				<div @click="handletwoClick('真伪鉴别')" :class="{active:activeName==='真伪鉴别'}"><a>真伪鉴别</a></div>
			</div>
		</div>
		<div v-if="!isSearchList" class="allianceNewsCont">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="国内新闻" name="国内新闻">
					<div class="lists">
						<!-- <div v-for="(item,key) in gnxwData" :key="key" @click="toDetail(item.contentId)" class="gnxwlist">
							<a class="title">{{item.title}}</a>
							<div class="timer">{{item.inputdate | dateFormat}}</div>
						</div> -->
						<div class="domeCont" v-for="(item,key) in gnxwData" :key="key" @click="toDetail(item.contentId)">
							<div class="domebitTitle">{{item.title}}</div>
							<div class="domedis">	
								<div class="domeLimg"><img :src="item.thumb" alt=""></div>
								<div class="domeRcen">
									<div class="domebitCont">{{item.description | val218}} <span>【详细】</span></div>
									<div class="domeLook">
										<div><i class="el-icon-time"></i>{{item.inputdate | dateFormat | splits}}</div>
										<div><i class="el-icon-view"></i>{{item.viewNum}}</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div class="paginations">
						<el-pagination
							background
							layout="prev, pager, next"
							@current-change="handleCurrentChange1"
							:page-size="pageSize"
							:total="total1">
						</el-pagination>
					</div>
				</el-tab-pane>
				<el-tab-pane label="国际新闻" name="国际新闻">
					<div class="lists">
						<!-- <div v-for="(item,key) in gjxwData" :key="key" @click="toDetail(item.contentId)" class="gnxwlist">
							<a class="title">{{item.title}}</a>
							<div class="timer">{{item.inputdate | dateFormat}}</div>
						</div> -->
						<div class="domeCont" v-for="(item,key) in gjxwData" :key="key" @click="toDetail(item.contentId)">
							<div class="domebitTitle">{{item.title}}</div>
							<div class="domedis">	
								<div class="domeLimg"><img :src="item.thumb" alt=""></div>
								<div class="domeRcen">
									<div class="domebitCont">{{item.description | val218}}</div>
									<div class="domeLook">
										<div><i class="el-icon-time"></i>{{item.inputdate | dateFormat | splits}}</div>
										<div><i class="el-icon-view"></i>{{item.viewNum}}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="paginations">
						<el-pagination
							background
							layout="prev, pager, next"
							@current-change="handleCurrentChange2"
							:page-size="pageSize"
							:total="total2">
						</el-pagination>
					</div>
				</el-tab-pane>
				<el-tab-pane label="国内法规" name="国内法规">
					<div class="lists">
						<!-- <div v-for="(item,key) in gnfgData" :key="key" @click="toDetail(item.contentId)" class="gnxwlist">
							<a class="title">{{item.title}}</a>
							<div class="timer">{{item.inputdate | dateFormat}}</div>
						</div> -->
						<div class="domeCont" v-for="(item,key) in gnfgData" :key="key" @click="toDetail(item.contentId)">
							<div class="domebitTitle">{{item.title}}</div>
							<div class="domedis">	
								<div class="domeLimg"><img :src="item.thumb" alt=""></div>
								<div class="domeRcen">
									<div class="domebitCont">{{item.description | val218}}</div>
									<div class="domeLook">
										<div><i class="el-icon-time"></i>{{item.inputdate | dateFormat | splits}}</div>
										<div><i class="el-icon-view"></i>{{item.viewNum}}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="paginations">
						<el-pagination
							background
							layout="prev, pager, next"
							@current-change="handleCurrentChange3"
							:page-size="pageSize"
							:total="total3">
						</el-pagination>
					</div>
				</el-tab-pane>
				<el-tab-pane label="国际法规" name="国际法规">
					<div class="lists">
						<!-- <div v-for="(item,key) in gjfgData" :key="key" @click="toDetail(item.contentId)" class="gnxwlist">
							<a class="title">{{item.title}}</a>
							<div class="timer">{{item.inputdate | dateFormat}}</div>
						</div> -->
						<div class="domeCont" v-for="(item,key) in gjfgData" :key="key" @click="toDetail(item.contentId)">
							<div class="domebitTitle">{{item.title}}</div>
							<div class="domedis">	
								<div class="domeLimg"><img :src="item.thumb" alt=""></div>
								<div class="domeRcen">
									<div class="domebitCont">{{item.description | val218}}</div>
									<div class="domeLook">
										<div><i class="el-icon-time"></i>{{item.inputdate | dateFormat | splits}}</div>
										<div><i class="el-icon-view"></i>{{item.viewNum}}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="paginations">
						<el-pagination
							background
							layout="prev, pager, next"
							@current-change="handleCurrentChange4"
							:page-size="pageSize"
							:total="total4">
						</el-pagination>
					</div>
				</el-tab-pane>
				<el-tab-pane label="真伪鉴别" name="真伪鉴别">
					<div class="lists">
						<!-- <div v-for="(item,key) in zwjdData" :key="key" @click="toDetail(item.contentId)" class="gnxwlist">
							<a class="title">{{item.title}}</a>
							<div class="timer">{{item.inputdate | dateFormat}}</div>
						</div> -->
						<div class="domeCont" v-for="(item,key) in zwjdData" :key="key" @click="toDetail(item.contentId)">
							<div class="domebitTitle">{{item.title}}</div>
							<div class="domedis">	
								<div class="domeLimg"><img :src="item.thumb" alt=""></div>
								<div class="domeRcen">
									<div class="domebitCont">{{item.description | val218}}</div>
									<div class="domeLook">
										<div><i class="el-icon-time"></i>{{item.inputdate | dateFormat | splits}}</div>
										<div><i class="el-icon-view"></i>{{item.viewNum}}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="paginations">
						<el-pagination
							background
							layout="prev, pager, next"
							@current-change="handleCurrentChange5"
							:page-size="pageSize"
							:total="total5">
						</el-pagination>
					</div>
				</el-tab-pane>
			</el-tabs>
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
			searchCont:'',
			gnxwData: null,
			gjxwData: null,
			gnfgData: null,
			gjfgData: null,
			zwjdData:null,
			total1: 1,
			total2: 1,
			total3: 1,
			total4: 1,
			total5: 1,
			pageSize:12,
			pageNumber1: 1,
			pageNumber2: 1,
			pageNumber3: 1,
			pageNumber4: 1,
			pageNumber5: 1,
			activeName: '国内新闻',
		}
	},
	components:{
		myfooter,cloudnav,newsList
	},
	mounted(){
		this.activeName = this.$route.params.active
		if(this.activeName === '国内新闻') this.listFn10()
		else if(this.activeName === '国际新闻') this.listFn11()
		else if(this.activeName === '国内法规') this.listFn14()
		else if(this.activeName === '国际法规') this.listFn15()
		else if(this.activeName === '真伪鉴别') this.listFn16()
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
			console.log(tab)
			this.activeName = tab.name;
		},
		handletwoClick(id){
			this.activeName = id;
			this.$router.replace({ path:`/index/newsPolicy/NewssPolicyList/${id}`})
		},
		handleCurrentChange1(val){
      this.pageNumber1 = `${val}`
			this.listFn10()
    },
		handleCurrentChange2(val){
      this.pageNumber2 = `${val}`
			this.listFn11()
    },
		handleCurrentChange3(val){
      this.pageNumber3 = `${val}`
			this.listFn14()
    },
		handleCurrentChange4(val){
      this.pageNumber4 = `${val}`
			this.listFn15()
    },
		handleCurrentChange5(val){
      this.pageNumber5 = `${val}`
			this.listFn16()
    },
		toDetail(contentId){
			this.$router.push({ path:`/index/newsPolicy/allianceNewDetail/${contentId}/30`})
		},
		listFn10(){//国内新闻
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:10,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber1,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.gnxwData = res.data.list
				this.gnxwData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total1 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn11(){//国际新闻
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:11,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber2,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.gjxwData = res.data.list
				this.gjxwData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total2 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn14(){//国内法规
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:14,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber3,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.gnfgData = res.data.list
				this.gnfgData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total3 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn15(){//国际法规
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:15,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber4,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.gjfgData = res.data.list
				this.gjfgData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total4 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn16(){//真伪鉴定
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:16,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber5,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.zwjdData = res.data.list
				this.zwjdData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total5 = res.data.total
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
		val218: function (value) {
			if(value.length>218) return value.substr(0,218)+'...'
			else return value
		},
  },
}
</script>

<style lang='less'>
.NewssPolicyLists{
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
		.el-tabs__header{
			display: none;
			.el-tabs__active-bar{
				height: 0;
			}
			.el-tabs__nav-wrap::after{
				height: 0;
			}
			.el-tabs__item{
				font-size: 20px;
				text-align: center;
				height: 47px;
				line-height: 47px;
				border-radius: 4px;
				padding: 0 31px;
				color: #666666;
			}
			.el-tabs__item:hover{
				color: #666666;
			}
			.is-active,.is-active:hover{
				color: #fff;
				background: #1357A4;
			}
		}
		.el-tabs__content{
			margin-bottom: 76px;
		}
		.el-tab-pane{
			.lists{
				display: flex;
				flex-wrap: wrap;
				min-height: 344px;
				// .gnxwlist{
				// 	display: flex;
				// 	justify-content: space-between;
				// 	height: 70px;
				// 	cursor: pointer;
				// 	width: 100%;
				// 	font-family: AlibabaPuHuiTiR;
				// 	padding: 0 30px;
				// 	border-bottom: 1px solid #E6E6E6;
				// 	.title{
				// 		font-size: 20px;
				// 		color: #333333;
				// 		line-height: 70px;
				// 		width: 900px;
				// 		text-overflow: ellipsis;
				// 		overflow: hidden;
				// 		white-space: nowrap;
				// 	}
				// 	.timer{
				// 		font-size: 12px;
				// 		color: #999999;
				// 		line-height: 70px;
				// 	}
				// }
				.domeCont{
					// display: flex;
					// align-items: center;
					padding: 20px 7px 20px 18px;
					border-bottom: 1px solid #E6E6E6;
					cursor: pointer;
					width: 100%;
					.domedis{
						display: flex;
					}
					.domebitTitle{
						font-size: 22px;
						width: 100%;
						height: 30px;
						font-family: AlibabaPuHuiTiM;
						color: #333333;
						line-height: 30px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 14px;
					}
					.domeLimg{
						width: 220px;
						height: 124px;
						overflow: hidden;
						img{
							width: 100%;
							height: 100%;
							transition: .3s;
							display: block;
						}
					}
					.domeRcen{
						margin-left: 12px;
						width: 958px;
						.domebitCont{
							font-weight: normal;
							color: #333333;
							line-height: 24px;
							height: 42px;
							font-size: 14px;
							font-family: AlibabaPuHuiTiR;
							height: 96px;
							>span{
								color: #1357A4;
								cursor: pointer;
							}
							>span:hover{
								text-decoration: underline;
							}
						}
						.domeLook{
							display: flex;
							align-items: center;
							justify-content: space-between;
							height: 17px;
							font-size: 12px;
							font-family: AlibabaPuHuiTiR;
							color: #999999;
							line-height: 17px;
							margin-top: 13px;
							i{
								font-size: 18px;
								vertical-align: sub;
								margin-right: 6px;
							}
							>div:last-child{margin-left: 10px;}
						}
					}
				}
				.domeCont:last-child{
					border-bottom: 0;
				}
				.domeCont:hover img{
					transform: scale(1.2);
				}
			}
			.paginations{
				margin-top: 30px;
				>div{
					display: flex;
					justify-content: center;
				}
				.el-pagination.is-background .el-pager li,.el-pagination.is-background .btn-prev,.el-pagination.is-background .btn-next{
					width: 40px;
					height: 40px;
					line-height: 40px;
					font-size: 14px;
					color: #333;
				}
				.el-pagination.is-background .el-pager li:not(.disabled).active{
					background: #1357A4;
					color: #fff;
				}
			}
		}
	}
}
</style>