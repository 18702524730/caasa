<template>
	<div class="allianceNewlists">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img :src="toactive<10?require('../../assets/img/newsPolicy/banner2.png'):require('../../assets/img/internationalExchange/banner.png')" alt="">
			<div class="policyTitle">{{toactive<10?'联盟动态':'国际交流'}}</div>
		</div>
		<div v-if="!isSearchList" class="allianceNewsCont">
			<el-tabs v-model="activeName" @tab-click="handleClick" v-if="toactive<10">
				<el-tab-pane label="联盟峰会" name="trendReport">
					<div class="lists">
						<div class="dts" v-for="(item,index) in lmfhData" :key="index" @click="toDetail(item.contentId)">
							<div class="dtImg"><img :src="item.thumb" alt=""></div>
							<div class="dtTit">{{item.title | val35}}</div>
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
				<el-tab-pane label="特色活动" name="stereoscopicProtection">
					<div class="lists">
						<div class="dts" v-for="(item,index) in tshdData" :key="index" @click="toDetail(item.contentId)">
							<div class="dtImg"><img :src="item.thumb" alt=""></div>
							<div class="dtTit">{{item.title | val35}}</div>
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
				<el-tab-pane label="主题沙龙" name="earlyWarningReport">
					<div class="lists">
						<div class="dts" v-for="(item,index) in ztslData" :key="index" @click="toDetail(item.contentId)">
							<div class="dtImg"><img :src="item.thumb" alt=""></div>
							<div class="dtTit">{{item.title | val35}}</div>
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
				<el-tab-pane label="会议活动" name="conferenceActivities">
					<div class="lists">
						<div class="dts" v-for="(item,index) in hyhdData" :key="index" @click="toDetail(item.contentId)">
							<div class="dtImg"><img :src="item.thumb" alt=""></div>
							<div class="dtTit">{{item.title | val35}}</div>
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
			</el-tabs>
			<el-tabs v-model="activeName" @tab-click="handleClick2" v-if="toactive>=10">
				<el-tab-pane label="订阅新闻" name="trendReport">
					<div class="lists">
						<div class="dts" v-for="(item,index) in dyxwData" :key="index" @click="toDetail(item.contentId)">
							<div class="dtImg"><img :src="item.thumb" alt=""></div>
							<div class="dtTit">{{item.title | val35}}</div>
						</div>
					</div>
					<div class="paginations">
						<el-pagination
							background
							layout="prev, pager, next"
							@current-change="handleCurrentChange10"
							:page-size="pageSize"
							:total="total10">
						</el-pagination>
					</div>
				</el-tab-pane>
				<el-tab-pane label="订阅活动" name="stereoscopicProtection">
					<div class="lists">
						<div class="dts" v-for="(item,index) in dyhdData" :key="index" @click="toDetail(item.contentId)">
							<div class="dtImg"><img :src="item.thumb" alt=""></div>
							<div class="dtTit">{{item.title | val35}}</div>
						</div>
					</div>
					<div class="paginations">
						<el-pagination
							background
							layout="prev, pager, next"
							@current-change="handleCurrentChange11"
							:page-size="pageSize"
							:total="total11">
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
			searchCont: '',
			lmfhData: null,
			tshdData: null,
			ztslData: null,
			hyhdData: null,
			zxdtData1: null,
			zxdtData2: null,
			dyxwData: null,
			dyhdData:null,
			activehandle: 0,
			total1: 1,
			total2: 1,
			total3: 1,
			total4: 1,
			total10: 1,
			total11: 1,
			pageSize: 9,
			pageNumber1: 1,
			pageNumber2: 1,
			pageNumber3: 1,
			pageNumber4: 1,
			pageNumber10: 1,
			pageNumber11: 1,
			activeName: 'trendReport',
			toactive:'', //0,1，2，3联盟动态10，11国际交流
		}
	},
	components:{
		myfooter,cloudnav,newsList
	},
	mounted(){
		this.toactive = this.$route.params.active
		if(this.$route.params.active == 0 || this.$route.params.active == 10) this.activeName = 'trendReport' 
		else if(this.$route.params.active == 1 || this.$route.params.active == 11) this.activeName = 'stereoscopicProtection'
		else if(this.$route.params.active == 2) this.activeName = 'earlyWarningReport'
		else if(this.$route.params.active == 3) this.activeName = 'conferenceActivities'
		if(this.toactive < 10){
			this.listFn18()
			this.listFn19()
			this.listFn20()
    	this.listFn36() //会议活动
		}
		if(this.toactive >= 10){
			this.listFn27()
			this.listFn26()
		}
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
			this.toactive = tab.index;
		},
		handleClick2(tab, event) {
			this.toactive = parseInt(tab.index)+10;
		},
		handleCurrentChange1(val){
      this.pageNumber1 = `${val}`
			this.listFn18()
    },
		handleCurrentChange2(val){
      this.pageNumber2 = `${val}`
			this.listFn19()
    },
		handleCurrentChange3(val){
      this.pageNumber3 = `${val}`
			this.listFn20()
    },
		handleCurrentChange4(val){
      this.pageNumber4 = `${val}`
			this.listFn36()
    },
		handleCurrentChange10(val){
      this.pageNumber10 = `${val}`
			this.listFn26()
    },
		handleCurrentChange11(val){
      this.pageNumber11 = `${val}`
			this.listFn27()
    },
		toDetail(contentId){
			if(this.toactive < 10) this.$router.push({ path:`/index/allianceNews/allianceNewDetail/${contentId}/${this.toactive}`})
			else if (this.toactive >= 10 && this.toactive < 20) this.$router.push({ path:`/index/internationalExchange/allianceNewDetail/${contentId}/${this.toactive}`})
		},
		listFn18(){//联盟峰会
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:18,    //栏目ID
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
				this.lmfhData = res.data.list
				this.lmfhData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total1 = res.data.total
        
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
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber2,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.tshdData = res.data.list
				this.tshdData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total2 = res.data.total
        
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
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber3,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.ztslData = res.data.list
				this.ztslData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total3 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn26(){//订阅新闻
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:26,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber10,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.dyxwData = res.data.list
				this.dyxwData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total10 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
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
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber11,   //页码
          pageSize:this.pageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.dyhdData = res.data.list
				this.dyhdData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total11 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn36(){//会议活动
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:36,    //栏目ID
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
				this.hyhdData = res.data.list
				this.hyhdData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total4 = res.data.total
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
		val35: function (value) {
			if(value.length>35) return value.substr(0,35)+'...'
			else return value
		},
  },
}
</script>

<style lang='less'>
.allianceNewlists{
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
		.el-tabs__header{
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
		.dts{
			width: 379px;
			background: #FFFFFF;
			border: 1px solid #E6E6E6;
			cursor: pointer;
			flex-shrink: 0;
			overflow: hidden;
			padding-bottom: 25px;
			margin-top: 30px;
			.dtTit{
				font-size: 18px;
				font-family: AlibabaPuHuiTiM;
				color: #333333;
				line-height: 25px;
				padding: 0 19px;
				font-weight: 550;
				margin-top: 25px;
				height: 50px;
			}
			.dtImg{
				width: 379px;
				height: 212px;
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
		.dts:nth-child(3n-1){
			margin-left: 30px;
			margin-right: 30px;
		}
	}
}
</style>