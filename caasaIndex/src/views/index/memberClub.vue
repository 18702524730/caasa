<template>
	<div class="memberClubs">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/memberClub/banner.png" alt="">
			<div class="policyTitle">会员天地</div>
		</div>
		<navClub v-if="!isSearchList" @isactive='isactive'></navClub>
		<div v-if="!isSearchList" class="memberClubCont">
			<div v-show="isactiveto==1" class="contView1" id="hydt">
				<div class="activityTitle">
					<el-divider direction="vertical"></el-divider>会员动态
				</div>
				<div class="lists">
					<div class="dts" v-for="(item,index) in hydtList" :key="index" @click="toDetail(item.contentId)">
						<div class="dtImg"><img :src="item.thumb" alt=""></div>
						<div class="dtTit">{{item.title}}</div>
						<div class="dtTxt">{{item.description | val43}}</div>
						<div class="dtview">
							<div class="viewnum"><i class="el-icon-view"></i>{{item.viewNum}}</div>
							<div class="quanwen">阅读全文</div>
						</div>
					</div>
				</div>
			</div>
			<div v-show="isactiveto==2" class="contView1">
				<div class="activityTitle" id="hyqy">
					<el-divider direction="vertical"></el-divider>会员权益
				</div>
				<div class="biao1"><img src="~assets/img/serviceContent/biao1.png" alt=""></div>
				<!-- <table class="tables">
					<thead>
						<tr>
							<th rowspan="2">项目</th>
							<th rowspan="2">服务内容</th>
							<th rowspan="2">权限（数量）</th>
							<th colspan="3">会员级别</th>
						</tr>
						<tr>
							<th>理事成员单位<br>1万/年</th>
							<th>副理事长成员单位<br>3万/年</th>
							<th>副理事长成员单位<br>10万/年</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="2">体系建设咨询</td>
							<td>知识产权与质量体系建设</td>
							<td>定制咨询</td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>专业与技术咨询</td>
							<td>咨询次数</td>
							<td></td>
							<td>1</td>
							<td>3</td>
						</tr>
						<tr>
							<td rowspan="6">顾问服务</td>
							<td>行业反侵权假冒整治行动</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>专案投申诉、仲裁、调解</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>反侵权假冒专门课题研究</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>美国“恶名市场”与欧盟“观察名单”应对方案</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>反垄断法与不正当竞争应对</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>组织专家论证意见</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td rowspan="6">协调促进</td>
							<td>行政执法保护</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>司法保护</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>促进与国内执法部门、司法部门、行业商协会合作交流</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>促进与国外政府、商协会、国际组织合作交流</td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>促进跨平台反侵权假冒合作</td>
							<td></td>
							<td></td>
							<td></td>
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
							<td rowspan="2">政策咨询</td>
							<td>国内/国际法规政策</td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>预警咨询</td>
							<td></td>
							<td></td>
							<td>查看导读和目录</td>
							<td>查看完整篇报告</td>
						</tr>
						<tr>
							<td rowspan="3">政策咨询</td>
							<td>会议活动</td>
							<td></td>
							<td>大会logo墙，午餐1名，定向晚宴一名</td>
							<td>分会场VIP座位1名，分会场论坛参与、大会logo墙，会议手册广告提名，午餐2名，定向晚宴1名</td>
							<td>分会场VIP座位1名，分会场论坛参与、大会logo墙，会议手册广告宣传，合作媒体通稿露出，午餐5名，定向晚宴2名</td>
						</tr>
						<tr>
							<td>课程报告</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
						<tr>
							<td>领域重大舆情支持</td>
							<td></td>
							<td></td>
							<td></td>
							<td><i class="el-icon-check"></i></td>
						</tr>
					</tbody>
				</table> -->
			</div>
			<!-- <div class="jrlmimage" id="jrlm" @click="tolink"><img src="~assets/img/memberClub/jrlm.png" alt=""></div> -->
			<div class="contView2">
				<div v-show="isactiveto==4" class="hyfcCont">
					<div class="activityTitle" id="hyfc">
						<div><el-divider direction="vertical"></el-divider>会员风采</div>
						<!-- <span>更多>></span> -->
					</div>
					<div class="lists">
						<div class="fclist" v-for="(item,key) in hyfcList" :key="key" @click="toDetail(item.contentId)">
							<div class="fcimages"><img :src="item.thumb" alt=""></div>
							<div class="txts">
								<div class="title">{{item.title | val49}}</div>
								<div class="laiyuan">{{item.laiyuan}} &nbsp; &nbsp; &nbsp; &nbsp;{{item.inputdate | dateFormat}}</div>
							</div>
						</div>
					</div>
				</div>
				<div v-show="isactiveto==5" class="rwfcCont">
					<div class="activityTitle" id="rwfc">
						<div><el-divider direction="vertical"></el-divider>人物风采</div>
						<!-- <span>更多>></span> -->
					</div>
					<div class="lists">
						<div class="fclist" v-for="(item,key) in rwfcList" :key="key" @click="toDetail(item.contentId)">
							<div class="fcimages"><img :src="item.thumb" alt=""></div>
							<div class="txts">
								<div class="title">{{item.title | val49}}</div>
								<div class="laiyuan">{{item.laiyuan}} &nbsp; &nbsp; &nbsp; &nbsp;{{item.inputdate | dateFormat}}</div>
							</div>
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
import navClub from './navClub.vue'
import $ from 'jquery'
import myfooter from 'cps/public/footer.vue'
import newsList from './newsList.vue'
import filters from '../../utils/filters/filters.js'
export default {
	data(){
		return {
			isSearchList: false,
			searchCont: '',
			hydtList: null,
			hyfcList: null,
			rwfcList: null,
			pageNumber1: 1,
			pageSize: 3,
			total1: 1,
			isactiveto:1
		}
	},
	components:{
		myfooter,cloudnav,newsList,navClub
	},
	mounted(){
		this.isactiveto = this.$route.query.isactive
		console.log(this.$route.query.isactive==4)
		if(this.$route.query.isactive==1) this.listFn33()
		else if(this.$route.query.isactive==4) this.listFn34()
		else if(this.$route.query.isactive==5) this.listFn35()
	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
		isactive(val){
			this.isactiveto = val
			console.log(val)
			if(val==1) this.listFn33()
			else if(val==4) this.listFn34()
			else if(val==5) this.listFn35()
		},
		tolink(){
			this.$router.push({ path:'/index/memberClub/applyToJoin'})
		},
		toDetail(contentId){
      this.$router.push({ path:`/index/memberClub/allianceNewDetail/${contentId}/会员天地`})
		},
		listFn33(){////会员动态
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:33,    //栏目ID
          // hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:this.pageNumber1,   //页码
          pageSize:6   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
				this.hydtList = res.data.list
				this.hydtList.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
				this.total1 = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		listFn34(){////会员风采
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:34,    //栏目ID
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
				this.hyfcList = res.data.list
				this.hyfcList.forEach(element => {
					element.thumb = CONFIG.indexUrl + element.thumb
				});
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err);
      });
    },
		listFn35(){////人物风采
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:35,    //栏目ID
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
				this.rwfcList = res.data.list
				this.rwfcList.forEach(element => {
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
		val43: function (value) {
			if(value.length>43) return value.substr(0,43)+'...'
			else return value
		},
		val49: function (value) {
			if(value.length>49) return value.substr(0,49)+'...'
			else return value
		},
  },
}
</script>

<style lang='less'>
.memberClubs{
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
	.activityTitle{
		height: 51px;
		line-height: 51px;
		font-size: 18px;
		font-family: AlibabaPuHuiTiR;
		color: #FFFFFF;
		background: #1357A4;
		padding-left: 18px;
	}
	.memberClubCont{
		width: 1200px;
		margin: 51px auto 0;
		.contView1{
			margin-bottom: 50px;
			
			.biao1>img{
				width: 100%;
				display: block;
			}
			.tables{
				width: 100%;
				border:1px solid #D0D0D0;
				text-align: center;
				font-size: 16px;
				font-family: AlibabaPuHuiTiR;
				color: #333333;
				i{color: #1357A4;}
				th{
					min-width: 200px;
				}
				th,td{
					border:1px solid #D0D0D0;
					height: 48.5px;
					padding: 0 8px;
				}
				thead{
					background: #F0F7FF;
					// >tr:nth-child(2){
					// 	>th:first-child{
					// 		min-width: 160px;
					// 	}
					// }
				}
				tbody{
					tr:nth-child(2n){
						background: #F0F7FF;
					}
				}
			}
			.lists{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				min-height: 360px;
			}
			.dts{
				width: 357px;
				background: #FFFFFF;
				border: 1px solid #E6E6E6;
				cursor: pointer;
				flex-shrink: 0;
				overflow: hidden;
				margin-bottom: 30px;
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
					width: 357px;
					height: 200px;
					overflow: hidden;
					img{display: block;width: 100%;height:100%;transition: .3s;}
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
		.contView2{
			margin: 50px 0;
			>div{
				min-height: 600px;
				.activityTitle{
					display: flex;
					justify-content: space-between;
					>span{
						font-size: 14px;
						margin-right: 19px;
					}
				}
				.lists{
					min-height: 160px;
					border: 1px solid #E6E6E6;
					.fclist{
						display: flex;
						align-items: center;
						padding: 26px 39px 26px 0;
						border-bottom: 1px solid #E6E6E6;
						.fcimages{
							width: 159px;
							height: 90px;
							overflow: hidden;
							margin: 0 15px 0 13px;
							>img{
								width: 100%;
								height: 100%;
								transition: .3s;
							}
						}
						.txts{
							.title{
								height: 44px;
								font-size: 16px;
								font-family: AlibabaPuHuiTiM;
								color: #333333;
								line-height: 22px;
							}
							.laiyuan{
								margin-top: 40px;
								height: 17px;
								font-size: 12px;
								font-family: AlibabaPuHuiTiR;
								color: #999999;
								line-height: 17px;
							}
						}
					}
					.fclist:last-child{
						border-bottom: 0;
					}
					.fclist:hover>.fcimages>img{
						transform: scale(1.2);
					}
				}
				
			}
		}
	}
}
</style>