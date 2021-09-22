<template>
<div class="gzczbox">
  <div class="gzczbg">
    <div class="gzczcont">
      <h3 class="gzcztitle">公证存证</h3>
      <p class="intr">联盟以区块链技术为支撑，与司法机构杭州互联网法院达成战略合作，为原创工作者、知识产权服务平台、金融企业等用户提供存证确权、在线取证、司法出证等一站式数据存证服务。</p>
      <div class="czbtnbox"><span class="ljcz" @click="checkdl">立即存证</span><span class="ckcz" @click="tomycz">查看我的存证</span></div>
      <div class="qzhx">智能取证核心</div>
      <div class="qzintr">
        <div class="leftintr">
          <div class="picbox">
            <img src="~assets/img/home/lt.png" alt="">
          </div>
          <h3>便捷使用与可视化呈现</h3>
          <p>联盟与法院、司法鉴定中心、公证处、仲裁委、律所等机构达成深度合作，可快速进行证据查验；目前支持线下出具公证书、司法鉴定意见书及法律咨询等服务。</p>
        </div>
        <div class="rightintr">
          <h3>强法律效力保障</h3>
          <p>通过区块链技术，将图片、文稿、代码包等文件加密存储，实时固化电子数据的内容、权属信息及存证时间，生成唯一的数据指纹，赋予电子数据法律证明效力。</p>
          <div class="picbox">
            <img src="~assets/img/home/rb.png" alt="">
          </div>
        </div>
      </div>
      <div class="qzhx">应用场景</div>
      <ul class="yingyong clearfix">
        <li v-for="(item,key) in cjlist" :key="key">
          <div class="imgbox"><img :src="item.pic" alt=""></div>
          <h3>{{item.title}}</h3>
          <p>{{item.value}}</p>
        </li>
      </ul>
    </div>
    
  </div>
  
  <div class="mask" v-if="czshow"></div>
  <div class="ljczdialog" v-if="czshow">
    <span class="gbbtn" @click="czshow=false"><img src="~assets/img/home/close.png" alt=""></span>
    <div class="itemcz fl">
      <h3>网页存证</h3>
      <div class="czimg"><img src="~assets/img/home/wy.png" alt=""></div>
      <p>提交网址即可快速保存证据</p>
      <div class="czbtn" @click="czstart(1)">立即存证</div>
    </div>
    <div class="itemcz fr">
      <h3>文件存证</h3>
      <div class="czimg"><img src="~assets/img/home/wj.png" alt=""></div>
      <p>支持主流文本、图片格式</p>
      <div class="czbtn" @click="czstart(2)">立即存证</div>
    </div>
  </div>
  <div class="mask" v-if="smshow"></div>
  <div class="smrzdialog" v-if="smshow">
    <span class="gbbtn" @click="closesmrz"><img src="~assets/img/home/close.png" alt=""></span>
    <h3>实名认证</h3>
    <p>认证信息仅用于公证存证使用，证明文件与上传者初步关系</p>
    <div class="iteminput"><span>姓名：</span><div class="inputcontbox"><input type="text" v-model="smmsg.name" placeholder="请输入您的真实姓名"></div></div>
    <div class="iteminput"><span>身份证号：</span><div class="inputcontbox"><input type="text" maxlength="18" v-model="smmsg.code" placeholder="请输入您的身份证号" max="18"></div></div>
    <div class="rzbtn" @click="showqz">认证</div>
  </div>
  <div class="mask" v-if="czcshow"></div>
  <div class="comdialog" v-if="czcshow">
    <span class="gbbtn" @click="closewyqz"><img src="~assets/img/home/close.png" alt=""></span>
    <h3>网页存证</h3>
    <div class="iteminput"><span>姓名：</span><div class="inputcontbox"><input type="text" v-model="smmsg.name" class="disinput" readonly placeholder="请输入您的真实姓名"></div></div>
    <div class="iteminput"><span>身份证号：</span><div class="inputcontbox"><input type="text" v-model="smmsg.code" class="disinput" readonly placeholder="请输入您的身份证号"></div></div>
    <div class="iteminput"><span>手机号：</span><div class="inputcontbox"><input type="text" maxlength="11" v-model="phone" placeholder="请输入手机号"></div></div>
    <div class="iteminput"><span>取证名称：</span><div class="inputcontbox"><input type="text" v-model="filename" placeholder="请输入取证名称"></div></div>
    <div class="iteminputs"><span>存证网址：</span><div class="inputcontbox"><input type="text" v-model="site" placeholder="请输入所需取证的网页地址"><span element-loading-text="网页截取中..." element-loading-background="rgba(0, 0, 0, 0.5)" v-loading.fullscreen="fullLoading" class="caozuo" @click="jiequ">截取</span></div></div>
    <div class="wangzhi" v-if="!issuccess">
      <p>1、不支持对要求登录的网页进行存证；</p>
      <p>2、请直接复制浏览器地址栏网址，所存网址需含http、https等相关元素。</p>
      <p>3、上传的存证版权归自己所有，未经用户授权，平台绝不会私自使用用户上传作品。</p>
    </div>
    <div class="wangzhis" v-if="issuccess">
      <p>{{resultsite}}</p>
      <p class="ckjg"><a :href="rootUrl+'/ipsebe_union/evidence/downloadWebEvid.do?evidNo='+evidNo+'&token='+token" target="_blank">查看取证结果</a></p>
    </div>
    <div class="rzbtn" @click="subwycz" element-loading-text="证据保存中..." element-loading-background="rgba(0, 0, 0, 0.5)" v-loading.fullscreen="fullLoadinga">立即存证</div>
  </div>
  <div class="mask" v-if="czwshow"></div>
  <div class="comdialog" v-if="czwshow" >
    <span class="gbbtn" @click="closewjqz"><img src="~assets/img/home/close.png" alt=""></span>
    <h3>文件存证</h3>
    <div class="iteminput"><span>姓名：</span><div class="inputcontbox"><input type="text" v-model="smmsg.name" class="disinput" disabled placeholder="请输入您的真实姓名"></div></div>
    <div class="iteminput"><span>身份证号：</span><div class="inputcontbox"><input type="text" v-model="smmsg.code" class="disinput" disabled placeholder="请输入您的身份证号"></div></div>
    <div class="iteminput"><span>手机号：</span><div class="inputcontbox"><input type="text" maxlength="11" v-model="phone" placeholder="请输入手机号"></div></div>
    <div class="iteminput"><span>存证名称：</span><div class="inputcontbox"><input type="text" v-model="filename" placeholder="请输入取证名称"></div></div>
    <div class="czbox">
      <div class="wenjian">存证文件：</div>
      <div class="czuploadbox">
        <div class="leftupload">
          <nuploader @complete="setUploadedData" @resetUploader="resetUploader" :valueName="'standby'" :url="standby" :fileName="standby_name" :postAction="uploadUrl" :size="50" :extensions="'png,jpg,jpeg,gif,txt,pdf,docx,doc,xls,ppts,ppt,htm,html,bmp'"></nuploader>
        </div>
        <div class="scshuoming">
          <p>1、上传文件大小文档类不得超过20M，图片不得超过50M</p>
          <p>2、支持上传格式：png／jpg／jpeg／gif／txt／pdf／docx／doc／xls／ppts／ppt／htm／html／bmp格式</p>
        </div>
      </div>
    </div>
    <!-- <div class="iteminputs">
      <span>存证文件：</span>
      <div class="inputcontbox"><input type="text" v-model="standby_name" readonly placeholder="请上传需要存证的文件"><span class="caozuo">
        <el-upload
        ref="upload"
        name="fileData"
        :action="uploadUrl"
        :file-list="fileList"
        :limit="1"
        :on-error="errhandle"
        :disabled="isupload"
        :on-progress="prohandle"
        accept=".jpg,.png,.jpeg,.gif,.txt,.pdf,.docx,.doc,.xls,.ppt,.ppts,.htm,.html,.bmp"
        :on-success="handleSuccess"
        :on-remove="handleRemove">
        <span class="shangchuan" slot="trigger">上传</span>
      </el-upload>
      </span>
    </div>
    </div> -->
    <!-- <div class="wangzhi">
      <p>1、上传文件大小文档类不得超过20M，图片不得超过50M</p>
      <p>2、支持上传格式：png／jpg／jpeg／gif／txt／pdf／docx／doc／xls／ppts／ppt／htm／html／bmp格式</p>
    </div> -->
    <div class="rzbtn" @click="subwjcz" element-loading-text="证据保存中..." element-loading-background="rgba(0, 0, 0, 0.5)" v-loading.fullscreen="fullLoadinga">立即存证</div>
    
  </div>
  <el-dialog  class="commonbox" width="398px" :visible.sync="czsuccess" top="30vh">
      <div>
        <div class="suctip"><img src="~assets/img/home/suc.png" alt=""></div>
        <div class="czsucbtn" @click="czsuccess=false">确定</div>
      </div>
    </el-dialog>
    <div class="xuanfuboxes">
      <xuanfu></xuanfu>
    </div>
