<template>
<div class="mycunzheng">
  <div class="cunzhengbox">
    <div class="cunzhengcontent">
      <div class="topmsg clearfix">
        <div class="usermsg">
          <h3><span class="name" v-if="user.length<5">您好，尊敬的平台用户</span><span class="name" v-if="user.length>4">您好，{{user}}用户</span><span class="toggle" @click="tologin">退出账号</span></h3>
          <div class="wode"><span @click="tomywq">我的维权</span><span class="active">我的存证</span><span @click="toadmin" v-if="isadmin==1">我的管理台</span></div>
        </div>
        <div class="gongzhonghao">
          <div class="picbox">
            <img src="~assets/img/home/ewm.jpg" alt="">
          </div>
          <p>扫一扫，随时随地关注联盟最新资讯！</p>
        </div>
      </div>
      <div class="commonheight" v-if="total>0">
        <h3 class="wodetitle"><span class="xh">序号</span><span class="wqbh">存证编号</span><span class="ywlx">存证类型</span><span class="slsj">存证时间</span><span class="sq">存证名称</span><span class="cz">操作</span></h3>
        <ul class="wodelist">
          <li v-for="(item,k) in dataList" :key="item.seqNo">
              <div class="clearfix">
              <span class="xh">{{item.seqNo}}</span><span class="wqbh">{{item.evidSn}}</span><span class="ywlx">{{item.evidType|evidTypeFormat}}</span><span class="slsj">{{item.evidTime}}</span><span class="sq">{{item.evidName}}</span>
            <span class="cz">
              <!-- <span class="qxbtn" v-if="item.state==1" @click="qxweiquan(item)">取消</span> -->
              <a :href="rootUrl+'/ipsebe_union/evidence/downSaveFile.do?id='+item.id+'&token='+token" target="_blank"><span class="bjbtn">{{item.evidType==1?'下载源文件':'下载截图'}}</span></a>
              <span class="cdbtn"  @click="viewpaper(item)">查看保管单</span>
              <span class="xqbtn"  @click="cdshow = true">出证</span>
              </span>
              </div>
            </li>
        </ul>
      </div>
      <div class="commonheight" v-if="total<1">
        <div class="emptybox">
          <div class="iconbox"><img src="~assets/img/home/empty.png" alt=""></div>
          <p>您还未提交存证信息</p>
        </div>
      </div>
      <div class="nobgpage" >
        <el-pagination v-if="total>8" :total="total" layout="total,prev,pager,next" :page-size="pgCount" @current-change="curchange" :current-page.sync="pgIndex"></el-pagination>
      </div>
    </div>
  </div>
  <el-dialog title="申请出证" :visible.sync="cdshow" class="chuzhengbox" width="454px" top="30vh">
    <div>
      <div class="pjtips">您好，现阶段通过线下方式出证，杭州互联网公证处知识产权服务平台</div>
      <div class="pjtips">联系人：沈女士</div>
      <div class="pjtips">联系电话：0571-87831923</div>
      <div class="pjsubmitbox">
        <div class="quedingbtn" @click="cdshow=false">确定</div>
      </div>
    </div>
  </el-dialog>
  <div class="xuanfuboxes">
      <xuanfu></xuanfu>
    </div>
</div>
</template>

