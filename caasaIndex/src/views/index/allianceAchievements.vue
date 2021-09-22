<template>
	<div class="allianceAchievementss">
		<!-- <div class="StructuresTitle">联盟成果发布</div> -->
		<div class="AchievementsTab">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="趋势报告" name="trendReport">
					<div class="lists">
						<div class="dts" v-for="(item,index) in trendList" :key="index" @click="toDetail(item.contentId)">
							<div class="dtImg"><img :src="item.thumb" alt=""></div>
							<div class="cont">
								<div class="dtTit">{{item.title}}</div>
								<div class="dtTxt">{{item.description | val68}}</div>
								<div class="dtview">
									<div class="viewnum"><i class="el-icon-view"></i>{{item.viewNum}}</div>
									<div class="quanwen">阅读全文</div>
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
			</el-tabs>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import filters from '../../utils/filters/filters.js'
export default {
	data(){
		return {
			activeName: 'trendReport',
			trendList: [	//趋势报告
				
			],
			stereoscopicList: [	//知识产权社会共治与立体保护
				
			],
			earlyWarningList: [	//预警报告
				
			],
			annualList: [	//年度报告
				
			],
			total1: 1,
			total2: 1,
			total3: 1,
			total4: 1,
			pageNumber1: 1,
			pageNumber2: 1,
			pageNumber3: 1,
			pageNumber4: 1,
			pageSize:9,
		}
	},
	mounted(){
		this.listFn40()
		this.listFn41()
		this.listFn42()
		this.listFn43()
	},
	methods:{
		handleClick(tab, event) {
			console.log(tab, event);
		},
		handleCurrentChange1(val){
      this.pageNumber1 = `${val}`
			this.listFn40()
    },
		handleCurrentChange2(val){
      this.pageNumber2 = `${val}`
			this.listFn41()
    },
		handleCurrentChange3(val){
      this.pageNumber3 = `${val}`
			this.listFn42()
    },
		handleCurrentChange4(val){
      this.pageNumber4 = `${val}`
			this.listFn43()
    },
		toDetail(contentId){
			this.$router.push({ path:`/index/aboutAlliances/allianceNewDetail/${contentId}/联盟成果发布`})
		},
		listFn40(){////趋势报告
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:40,    //栏目ID
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
				this.trendList = res.data.list
				this.trendList.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total1 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		listFn41(){////知识产权社会共治与立体保护
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:41,    //栏目ID
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
				this.stereoscopicList = res.data.list
				this.stereoscopicList.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total2 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		listFn42(){////预警报告
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:42,    //栏目ID
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
				this.earlyWarningList = res.data.list
				this.earlyWarningList.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total3 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		listFn43(){////年度报告
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:43,    //栏目ID
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
				this.annualList = res.data.list
				this.annualList.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total4 = res.data.total
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
      val68: function (value) {
        if(value.length>68) return value.substr(0,68)+'...'
        else return value
      },
  },
}
</script>

<style lang='less'>
.allianceAchievementss{
	.AchievementsTab{
		margin-top: 51px;
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
				justify-content: space-between;
				min-height: 360px;
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
			width: 525px;
			height: 262px;
			position: relative;
			padding: 38px 0 0 50px;
			margin-bottom: 75px;
			margin-top: 50px;
			cursor: pointer;
			.dtImg{
				position: absolute;
				top: 0;
				left: 0;
				width: 164px;
				height: 224px;
				overflow: hidden;
				box-shadow: 10px 10px 10px 0px rgba(78, 80, 102, 0.24);
				>img{
					width: 100%;
					height: 100%;
					display: block;
					transition: .3s;
				}
			}
			.cont{
				width: 475px;
				height: 224px;
				background: linear-gradient(90deg, #F9FAFC 0%, #F9FBFD 100%);
				box-shadow: 0px 2px 10px 0px rgba(209, 216, 238, 0.5);
				border: 1px solid #E9E9E9;
				padding: 20px 20px 20px 135px;
				.dtTit{
					height: 54px;
					font-size: 20px;
					font-family: AlibabaPuHuiTiM;
					color: #3D3D3D;
					line-height: 27px;
				}
				.dtTxt{
					height: 60px;
					font-size: 14px;
					font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
					font-weight: normal;
					color: #A5A5A5;
					line-height: 20px;
					margin-top: 14px;
					padding-bottom: 8px;
					border-bottom: 1px solid #A5A5A5;
				}
				.dtview{
					display: flex;
					justify-content: space-between;
					margin-top: 24px;
					font-size: 14px;
					font-family: AlibabaPuHuiTiM;
					color: #A5A5A5;
					line-height: 20px;
					i{
						margin-right: 6px;
					}
				}
			}
		}
		.dts:hover{
			.cont{
				box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
			}
			.dtImg>img{
				transform: scale(1.2);
			}
		}
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
		content: '12311111111111111111';
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