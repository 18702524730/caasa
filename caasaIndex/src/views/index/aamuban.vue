<template>
	<div class="aboutAlliances">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
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
		}
	},
	components:{
		myfooter,cloudnav,newsList
	},
	mounted(){

	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
  },
}
</script>

<style lang='less'>
.aboutAlliances{

}
</style>