<template>
  <div class="navbox">
    <div class="logotab clearfix">
      <div class="logo">
        <a :href="homeIndex"><img src="~assets/img/home/logo.png" alt="">
        </a>
      </div>
      <div class="logoname"><a :href="homeIndex">国际反侵权假冒服务平台</a></div>
      <ul class='middle-tab clearfix'>
          <li v-for="(item,key) in mtabs" :key="key" :class="{active: middletab ==item.path}" @click="tolink(item)">{{item.name}}</li>
      </ul>
      <div class="kefu">
        客服热线：010-84109061
      </div>
    </div>
</div>
</template>

<script>
import VueCookie from 'vue-cookie'

const wxscanlongin = './ipsebe_union/wxscanlongin.do'
export default {
    data(){
        return{
            mtabs:[
                {name:'联盟官网',path:'',id:''},
                {name:'一键维权',path:'homepage',id:1},
                // {name:'一键维权',path:'cases',id:3},
                {name:'公证存证',path:'gzcz',id:4},
                
                {name:'我的',path:'weiquan',id:2},
            ],
            middletab: 'homepage',
            now: 0,
            homeUrl: CONFIG.indexNewUrl,
            homeIndex: CONFIG.indexUrl + '/#/page/homepage/home',
        }
    },
    methods:{
        toitem(it,k){
          this.now = k;
        },
        tolink(it){
          if(it.name == '联盟官网'){
            location.href = this.homeUrl
            return
          }
          this.middletab = it.path;
          let temp = this.$route.matched;
          let arr = []
          temp.forEach(item=>{
            arr.push({
              name:item.meta.name,
              path: item.name
            })
          })
          let url = this.$route.matched[0].path +'/'+it.path
          
          if(it.path=='weiquan'){
            let token = VueCookie.get('username');
            let islogin = localStorage.getItem('nowlogin')
            if(islogin!=1){
              localStorage.setItem('hdUrl',CONFIG.indexUrl+'/#/page/weiquan/wqlist')
              this.$router.push({path:'/page/login/homelogin'}) //,query:{url:CONFIG.indexUrl+'/#/page/weiquan/wqlist'}
            }else{
              this.$router.push({path: url})
            }
            // this.$router.push({path: url})
          }else{
            this.$router.push({path: url})
          }
          // this.$store.commit('SET_CUR_ROUTE_DATA', arr);
          // console.log(this.$store.state.router.curRouteData)
          
          // if(it.path.indexOf('http')==0){
          //     window.location.href = it.path
          // }else{
          //     this.$router.push({path: it.path})
          // }
        },
        obser(){
          let temp = this.$route.matched;
          let temps = [];
          let arr = []
          temp.forEach(item=>{
            temps.push(item)
          })
          temps.shift()
          temps.forEach(item=>{
            arr.push({
              name:item.meta.name,
              path: item.name
            })
          })
          let tab = this.$route.matched[1].name
          this.middletab = tab
          this.$store.commit('SET_CUR_ROUTE_DATA', arr);
        },
        wxscanlongin(){
          this.$http.get(wxscanlongin+'?code='+this.wxcode).then(res=>{
            localStorage.setItem('appToken',res.data.token)
            localStorage.setItem('nowlogin',1)
            

            localStorage.setItem('wqisadmin',res.data.isAdmin)
            let str = JSON.stringify(res.data)
            localStorage.setItem('userlogininfo',str)
          })
        }, 
    },
    mounted(){
      this.obser()
    },
    created(){
      this.wxcode = this.$route.query.code||'';
      if(this.wxcode) {
        this.wxscanlongin()
      }
    },
    watch:{
      $route(){
        this.obser()
      }
    }
}
</script>

<style lang='less'>
.navbox{
  font-size: 16px;
  color: #333;
  background:linear-gradient(270deg,rgba(5,39,77,1) 0%,rgba(0,23,49,1) 100%);
  .logotab{
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 26px;
    padding-left: 15px;
    padding-bottom: 34px;
    font-size:14px;
    font-family:'PingFangSC-Regular','PingFang SC';
    
    color:rgba(255,255,255,1);
    line-height:40px;
  }
  .logo{
    float: left;
    width: 65px;
    height: 40px;
    margin-right: 12px;
    cursor: pointer;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .logoname{
    float: left;
    font-size:17px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:40px;
    margin-right: 66px;
    a{
      color: #fff;
      text-decoration: none;
    }
  }
  .middle-tab{
    float: left;
    overflow: hidden;
    >li{
      float: left;
      width: 90px;
      line-height: 40px;
      margin-right: 40px;
      text-align: center;
      color:rgba(255,255,255,0.6);
      cursor: pointer;
      &:last-child{
        margin-right: 0;
      }
      &:hover{
        color:#fff;
      }
      &.active{
        color:#fff;
        border-bottom: 4px solid #306CC3;
      }
    }
  }
  .kefu{
    float: right;
    
  }
}
</style>