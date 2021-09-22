<template>
	<div class="allianceThinkTanks">
		<div class="StructuresCont" v-if="!query.contentId">
			<div class="StructuresTitle">
				<div><el-divider direction="vertical"></el-divider><span class="lmgw">名誉专家</span></div>
				
				<span @click="mymoreFn" v-show="mypageSize==3">更多>></span>
			</div>
			<div class="ThinkTankCont">
				<template v-for="(item,key) in myStructuresData">
					<div :key="key" v-if="key<mypageSize" class="ThinkTankList" @click="toDetail(item.contentId)">
						<div class="image"><img :src="item.thumb" alt="" @load="loadImage3" v-show="imgshow3>key"></div>
						<div class="biaoqian1"><img src="~assets/img/aboutAlliances/my.png" alt=""></div>
						<div class="xian">
							<h2>{{item.title}}</h2>
							<p :title="item.description.replace(/<br>|<br \/>|<br\/>/g,'')" v-html="item.description"></p>
						</div>
						<!-- <div class="gongxian">
							<h3>突出贡献</h3>
							<div class="cont">{{item.contribution}}</div>
						</div> -->
					</div>
				</template>
			</div>
			<div class="paginations" v-if="mypageSize==6">
				<el-pagination
					background
					layout="prev, pager, next"
					@current-change="myhandleCurrentChange"
					:page-size="mypageSize"
					:current-page="mypageNumber"
					:total="mytotal">
				</el-pagination>
			</div>
			<div class="StructuresTitle">
				<div><el-divider direction="vertical"></el-divider><span class="lmzj">联盟专家</span></div>
				<span @click="zjmoreFn" v-show="zjpageSize==3">更多>></span>
			</div>
			<div class="ThinkTankCont">
				<template v-for="(item,key) in zjStructuresData">
					<div :key="key" v-if="key<zjpageSize" class="ThinkTankList" @click="toDetail(item.contentId)">
						<div class="image">
							<img :src="item.thumb" alt="" @load="loadImage1" v-show="imgshow1>key">
						</div>
						<div class="biaoqian1"><img src="~assets/img/aboutAlliances/zj.png" alt=""></div>
						<div class="xian">
							<h2>{{item.title}}</h2>
							<p :title="item.description.replace(/<br>|<br \/>|<br\/>/g,'')" v-html="item.description"></p>
						</div>
						<!-- <div class="gongxian">
							<h3>突出贡献</h3>
							<div class="cont">{{item.contribution}}</div>
						</div> -->
					</div>
				</template>
			</div>
			
			<div class="paginations" v-if="zjpageSize==6">
				<el-pagination
					background
					layout="prev, pager, next"
					@current-change="zjhandleCurrentChange"
					:page-size="zjpageSize"
					:current-page="zjpageNumber"
					:total="zjtotal">
				</el-pagination>
			</div>
			<div class="StructuresTitle">
				<div><el-divider direction="vertical"></el-divider><span class="lmgw">联盟顾问</span></div>
				
				<span @click="gwmoreFn" v-show="gwpageSize==3">更多>></span>
			</div>
			<div class="ThinkTankCont">
				<template v-for="(item,key) in gwStructuresData">
					<div :key="key" v-if="key<gwpageSize" class="ThinkTankList" @click="toDetail(item.contentId)">
						<div class="image"><img :src="item.thumb" alt="" @load="loadImage2" v-show="imgshow2>key"></div>
						<div class="biaoqian1"><img src="~assets/img/aboutAlliances/gw.png" alt=""></div>
						<div class="xian">
							<h2>{{item.title}}</h2>
							<p :title="item.description.replace(/<br>|<br \/>|<br\/>/g,'')" v-html="item.description"></p>
						</div>
						<!-- <div class="gongxian">
							<h3>突出贡献</h3>
							<div class="cont">{{item.contribution}}</div>
						</div> -->
					</div>
				</template>
			</div>
			<div class="paginations" v-if="gwpageSize==6">
				<el-pagination
					background
					layout="prev, pager, next"
					@current-change="gwhandleCurrentChange"
					:page-size="gwpageSize"
					:current-page="gwpageNumber"
					:total="gwtotal">
				</el-pagination>
			</div>
			


			
		</div>
		<!-- 详情 -->
		<div class="StructuresDetail" v-else>
			<!-- <div class="DetailTop">
				<div class="topimg"><img :src="contentDetail" alt=""></div>
				<div class="topcont">
					<div class="title"></div>
					<div class=""></div>
				</div>
			</div> -->
			<div class="thumb"><img :src="contentDetail.thumb" alt=""></div>
			<div v-html="contentDetail.content" class="contTxt"></div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import filters from '../../utils/filters/filters.js'
