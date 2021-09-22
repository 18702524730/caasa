<template>
<div class="homebox">
  <div class="formbox">
    <div class="formcontent">
      <div class="conts">
        <div class="wywq">
          <span class="line lineleft white"></span>
          <span class="line lineright white"></span>
          <span class="txt whitecolor">我要维权</span>
        </div>
        <div class="itembox">
          <div class="tit">投诉人：</div>
          <div class="cont"><input class="txtinput" ref="inputVal" v-model="dataObj.name" type="text" placeholder="请输入您的姓名或所在公司" maxlength="40"></div>
        </div>
        <div class="itembox">
          <div class="tit">手机：</div>
          <div class="cont"><input class="txtinput" v-model="dataObj.phone" type="text" placeholder="请输入您的手机号" maxlength="11"></div>
        </div>
        <div class="itembox" v-if="!$route.query.active">
          <div class="tit">业务类型：</div>
          <div class="cont haspd">
            <el-radio-group v-model="checktype">
              <el-radio v-for="(item,k) in typelist" :key="k" :label="item.value">{{item.title}}</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="itembox">
          <div class="tit">诉求：</div>
          <div class="cont"><textarea class="txtinput" v-model="dataObj.desc" type="textarea" placeholder="请简单描述您的维权诉求，我们将于15分钟内与您取得联系！"></textarea></div>
        </div>
        <div class="submit" @click="submitdata">
          立即提交
        </div>
        <div class="positionbox">
          <ul class="newsubmit" id="scrollboxs">
            <li v-for="(item,key) in justlist" :key="key">{{item}} 刚刚提交了 一键维权需求</li>
            <li v-for="(item,key) in justlist" :key="item+key">{{item}} 刚刚提交了 一键维权需求</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="weiquan">
    <div class="tijiaobox">
      <div class="tijiaoleft">
        <div class="tijiao"><span class="time">昨日提交</span> <span class="num">{{yesterdaySubmit}}</span></div>
        <div class="wywq">
          <span class="line lineleft gray"></span>
          <span class="line lineright gray"></span>
          <span class="txt graycolor">近期受理</span>
        </div>
        <div class="shadowbox">
          <div class="listhead"><span class="apply">申请人</span><span class="type">业务类型</span><span class="desc">诉求内容</span></div>
          <div class="posdiv">
            <ul class="yestoday" id="myslide" @mouseover="mouseOver" @mouseout="mouseOut">
              <li v-for="(item,key) in yeslist" :key="key"><span class="apply">{{item.name}}</span><span class="type">{{item.type}}</span><span class="desc">{{item.desc}}</span></li>
              <li v-for="(item,key) in yeslist" :key="item.id"><span class="apply">{{item.name}}</span><span class="type">{{item.type}}</span><span class="desc">{{item.desc}}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tijiaoright">
        <div class="tijiao"><span class="time">累计提交</span> <span class="num">{{allSubmit}}</span></div>
        <div class="wywq">
          <span class="line lineleft gray"></span>
          <span class="line lineright gray"></span>
          <span class="txt graycolor">处理结果</span>
        </div>
        <div class="shadowbox">
          <div class="listheads"><span class="apply">维权编号</span><span class="type">侵权主体</span><span class="desc">处理结果</span></div>
          <div class="posdiv">
            <ul class="result" id="myslides" @mouseover="mouseOvers" @mouseout="mouseOuts">
              <li v-for="(item,key) in reslist" :key="key"><span class="apply">{{item.name}}</span><span class="type">{{item.type}}</span><span class="desc">{{item.desc}}</span></li>
              <li v-for="(item,key) in reslist" :key="item.id"><span class="apply">{{item.name}}</span><span class="type">{{item.type}}</span><span class="desc">{{item.desc}}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-dialog title="提交成功" :visible.sync="sucshow" class="commonboxs" width="398px" top="30vh">
    <div>
      <div class="pjtips mb20">感谢您对联盟的信任，我们将尽快安排专人与您联系</div>
      <div class="pjsubmitbox">
        <div class="quedingbtn" @click="sucshow=false">确定</div>
      </div>
    </div>
  </el-dialog>
  
  <div class="xuanfuboxes">
    <xuanfu></xuanfu>
  </div>
  <div class="mask" v-if="nologin"></div>
  <logincps v-if="nologin" @closedenglu="nologin = false"></logincps>
</div>
</template>