<script>
import Filters from 'utils/filters'
import star from 'cps/public/pingfen.vue'
import VueCookie from 'vue-cookie'
import xuanfu from 'cps/public/xuanfu.vue'
const rootUrl = CONFIG.rootUrl;
const listUrl = './ipsebe_union/evidence/myEvidenceList.do'
export default {
  data(){
    return {
      isadmin:0,
      user:'',
      text:[],
      iteminfos:{},
      iteminfo:{
      },
      rootUrl: rootUrl,
      dataList:[
      ],
      typelist:[
        {title:'商标',value:1},
        {title:'专利',value:2},
        {title:'版权',value:3},
        {title:'质量抽检',value:4},
        {title:'海关',value:5},
        {title:'线下',value:6},
        {title:'电商',value:7},
        {title:'外贸',value:8},
        {title:'其他',value:9},
      ],
      reasonlist:[
        {title:'暂时不需要了',value:1},
        {title:'我已经处理完成',value:2},
        {title:'服务太慢了',value:3},
        {title:'其他',value:4},
      ],
      checklist:'',
      reasoncheck:[],
      pgIndex:1,
      pgCount:8,
      total:30,
      evaluateSatisfyDegree:'',
      evaluateAttitudeDegree:'',
      evaluateSpecialDegree:'',
      evaluateTimeDegree:'',
      evaluateContent:'',
      rightProtectSn:'',
      pjshow: false,
      bjshow:false,
      qxshow:false,
      ckshow: false,
      cdshow:false,
      token:''
    }
  },
  filters:{
    dateFormat: Filters.formatDate.dateFormat,
    wqstateFormat: Filters.wqstateFormat,
    evidTypeFormat: function(ret){
      if(ret==1){
        return '文件存证'
      }
      if(ret==2){
        return '网页存证'
      }
    }
  },
  components:{
    star,
    xuanfu
  },
  methods:{
    tomywq(){
      this.$router.push({path:'/page/weiquan/wqlist'})
    },
    tologin(){
      this.$http.post('./ipsebe_union/member/userLoginOut.do').then(res=>{
        localStorage.setItem('nowlogin',0)
        localStorage.removeItem('userlogininfo')
        localStorage.removeItem('appToken')
        this.$router.push({path:'/page/login/homelogin',query:{url: window.location.href}})
      })
      
    },
    toadmin(){
      window.open(CONFIG.indexUrl + '/#/admin')
    },
    showinfo(it){
    },
    downloadfile(it){
      // this.$http.get('./ipsebe_union/evidence/downSaveFile.do?id='+it.id).then(res=>{

      // })
      window.open(CONFIG.rootUrl+'/ipsebe_union/evidence/downSaveFile.do?id='+it.id)
    },
    viewpaper(it){
      this.$http.get('./ipsebe_union/evidence/catEviCzh.do?id='+it.id).then(res=>{
        window.open(res.data.url)
      }).catch(err=>{
        this.$message.error(err.response.data.msg||'查看失败')
      })
    },

    curchange(val){
      this.pgIndex = val;
      this.getlist()
      console.log(val)
    },
    getlist(){
      let data = {
        pgIndex:this.pgIndex,
        pgCount:this.pgCount
      }
        // this.loading = true;
        this.$router.replace({query: data})
        this.$http.get(listUrl,{params:data}).then(res=>{
            // this.loading = false
            let data = res.data;
            let arr = data.elements;
            // arr.forEach(item=>{
            //   item.showinfo = false;
            // })
            this.dataList = arr;
            this.total = data.totalElements;
        }).catch(err=>{
            var odata = err.response.data;
            if (odata.code == 'U00015') {
              let furl = window.location.href
              localStorage.removeItem('userlogininfo')
              window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin?url='+ furl
              return;
            }
            // this.loading = false;
            this.$message.error(err.response.data.msg||'未请求到数据')
        })
    },
    
  },
  mounted(){
    // let phone = VueCookie.get('username')
    // this.user = phone;
    // this.isadmin = localStorage.getItem('wqisadmin')
    // console.log(localStorage.getItem('wqisadmin'))
    let str = localStorage.getItem('userlogininfo')
    let obj = JSON.parse(str)
    this.token = localStorage.getItem('appToken')
    if(obj){
      this.user = obj.username;
      this.isadmin = obj.isAdmin
    }
    
    this.getlist()
  }
}
</script>

<style lang="less">

