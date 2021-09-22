<template>
	<div class="allianceNewlists">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner0" v-if="active=='首页' || active=='联盟成果发布' || active=='会员天地'">
			<img :src="active=='首页'?require('../../assets/img/index/banner1.png'):active=='会员天地'?require('../../assets/img/memberClub/banner.png'):require('../../assets/img/aboutAlliances/banner.png')" alt="">
      <div class="banTits" v-if="active=='首页'">
        <div class="tit1">反侵权假冒联盟</div>
        <div class="tit2">Anti-Infringement and Anti-Counterfeiting Alliance</div>
      </div>
			<div class="policyTitle" v-if="active=='联盟成果发布' || active=='会员天地'">
				{{active}}
			</div>
		</div>
		<div class="banner" v-else>
			<img :src="active<10?require('../../assets/img/newsPolicy/banner2.png'):active<20?require('../../assets/img/internationalExchange/banner.png'):active<30?require('../../assets/img/internationalExchange/banner.png'):active<40?require('../../assets/img/newsPolicy/banner.png'):''" alt="">
			<div class="policyTitle">{{active<10?'联盟动态':active<20?'国际交流':active<30?'国际动态':active<40?'新闻政策':''}}</div>
		</div>
		<div v-if="!isSearchList" class="allianceNewDetail">
			<div class="detailcont">
				<div class="activityTitle" v-if="active=='首页' || active=='联盟成果发布' || active=='会员天地'">
					<el-divider direction="vertical"></el-divider>{{active=='首页'?'反侵权假冒联盟':active=='会员天地'?'会员天地':'联盟成果发布'}}
				</div>
				<div class="activityTitle" v-else>
					<el-divider direction="vertical"></el-divider>{{active<10?'联盟动态':active<20?'国际交流':active<30?'国际动态':active<40?'新闻政策':''}}
				</div>
				<div class="contentcss">
					<div class="title">{{contentDetail.title}}</div>
					<div class="laiyuan"><span v-if="contentDetail.laiyuan">来源：{{contentDetail.laiyuan}} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>{{contentDetail.inputdate | dateFormat}}</div>
					<div v-html="contentDetail.content" class="contTxt"></div>
				</div>
			</div>
			<div class="gengduo" @click="tolist" v-if="active<20">
				<img src="~assets/img/allianceNew/gengduo.png" alt="">
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
const newsURl = 'api/content/{categoryId}'
export default {
	data(){
		return {
			isSearchList: false,
			searchCont: '',
			contentId:'',
			contentDetail:'',
			active:'',
		}
	},
	components:{
		myfooter,cloudnav,newsList
	},
	mounted(){
		this.contentId = this.$route.params.contentId
		this.active = this.$route.params.active
		this.newsDetail()
	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
		newsDetail(){//新闻详情
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/'+this.contentId)
      .then((res) => {
        this.hideLoading()
				this.contentDetail = res.data.data
        
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
		tolist(){	//查看更多
			if(this.active < 10) this.$router.push({ path:`/index/allianceNews/allianceNewlist/${this.active}`})
			else if(this.active >= 10 && this.active < 20) this.$router.push({ path:`/index/internationalExchange/allianceNewlist/${this.active}`})
		}
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
	.banner0{
		position: relative;
		img{display: block;width: 100%;}
		.policyTitle{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			font-size: 28px;
			font-family: AlibabaPuHuiTiM;
			color: #FFFFFF;
		}
		.banTits{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			-moz-transform: translate(-50%,-50%);
			-ms-transform: translate(-50%,-50%);
			-o-transform: translate(-50%,-50%);
			-webkit-transform: translate(-50%,-50%);
			text-align: center;
			.tit1{
				height: 61px;
				font-size: 45px;
				color: #FFFFFF;
				line-height: 61px;
			}
			.tit2{
				height: 20px;
				font-size: 14px;
				color: #FFFFFF;
				line-height: 20px;
				margin-top: 6px;
			}
		}
	}
	.allianceNewDetail{
		width: 1200px;
		margin: 51px auto 30px;
		.activityTitle{
			height: 51px;
			line-height: 51px;
			font-size: 18px;
			font-family: AlibabaPuHuiTiR;
			color: #FFFFFF;
			background: #1357A4;
			padding-left: 18px;
		}
		.detailcont{
			border: #E6E6E6 1px solid;
			min-height: 500px;
		}
		.contentcss{
			padding: 0 254px 54px;
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
		.gengduo>img{
			width: 100%;
			margin-top: 76px;
			display: block;
			cursor: pointer;
		}
	}
}
</style>