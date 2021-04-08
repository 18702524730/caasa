<template>
  <div class="navbox">
    <div class="top-nav clearfix">
    <div class="left-logo">
        <div class="logo">
        浙江网上技术交易市场
        </div>
    </div>
    <ul class='middle-tab fl'>
        <li v-for="(item,key) in mtabs" :key="key" :class="{active: middletab ==item.id}" @click="tolink(item)">{{item.name}}</li>
    </ul>
    <div class="right-tab">
        <ul class="top">
        <li v-for="(item,key) in topnav" :key="key" :class="{active: now==key}" @click="toitem(item,key)">{{item.name}}</li>
        </ul>
        <div class="bottom"> 
        <input type="text" placeholder="输入服务内容"><span class="btn-search">搜索</span>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            topnav:[
                {name:'技术成果',key:'1'},
                {name:'技术需求',key:'2'},
                {name:'政策公告',key:'3'},
            ],
            mtabs:[
                {name:'技术成果',path:'techAchievements',id:1},
                {name:'技术需求',path:'techRequirements',id:2},
                {name:'区块链展示',path:'blockChain',id:3},
                {name:'知产服务',path:'ipService',id:4},
                {name:'评估排行',path:'assessment',id:5},
                {name:'积分排行',path:'integral',id:6},
                {name:'新闻资讯',path:'news',id:7}
            ],
            middletab: 1,
            now: 0,
        }
    },
    methods:{
        toitem(it,k){
          this.now = k;
        },
        tolink(it){
          this.middletab = it.id;
          let temp = this.$route.matched;
          let arr = []
          temp.forEach(item=>{
            arr.push({
              name:item.meta.name,
              path: item.name
            })
          })
          let url = this.$route.matched[0].path +'/'+it.path
          this.$router.push({path: url})
          this.$store.commit('SET_CUR_ROUTE_DATA', arr);
          console.log(this.$store.state.router.curRouteData)
          
          // if(it.path.indexOf('http')==0){
          //     window.location.href = it.path
          // }else{
          //     this.$router.push({path: it.path})
          // }
        },
        obser(){
          let temp = this.$route.matched;
          let arr = []
          temp.forEach(item=>{
            arr.push({
              name:item.meta.name,
              path: item.name
            })
          })
          let tab = this.$route.matched[1].name
          this.mtabs.forEach(item=>{
            if(item.path == tab){
              this.middletab = item.id
            }
          })
          this.$store.commit('SET_CUR_ROUTE_DATA', arr);
        }
    },
   mounted(){
     this.obser()
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
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
  .top-nav{
    max-width: 1200px;
    padding: 15px 0;
    margin: 0 auto;
    .left-logo{
      float: left;
      width: 240px;
      font-size: 16px;
      font-weight: bold;
      
      line-height: 60px;
      cursor: pointer;
    }
    .new{
      font-size: 20px;
      color: #666;
      line-height: 60px;
      font-weight: 600;
    }
    .name{
      padding: 10px 0;
      margin-right: 30px;
    }
    h3{
      line-height: 30px;
      font-size: 18px;
      color: #999;
    }
    .middle-tab{
      padding-top: 20px;
      >li{
        float: left;
        margin-right: 10px;
        margin-left: 10px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        line-height: 40px;
        &.active{
          border-bottom: 2px solid #379dea;
        }
        
      }
    }
    .right-tab{
      // width: 50%;
      float: right;
      .top{
        display: flex;
        padding-left: 20px;
        margin-bottom: 5px;
        li{
          height: 25px;
          line-height: 25px;
          margin-right: 20px;
          font-size: 14px;
          cursor: pointer;
          
        }
        .active{
          border-bottom: 1px solid #379dea;
        }
      }
      .bottom{
        position: relative;
        width:300px;
        padding: 5px 10px 5px 20px;
        height: 28px;
        
        border-radius: 20px;
        border: 1px solid #eee;
        input{
          float: left;
          height: 18px;
          line-height: 18px;
          width: 230px;
          padding-right: 5px;
          font-size: 14px;
        }
        .btn-search{
          position: absolute;
          width: 50px;
          right: 0;
          top: -1px;
          padding-right: 12px;
          font-size: 14px;
          text-align: right;
          line-height: 28px;
          background-color: #379dea;
          border-radius: 0 14px 14px 0;
          cursor: pointer;
          color: #fff;
        }
      }
    }
  }
</style>