</div>
</template>

<script>
import Filters from 'utils/filters'
import logincps from 'cps/public/login.vue'
import xuanfu from 'cps/public/xuanfu.vue'
import VueCookie from 'vue-cookie'
import nuploader from 'cps/uploader/nuploader.vue'
const smrzUrl = './ipsebe_union/subject/verifyIdCard.do'
const wjczUrl = './ipsebe_union/envidence/submitEvidence.do'
const wyczUrl = './ipsebe_union/evidence/addCaasaWebEvidence.do'
const jqjgUrl = './ipsebe_union/evidence/isSuccess4WebThread.do'
const jqUrl = './ipsebe_union/evidence/cutCaasaWebEvidence.do'
const checkUrl = './ipsebe_union/subject/ischecked.do'

const smmsg ={
  name: '',
  code:''
}
export default {
  data(){
    return {
      czshow:false,
      smshow:false,
      czcshow:false,
      czwshow:false,
      czsuccess: false,
      cztype:1,
      rootUrl: CONFIG.rootUrl,
      issuccess: false,
      uploadUrl: '',
      smmsg: Object.assign({},smmsg),
      phone:'',
      filename:"",
      site:'',
      fullLoading: false,
      fullLoadinga: false,
      isupload: false,
      resultsite:'',
      standby:'',
      standby_name:'',
      fileList:[],
      login:false,
      isadmin:0,
      user:'',
      text:[],
      iteminfos:{},
      iteminfo:{
      },
      cjlist:[
        {title:'知识产权',value:'“原创存证”与“侵权取证”服务可在内容平台遇到知识产权纠纷时，为作品提供有效的权属证明与侵权证据。',pic:require('assets/img/home/gz.png')},
        {title:'律师律所',value:'单位时间效率对于律师十分重要，百度取证可极大简化案件的取证流程，提升工作效率的同时，也可作为“取证增值业务”丰富律师的服务类型。',pic:require('assets/img/home/gz1.png')},
        {title:'互联网金融',value:'互联网金融互联网金融平台可在不提交原文数据的情况下，对财务、交易、操作等金融数据进行固化保全，有效防范法律风险、提升风控能力。',pic:require('assets/img/home/gz2.png')},
        {title:'个人取证',value:'个人取证当遇到网购纠纷、隐私窃取、负面谣言、劳动合同纠纷等情况时，可以帮您及时固化保全证据，捍卫个人合法权益。',pic:require('assets/img/home/gz3.png')},
      ],
      checklist:'',
      timer:null,
      count:0,
      token:''
    }
  },
  filters:{
    dateFormat: Filters.formatDate.dateFormat,
    wqstateFormat: Filters.wqstateFormat,
    wqtypeFormat: Filters.wqtypeFormat
  },
  components:{
    logincps,
    nuploader,
    xuanfu
  },
  methods:{
      handleRemove(file, fileList) {
        this.standby  = '';
        this.standby_name = ''
        this.fileList  = []
        this.isupload = false;
      },
      handleSuccess(file) {
        this.standby = file.url;
        this.standby_name = decodeURIComponent(file.fileName);
        this.fileList= []
        this.isupload = false;
        console.log(file);
      },
      errhandle(err,file,fileList){
        this.isupload = false;
      },
      prohandle(event,file,fileList){
        this.isupload = true;
      },
      setUploadedData(data){
				this[data.valueName]= data.data.url
				this[data.valueName+'_name']= data.data.fileName;
      },
      resetUploader(valueName){
				this[valueName] = '';
				this[valueName+'_name'] = '';
			},
    checkUrl(url){
      return /^(https?|ftp|file):\/\/[-A-Za-z0-9\+&@#\/%\?=~_|!:,\\\.;]+[-A-Za-z0-9+&@#\/%=~_|]$/.test(url);
    },
    subwjcz(){
      
      if(!this.phone){
        this.$message.warning('请输入手机号')
        return 
      }
      let reg = /^1\d{10}$/;
      if(!reg.test(this.phone)){
        this.$message.warning('请输入正确的手机号')
        return 
      }
      if(!this.filename){
        this.$message.warning('请输入存证名称')
        return 
      }
      if(!this.standby_name){
        this.$message.warning('请上传存证文件')
        return 
      }
      let data = {
        evidType: 1,
        evidPhone: this.phone,
        evidName: this.filename,
        fileName: this.standby_name,
        evidFile: this.standby
      }
      this.fullLoadinga = true;

      this.$http.post(wjczUrl,data).then(res=>{
        this.fullLoadinga = false;
        // this.$message.success('存证成功')
        this.czsuccess = true;
        this.cleardata();
        this.czwshow  = false;
      }).catch(err=>{
        this.fullLoadinga = false;
        this.$message.error(err.response.data.msg||'存证失败')
      })
    },
    subwycz(){
      if(!this.evidNo){
        this.$message.warning('请先截取网页')
        return;
      }
      let data = {
        evidNo: this.evidNo,
      }
      this.fullLoadinga = true;
      this.$http.post(wyczUrl,data).then(res=>{
        this.fullLoadinga = false;
        // this.$message.success('存证成功')
        this.czsuccess = true;
        this.cleardata();
        this.czcshow  = false;
      }).catch(err=>{
        this.fullLoadinga = false;
        this.$message.error(err.response.data.msg||'存证失败')
        console.log(err,err.response,err.data)
      })
    },
    cleardata(){
      this.phone = ''
      this.filename = '';
      this.standby = '';
      this.standby_name = ''
    },
    checkdl(){
      let islogin = localStorage.getItem('nowlogin')
      console.log(islogin)
      if(islogin!=1){
        localStorage.setItem('hdUrl',window.location.href)
        this.$router.push({path:'/page/login/homelogin'})
      }else{
        this.$http.get(checkUrl).then(res=>{
          let ret = res.data
          if(ret.ischecked==1){
            this.smmsg.name= ret.trueName;
            this.smmsg.code = ret.idCard;
            this.phone = ret.phone;
            this.czshow = true;
          }else{
            this.smshow = true;
          }
          
        }).catch(err=>{
          var odata = err.response.data;
          if (odata.code == 'U00015') {
            let furl = window.location.href
            localStorage.removeItem('userlogininfo')
            localStorage.setItem('hdUrl',furl)
            window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
            return;
          }
          this.smshow = true;
        })
      }
    },
    tomycz(){
      let islogin = localStorage.getItem('nowlogin')
      if(islogin!=1){
        localStorage.setItem('hdUrl',CONFIG.indexUrl+'/#/page/weiquan/mycz')
        this.$router.push({path:'/page/login/homelogin'})
      }else{
        this.$router.push({path:'/page/weiquan/mycz'})
      }
      
    },
    czstart(num){
      this.cztype = num
      this.czshow = false
      if(this.cztype==1){
        
        this.czcshow = true;
      }else{
        this.czwshow = true;
      }
    },
    showqz(){
      if(!this.smmsg.name){
        this.$message.warning("请输入姓名")
        return
      }
      if(!this.smmsg.code){
        this.$message.warning("请输入身份证号")
        return
      }
      let data ={
        trueName:this.smmsg.name,
        idCard: this.smmsg.code
      }
      this.$http.post(smrzUrl,data).then(res=>{
        this.$message.success('实名认证成功')
        this.smshow = false;
        this.czshow = true;
      }).catch(err=>{
        this.$message.error(err.response.data.msg||'实名认证失败')
      })
    },
    closesmrz(){
      this.smshow = false;
      this.smmsg = Object.assign({},smmsg)
    },
    closewyqz(){
      this.czcshow = false
    },
    closewjqz(){
      this.czwshow = false
    },
    jiequ(){
      if(!this.phone){
        this.$message.warning('请输入手机号')
        return 
      }
      let reg = /^1\d{10}$/;
      if(!reg.test(this.phone)){
        this.$message.warning('请输入正确的手机号')
        return 
      }
      if(!this.filename){
        this.$message.warning('请输入取证名称')
        return 
      }
      if(!this.site){
        this.$message.warning('请输入所需存证的网址')
        return 
      }
      if (this.site.length>500) {
        this.$message.error('输入网址过长，最长不超过500个字符');
        return;
      }
      if (!this.checkUrl(this.site)) {
        this.$message.error('输入的网址不合法，请重新输入。');
        return;
      }
      this.fullLoading = true;
      this.$http.post('./ipsebe_union/evidence/cutCaasaWebEvidence.do', {
        urls: [this.site],
        evidName: this.filename,
        evidPhone: this.phone
      })
      .then((resp) => {
        resp = resp.data;
        //console.log(resp);
        if(resp.code === '0'){
          var eid = resp.evidNo;
          this.stopQuery();
          this.intervalQuery(eid);
        }else{
          this.fullLoading = false;
          this.stopQuery();
          this.$alert(resp.desc);
        }
      }).catch((error) => {
        this.fullLoading = false;
        console.log(error);
      });
      
    },
    intervalQuery(id){
      this.timer = setInterval(() => {
        if (this.count > 600) {
          this.fullLoading = false;
          this.stopQuery();
          this.$alert('截取超时，请重试', '提示');
          return;
        }
        this.count ++ ;
        this.getStatus(id);
      }, 1000);
    },
    stopQuery(){
      this.count = 0;
      this.timer && clearInterval(this.timer);
    },
    getStatus(id){
      this.$http.get('./ipsebe_union/evidence/isSuccess4WebThread.do?evidNo='+ id +'&t=' + Math.random())
      .then((resp) => {
        resp = resp.data;
        console.log(resp);
        if(resp.code == '200'&&resp.status==1){
          this.fullLoading = false;
          this.stopQuery();
          if(this.site){
            this.resultsite = this.site;
            this.issuccess = true;
          }
          this.site = '';
          this.issuccess = true;
          this.evidNo = resp.evidNo;
        }else if(resp.code =='200'&&resp.status&&resp.status !=1){
          this.fullLoading = false;
          this.stopQuery()
          this.$alert(resp.resultMsg||"存证失败")
        } 
      }).catch((error) => {
        this.fullLoading = false;
        this.stopQuery()
        console.log(error);
      });
    },
    tologin(){
      this.$http.post('./ipsebe_union/member/userLoginOut.do').then(res=>{
        this.$router.push({path:'/page/homepage/login',query:{url: window.location.href}})
      })
      
    },
    toadmin(){
      window.open(CONFIG.indexUrl + '/#/admin')
    },
    curchange(k){
      this.pgIndex = k;
      this.getlist()
      console.log(k)
    },
    getlist(){
      let data = {
        pgIndex:this.pgIndex,
        pgCount:this.pgCount
      }
        // this.loading = true;
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
            // this.loading = false;
            this.$message.error(err.response.data.msg||'未请求到数据')
        })
    },
    
  },
  beforeDestroy(){
    clearInterval(this.timer)
  },
  mounted(){
    let str = localStorage.getItem('userlogininfo')
    this.token = localStorage.getItem('appToken')
    this.uploadUrl =CONFIG.rootUrl+ '/ipsebe_union/file/uploadDataCaasa.do?token='+this.token
    let obj = JSON.parse(str)
    if(obj){
      this.phone = obj.phone;
    }
    // this.getlist()
  }
}
</script>

