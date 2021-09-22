<template>
<div class="myweiquan">
  <div class="weiquanbox">
    <div class="weiquancontent">
      <div class="topmsg clearfix">
        <div class="usermsg">
          <h3><span class="name" v-if="user.length<5">您好，尊敬的平台用户</span><span class="name" v-if="user.length>4">您好，{{user}}用户</span><span class="toggle" @click="tologin">退出账号</span></h3>
          <div class="wode"><span class="active">我的维权</span><span @click="tomycz">我的存证</span><span @click="toadmin" v-if="isadmin==1">我的管理台</span></div>
        </div>
        <div class="gongzhonghao">
          <div class="picbox">
            <img src="~assets/img/home/ewm.jpg" alt="">
          </div>
          <p>扫一扫，随时随地关注联盟最新资讯！</p>
        </div>
      </div>
      <div class="commonheight" v-if="dataList.length>0">
        <h3 class="wodetitle"><span class="xh">序号</span><span class="wqbh">维权编号</span><span class="sqsj">申请时间</span><span class="ywlx">业务类型</span><span class="sq">诉求</span><span class="dqzt">当前状态</span><span class="slsj">受理时间</span><span class="cz">操作</span></h3>
        <ul class="wodelist">
          <li v-for="(item,k) in dataList" :key="item.seqNo">
              <div class="clearfix">
              <span class="xh">{{item.seqNo}}</span><span class="wqbh">{{item.rightProtectSn}}</span><span class="sqsj">{{item.createTime|dateFormat}}</span><span class="ywlx">{{item.businessType}}</span><span class="sq">{{item.appealContent}}</span><span class="dqzt">{{item.state|wqstateFormat}}</span><span class="slsj">{{item.acceptTime|dateFormat}}</span>
            <span class="cz">
              <!-- <span class="qxbtn" v-if="item.state==1" @click="qxweiquan(item)">取消</span> -->
              <span class="bjbtn" v-if="item.state==0" @click="opendialog(item,'bjshow')">编辑</span>
              <span class="cdbtn" v-if="item.state==0" @click="cuidan(item)">催单</span>
              <span class="xqbtn" v-if="item.state==1&&!item.showinfo" @click="showinfos(item)">详情</span>
              <span class="pjbtn" v-if="item.ifEvaluate==0&&item.state==2" @click="opendialog(item,'pjshow')">评价</span>
              <span class="ckbtn" v-if="item.ifEvaluate==1&&item.state==2" @click="opendialog(item,'ckshow')">查看评价</span>
              <span class="jgbtn" v-if="item.state>=2 &&!item.showinfo" @click="showinfos(item)">查看结果</span>
              <span class="xqbtn" v-if="item.showinfo" @click="closeinfos(item)">收起</span>
              </span>
              </div>
              <div class="jieguo" v-if="item.showinfo">
                <div class="chuli" v-if="iteminfo.state>1">
                  <h3>处理结果</h3>
                  <ul>
                    <li>{{iteminfo.processResult}}</li>
                  </ul>
                </div>
                <div class="guwenmsg">
                  <h3>维权顾问</h3>
                  <ul>
                    <li>顾问姓名： {{iteminfo.consultantName}}</li>
                    <li>顾问手机： {{iteminfo.consultantPhone}}</li>
                    <li>顾问邮箱： {{iteminfo.consultantEmail}}</li>
                  </ul>
                </div>
                <ul class="jindu" v-if="iteminfo.state==1">
                  <li>
                    <div class="yuan" :class="{active: iteminfo.state>=0}">
                      <span class="line"></span>
                    </div>
                    <div class="zht">
                      联系中
                    </div>
                    <div class="shijian" >
                      {{iteminfo.createTime|dateFormat}}
                    </div>
                  </li>
                  <li>
                    <div class="yuan" :class="{active: iteminfo.state>0}">
                      <span class="linea"></span>
                    </div>
                    <div class="zht">
                      维权中
                    </div>
                    <div class="shijian">
                      {{iteminfo.acceptTime|dateFormat}}
                    </div>
                    
                  </li>
                  <li>
                    <div class="yuan" :class="{active: iteminfo.state>1}">
                      <span class="lineb"></span>
                    </div>
                    <div class="zht">
                      已完成
                    </div>
                    <div class="shijian">
                    </div>
                    
                  </li>
                </ul>
              </div>
            </li>
        </ul>
      </div>
      <div class="commonheight" v-if="dataList.length==0">
        <div class="emptybox">
          <div class="iconbox"><img src="~assets/img/home/empty.png" alt=""></div>
          <p>您还未提交维权信息</p>
        </div>
        
      </div>
      <div class="nobgpage">
        <el-pagination v-if="total>8" :total="total" layout="total,prev,pager,next" :page-size="pgCount" @current-change="curchange" :current-page.sync="pgIndex"></el-pagination>
      </div>
    </div>
  </div>
  <el-dialog title="评价维权" :visible.sync="pjshow" class="commonbox" width="398px">
    <div v-if="pjshow">
      <ul  class="pjweiquan" >
        <li><span class="mark">服务满意度：</span><div class="pjstar"><star :isclick="true" @selectedstar="getstar"></star></div></li>
        <li><span class="mark">服务态度：</span><div class="pjstar"><star :isclick="true" @selectedstar="getfwstar"></star></div></li>
        <li><span class="mark">专业性：</span><div class="pjstar"><star :isclick="true" @selectedstar="getzystar"></star></div></li>
        <li><span class="mark">及时性：</span><div class="pjstar"><star :isclick="true" @selectedstar="getjsstar"></star></div></li>
      </ul>
      <div class="pjtips"><textarea class="txtinput" v-model="evaluateContent" type="textarea" placeholder="服务达到您的期望了吗？请谈谈您对我们的看法吧"></textarea></div>
      <div class="pjsubmitbox">
        <div class="cancelbtn" @click="closedialog('pjshow')">取消</div>
        <div class="submitbtn" @click="pjhandle">确定</div>
      </div>
    </div>
  </el-dialog>
  <el-dialog title="查看评价" :visible.sync="ckshow" class="commonbox" width="398px">
    <div v-if="ckshow">
      <ul  class="pjweiquan" >
        <li><span class="mark">服务满意度：</span><div class="pjstar"><star :stars="iteminfos.evaluateSatisfyDegree-0" :isclick="false" ></star></div></li>
        <li><span class="mark">服务态度：</span><div class="pjstar"><star :stars="iteminfos.evaluateAttitudeDegree-0" :isclick="false"></star></div></li>
        <li><span class="mark">专业性：</span><div class="pjstar"><star :stars="iteminfos.evaluateSpecialDegree-0" :isclick="false"></star></div></li>
        <li><span class="mark">及时性：</span><div class="pjstar"><star :stars="iteminfos.evaluateTimeDegree-0" :isclick="false"></star></div></li>
      </ul>
      <div class="pjtips">{{iteminfos.evaluateContent}}</div>
      <div class="pjsubmitbox">
        <div class="quedingbtn" @click="closedialog('ckshow')">确定</div>
      </div>
    </div>
  </el-dialog>
  <el-dialog title="编辑维权信息" :visible.sync="bjshow" class="commonbox" width="506px">
    <div class="auditweiquan">
        <div class="auditnum">维权编号：{{iteminfo.rightProtectSn}}</div>
        <div class="itembox">
          <div class="tit">称呼：</div>
          <div class="cont"><input class="txtinput" v-model="iteminfo.name" type="text" placeholder="请输入您的姓名或所在公司" disabled></div>
        </div>
        <div class="itembox">
          <div class="tit">手机：</div>
          <div class="cont"><input class="txtinput" v-model="iteminfo.phone" type="text" placeholder="请输入您的手机号" disabled></div>
        </div>
        <div class="itembox">
          <div class="tit">业务类型：</div>
          <div class="cont">
            <el-radio-group v-model="iteminfo.businessType">
              <el-radio v-for="(item,k) in typelist" :key="k" :label="item.value">{{item.title}}</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="itembox">
          <div class="tit">诉求：</div>
          <div class="cont"><textarea class="txtinput" v-model="iteminfo.appealContent" type="textarea" placeholder="请简单描述您的维权诉求"></textarea></div>
        </div>
        <div class="submitbox">
          <div class="cancelbtn" @click="closedialog('bjshow')">取消</div>
          <div class="submitbtn" @click="audithandle">确定</div>
        </div>
    </div>
  </el-dialog>
  <!-- <el-dialog title="取消维权" :visible.sync="qxshow" class="commonbox" width="398px">
    <div class="auditweiquan">
        <div class="auditnum">维权编号：WQAJ1227Y47</div>
        <div class="itemboxs">
          <div class="tit">取消原因：</div>
          <div class="conts">
            <div class="contboxs">
              <el-checkbox-group v-model="reasoncheck" name="reasoncheck">
                <el-checkbox v-for="(item,k) in reasonlist" :key="k" :label="item.title" :value="item.value"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>
        <div class="itemboxs">
          <div class="tit"></div>
          <div class="conts">
            <div class="contboxs"><textarea class="txtinput" type="textarea" placeholder="其他原因"></textarea></div>
          </div>
        </div>
        <div class="submitbox">
          <div class="cancelbtn">取消</div>
          <div class="submitbtn">确定</div>
        </div>
    </div>
  </el-dialog> -->
  <el-dialog title="催单成功" :visible.sync="cdshow" class="commonbox" width="398px" top="30vh">
    <div>
      <div class="pjtips">感谢您对联盟的信任，我们将尽快安排专人与您联系</div>
      <div class="pjsubmitbox">
        <div class="quedingbtn" @click="closedialog('cdshow')">确定</div>
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
const listUrl = './ipsebe_union/findMyUserRightProtectList.do'
const detailUrl = './ipsebe_union/findMyUserRightProtectDetail/{rightProtectSn}.do'
const auditUrl = './ipsebe_union/editUserRightProtect.do'
const pjUrl = './ipsebe_union/evaluateUserRightProtect.do'
const cdUrl = './ipsebe_union/reminder.do'
export default {
  data(){
    return {
      isadmin:0,
      user:'',
      text:[],
      iteminfos:{},
      iteminfo:{
      },
      dataList:[
      ],
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
    }
  },
  filters:{
    dateFormat: Filters.formatDate.dateFormat,
    wqstateFormat: Filters.wqstateFormat,
    wqtypeFormat: Filters.wqtypeFormat
  },
  components:{
    star,
    xuanfu
  },
  methods:{
    tomycz(){
      this.$router.push({path:'/page/weiquan/mycz'})
    },
    tologin(){
      this.$http.post('./ipsebe_union/member/userLoginOut.do').then(res=>{
        localStorage.setItem('nowlogin',0)
        localStorage.removeItem('userlogininfo')
        localStorage.removeItem('appToken')
        localStorage.setItem('hdUrl',window.location.href)
        this.$router.push({path:'/page/login/homelogin'})
      })
      
    },
    toadmin(){
      window.open(CONFIG.indexUrl + '/#/admin')
    },
    showinfos(it){
      this.$http.get(detailUrl.replace('{rightProtectSn}',it.rightProtectSn)).then(res=>{
        this.iteminfo = res.data;
        it.showinfo = true;
      }).catch(err=>{
        var odata = err.response.data;
          if (odata.code == 'U00015') {
            let furl = window.location.href
            localStorage.removeItem('userlogininfo')
            localStorage.setItem('hdUrl',furl)
            window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
            return;
          }
      })
      // it.showinfo = true;
    },
    closeinfos(it){
      it.showinfo = false;
    },
    cuidan(it){
      this.$confirm('您确定催单吗？','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(res=>{
        let data = {
          rightProtectSn: it.rightProtectSn
        }
        this.$http.post(cdUrl,data).then(res=>{
          this.cdshow = true;
        }).catch(err=>{
          var odata = err.response.data;
          if (odata.code == 'U00015') {
            let furl = window.location.href
            localStorage.removeItem('userlogininfo')
            localStorage.setItem('hdUrl',furl)
            window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
            return;
          }
          this.$message.error('系统已接受您的催单请求，请耐心等待')
        })
        
      })
    },
    getstar(num){
      this.evaluateSatisfyDegree = num;
    },
    getfwstar(num){
      this.evaluateAttitudeDegree = num;
    },
    getzystar(num){
      this.evaluateSpecialDegree = num;
    },
    getjsstar(num){
      this.evaluateTimeDegree = num;
    },
    opendialog(it,type){
      if(type=='pjshow'){
        this.rightProtectSn = it.rightProtectSn
        this[type] = true;
      }
      if(type=='ckshow'){
        this.$http.get(detailUrl.replace('{rightProtectSn}',it.rightProtectSn)).then(res=>{
          this.iteminfos = res.data;
          this[type] = true;
        })
      }
      if(type=='bjshow'){
        this.iteminfo = it;
        this[type] = true;
      }
      
    },
    closedialog(type){
      this[type] = false;
    },
    cleardata(){
      this.evaluateSatisfyDegree = '';
      this.evaluateAttitudeDegree = '';
      this.evaluateSpecialDegree = '';
      this.evaluateTimeDegree = '';
      this.evaluateContent= ''
    },
    audithandle(){
      if(!this.iteminfo.businessType){
        this.$message.warning('请选择业务类型');
        return;
      }
      if(!this.iteminfo.appealContent){
        this.$message.warning('请填写维权诉求');
        return;
      }
      let data = {
        rightProtectSn: this.iteminfo.rightProtectSn,
        businessType: this.iteminfo.businessType,
        appealContent: this.iteminfo.appealContent
      }
      this.$http.put(auditUrl,data).then(res=>{
        this.$message.success('编辑成功');
        this.closedialog('bjshow')
      }).catch(err=>{
        var odata = err.response.data;
          if (odata.code == 'U00015') {
            let furl = window.location.href
            localStorage.removeItem('userlogininfo')
            localStorage.setItem('hdUrl',furl)
            window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
            return;
          }
          this.$message.error(err.response.data.msg||'编辑失败')
      })
    },
    pjhandle(){
      if(!this.evaluateSatisfyDegree){
        this.$message.warning('请选择服务满意度');
        return;
      }
      if(!this.evaluateAttitudeDegree){
        this.$message.warning('请选择服务态度');
        return;
      }
      if(!this.evaluateSpecialDegree){
        this.$message.warning('请选择专业性');
        return;
      }
      if(!this.evaluateTimeDegree){
        this.$message.warning('请选择及时性');
        return;
      }
      let data = {
        rightProtectSn: this.rightProtectSn,
        evaluateSatisfyDegree: this.evaluateSatisfyDegree,
        evaluateAttitudeDegree: this.evaluateAttitudeDegree,
        evaluateSpecialDegree: this.evaluateSpecialDegree,
        evaluateTimeDegree: this.evaluateTimeDegree,
        evaluateContent: this.evaluateContent,
      }
      this.$http.put(pjUrl,data).then(res=>{
        this.$message.success('评价成功');
        this.closedialog('pjshow');
        this.getlist()
      }).catch(err=>{
        var odata = err.response.data;
          if (odata.code == 'U00015') {
            let furl = window.location.href
            localStorage.removeItem('userlogininfo')
            localStorage.setItem('hdUrl',furl)
            window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
            return;
          }
          this.$message.error(err.response.data.msg||'评价失败')
      })
    },
    // pingjia(it){
    //   this.pjshow = true;
    // },
    // auditwq(it){
    //   this.bjshow = true;
    // },
    // ckpingjia(it){
    //   this.ckshow = true
    // },


    curchange(k){
      this.pgIndex = k;
      this.getlist()
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
            arr.forEach(item=>{
              item.showinfo = false;
            })
            this.dataList = arr;
            this.total = data.totalElements;
        }).catch(err=>{
            var data = err.response.data;
            if (data.code == 'U00015') {
              let furl = window.location.href
              localStorage.removeItem('userlogininfo')
              localStorage.setItem('hdUrl',furl)
              window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
              return;
            }
            // this.loading = false;
            this.$message.error(err.response.data.msg||'未请求到数据')
        })
    },
    
  },
  mounted(){
    // let phone = VueCookie.get('username')
    // this.user = phone
    // this.isadmin = localStorage.getItem('wqisadmin')
    let that = this
    let str = localStorage.getItem('userlogininfo')
    console.log(str)
    let obj = JSON.parse(str)
    if(obj){
      this.user = obj.username;
      this.isadmin = obj.isAdmin
    }
    setTimeout(function(){
      that.getlist()
    },500)
    
  }
}
</script>