.mycunzheng{
  font-family:'PingFangSC-Regular','PingFang SC';
  background:linear-gradient(270deg,rgba(5,39,77,1) 0%,rgba(0,23,49,1) 100%);
  
  .cunzhengbox{
    padding-bottom: 20px;
    .commonheight{
      min-height: 512px;
      background-color: #fff;
      .emptybox{
        padding-top: 170px;
        width: 154px;
        margin: 0 auto;
        .iconbox{
          width: 154px;
          height: 140px;
          margin-bottom: 5px;
          img{
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        p{
          text-align: center;
          height:22px;
          font-size:16px;
          font-family:'PingFangSC-Regular','PingFang SC';
          color:#999;
          line-height:22px;
        }
      }
      
    }
    .cunzhengcontent{
      width: 1200px;
      margin: 0 auto;
      padding-top: 40px;
      min-height: 660px;
      background: url('~assets/img/home/bg.png') center top no-repeat;
      color:#fff;
      .topmsg{
        margin-bottom: 20px;
        .usermsg{
          float: left;
          >h3{
            margin-bottom: 17px;
          }
          .wode{
            height:25px;
            font-size:18px;
            font-weight:500;
            line-height:25px;
            span{
              cursor: pointer;
              margin-right: 40px;
              padding-bottom: 5px;
              color:rgba(255,255,255,0.6);
              &:hover{
                color: #fff;
              }
            }
            .active{
              color:#fff;
              border-bottom: 1px solid #fff;
            }
          }
          .name{
            width:309px;
            height:40px;
            font-size:28px;
            font-weight: normal;
            line-height:40px;
            margin-right: 29px;
            vertical-align: bottom;
          }
          .toggle{
            height:17px;
            font-size:12px;
            
            line-height:17px;
            vertical-align: bottom;
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .gongzhonghao{
          float: right;
          .picbox{
            width: 66px;
            height: 66px;
            background-color: #fff;
            margin: 0 auto;
            margin-bottom: 5px;
            >img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          >p{
            width:204px;
            height:17px;
            font-size:12px;
            
            line-height:17px;
          }
        }
      }
      .wodetitle{
        height:56px;
        background:#F8F8F8;
        border:1px solid #F4F4F4;
        line-height: 54px;
        color:#333;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        >span{
          float: left;
        }
        .xh{
          width: 100px;
        }
        .wqbh{
          width: 300px;
        }
        .ywlx{
          width: 150px;
        }
        .sq{
          width: 280px;

        }
        .slsj{
          width: 160px;
        }
        .cz{
          width: 198px
        }
      }
      .wodelist{
        text-align: center;
        background-color: #fff;
        >li{
          border-bottom: 1px solid #F4F4F4;
          color: #333;
          span{
            float: left;
            height: 56px;
            line-height: 55px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .xh{
            width: 100px;
          }
          .wqbh{
            width: 300px;
          }
          .ywlx{
            width: 150px;
          }
          .sq{
            width: 280px;

          }
          .slsj{
            width: 160px;
          }
          .cz{
            width: 198px;
            text-align: center;
            overflow: hidden;
            .bjbtn,
            .cdbtn,
            .xqbtn{
              float: none;
              
              font-size:12px;
              
              color:#4186E9;
              text-decoration: underline;
              cursor: pointer;
            }
            .bjbtn,
            .cdbtn{
              margin-right: 14px;
            }

          }
        }
        .jieguo{
          padding-left: 72px;
          overflow: hidden;
          .chuli{
            text-align: left;
            margin-right: 150px;
            margin-bottom: 30px;
            >h3{
              height:17px;
              font-size:12px;
              
              color:#333;
              line-height:17px;
            }
            >ul{
              padding-left: 100px;
              >li{
                height:17px;
                font-size:12px;
                
                color:#666;
                line-height:17px;
              }
            }
          }
          .guwenmsg{
            float: left;
            text-align: left;
            margin-right: 150px;
            margin-bottom: 10px;
            >h3{
              height:17px;
              font-size:12px;
              
              color:#333;
              line-height:17px;
            }
            >ul{
              padding-left: 100px;
              >li{
                height:17px;
                font-size:12px;
                
                color:#666;
                line-height:17px;
                margin-bottom: 10px;
              }
            }
          }
          .jindu{
            float: left;
            height: 98px;
            padding-top: 17px;
            >li{
              float: left;
              width: 200px;
              .yuan{
                position: relative;
                width: 18px;
                height: 18px;
                border-radius: 9px;
                background-color: #DBDBDB;
                margin: 0 auto 6px;
              }
              
              .line{
                position: absolute;
                width: 100px;
                height: 0;
                line-height: 0;
                top: 9px;
                left: 9px;
                border-bottom: 1px solid #DBDBDB;
              }
              .linea{
                position: absolute;
                width: 200px;
                height: 0;
                line-height: 0;
                top: 9px;
                left: -91px;
                border-bottom: 1px solid #DBDBDB;
              }
              .lineb{
                position: absolute;
                width: 100px;
                height: 0;
                line-height: 0;
                top: 9px;
                right: 9px;
                border-bottom: 1px solid #DBDBDB;
              }
              .active{
                background-color: #306CC3;
                .line,
                .linea,
                .lineb{
                  border-color: #306CC3;
                }
              }
              .zht,
              .shijian{
                height:17px;
                font-size:12px;
                
                color:rgba(102,102,102,1);
                line-height:17px;
              }
            }
          }
        }
      }
    }
    
  }
  .auditweiquan{
    .itembox{
        padding: 15px 17px;
        margin-bottom: 16px;
        background-color: #fff;
        border-radius: 3px;
        line-height: 20px;
        font-size:14px;
        
        color:#666;
        overflow: hidden;
        box-shadow:0px 2px 34px 0px rgba(0,0,0,0.17);
        .tit{
          float: left;
          height: 20px;
          line-height: 20px;
        }
        .txtinput::-webkit-scrollbar{
          width: 2px;
        }
        .txtinput::-webkit-scrollbar-thumb{
          width: 2px;
          background-color: #379dea;
        }
        .cont{
          margin-left: 107px;
          line-height: 20px;
          overflow: hidden;
          textarea{
            outline: none;
            border:none;
            resize: none;
            height: 60px;
          }
          .el-radio{
            width: 70px;
            margin-bottom: 5px;
          }
          .txtinput{
            float: left;
            width: 100%;
          }
        }
      }
      .itemboxs{
        margin-bottom: 16px;
        background-color: #fff;
        border-radius: 3px;
        line-height: 20px;
        font-size:14px;
        
        color:#666;
        .tit{
          float: left;
          height: 20px;
          line-height: 20px;
        }
        .txtinput::-webkit-scrollbar{
          width: 2px;
        }
        .txtinput::-webkit-scrollbar-thumb{
          width: 2px;
          background-color: #379dea;
        }
        .conts{
          margin-left: 100px;
          line-height: 20px;
          .contboxs{
            
            width: 100%;
          }
          textarea{
            outline: none;
            border:none;
            resize: none;
            height: 70px;
            line-height: 20px;
            padding: 5px 10px;
            margin-bottom: 10px;
          }
          .el-checkbox{
            margin-bottom: 12px;
          }
          .el-checkbox__label{
            width: 200px;
          }
          .txtinput{
            width: 100%;
            box-shadow:0px 0 4px 0px rgba(0,0,0,0.17);
          }
        }
      }
      .submitbox{
        overflow: hidden;
        text-align: center;
        font-size:14px;
        font-family:'PingFangSC-Regular','PingFang SC';
        
        margin-bottom: 20px;
        .cancelbtn{
          float: left;
          width:152px;
          height:38px;
          line-height: 38px;
          background:#001731;
          border-radius:3px;
          color: #fff;
          cursor: pointer;
        }
        .submitbtn{
          float: right;
          width:152px;
          height:38px;
          border-radius:3px;
          line-height: 36px;
          border:1px solid #001731;
          color: #001731;
          cursor: pointer;
        }
      }
  }
  .chuzhengbox{
    .el-dialog .el-dialog__title{
      font-size:24px;
      font-family:'PingFangSC-Regular','PingFang SC';
      
      color:#001731;
      line-height:33px;
    }
    .el-dialog__body{
      padding: 10px 20px 25px 20px;
    }
    .pjtips{
      line-height: 20px;
      font-size: 14px;
      width: 378px;
    }
    .pjsubmitbox{
    overflow: hidden;
    text-align: center;
    font-size:14px;
    font-family:'PingFangSC-Regular','PingFang SC';
    
    .cancelbtn{
      float: left;
      width:152px;
      height:38px;
      line-height: 38px;
      background:#001731;
      border-radius:3px;
      color: #fff;
      cursor: pointer;
    }
    .quedingbtn{
      width:152px;
      height:38px;
      margin: 0 auto;
      margin-top: 27px;
      line-height: 38px;
      background:#001731;
      border-radius:3px;
      color: #fff;
      cursor: pointer;
    }
    .submitbtn{
      float: right;
      width:152px;
      height:38px;
      border-radius:3px;
      line-height: 36px;
      border:1px solid #001731;
      color: #001731;
      cursor: pointer;
    }
  }
  }
  
  
}
.nobgpage{
  height: 80px;
  padding: 20px 0;
  text-align: right;
  .el-pagination{
    padding: 0;
    .el-pagination__total{
      color:#fff;
    }
  }
}
</style>