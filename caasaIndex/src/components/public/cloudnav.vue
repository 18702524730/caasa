<template>
  <div class="navbox">
    <div class="navBg1">
      <div class="sebes" @click="toindex">
        <img src="~assets/img/index/logo2.png" alt="">
        <div>
          <div>北京反侵权假冒联盟</div>
          <p>Anti-Infringement and Anti-Counterfeiting Alliance</p>
        </div>
      </div>
      <div class="tabsUl no_btn">
        <div @click="toindex" class="navtabs" :class="{active:curRouteData[1].name=='首页'}">
          <div class="title1">首页</div>
        </div>
        <div @click="tolink('xwzc')" class="navtabs" :class="{active:curRouteData[1].name=='新闻政策'}">
          <div class="title1">新闻政策</div>
        </div>
        <div @click="tolink('lmdt')" class="navtabs" :class="{active:curRouteData[1].name=='联盟动态'}">
          <div class="title1">联盟动态</div>
        </div>
        <div class="navtabs" :class="{active:curRouteData[1].name=='国际交流'}">
          <div class="title1" @click="tolink('gjjl')">
            国际交流
            <!-- <span></span> -->
          </div>
          <!-- <div class="title2">
            <div @click="tolink('gjjl')">国际交流</div>
            <div @click="tolink('gjdt')">国际动态</div>
          </div> -->
        </div>
        <div @click="tolink('hytd')" class="navtabs" :class="{active:curRouteData[1].name=='会员天地'}">
          <div class="title1">会员天地</div>
        </div>
        <div @click="tolink('fwnr')" class="navtabs" :class="{active:curRouteData[1].name=='服务内容'}">
          <div class="title1">服务内容</div>
        </div>
        <div @click="tolink('gylm')" class="navtabs" :class="{active:curRouteData[1].name=='关于联盟'}">
          <div class="title1">关于联盟</div>
        </div>
        <i class="el-icon-search" @click="tosearchFn"></i>
        <div class="searcss" v-show="issearch">
          <el-input
            placeholder="请输入要搜索的内容"
            prefix-icon="el-icon-search"
            suffix-icon="el-icon-close"
            ref="focus"
            v-model="searnr"
            @keyup.enter.native="searchsFn">
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data(){
    return{
      topcolor:1,
      userName:'',
      userUrl: CONFIG.userUrl + '/iprp/#/',
      user_token:'',
      istop:false,
      iszx:true,
      searnr:'',
      issearch:false,
    }
  },
  methods:{
    //删除关键cookie
    clearCookie(){
      this.$cookie.delete('truename', {domain: '.ipsebe.com'});
      this.$cookie.delete('phone', {domain: '.ipsebe.com'});
      this.$cookie.delete('user_token', {domain: '.ipsebe.com'});
    },
    tolink(k){
      if(k == 'xwzc') this.$router.push({ path:'/index/newsPolicy'})
      else if(k == 'lmdt') this.$router.push({ path:'/index/allianceNews'})
      else if(k == 'gylm') this.$router.push({ path:'/index/aboutAlliances'})
      // else if(k == 'gjdt') this.$router.push({ path:'/index/InternationalNews'})
      else if(k == 'gjjl') this.$router.push({ path:'/index/internationalExchange'})
      else if(k == 'fwnr') this.$router.push({ path:'/index/serviceContent?isActive=1'})
      else if(k == 'hytd') this.$router.push({ path:'/index/memberClub?isactive=1'})
    },
    toindex(){
      this.$router.push({ path:'/'})
    },
    tosearchFn(){
      this.issearch = true;
      this.$nextTick(() => {
        this.$refs.focus.focus()
      })
    },
    searchsFn(){
      this.$emit('toSearchList',[true,this.searnr])
    }
  },
  mounted(){
    $(".el-icon-close").click(() => {
      this.issearch = false;
      this.searnr = ''
      this.$emit('issearch',this.issearch)
    })
  },
  watch:{
  },
  computed: {
    curRouteData(){
      let temp = [],temps = [];
      this.$route.matched.filter((item,index,self) => {
        if(item.name){
          const name = item.meta.name;
          temp.push({'name':name,'path':item.path});
        }
      });
      temp.filter((item,index,self) => {
        if(!temps.includes(item.name)){
          temps.push(item);
        }
      })
      if(this.$route.path.indexOf('index') !== -1){
        temps.unshift({'name':'首页','path':'/'})
      }
      console.log(temps)
      return temps;
    }
  }
}


</script>

<style lang='less'>
.navbox{
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background: #fff;
    .navBg1{
      height: 76px;
      display: flex;
      justify-content: space-between;
      width: 1200px;
      margin: 0 auto;
      .sebes{
        padding: 19px 0;
        cursor: pointer;
        width: 379px;
        display: flex;
        align-items: center;
        color: #1357A4;
        img{width: 68px;display: block;}
        >div{
          font-size: 20px;margin-left: 10px;
          >div{font-family: AlibabaPuHuiTi-Medium;}
        }
        p{font-size: 12px;}
      }
    }
    .searcss{
      position: absolute;
      width: 100%;
      background: #fff;
      right: 0;
      top: 0;
      height: 100%;
      transition: 1s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      >div{
        width: 697px;
        height: 42px;
        >input{height: 100%;border-radius: 21px;}
        .el-icon-search,.el-icon-close{
          font-size: 20px;
          line-height: 42px;
          color: #1357A4;
        }
        .el-icon-close{cursor: pointer;}
      }
    }
    .tabsUl{
      width: 822px;
      font-size: 20px;
      color: #1357A4;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-content: center;
      position: relative;
      >i{padding: 0 20px;line-height: 76px;cursor: pointer;}
      .navtabs{
        cursor: pointer;
        width: 100%;
        line-height: 76px;
        text-align: center;
        position: relative;
        .title1>span{
          width: 0;
          height: 0;
          border: 6px solid;
          border-color: #1357A4 transparent transparent;
          margin-left: 6px;
          display: inline-block;
          transform: translateY(3px);
          -ms-transform: translateY(3px);
          -moz-transform: translateY(3px);
          -o-transform: translateY(3px);
          -webkit-transform: translateY(3px);
        }
        .title2{
          display: none;
          position: absolute;
          top: 76px;
          width: 100%;
          left: 50%;
          transform: translateX(-50%);
          -o-transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          -moz-transform: translateX(-50%);
          border-bottom: 1px solid #CCE3FF;
          >div{
            width: 100%;
            height: 52px;
            line-height: 52px;
            background: #FFFFFF;
            border: 1px solid #CCE3FF;
            color: #1357A4;
            font-size: 16px;
            border-bottom: 0;
          }
          >div:hover{
            background: #CCE3FF;
          }
        }
      }
      .navtabs:hover,.active{
        .title1{
          color: #fff;
          background: #1357A4;
          >span{
            border-color: #fff transparent transparent;
          }
        }
      }
      .navtabs:hover .title2{
        display: block;
      }
    }
  }
</style>