<script>
import Filters from 'utils/filters'
import xuanfu from 'cps/public/xuanfu.vue'
import logincps from 'cps/public/login.vue'
import axios from 'axios'
const postUrl = './ipsebe_union/submitUserRightProtect.do'
const getUrl = './ipsebe_union/statisticSubmitData.do'
const dataobj = {
  name:'',
  phone:'',
  desc:''
}
export default {
  data(){
    return {
      dataObj: Object.assign({},dataobj),
      sucshow: false,
      nologinshow: false,
      wxcode: '',
      yesterdaySubmit:'',
      justlist:[],
      allSubmit:'',
      nologin: false,
      typelist:[
        {title:'检索注册登记',value:'检索注册登记'},
        {title:'侵权快速判定报告',value:'侵权快速判定报告'},
        {title:'诉讼仲裁',value:'诉讼仲裁'},
        {title:'商业秘密',value:'商业秘密'},
        {title:'反垄断、反不正当竞争',value:'反垄断、反不正当竞争'},
        {title:'品牌溯源保护',value:'品牌溯源保护'},
        {title:'质量抽检报告',value:'质量抽检报告'},
        {title:'行政查处',value:'行政查处'},
        {title:'海外合规咨询',value:'海外合规咨询'},
        {title:'监测存证公证',value:'监测存证公证'},
        {title:'反侵权假冒（平台）投申诉',value:'反侵权假冒（平台）投申诉'},
        {title:'刑事保护',value:'刑事保护'},
        {title:'进出口贸易预警保护',value:'进出口贸易预警保护'},
        {title:'知识产权质量合规及标准建设',value:'知识产权质量合规及标准建设'},
        {title:'展会侵权假冒投申诉',value:'展会侵权假冒投申诉'},
        {title:'海关知识产权保护',value:'海关知识产权保护'},
        {title:'美国301、337预警及咨询',value:'美国301、337预警及咨询'},
        {title:'产品召回解决',value:'产品召回解决'},
        {title:'纠纷调解',value:'纠纷调解'},
        {title:'产业专项整治',value:'产业专项整治'},
      ],

      yeslist:[
        {name:'罗先生',type:'商标',desc:'我的商标被其他店铺使用了。'},
        {name:'梁先生',type:'专利',desc:'我怀疑我的专利权被侵犯了'},
        {name:'谭女士',type:'商标',desc:'商标被人盗用'},
        {name:'邵先生',type:'版权',desc:'实拍图被别人盗用https://***'},
        {name:'王先生',type:'专利',desc:'我的竞争对手老是拿专利来投诉我'},
        {name:'周女士',type:'电商',desc:'在****上有好几家店铺都上了我的商标'},
        {name:'廖先生',type:'外贸',desc:'我的商品在***被下架了'},
        {name:'许女士',type:'电商',desc:'商品被投诉下架了，可以申述吗'},
        {name:'潘先生',type:'版权',desc:'自己设计的包装申请了版权，看到有别人店家再用'},
        {name:'高先生',type:'商标',desc:'***上销售用我的商标的商品'},
      ],
      reslist:[
        {name:'WQAJ20042409115151',type:'**（杭州）贸易有限公司',desc:'侵权链接删除，侵权方积极沟通，希望成为品牌方授权代理商',id:11},
        {name:'WQAJ20042408371118',type:'北京***科技有限公司',desc:'申请专利评价报告，对比侵权产品，出具侵权分析报告。如果侵权，进行投诉，链接下架',id:12},
        {name:'WQAJ20042317331652',type:'深圳市****服装有限公司',desc:'商标权被人盗图使用，一经查实，侵权链接下架',id:13},
        {name:'WQAJ20042316540891',type:'杭州**电子商务有限公司',desc:'出具相关著作权权利证明，对比侵权图样是否构成实际侵权。一旦成立，下架链接',id:14},
        {name:'WQAJ20042411001507',type:'宁波****股份有限公司',desc:'根据售卖产品，比对投诉方的专利权利要求保护范围，出具不侵权分析报告，提交申诉或者如果确实侵权，给出修改建议，规避竞争对手专利。',id:15},
        {name:'WQAJ20042409481063',type:'济南***电子商务有限公司',desc:'使用商标权进行投诉，下架侵权链接',id:16},
        {name:'WQAJ20042408332696',type:'广州****网络科技有限公司',desc:'根据投诉链接，进行分析，出具不侵权分析报告，恢复链接',id:17},
        {name:'WQAJ20042319315345',type:'泉州***服装有限公司',desc:'根据投诉链接，进行分析，出具不侵权分析报告，恢复链接',id:18},
        {name:'WQAJ20042315540240',type:'北京**科技有限公司',desc:'固定他人侵权证据，线上投诉，线下法院起诉',id:19},
        {name:'WQAJ20042218475984',type:'**（福州）电子商务有限公司',desc:'使用商标权进行投诉，下架侵权链接',id:20},
      ],
      text:[],
      checktype:'',
      nums:0,
      topnum:0,
      ulheight:0,
      active:null,
      topnums:0,
      ulheights:0,
      actives:null,
      timer:null
    }
  },
  beforeDestroy(){
      clearInterval(this.active);
      clearInterval(this.actives);
  },
  filters:{
    dateFormat: Filters.formatDate.datesFormat
  },
  methods:{
    checkvalids(){
      let exp = /^1\d{10}$/
      if(!this.dataObj.name){
        this.$message.warning('请输入您的姓名或所在公司')
        return false
      }
      if(!this.dataObj.phone){
        this.$message.warning('请输入您的手机号')
        return false
      }
      if(!exp.test(this.dataObj.phone)){
        this.$message.warning('请输入正确的手机号')
        return false
      }
      if(!this.checktype){
        this.$message.warning('请选择业务类型')
        return false
      }
      if(!this.dataObj.desc){
        this.$message.warning('请填写您的维权诉求')
        return false
      }
      return true;
    },
    resetdata(){
      this.dataObj = Object.assign({},dataobj);
      this.checktype = ''
      localStorage.setItem('dataObj',JSON.stringify({}));
      localStorage.setItem('checktype','');
    },
    submitdata(){
      // let user = localStorage.getItem('userlogininfo')
      // if(!user){
      //   this.nologin = true
      //   return
      // }
      let ret = this.checkvalids()
      if(ret){
        this.datasubmit()
      }
    },
    slides(){
        var oul = document.getElementById('myslides');
        var ali = oul.getElementsByTagName('li');
        if(ali.length){
        var h = ali[0].offsetHeight;
        var allh = h * ali.length;
        this.ulheights =allh
        oul.style.height = allh +'px';
        // oul.innerHTML += oul.innerHTML
        var self = this;
        this.actives = setInterval(function(){
            self.topnums-=0.6
            if(self.topnums <=-self.ulheights/2){
                self.topnums = 0
            }
            oul.style.top = self.topnums +'px'
        },30)
        }
    },
    mouseOvers(){
        clearInterval(this.actives)
    },
    mouseOuts(){
        // this.active = setInterval(this.showMarquee, 20);
        var self = this;
        var oul = document.getElementById('myslides');
        this.actives = setInterval(function(){
            self.topnums-=0.6
            if(self.topnums <= -self.ulheights/2){
                self.topnums = 0
            }
            oul.style.top = self.topnums+'px'
        },30)
    },
    slide(){
        var oul = document.getElementById('myslide');
        var ali = oul.getElementsByTagName('li');
        if(ali.length){
        var h = ali[0].offsetHeight;
        var allh = h * ali.length;
        this.ulheight =allh
        oul.style.height = allh +'px';
        // oul.innerHTML += oul.innerHTML
        var self = this;
        this.active = setInterval(function(){
            self.topnum-=0.6
            if(self.topnum <=-self.ulheight/2){
                self.topnum = 0
            }
            oul.style.top = self.topnum +'px'
        },30)
        }
    },
    mouseOver(){
        clearInterval(this.active)
    },
    mouseOut(){
        // this.active = setInterval(this.showMarquee, 20);
        var self = this;
        var oul = document.getElementById('myslide');
        this.active = setInterval(function(){
            self.topnum-=0.6
            if(self.topnum <= -self.ulheight/2){
                self.topnum = 0
            }
            oul.style.top = self.topnum+'px'
        },30)
    },
    getlist(){
      let data = {
        pgIndex:1,
        pgCount:4
      }
        // this.loading = true;
        this.$http.get(tlUrl,{params:data}).then(res=>{
            // this.loading = false
            let data = res.data;
            if(data.comment&&data.comment.length){
              this.taolunlist = data.comment;
            }
            
        }).catch(err=>{
            // this.loading = false;
            this.$message.error(err.response.data.msg||'未请求到数据')
        })
    },
    datasubmit(){
      localStorage.setItem('dataObj',JSON.stringify(this.dataObj)); 
      localStorage.setItem('checktype',this.checktype);
      let data = {
        name:this.dataObj.name,
        phone:this.dataObj.phone,
        businessType:this.checktype,
        appealContent:this.dataObj.desc
      }
      this.$http.post(postUrl,data).then(res=>{
        this.sucshow = true
        this.resetdata()
        this.getdata()
      }).catch(err=>{
          if(err.response.data.code=='U00015'){
            this.nologin = true;
            return;
          }
        this.$message.error(err.response.data.msg||'提交失败')
      })
    },  
    getdata(){
      this.$http.get(getUrl).then(res=>{
        this.yesterdaySubmit = res.data.yesterdaySubmit;
        this.allSubmit = res.data.allSubmit
        this.justlist = res.data.justSubmitPhoneList;
        this.$nextTick(()=>{
          this.slider()
        })
      })
    },
     slider(){
				let self = this;
				var oul = document.getElementById('scrollboxs');
				
				if(oul){
					var alis = oul.getElementsByTagName('li');
					var  allh = alis.length*25;
					// console.log(allh)
					var num =0;
					clearInterval(this.timer)
					this.timer = setInterval(function(){
						num -= 0.4;
						if(num<=-allh/2){
							num = 0;
							// oul.style.transition = 'none'
							oul.style.top = num +'px'
						}else{
							// oul.style.transition = '1s linear'
							oul.style.top = num +'px'
						}
						
						
					},30)
				}
			},
  },
  components:{
    xuanfu,
    logincps
  },
  mounted(){
    this.getdata()
    this.slide()
    this.slides()
    this.wxcode = this.$route.query.code||'';
    if(this.wxcode) {
      this.nologin = false;
    }
    this.dataObj = localStorage.getItem('dataObj',this.dataObj)?JSON.parse(localStorage.getItem('dataObj',this.dataObj)):Object.assign({},dataobj); 
    console.log(this.dataObj)
    this.checktype = localStorage.getItem('checktype',this.checktype)?localStorage.getItem('checktype',this.checktype):'';
    if(this.$route.query.active) this.checktype = this.$route.query.active
    this.$refs.inputVal.focus()
  }
}
</script>