<style lang="less">

.myweiquan{
  font-family:'PingFangSC-Regular','PingFang SC';
  background:linear-gradient(270deg,rgba(5,39,77,1) 0%,rgba(0,23,49,1) 100%);
  
  .weiquanbox{
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
    .weiquancontent{
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
            // height: 66px;
            background-color: #fff;
            margin: 0 auto;
            margin-bottom: 5px;
            >img{
              display: block;
              width: 100%;
              // height: 100%;
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
          width: 50px;
        }
        .wqbh{
          width: 150px;
        }
        .sqsj{
          width: 160px;
        }
        .ywlx{
          width: 100px;
        }
        .sq{
          width: 280px;

        }
        .dqzt{
          width: 100px;
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
            width: 50px;
          }
          .wqbh{
            width: 150px;
          }
          .sqsj{
            width: 160px;
          }
          .ywlx{
            width: 100px;
          }
          .sq{
            width: 280px;

          }
          .dqzt{
            width: 100px;
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
            .xqbtn,
            .pjbtn,
            .ckbtn,
            .jgbtn{
              float: none;
              font-size:12px;
              color:#4186E9;
              text-decoration: underline;
              cursor: pointer;
            }
            .bjbtn,
            .pjbtn,
            .ckbtn{
              margin-right: 14px;
            }
          }
        }
        .jieguo{
          padding-left: 58px;
          overflow: hidden;
          .chuli{
            text-align: left;
            margin-right: 150px;
            margin-bottom: 30px;
            >h3{
              height:17px;
              font-size:12px;
              float: left;
              color:#333;
              line-height:17px;
            }
            >ul{
              padding-left: 100px;
              >li{
                height:17px;
                font-size:12px;
                max-width: 580px;
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
              float: left;
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
        padding: 0  40px;
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
  .commonbox{
    .el-radio{
      width: 50% !important;
      margin-right: 0;
      white-space: break-spaces;
    }
    .formcontent{
      height: 750px !important;
    }
    .conts{
      width: 560px !important;
    }
    .cont{
      margin-left: 97px !important;
    }
    .el-dialog{
      width: 610px !important;
    }
    .el-dialog .el-dialog__title{
      height:33px;
      font-size:24px;
      font-family:'PingFangSC-Regular','PingFang SC';
      
      color:#001731;
      line-height:33px;
    }
    .auditnum{
      height:20px;
      font-size:14px;
      
      color:#333;
      line-height:20px;
      margin-bottom: 27px;
    }
  }
  .pjweiquan{
    margin-bottom: 10px;
    >li{
      margin-bottom: 16px;
      height:20px;
      font-size:14px;
      font-family:'PingFangSC-Regular','PingFang SC';
      
      color:#333;
      line-height:20px;
      .mark{
        float: left;
        width: 85px;
      }
      .pjstar{
        margin-left: 86px;
      }
    }
  }
  .pjtips{
    margin-bottom: 28px;
    textarea{
      outline: none;
      border:none;
      resize: none;
      width: 100%;
      height: 90px;
      padding: 15px;
      line-height: 20px;
      font-size: 14px;
      color: #999;
      box-shadow: 0 0 4px 0 rgba(0,0,0,0.17);
    }
  }
  .pjsubmitbox{
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
    .quedingbtn{
      width:152px;
      height:38px;
      margin: 0 auto;
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