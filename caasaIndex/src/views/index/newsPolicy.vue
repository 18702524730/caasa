<template>
	<div class="newsPolicys">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/newsPolicy/banner.png" alt="">
			<div class="policyTitle">新闻政策</div>
		</div>
		<div class="navTop" v-if="!isSearchList">
			<div class="navTabs">
				<div @click="tolink('国内新闻')"><a>国内新闻</a></div>
				<div @click="tolink('国际新闻')"><a>国际新闻</a></div>
				<div @click="tolink('国内法规')"><a>国内法规</a></div>
				<div @click="tolink('国际法规')"><a>国际法规</a></div>
				<div @click="tolink('真伪鉴别')"><a>真伪鉴别</a></div>
			</div>
		</div>
		<div class="widmax" v-if="!isSearchList">
			<div class="countryNews">
				<div class="domestic" id="gnxw">
					<div class="domeTitle">
						<div><el-divider direction="vertical"></el-divider>国内新闻</div>
						<a @click="tolink('国内新闻')">更多>></a>
					</div>
					<div class="domeCont" v-for="(item,key) in newsdomesticData" :key="key" @click="toDetail(item.contentId)">
						<div class="domeLimg"><img :src="item.thumb" alt=""></div>
						<div class="domeRcen">
							<div class="domebitTitle">{{item.title}}</div>
							<div class="domebitCont">{{item.description | val49}}</div>
							<div class="domeLook">
								<div><i class="el-icon-time"></i>{{item.inputdate | dateFormat | splits}}</div>
								<div><i class="el-icon-view"></i>{{item.viewNum}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="abroads" id="gjxw">
					<div class="domeTitle">
						<div><el-divider direction="vertical"></el-divider>国际新闻</div>
						<a @click="tolink('国际新闻')">更多>></a>
					</div>
					<div class="abroadList1" v-if="gwxwbannerData">
						<img :src="gwxwbannerData.img" alt="">
						<div class="abroadtitle">
							<div>{{gwxwbannerData.title}}</div>
						</div>
					</div>
					<div class="abroadList2" v-for="(item,key) in newsabroadData" :key="key" @click="toDetail(item.contentId)">
						<div class="abroadtitle">{{item.title}}</div>
						<div><img :src="item.thumb" alt=""></div>
					</div>
				</div>
			</div>
			<!-- <div class="classicCases">
				<div class="casesTitle">
					<el-divider direction="vertical"></el-divider>热点新闻
				</div>
				<div class="caseslunbo">
					<el-carousel :interval="4000" type="card" height="200px" :autoplay="false">
						<el-carousel-item v-for="(item,key) in casesList" :key="key" class="lbLi">
							<div class="title">{{item.title}}</div>
							<div class="lbimg"><img :src="item.src" alt=""></div>
							<div class="detail">查看详情</div>
						</el-carousel-item>
					</el-carousel>
				</div>
			</div> -->
			<div class="statute">
				<div class="domesticRegulations" id="gnfg">
					<div class="domesticTitle">
						<div><el-divider direction="vertical"></el-divider>国内法规</div>
						<a @click="tolink('国内法规')">更多>></a>
					</div>
					<a v-for="(item,key) in regulationsData" :key="key" class="regulationsCss" @click="toDetail(item.contentId)">
						<div class="regulationsTitle">{{item.title}}</div>
						<div class="regulationsTime">{{item.inputdate | dateFormat | splits}}</div>
					</a>
				</div>
				<div class="domesticRegulations" id="gjfg">
					<div class="domesticTitle">
						<div><el-divider direction="vertical"></el-divider>国际法规</div>
						<a @click="tolink('国际法规')">更多>></a>
					</div>
					<a v-for="(item,key) in internationalData" :key="key" class="regulationsCss" @click="toDetail(item.contentId)">
						<div class="regulationsTitle">{{item.title}}</div>
						<div class="regulationsTime">{{item.inputdate | dateFormat | splits}}</div>
					</a>
				</div>
			</div>
			<div class="authenticityIdentifications"  id="zwjb">
				<div class="domesticTitle">
					<div><el-divider direction="vertical"></el-divider>真伪鉴别</div>
					<a @click="tolink('真伪鉴别')">更多>></a>
				</div>
				<div class="authenticitys">
					<div class="authenticityCont">
						<a v-for="(item,key) in authenticityData" :key="key" class="regulationsCss" v-if="key<10" @click="toDetail(item.contentId)">
							<div class="regulationsTitle">{{item.title}}</div>
							<div class="regulationsTime">{{item.inputdate | dateFormat | splits}}</div>
						</a>
					</div>
					<div class="authenticityCont" v-if="authenticityData&&authenticityData.length>10">
						<a v-for="(item,key) in authenticityData" :key="key" class="regulationsCss" v-if="key>=10" @click="toDetail(item.contentId)">
							<div class="regulationsTitle">{{item.title}}</div>
							<div class="regulationsTime">{{item.inputdate | dateFormat | splits}}</div>
						</a>
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
			newsdomesticData: null,
			newsabroadData: null,
			regulationsData: null,
			internationalData: null,
			authenticityData: null,
			gwxwbannerData: null,
			casesList: [{
				title: '2020中欧地理标志线上研讨会圆满落幕！',
				src: require('../../assets/img/newsPolicy/img1.png'),
				id: 1,
			},{
				title: '北京反侵权假冒联盟官网正式上线',
				src: require('../../assets/img/newsPolicy/img2.png'),
				id: 2,
			},{
				title: '第三届（2021）知识产权巾帼建功-IP女神座谈会圆满落幕',
				src: require('../../assets/img/newsPolicy/img3.png'),
				id: 3,
			},]
		}
	},
	components:{
    myfooter,cloudnav,newsList
  },
	mounted(){
		this.listFn10()
		this.listFn11()
		this.listFn14()
		this.listFn15()
		this.listFn16()
		this.gwxwbannerFn()
	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
		tolink(k){
			this.$router.push({ path:`/index/newsPolicy/NewssPolicyList/${k}`})
		},
		toDetail(contentId){
			this.$router.push({ path:`/index/newsPolicy/allianceNewDetail/${contentId}/30`})
		},
		listFn16(){//真伪鉴别
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:16,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          // isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:20   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.authenticityData = res.data.list
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
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          // isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:10   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.internationalData = res.data.list
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
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          // isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:10   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.regulationsData = res.data.list
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn10(){//国内新闻
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:10,    //栏目ID
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
				this.newsdomesticData = res.data.list
				this.newsdomesticData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
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
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:4   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.newsabroadData = res.data.list
				this.newsabroadData.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		gwxwbannerFn(){//新闻政策国际新闻
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/searchAdList?sildeName=新闻政策')
      .then((res) => {
        this.hideLoading()
				this.gwxwbannerData = res.data.data[0]
				this.gwxwbannerData.img = CONFIG.indexUrl + this.gwxwbannerData.img
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
      val49: function (value) {
        if(value.length>49) return value.substr(0,49)+'...'
        else return value
      },
  },
	
}
</script>

<style lang='less'>
.newsPolicys{
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
	.widmax{
		width: 1200px;
		margin: 0 auto;
		.countryNews{
			display: flex;
			justify-content: space-between;
			margin-top: 51px;
			.domestic{
				width: 570px;
				border: 1px solid #E6E6E6;
				.domeTitle{
					padding: 0 18px;
					display: flex;
					justify-content: space-between;
					background: #1357A4;
					font-size: 18px;
					font-family: AlibabaPuHuiTiR;
					color: #FFFFFF;
					height: 50px;
					line-height: 50px;
					a{
						font-size: 14px;
						font-family: AlibabaPuHuiTiR;
						color: #FFFFFF;
						cursor: pointer;
					}
				}
				.domeCont{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20px 7px 20px 18px;
					border-bottom: 1px solid #E6E6E6;
					cursor: pointer;
					.domeLimg{
						width: 159px;
						height: 90px;
						overflow: hidden;
						img{
							width: 100%;
							height: 100%;
							transition: .3s;
							display: block;
						}
					}
					.domeRcen{
						width: 360px;
						.domebitTitle{
							width: 360px;
							height: 22px;
							font-size: 16px;
							font-family: AlibabaPuHuiTiM;
							color: #333333;
							line-height: 22px;
							overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
						}
						.domebitCont{
							height: 42px;
							font-size: 14px;
							font-family: AlibabaPuHuiTiR;
							color: #666666;
							line-height: 21px;
							margin-top: 9px;
						}
						.domeLook{
							display: flex;
							align-items: center;
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
			.abroads{
				width: 570px;
				border: 1px solid #E6E6E6;
				height: 628px;
				overflow: hidden;
				.domeTitle{
					padding: 0 18px;
					display: flex;
					justify-content: space-between;
					background: #1357A4;
					font-size: 18px;
					font-family: AlibabaPuHuiTiR;
					color: #FFFFFF;
					height: 50px;
					line-height: 50px;
					a{
						font-size: 14px;
						font-family: AlibabaPuHuiTiR;
						color: #FFFFFF;
						cursor: pointer;
					}
				}
				.abroadList1{
					position: relative;
					overflow: hidden;
					width: 100%;
					height: 308px;
					cursor: pointer;
					img{display: block;width: 100%;height: 100%;transition: .3s;}
					.abroadtitle{
						position: absolute;
						bottom: -10px;
						left: 0;
						width: 570px;
						height: 260px;
						background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(33, 33, 33, 0.82) 100%);
						>div{
							height: 78px;
							font-size: 26px;
							padding: 0 20px;
							font-family: AlibabaPuHuiTiM;
							color: #FFFFFF;
							line-height: 39px;
							position: absolute;
							bottom: 14px;
						}
					}
				}
				.abroadList1:hover>img{
					transform: scale(1.2);
				}
				.abroadList2{
					cursor: pointer;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 9px 14px;
					margin-top: 10px;
					border-bottom: 1px solid #E6E6E6;
					>div{
						width: 108px;
						height: 60px;
						overflow: hidden;
						img{
							display: block;
							transition: .3s;
							overflow: hidden;
							width: 100%;
							height: 100%;
						}
					}
					>.abroadtitle{
						width: 422px;
						height: 44px;
						font-size: 16px;
						font-family: AlibabaPuHuiTiM;
						color: #333333;
						line-height: 22px;
					}
				}
				.abroadList2:last-child{
					border-bottom: 0;
				}
				.abroadList2:hover img{
					transform: scale(1.1);
				}
			}
		}
		.classicCases{
			margin-top: 56px;
			.caseslunbo{
				margin: 53px 0;
				.el-carousel__container{
					height: 326px !important;
				}
				.el-carousel__item h3 {
					color: #475669;
					font-size: 14px;
					opacity: 0.75;
					line-height: 200px;
					margin: 0;
				}
				.el-carousel__item {
					background-color: #fff;
					box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.06);
					border: 1px solid #E6E6E6;
				}
				.lbLi{
					padding: 14px 17px 0;
					.title{
						height: 25px;
						font-size: 18px;
						font-family: AlibabaPuHuiTiM;
						color: #333333;
						line-height: 25px;
					}
					.lbimg{
						padding: 16px 0;
						border-bottom: 1px solid #E6E6E6;
						img{
							width: 100%;
						}
					}
					.detail{
						height: 20px;
						font-size: 14px;
						font-family: AlibabaPuHuiTiR;
						color: #999999;
						line-height: 20px;
						margin: 10px 0;
					}
				}
				
			}
			.casesTitle{
				height: 50px;
				font-size: 18px;
				font-family: AlibabaPuHuiTiR;
				color: #FFFFFF;
				line-height: 50px;
				background: #1357A4;
				padding-left: 18px;
			}
		}
		.statute{
			display: flex;
			margin-top: 50px;
			justify-content: space-between;
			.domesticRegulations{
				width: 570px;
				border: 1px solid #E6E6E6;
				.domesticTitle{
					padding: 0 18px;
					display: flex;
					justify-content: space-between;
					background: #1357A4;
					font-size: 18px;
					font-family: AlibabaPuHuiTiR;
					color: #FFFFFF;
					height: 50px;
					line-height: 50px;
					a{
						font-size: 14px;
						font-family: AlibabaPuHuiTiR;
						color: #FFFFFF;
						cursor: pointer;
					}
				}
				.regulationsCss{
					display: flex;
					justify-content: space-between;
					margin-top: 10px;
					padding: 8px 19px;
					cursor: pointer;
					color: #333;
					.regulationsTitle{
						height: 20px;
						font-size: 14px;
						font-family: AlibabaPuHuiTiR;
						color: #333333;
						line-height: 20px;
						width: 350px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.regulationsTitle::before{
						content: '';
						width: 9px;
						height: 9px;
						border-radius: 50%;
						background: #333;
						display: inline-block;
						margin-right: 6px;
					}
					.regulationsTime{
						height: 20px;
						font-size: 14px;
						font-family: AlibabaPuHuiTiR;
						color: #999999;
						line-height: 20px;
					}
				}
				
			}
		}
		.authenticityIdentifications{
			margin: 53px 0 200px;
			.domesticTitle{
				padding: 0 18px;
				display: flex;
				justify-content: space-between;
				background: #1357A4;
				font-size: 18px;
				font-family: AlibabaPuHuiTiR;
				color: #FFFFFF;
				height: 50px;
				line-height: 50px;
				a{
					font-size: 14px;
					font-family: AlibabaPuHuiTiR;
					color: #FFFFFF;
					cursor: pointer;
				}
			}
			.authenticitys{
				display: flex;
				justify-content: space-between;
				.authenticityCont{
					width: 570px;
					border: 1px solid #E6E6E6;
					.regulationsCss{
						display: flex;
						justify-content: space-between;
						margin-top: 10px;
						padding: 8px 19px;
						cursor: pointer;
						color: #333;
						.regulationsTitle{
							height: 20px;
							font-size: 14px;
							font-family: AlibabaPuHuiTiR;
							color: #333333;
							line-height: 20px;
							width: 350px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.regulationsTitle::before{
							content: '';
							width: 9px;
							height: 9px;
							border-radius: 50%;
							background: #333;
							display: inline-block;
							margin-right: 6px;
						}
						.regulationsTime{
							height: 20px;
							font-size: 14px;
							font-family: AlibabaPuHuiTiR;
							color: #999999;
							line-height: 20px;
						}
					}
				}
			}
		}
	}
}
</style>