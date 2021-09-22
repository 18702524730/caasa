<template >
<div >
  <div class="home">
    <topnav :key="fullpath"></topnav>
    <div class="content" >
      <!-- <div class="breadbox"><bread></bread></div> -->
      <router-view></router-view>
    </div>
  </div>
  <myfooter></myfooter>
</div>
</template>
<script>
import topnav from 'cps/public/topnav.vue'
import myfooter from 'cps/public/newfooter.vue'
import {store} from 'utils/';
const adminUrl = CONFIG.adminUrl;
export default {
  name: 'myHome',
  data(){
  	return {
  		menuIsDone:false,
  		isDone: false,
  	}
  },
  components:{
    myfooter,topnav
  },
  computed: {
    fullpath: function() {
      this.$route.query
      return Date.parse(new Date());
    }
  },
  methods: {
  	complete(ok){
  		this.menuIsDone = !!ok;
  	},
    access() {
      store.set('permission', '');
      store.set('userinfo', '');
      this.$http.get(adminUrl+'/api/privilege', {})
      .then((resp) => {
        this.isDone = true;
        var data = resp.data;
        store.set('userinfo', data);
        store.set('permission', data.purviews);
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
  mounted() {
    // this.access();
  }
}
</script>
<style scoped lang='less'>
.content{
  // margin-top: 60px;
  /*background: #f1f2f7;*/
  background: #fff;
}
</style>