const cdata = {
	contentId: ''
}
export default {
	data(){
		return {
			zjtotal: 1,
			zjpageSize: 3,
			zjpageNumber: 1,
			gwtotal: 1,
			gwpageSize: 3,
			gwpageNumber: 1,
			mytotal: 1,
			mypageSize: 3,
			mypageNumber: 1,
			zjStructuresData:'',
			gwStructuresData:'',
			myStructuresData:'',
			query: {},
			searchdata: Object.assign({},cdata),
			contentDetail:'',
			imgshow1: 0,
			imgshow2: 0,
			imgshow3: 0,
		}
	},
	mounted(){
		this.getquery()
		this.listFn38()
		this.listFn47()
		this.listFn48()
		let contentId = this.$route.query.contentId
		if(contentId){
			this.toDetail(contentId)
		}
	},
	methods:{
		loadImage1(){
			this.imgshow1++
    },
		loadImage2(){
			this.imgshow2++
    },
		loadImage3(){
			this.imgshow3++
    },
		zjhandleCurrentChange(val){
			this.imgshow1 = 0
      this.zjpageNumber = val
      this.listFn38()
    },
		gwhandleCurrentChange(val){
			this.imgshow2 = 0
      this.gwpageNumber = val
      this.listFn47()
    },
		myhandleCurrentChange(val){
			this.imgshow3 = 0
      this.mypageNumber = val
      this.listFn48()
    },
		zjmoreFn(){
			this.imgshow1 = 3
			this.zjpageSize = 6
      this.listFn38()
		},
		gwmoreFn(){
			this.imgshow2 = 3
			this.gwpageSize = 6
			this.listFn47()
		},
		mymoreFn(){
			this.imgshow3 = 3
			this.mypageSize = 6
			this.listFn48()
		},
		toDetail(contentId){//智库详情
			this.searchdata.contentId = contentId;
			this.query = Object.assign({},this.query,this.searchdata);
			console.log(this.query)
			this.$router.push({query: this.query})
			this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/'+contentId)
      .then((res) => {
        this.hideLoading()
				this.contentDetail = res.data.data
				this.contentDetail.thumb = CONFIG.indexUrl+this.contentDetail.thumb
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
		},
		getquery(){
			var re ={};
			if(this.$route.query){
				var q = this.$route.query;
				for(var k in q){
					if(q.hasOwnProperty(k)){
						if(q[k]){
							re[k]= q[k]
						}
					}
				}
			}
			this.query = Object.assign({},re);
		},
		listFn38(){//联盟专家
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:38,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.zjpageNumber,   //页码
          pageSize:this.zjpageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				res.data.list.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
					// element.description = element.description.replace(/\s+|\s/g,'<br>')
				});
				this.zjStructuresData = res.data.list
				this.zjtotal = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn47(){//联盟顾问
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:47,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.gwpageNumber,   //页码
          pageSize:this.gwpageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				res.data.list.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
					// element.description = element.description.replace(/\s+|\s/g,'<br>')
				});
				this.gwStructuresData = res.data.list
				this.gwtotal = res.data.total
				this.gwpageNumber = res.data.pageNum
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		listFn48(){//名誉专家
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:48,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.mypageNumber,   //页码
          pageSize:this.mypageSize   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				res.data.list.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
					// element.description = element.description.replace(/\s+|\s/g,'<br>')
				});
				this.myStructuresData = res.data.list
				this.mytotal = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
	},
	watch:{
		$route(to,from){
			this.getquery()
    }
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
		val70: function (value) {
			if(value.length>70) return value.substr(0,70)+'...'
			else return value
		},
  },
}
</script>

