<template>
	<div class="aboutAlliances">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/aboutAlliances/banner.png" alt="">
			<div class="policyTitle">关于联盟</div>
		</div>
		<div class="navTop" v-if="!isSearchList">
			<div class="navTabs">
				<div @click="roulink(1)" :class="{'active':query.islinkNum==1}">联盟简介</div>
				<div @click="roulink(2)" :class="{'active':query.islinkNum==2}">联盟章程</div>
				<div @click="roulink(3)" :class="{'active':query.islinkNum==3}">组织结构</div>
				<div @click="roulink(4)" :class="{'active':query.islinkNum==4}">联盟智库</div>
				<div @click="roulink(5)" :class="{'active':query.islinkNum==5}">联盟成果发布</div>
				<div @click="roulink(6)" :class="{'active':query.islinkNum==6}">联盟案例</div>
				<div @click="roulink(7)" :class="{'active':query.islinkNum==7}">联系我们</div>
				<div @click="roulink(8)" :class="{'active':query.islinkNum==8}">合作伙伴</div>
			</div>
		</div>
		<div v-if="!isSearchList" class="aboutAllianceCont">
			<briefIntroduction v-show="query.islinkNum==1"></briefIntroduction>
			<articlesOfAssociation v-show="query.islinkNum==2"></articlesOfAssociation>
			<organizationStructure v-show="query.islinkNum==3"></organizationStructure>
			<allianceThinkTank v-if="query.islinkNum==4"></allianceThinkTank>
			<allianceAchievements v-show="query.islinkNum==5"></allianceAchievements>
			<allianceCase v-show="query.islinkNum==6"></allianceCase>
			<contactUs v-show="query.islinkNum==7"></contactUs>
			<cooperativePartner v-show="query.islinkNum==8"></cooperativePartner>
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
import briefIntroduction from './briefIntroduction.vue'	//联盟简介
import articlesOfAssociation from './articlesOfAssociation.vue'	//联盟章程
import organizationStructure from './organizationStructure.vue'	//组织结构
import allianceThinkTank from './allianceThinkTank.vue'	//联盟智库
import allianceAchievements from './allianceAchievements.vue'	//联盟成果发布
import allianceCase from './allianceCase.vue'	//联盟案例
import contactUs from './contactUs.vue'	//联系我们
import cooperativePartner from './cooperativePartner.vue'	//合作伙伴
import filters from '../../utils/filters/filters.js'	
const cdata = {
	islinkNum: 1
}
export default {
	data(){
		return {
			isSearchList: false,
			searchCont: '',
			query: {},
			searchdata: Object.assign({},cdata)
		}
	},
	components:{
		myfooter,cloudnav,newsList,briefIntroduction,articlesOfAssociation,organizationStructure,allianceThinkTank,allianceAchievements,allianceCase,contactUs,cooperativePartner
	},
	mounted(){
		this.getquery();
	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
		roulink(k){
			// if(this.searchdata.islinkNum == k) {
			// 	return
			// }
			this.searchdata.islinkNum = k;
			this.query = Object.assign({},this.searchdata);
			this.$router.push(
				{query: this.query},
				onComplete => {},
				onAbort => {}
			)
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
			if(!re.islinkNum) {
				re.islinkNum = 1
			}
			this.query = Object.assign({},re);
		},
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
  },
  watch:{
    '$route' (to, from) {
        this.getquery()
    },
  },
}
</script>

<style lang='less'>
.aboutAlliances{
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
				width: 100%;
				text-align: center;
				cursor: pointer;
			}
			>div:hover{
				background: #1357A4;
			}
			.active{
				background: #1357A4;
			}
		}
	}
	.aboutAllianceCont{
		width: 1200px;
		margin: 0 auto;
	}
}
</style>