<style lang="less">
.gzczbox{
    // font-family:'PingFangSC-Regular','PingFang SC';
    background:linear-gradient(270deg,rgba(5,39,77,1) 0%,rgba(0,23,49,1) 100%);
    .suctip{
      text-align: center;
      margin-bottom: 26px;
    }
    .czsucbtn{
      width:152px;
      height:38px;
      margin: 0 auto 36px;
      background:rgba(0,23,49,1);
      border-radius:3px;
      border:1px solid rgba(0,23,49,1);
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:normal;
      color:rgba(255,255,255,1);
      line-height:38px;
      text-shadow:0px 7px 16px rgba(71,132,210,0.46), 0px 7px 16px rgba(0,0,0,0.09);
      text-align: center;
      cursor: pointer;
      
    }
    .gzczbg{
        padding-top: 10px;
        padding-bottom: 20px;
        .gzczcont{
          width: 1200px;
          margin: 0 auto;
          padding-top: 22px;
          min-height: 602px;
          color:rgba(255,255,255,1);
          background: url('~assets/img/home/bg.png') center top no-repeat;
          .gzcztitle{
            height:38px;
            font-size:27px;
            font-weight:500;
            line-height:38px;
            text-align: center;
            margin-bottom: 15px;
          }
          .intr{
            width: 714px;
            margin: 0 auto 40px;
            text-align: center;
            height:40px;
            font-size:14px;
            
            line-height:20px;
          }
          .czbtnbox{
            margin-bottom: 86px;
            text-align: center;
            font-size: 0;
            >span{
              display: inline-block;
              font-size: 17px;
              width: 130px;
              height: 42px;
              text-align: center;
              cursor: pointer;
              border-radius: 2px;
            }
            .ljcz{
              line-height: 42px;
              background-color: #4186E9;
              color: #fff;
              margin-right: 66px;
            }
            .ckcz{
              color: #fff;
              border: 1px solid #4186E9;
              line-height: 40px;
              
            }
          }
          .qzhx{
            height:38px;
            font-size:27px;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:38px;
            text-align: center;
            margin-bottom: 42px;
          }
          .qzintr{
            width:880px;
            height:586px;
            padding-top: 61px;
            padding-left: 74px;
            margin: 0 auto 78px; 
            background:linear-gradient(360deg,rgba(0,26,56,0.8) 0%,rgba(0,63,116,0.8) 100%);
            border-radius:18px;
            .picbox{
              width: 285px;
              height: 285px;
              img{
                display: block;
                width: 100%;
                height: 100%
              }
            }
            .leftintr{
              float: left;
              width: 314px;
              margin-right: 75px;
              >h3{
                height:38px;
                font-size:27px;
                font-family:'PingFangSC-Medium','PingFang SC';
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:38px;
                margin-top: 24px;
                margin-bottom: 21px;
              }
              >p{
                width:314px;
                height:80px;
                font-size:14px;
                
                color:rgba(255,255,255,1);
                line-height:20px;
              }
            }
            .rightintr{
              float: left;
              width: 344px;
              padding-top: 36px;
              >h3{
                height:38px;
                font-size:27px;
                font-family:'PingFangSC-Medium','PingFang SC';
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:38px;
                margin-bottom: 21px;
              }
              >p{
                width:344px;
                height:60px;
                font-size:14px;
                
                color:rgba(255,255,255,1);
                line-height:20px;
                margin-bottom: 77px;
              }
              .picbox{
                margin-left: 31px;
              }
            }
          }
          .yingyong{
            padding-bottom: 20px;
            >li{
              float: left;
              width: 238px;
              margin-right: 82px;
              &:last-child{
                margin-right: 0;
              }
              .imgbox{
                width: 68px;
                height: 68px;
                margin: 0 auto;
                img{
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              }
              >h3{
                padding: 6px 0 19px;
                font-size:20px;
                
                color:rgba(255,255,255,1);
                line-height:28px;
                text-align: center;
              }
              >p{
                font-size:14px;
                
                color:rgba(255,255,255,0.8);
                line-height:20px;
              }
            }
          }
        }
    }
  .ljczdialog{
    position: fixed;
    width: 656px;
    height: 470px;
    left: 50%;
    top:50%;
    transform: translateY(-50%);
    margin-left: -328px;
    background-color: #fff;
    border-radius: 10px;
    padding: 38px;
    .gbbtn{
      position: absolute;
      right: 22px;
      top: 22px;
      width: 15px;
      height: 15px;
      cursor: pointer;
      >img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .itemcz{
      width:254px;
      height:394px;
      padding-top: 25px;
      background:rgba(255,255,255,1);
      box-shadow:0px 2px 17px 0px rgba(0,0,0,0.12);
      >h3{
        height:25px;
        font-size:18px;
        font-family:'PingFangSC-Regular','PingFang SC';
        font-weight: normal;
        color:rgba(0,23,49,1);
        line-height:25px;
        margin-bottom: 22px;
        text-align: center;
      }
      .czimg{
        width: 152px;
        height: 152px;
        margin: 0 auto 40px;
        >img{
          display: block;
          width:100%;
          height: 100%;
        }
      }
      >p{
        height:22px;
        font-size:16px;
        font-family:'PingFangSC-Regular','PingFang SC';
        
        color:rgba(0,23,49,1);
        line-height:22px;
        margin-bottom: 32px;
        text-align: center;
      }
      .czbtn{
        width:178px;
        height:51px;
        background:rgba(0,23,49,1);
        border-radius:3px;
        margin: 0 auto;
        line-height: 51px;
        text-align: center;
        font-size:16px;
        font-family:'PingFangSC-Regular','PingFang SC';
        
        color:rgba(255,255,255,1);
        cursor: pointer;
      }
    }
  }
  .smrzdialog{
    position: fixed;
    width: 398px;
    left: 50%;
    top:50%;
    transform: translateY(-50%);
    margin-left: -199px;
    background-color: #fff;
    border-radius: 8px;
    padding: 30px 20px;
    box-shadow:0px 2px 34px 0px rgba(0,0,0,0.17);
    .gbbtn{
      position: absolute;
      right: 20px;
      top: 20px;
      width: 15px;
      height: 15px;
      cursor: pointer;
      >img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    >h3{
      width:96px;
      height:33px;
      font-size:24px;
      font-family:'PingFangSC-Regular','PingFang SC';
      font-weight: normal;
      color:rgba(0,23,49,1);
      line-height:33px;
    }
    >p{
      height:17px;
      font-size:12px;
      font-family:'PingFangSC-Regular','PingFang SC';
      
      color:rgba(102,102,102,1);
      line-height:17px;
      margin-bottom: 35px;
    }
    .iteminput{
      width:358px;
      height:50px;
      line-height: 50px;
      background:rgba(255,255,255,1);
      border-radius:3px;
      box-shadow:0px 0 14px 0px rgba(0,0,0,0.17);
      margin-bottom: 27px;
      >span{
        float: left;
        padding-left: 18px;
        height: 50px;
      }
      .inputcontbox{
        height: 50px;
        margin-left: 94px;
        height: 94px;
        input{
          float: left;
          width: 100%;
          line-height: 20px;
          padding: 15px 18px 15px 0;
        }
      }
    }
    .rzbtn{
      width:358px;
      height:50px;
      background:rgba(0,23,49,1);
      border-radius:3px;
      margin-top: 58px;
      margin-bottom: 29px;
      font-size:14px;
      font-family:'PingFangSC-Regular','PingFang SC';
      
      color:rgba(255,255,255,1);
      line-height:50px;
      text-align: center;
      cursor: pointer;
    }
  }
  .comdialog{
    position: fixed;
    width: 398px;
    left: 50%;
    top:50%;
    
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    margin-left: -199px;
    // margin-top: -350px;
    background-color: #fff;
    border-radius: 8px;
    padding: 30px 20px;
    box-shadow:0px 2px 34px 0px rgba(0,0,0,0.17);
    .disinput{
      color:#999;
    }
    .gbbtn{
      position: absolute;
      right: 20px;
      top: 20px;
      width: 15px;
      height: 15px;
      cursor: pointer;
      >img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    >h3{
      width:96px;
      height:34px;
      font-size:24px;
      font-family:'PingFangSC-Regular','PingFang SC';
      font-weight: 500;
      color:rgba(0,23,49,1);
      line-height:34px;
      margin-bottom: 16px;
    }
    >p{
      height:18px;
      font-size:12px;
      font-family:'PingFangSC-Regular','PingFang SC';
      
      color:rgba(102,102,102,1);
      line-height:18px;
      margin-bottom: 34px;
    }
    .iteminput{
      width:358px;
      height:50px;
      background:rgba(255,255,255,1);
      border-radius:3px;
      box-shadow:0px 0 14px 0px rgba(0,0,0,0.17);
      font-size: 14px;
      margin-bottom: 26px;
      font-family:PingFangSC-Regular,PingFang SC;
      >span{
        float: left;
        padding-left: 18px;
        line-height: 50px;
        // font-family:'Microsoft YaHei','PingFang SC';
      }
      .inputcontbox{
        height: 50px;
        margin-left: 94px;
        input{
          float: left;
          width: 100%;
          line-height: 20px;
          padding: 15px 18px 15px 0;
        }
        
      }
    }
    .czbox{
      width: 358px;
      margin-bottom: 26px;
      .wenjian{
        font-size: 14px;
        line-height: 30px;
      }
      .czuploadbox{
        overflow: hidden;
        .leftupload{
          float: left;
          // width: 120px;
          margin-right: 10px;
        }
        .scshuoming{
          float: left;
          vertical-align: bottom;
          width: 228px;
          height: 120px;
          padding-top: 5px;
          font-family:'PingFangSC-Regular','PingFang SC';
          color:rgba(153,153,153,1);
          >p{
            font-size:12px;
            text-align: left;
            font-family:'PingFangSC-Regular','PingFang SC';
            color:rgba(102,102,102,1);
            line-height:18px;
          }
        }
      }
        
    }
    .iteminputs{

      width:358px;
      height:50px;
      background:rgba(255,255,255,1);
      border-radius:3px;
      box-shadow:0px 0 14px 0px rgba(0,0,0,0.17);
      margin-bottom: 15px;
      >span{
        float: left;
        padding-left: 18px;
        line-height: 50px;
      }
      .inputcontbox{
        position: relative;
        height: 50px;
        margin-left: 94px;
        padding-right: 60px;
        input{
          float: left;
          width: 100%;
          line-height: 20px;
          padding: 15px 18px 15px 0;
        }
        .caozuo{
          position: absolute;
          top:11px;
          right:11px;
          width:58px;
          height:28px;
          background:rgba(0,23,49,1);
          border-radius:1px;
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          
          color:rgba(255,255,255,1);
          line-height:28px;
          text-align:center;
          cursor: pointer;
        }
        .shangchuan{
          display: inline-block;
          width: 58px;
          height: 28px;
          line-height: 28px;
          color:#fff;
          text-align: center;
        }
      }
    }
    .wangzhi{
      width:358px;
      height:72px;
      margin-bottom: 19px;
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      
      color:rgba(153,153,153,1);
      line-height:20px;
      >p{
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        
        color:rgba(102,102,102,1);
        line-height:17px;
      }
    }
    .wangzhis{
      width:358px;
      min-height:72px;
      margin-bottom: 19px;
      border:1px dashed #999;
      padding: 10px 10px 10px;
      >p{
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        
        color:rgba(102,102,102,1);
        line-height:17px;
        margin-bottom: 8px;
        text-align: center;
        word-break: break-all;
      }
      .ckjg{
        color: #4186E9;
        cursor: pointer;
        a{
          color: #4186E9;
        }
      }
    }
    .rzbtn{
      width:358px;
      height:50px;
      background:rgba(0,23,49,1);
      border-radius:3px;
      margin-bottom: 26px;
      font-size:14px;
      font-family:'PingFangSC-Regular','PingFang SC';
      
      color:rgba(255,255,255,1);
      line-height:50px;
      text-align: center;
      cursor: pointer;
    }
  }
  .mask{
    position: fixed;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3)
  }
}
</style>