<style lang='less'>
.allianceThinkTanks{
	.StructuresCont{

	}
	.StructuresDetail{
		padding: 30px 254px 54px;
		line-height: 30px;
		position: relative;
		min-height: 200px;
		.thumb{
			position: absolute;
			width: 110px;
			left: 100px;
			border: 1px solid #E6E6E6;
			padding: 3px;
			>img{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
		.title{

		}
		.DetailTop{
			display: flex;
			.topimg{
				width: 220px;
				height: 200px;
				>img{
					margin: 0 auto;
					display: block;
				}
			}
		}
	}
	.StructuresTitle{
		display: flex;
		justify-content: space-between;
		margin-top: 95px;
		background: #1357A4;
		color: #fff;
		padding: 0 18px;
		>div{
			height: 50px;
			font-size: 18px;
			font-family: AlibabaPuHuiTiM;
			line-height: 50px;
		}
		>span{
			height: 20px;
			font-size: 14px;
			font-family: AlibabaPuHuiTiR;
			color: #fff;
			cursor: pointer;
			line-height: 50px;
		}
		>span:hover{
			text-decoration: underline;
		}
	}
	.ThinkTankCont{
		display: flex;
		flex-wrap: wrap;
		margin-top: 82px;
		.ThinkTankList{
			margin-right: 86px;
			margin-bottom: 86px;
			padding: 0 19px 0;
			width: 342px;
			position: relative;
			background: #fff;
			box-shadow: 0px 2px 10px 0px rgba(193, 203, 223, 0.37);
			border: 1px solid #E8F3FF;
			cursor: pointer;
			.image{
				width: 94px;
				height: 128px;
				overflow: hidden;
				position: absolute;
				left: 32px;
				top: -25px;
				box-shadow: 0px 2px 4px 0px rgba(128, 145, 179, 0.62);
				>img{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			.biaoqian1{
				position: absolute;
				right: 26px;
				top: 0;
				width: 48px;
				>img{width: 100%;}
			}
			.xian{
				margin: 38px 0 0;
				padding-left: 18px;
				>h2{
					height: 31px;
					font-size: 23px;
					font-family: AlibabaPuHuiTiM;
					color: #313131;
					line-height: 31px;
					text-align: center;
					margin-bottom: 45px;
				}
				>p{
					width: 300px;
					height: 74px;
					line-height: 23px;
					font-size: 12px;
					font-family: AlibabaPuHuiTiM;
					color: #313131;
					padding-right: 10px;
					margin-bottom: 5px;
					overflow: hidden;
				}
			}
			.gongxian{
				>h3{
					height: 20px;
					font-size: 14px;
					font-family: Alibaba-PuHuiTi-H, Alibaba-PuHuiTi;
					font-weight: normal;
					color: #787878;
					line-height: 20px;
					margin: 12px 0;
				}
				.cont{
					width: 292px;
					height: 160px;
					font-size: 14px;
					font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
					font-weight: normal;
					color: #7F7F7F;
					line-height: 20px;
				}
			}
		}
		.ThinkTankList:hover{
			background: #1357A4;
			box-shadow: 0px 2px 6px 0px rgba(31, 39, 56, 0.37);
			border: 1px solid #2B71C0;
				h2,h3,p,.cont{
					color: #fff;
				}
		}
		.ThinkTankList:nth-child(3n){
			margin-right: 0;
		}
	}
	.paginations{
		margin-bottom: 51px;
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
		// .el-pagination.is-background .el-pager li:not(.disabled):hover{
		//   color: #1357A4;
		// }
	}
}
</style>