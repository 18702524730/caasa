<template>
	<div class="InternationalNewss">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/internationalExchange/banner.png" alt="">
			<div class="policyTitle">国际动态</div>
		</div>
		<navInternational  v-if="!isSearchList"></navInternational>
		<div v-if="!isSearchList" class="allianceNewsCont">
			<div class="activitys" id="gjxw">
				<div class="activityTitle">
					<el-divider direction="vertical"></el-divider>国际新闻
				</div>
				<div class="gjxwCont" v-if="gjxwData">
					<img :src="gjxwData.img" alt="">
					<div class="gjxwTxt">
						<div>{{gjxwData.sildeName}}</div>
					</div>
				</div>
				<div class="gjxwul" v-for="(item,key) in gjxw2Data" :key="key"  @click="toDetail(item.contentId)">
					<div class="title" :title="item.title">{{item.title}}</div>
					<div  class="img"><img :src="item.thumb" alt=""></div>
				</div>
			</div>
			<div class="whatsNew">
				<div class="whatsTitle" id="yjbg">
					<el-divider direction="vertical"></el-divider>预警报告
				</div>
				<div class="dtlist">
					<div class="dts" v-for="(item,index) in yjbgData" :key="index"  @click="toDetail(item.contentId)">
						<div class="dtImg"><img :src="item.thumb" alt=""></div>
						<div class="dtTit" :title="item.title">{{item.title}}</div>
						<div class="dtTxt" :title="item.description">{{item.description | val43}}</div>
						<div class="dtview">
							<div class="viewnum"><i class="el-icon-view"></i>{{item.viewNum}}</div>
							<div class="quanwen">阅读全文</div>
						</div>
					</div>
				</div>
			</div>
			<div class="whatsNew">
				<div class="whatsTitle" id="zodl">
					<el-divider direction="vertical"></el-divider>中欧地理标志
				</div>
				<div class="dlbzCont">
					<div class="dlbzlist" v-for="(item,key) in zidlbzData" :key="key"  @click="toDetail(item.contentId)">
						<div class="dlbzimg"><img :src="item.thumb" alt=""></div>
						<div class="dlbzxx">
							<div class="title" :title="item.title">{{item.title}}</div>
							<div class="text" :title="item.description">{{item.description | val49}}</div>
							<div class="time">{{item.laiyuan}} &nbsp; &nbsp; &nbsp; &nbsp;{{item.inputdate | dateFormat}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="whatsNew">
				<div class="whatsTitle" id="gjds">
					<el-divider direction="vertical"></el-divider>国际电商法
				</div>
				<div class="dlbzCont">
					<div class="dlbzlist" v-for="(item,key) in gjdsfData" :key="key"  @click="toDetail(item.contentId)">
						<div class="dlbzimg"><img :src="item.thumb" alt=""></div>
						<div class="dlbzxx">
							<div class="title" :title="item.title">{{item.title}}</div>
							<div class="text" :title="item.description">{{item.description | val49}}</div>
							<div class="time">{{item.laiyuan}} &nbsp; &nbsp; &nbsp; &nbsp;{{item.inputdate | dateFormat}}</div>
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
import navInternational from "./NavInternational.vue"
import filters from '../../utils/filters/filters.js'
export default {
	data(){
		return {
			isSearchList: false,
			searchCont: '',
			gjxwData: null,
			gjxw2Data: null,
			yjbgData: null,
			zidlbzData: null,
			gjdsfData: null,
		}
	},
	components:{
		myfooter,cloudnav,newsList,navInternational
	},
	mounted(){
		this.gjxwList()
		this.listFn28()
		this.listFn29()
		this.listFn30()
		this.listFn31()
	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
		// tolink(k){
		// 	this.$router.push({ path:`/index/internationalExchange/allianceNewlist/${this.activehandle}`})
		// },
		toDetail(contentId){
			this.$router.push({ path:`/index/InternationalNews/allianceNewDetail/${contentId}/20`})
		},
		gjxwList(){//国际动态 国际新闻
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/searchAdList?sildeName=国际动态')
      .then((res) => {
        this.hideLoading()
				this.gjxwData = res.data.data[0]
				this.gjxwData.img = CONFIG.indexUrl + this.gjxwData.img
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn28(){//国际新闻2
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:28,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:2   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.gjxw2Data = res.data.list
				this.gjxw2Data.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		listFn29(){//预警报告
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:29,    //栏目ID
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
				this.yjbgData = res.data.list
				this.yjbgData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		listFn30(){//中欧地理标志
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:30,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:4   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.zidlbzData = res.data.list
				this.zidlbzData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		listFn31(){//国际电商法
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:31,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:4   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.gjdsfData = res.data.list
				this.gjdsfData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
		splits: function (value) {
			if (!value) return ''
			return value.split(" ")[0]
		},
		val49: function (value) {
			if(value.length>49) return value.substr(0,49)+'...'
			else return value
		},
		val43: function (value) {
			if(value.length>43) return value.substr(0,43)+'...'
			else return value
		},
  },
}
</script>

<style lang='less'>
.InternationalNewss{
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
			.gjxwCont{
				position: relative;
				height: 363px;
				overflow: hidden;
				>img{
					width: 100%;
					display: block;
				}
				.gjxwTxt{
					position: absolute;
					bottom: 0;
					height: 100%;
					width: 100%;
					display: flex;
					align-items: flex-end;
					background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(33, 33, 33, 0.82) 100%);
					>div{
						height: 112px;
						font-size: 30px;
						font-family: AlibabaPuHuiTiM;
						color: #FFFFFF;
						line-height: 39px;
						padding: 0 40px;
					}
				}
			}
			.gjxwul{
				height: 227px;
				display: flex;
				cursor: pointer;
				align-items: center;
				justify-content: space-between;
				padding: 0 46px 0 26px;
				border-bottom: 1px solid #E6E6E6;
				.img{
					width: 221px;
					height: 123px;
					overflow: hidden;
					img{
						width: 100%;
						display: block;
						height: 100%;
						transition: .3s;
					}
				}
				.title{
					font-size: 22px;
					font-family: AlibabaPuHuiTiM;
					color: #333333;
					line-height: 30px;
					width: 860px;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
			}
			.gjxwul:last-child{
				border-bottom: 0;
			}
			.gjxwul:hover img{
				transform: scale(1.2);
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
			.dlbzCont{
				display: flex;
				flex-wrap: wrap;
				padding: 30px 0;
				.dlbzlist{
					width: 50%;
					height: 155px;
					padding: 0 13px;
					display: flex;
					align-items: center;
					border: 1px solid #E6E6E6;
					cursor: pointer;
					.dlbzimg{
						width: 159px;
						height: 90px;
						margin-right: 15px;
						overflow: hidden;
						>img{
							width: 100%;
							height: 100%;
							display: block;
							overflow: hidden;
							transition: .3s;
						}
					}
					.dlbzxx{
						width: 360px;
						.title{
							height: 22px;
							font-size: 16px;
							font-family: AlibabaPuHuiTiM;
							color: #333333;
							line-height: 22px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.text{
							height: 42px;
							font-size: 14px;
							font-family: AlibabaPuHuiTiR;
							color: #666666;
							line-height: 21px;
							margin: 12px 0;
						}
						.time{
							height: 17px;
							font-size: 12px;
							font-family: AlibabaPuHuiTiR;
							color: #999999;
							line-height: 17px;
						}
					}
				}
				.dlbzlist:nth-child(2n-1){
					border-left: 0;
				}
				.dlbzlist:hover>.dlbzimg>img{
					transform: scale(1.2);
				}
			}
			.dtlist{
				display: flex;
				padding-bottom: 30px;
				overflow: hidden;
			}
			.dts{
				width: 357.89px;
				background: #FFFFFF;
				border: 1px solid #E6E6E6;
				cursor: pointer;
				flex-shrink: 0;
				overflow: hidden;
				margin-top: 30px;
				.dtTit{
					font-size: 18px;
					font-family: AlibabaPuHuiTiM;
					color: #333333;
					line-height: 25px;
					padding: 23px 19px 12px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.dtTxt{
					font-size: 14px;
					font-family: AlibabaPuHuiTiR;
					color: #666666;
					line-height: 20px;
					height: 40px;
					padding: 0 19px;
				}
				.dtview{
					display: flex;
					justify-content: space-between;
					font-size: 12px;
					font-family: AlibabaPuHuiTiR;
					color: #999999;
					line-height: 17px;
					padding: 17px 19px 12px;
					i{margin-right: 3px;}
				}
				.dtImg{
					width: 357.89px;
					height: 200px;
					overflow: hidden;
					img{
						display: block;width: 100%;transition: .3s;
						height: 100%;
					}
				}
			}
			.dts:hover{
				box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
				.dtImg>img{
					transform: scale(1.2);
				}
			}
			.dts:nth-child(3n-1){
				margin-left: 63px;
				margin-right: 63px;
			}
		}
		.whatsNew:last-child{
			margin-bottom: 80px;
		}
	}
}
</style>