<style lang="less">
.xuanfuboxes{
  position: fixed;
  right: 14px;
  top:400px;
  width: 28px;
  z-index: 99999;
}
.homebox{
  font-family:'PingFangSC-Regular','PingFang SC';
  .el-radio{
    width: 50% !important;
    margin-right: 0;
    white-space: break-spaces;
  }
  .formcontent{
    height: auto !important;
  }
  .conts{
    width: 560px !important;
  }
  .cont{
    margin-left: 97px !important;
  }
  .commonboxs{
    .el-dialog .el-dialog__title{
      height:33px;
      font-size:24px;
      font-family:'PingFangSC-Regular','PingFang SC';
      color:#001731;
      line-height:33px;
    }
    .el-dialog .el-dialog__body{
      padding-top: 10px;
    }
    .auditnum{
      height:20px;
      font-size:14px;
      
      color:#333;
      line-height:20px;
      margin-bottom: 27px;
    }
    .quedingbtn{
      width:152px;
      height:38px;
      margin: 0 auto;
      line-height: 38px;
      background:#001731;
      border-radius:3px;
      color: #fff;
      text-align: center;
      cursor: pointer;
    }
  }
  .wywq{
    position: relative;
    width: 240px;
    margin: 0 auto 17px;
    height: 23px;
    .line{
      position: absolute;
      width: 68px;
      top: 11px;
    }
    .white{
      border-bottom: 1px solid #fff;
    }
    .whitecolor{
      color:#fff;
    }
    .gray{
      border-bottom: 1px solid #E1E1E1;
    }
    .graycolor{
      color:#333;
    }
    .lineleft{
      left:0;
    }
    .lineright{
      right:0;
    }
    .txt{
      position: absolute;
      left: 70px;
      top:0;
      width: 100px;
      text-align: center;
      height: 23px;
      line-height: 23px;
      font-size: 18px;
      
    }
  }
  .formbox{
    padding-bottom: 20px;
    background:linear-gradient(270deg,rgba(5,39,77,1) 0%,rgba(0,23,49,1) 100%);
    .formcontent{
      max-width: 1200px;
      margin: 0 auto;
      height: 602px;
      background: url('~assets/img/home/bg.png') center center no-repeat;
      .conts{
        width: 506px;
        padding-top: 35px;
        margin: 0 auto;
        
      }
      .itembox{
        margin-bottom: 15px;
        background-color: #fff;
        border-radius: 3px;
        line-height: 20px;
        font-size:14px;
        
        color:#666;
        overflow: hidden;
        .tit{
          float: left;
          height: 50px;
          line-height: 20px;
          padding: 15px 0 15px 27px;
        }
        .txtinput::-webkit-scrollbar{
          width: 2px;
        }
        .txtinput::-webkit-scrollbar-thumb{
          width: 2px;
          background-color: #379dea;
        }
        .haspd{
          padding: 15px;
        }
        .cont{
          margin-left: 107px;
          line-height: 20px;
          overflow: hidden;
          textarea{
            outline: none;
            border:none;
            resize: none;
            height: 90px;
          }
          .el-radio{
            width: 80px;
            margin-bottom: 5px;
          }
          .txtinput{
            float: left;
            width: 100%;
            padding: 15px;
          }
        }
      }
      .submit{
        height:60px;
        background:#306CC3;
        border-radius:3px;
        text-align: center;
        font-size:16px;
        font-family:'MicrosoftYaHei';
        color:#fff;
        line-height:60px;
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 50px;
      }
      .positionbox{
        position: relative;
        width: 100%;
        height: 50px;
        overflow: hidden;
        margin-bottom: 10px;
        .newsubmit{
          position: absolute;
          left: 0;
          top:0;
          width:100%;
          font-size:14px;
          font-family:'PingFangSC-Regular','PingFang SC';
          color:#DCEBFF;
          >li{
            height:20px;
            line-height:20px;
            margin-bottom: 5px;
            text-align: center;
          }
        }
      }
    }
    
  }
  .weiquan{
    height: 590px;
    background-image: url('~assets/img/home/bga.png');
    background-position: center center;
    background-size: auto 100%;
    background-color: #F5FBFF;
    .tijiaobox{
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 0;
      .tijiaoleft{
        float: left;
        width: 506px;
      }
      .tijiaoright{
        float: right;
        width: 506px;
      }
      .tijiao{
        margin-bottom: 40px;
        text-align: center;
        font-family:'PingFangSC-Regular','PingFang SC';
        .time{
          height:25px;
          margin-right: 20px;
          font-size:18px;
          
          color:rgba(0,0,0,0.6);
          line-height:25px;
        }
        .num{
          height:49px;
          font-size:35px;
          font-weight:600;
          color:rgba(0,0,0,1);
          line-height:49px;
        }
      }
    }
    .shadowbox{
      box-shadow:0 0  8px 0 #ddd;
    }
    .listhead{
      height: 50px;
      line-height: 50px;
      background-color: #F8F8F8;
      span{
        float: left;
        text-align: center;
        color:#333;
        font-size: 14px;
      }
      .apply{
        width: 164px;
        
      }
      .type{
        width: 76px;
      }
      .desc{
        width: 266px;
      }
    }
    .yestoday{
      position: absolute;
      left: 0;
      top:0;
      >li{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #F1F1F1;
        
        &:last-child{
          border-bottom: none;
        }
      }
      span{
        float: left;
        text-align: center;
        color:#666;
        padding: 0 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .apply{
        width: 164px;
        
      }
      .type{
        width: 76px;
      }
      .desc{
        width: 266px;
        padding: 0 20px 0 30px;
      }
    }
    .listheads{
      height: 50px;
      line-height: 50px;
      background-color: #F8F8F8;
      span{
        float: left;
        text-align: center;
        color:#333;
        font-size: 14px;
      }
      .apply{
        width: 164px;
        
      }
      .type{
        width: 122px;
        padding: 0 15px;
      }
      .desc{
        width: 220px;
        padding-left: 25px;
        padding-right: 25px;
      }
    }
    .result{
      position: absolute;
      left: 0;
      top:0;
      >li{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #F1F1F1;
        
        &:last-child{
          border-bottom: none;
        }
      }
      span{
        float: left;
        text-align: center;
        color:#666;
        padding: 0 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .apply{
        width: 164px;
        
      }
      .type{
        width: 122px;
        padding: 0 10px;
      }
      .desc{
        width: 220px;
        padding-left: 25px;
        padding-right: 25px;
      }
    }
    .posdiv{
      position: relative;
      overflow:hidden;
      height: 250px;
      width: 506px;
      background-color: #fff;
      
    }
  }
}

</style>