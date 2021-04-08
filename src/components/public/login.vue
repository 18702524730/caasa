<template>
<div class="loginboxs">
  <div class="formboxs">
      <div class="formcontents" v-if="!zhuce">
        
          <div class="denglubox">
            <span class="guanbi" @click="guanbidenglu"><i class="el-icon-close"></i></span>
            <div class="wxlogin" v-if="wxlogin" @click="towxlogin"><span class="logintips">扫码登录</span></div>
            <div class="pclogin" v-if="!wxlogin" @click="topclogin"><span class="logintips">密码登录</span></div>
            <div v-if="wxlogin">
                <h3 class="denglu"><span :class="{active:!yhlogin}" @click="yzmdenglu">手机登录</span><span class="mr20" :class="{active: yhlogin}" @click="yhdenglu">密码登录</span> </h3>
                <div v-if="yhlogin">
                  <div class="phonebox mb27">
                      <span class="itemtit">用户名：</span>
                      <div class="inbox"><input type="text" v-model="zhmsg.userName" placeholder="请输入您的手机号或邮箱" autocomplete="off"><span class="errspan" v-if="err1">{{err1}}</span></div>
                  </div>
                  <div class="phonebox mb58">
                      <span class="itemtit">密码：</span>
                      <div class="inbox"><input type="password" v-model="zhmsg.passWord" placeholder="请输入您的密码"  autocomplete="off"><span class="errspan" v-if="err2">{{err2}}</span></div>
                  </div>
                  <div class="dlbtn" @click="login('yhdl')">登录</div>
                  <div class="acount"><span @click="tozhuce(1)">注册账号</span><span @click="tozhuce(2)">找回密码</span></div>
                </div>
                <div v-if="!yhlogin">
                  <div class="phonebox mb27">
                      <span class="itemtit">手机：</span>
                      <div class="inbox"><input type="text"  v-model="yzmsg.phone" placeholder="请输入您的手机号" autocomplete="off"><span class="errspan" v-if="err3">{{err3}}</span></div>
                  </div>
                  <div class="yanzm mb58">
                      <span class="itemtit">验证码：</span>
                      <div class="inbox"><input type="text" v-model="yzmsg.code" placeholder="请输入您的验证码" autocomplete="off"><span class="getyzm" @click="getcodedl" v-if="!isgetcodedl">获取验证码</span><span class="getyzmz" v-if="isgetcodedl">已发送({{seconddl}})</span><span class="errspan" v-if="err4">{{err4}}</span></div>
                  </div>
                  <div class="dlbtn" @click="login('yzmdl')">登录</div>
                </div>
            </div>
            <div v-if="!wxlogin">
                <h3 class="denglu"><span class="active">微信快捷登录</span></h3> 
                <div class="erwemabox">
                  <img :src="wxQRUrl" alt="" v-if="wxQRUrl">
                  <img src="~assets/img/home/Spinner.gif" class="gifimg" alt="" v-if="!wxQRUrl">
                  <div class="guoqi" v-if="isguoqi">
                    <div class="guoqitishi">
                      <p>二维码已失效</p>
                      <div class="freshbtn" @click="refresh"><i class="el-icon-refresh-right"></i> 点击刷新</div>
                    </div>
                  </div>
                </div>
                <div class="wxlogintips">请使用微信扫描二维码登录 “国际反侵权假冒服务平台”</div>
            </div>
          </div>
      </div>
      <div v-if="zhuce" class="formcontents">
        <div class="denglubox" v-if="pcdenglu">
          <span class="guanbi" @click="guanbidenglu"><i class="el-icon-close"></i></span>
          <h3 class="denglu"><span v-if="yhzc" class="active">用户注册</span><span v-else class="active">密码找回</span></h3>
          <div>
            <div class="phonebox mb27">
                <span class="itemtit">用户名：</span>
                <div class="inbox"><input type="text"  v-model="zhucemsg.userName" placeholder="请输入您的手机号或邮箱" autocomplete="off"><span class="errspan" v-if="err5">{{err5}}</span></div>
            </div>
            <div class="yanzm mb27">
                <span class="itemtit">验证码：</span>
                <div class="inbox">
                  <input type="text"  v-model="zhucemsg.code" placeholder="请输入您的验证码" autocomplete="off">
                  <span class="getyzm" @click="getcode" v-if="!isgetcode&&yhzc">获取验证码</span>
                  <span class="getyzm" @click="getcodepsd" v-if="!isgetcodepsd&&!yhzc">获取验证码</span>
                  <span class="getyzmz" v-if="isgetcode&&yhzc">已发送({{second}})</span>
                  <span class="getyzmz" v-if="isgetcodepsd&&!yhzc">已发送({{secondpsd}})</span>
                  <span class="errspan" v-if="err6">{{err6}}</span>
                </div>
            </div>
            <div class="phonebox mb27">
                <span class="itemtit" v-if="yhzc">设置密码：</span>
                <span class="itemtit" v-else>新密码：</span>
                <div class="inbox"><input type="text" placeholder="请设置您的密码6-12位数字或英文" maxlength="12" v-model="zhucemsg.passWord" autocomplete="off"><span class="errspan" v-if="err7">{{err7}}</span></div>
            </div>
            <div class="dlbtn" @click="register" v-if="yhzc">注册</div>
            <div class="dlbtn" @click="register" v-if="!yhzc">找回</div>
            <div class="acount"><span @click="todenglu">立即登录</span></div>
          </div>
        </div>
        <div class="denglubox" v-if="!pcdenglu">
          <h3 class="denglu"><span class="mr20" :class="{active: isnew}" @click="glnew">关联新账号</span> <span :class="{active:!isnew}" @click="glold">关联已有账号</span></h3>
          <div v-if="isnew">
            <div class="phonebox mb27">
                <span class="itemtit">用户名：</span>
                <div class="inbox"><input type="text" v-model="zhucemsg.userName" placeholder="请输入您的手机号或邮箱" autocomplete="off"><span class="errspan" v-if="err5">{{err5}}</span></div>
            </div>
            <div class="yanzm mb27">
                <span class="itemtit">验证码：</span>
                <div class="inbox"><input type="text" v-model="zhucemsg.code" placeholder="请输入您的验证码" autocomplete="off"><span class="getyzm" @click="getcodes" v-if="!isgetcodes">获取验证码</span><span class="getyzmz" v-if="isgetcodes">已发送({{seconds}})</span><span class="errspan" v-if="err6">{{err6}}</span></div>
            </div>
            <div class="phonebox mb27">
                <span class="itemtit">设置密码：</span>
                <div class="inbox"><input type="password" placeholder="请设置您的密码6-12位数字或英文" v-model="zhucemsg.passWord" autocomplete="off"><span class="errspan" v-if="err7">{{err7}}</span></div>
            </div>
            <div class="dlbtn" @click="login('glnew')">注册并绑定微信</div>
          </div>
          <div v-if="!isnew">
            <div class="phonebox mb27">
                <span class="itemtit">用户名：</span>
                <div class="inbox"><input type="text" v-model="zhucemsg.userName" placeholder="请输入您的手机号或邮箱" autocomplete="off"><span class="errspan" v-if="err5">{{err5}}</span></div>
            </div>
            <div class="phonebox mb27">
                <span class="itemtit">设置密码：</span>
                <div class="inbox"><input type="password" placeholder="请设置您的密码6-12位数字或英文" v-model="zhucemsg.passWord" autocomplete="off"><span class="errspan" v-if="err7">{{err7}}</span></div>
            </div>
            <div class="dlbtn" @click="login('glold')">注册并绑定微信</div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import Filters from 'utils/filters'
import md5 from 'md5'
import qs from 'qs'
const bdyzmUrl = './ipsebe_union/member/register/capcha.do'
const dlyzmUrl = './ipsebe_union/member/phoneCode/capcha.do'
const zhyzmUrl = './ipsebe_union/member/findPWD/capcha.do'
const zcUrl = './ipsebe_union/member/userRegist.do'
const yhdlUrl = './ipsebe_union/member/userLogin.do'
const yzmdlUrl = './ipsebe_union/member/phoneLogin.do'
const psdUrl = './ipsebe_union/member/getBackPassword.do'
const glnewUrl ='./ipsebe_union/member/bindNewUser.do'
const gloldUrl = './ipsebe_union/member/bindExistUser.do'
const outUrl = './ipsebe_union/member/userLoginOut.do'
const wxdlUrl = './ipsebe_union/wxLogin.do'
const getcodeUrl = './weixin/unionWechat/getWxQRUrl'
const wxUrl = CONFIG.wxUrl;
const zhucemsg ={
  userName:'',
  code:'',
  passWord:''
}
const zhmsg ={
  userName:'',
  passWord:''
}
const yzmsg ={
  phone:'',
  code:'',
}
export default {
  data(){
    return {
      zhucemsg:Object.assign({},zhucemsg),
      zhmsg:Object.assign({},zhmsg),
      yzmsg:Object.assign({},yzmsg),
      wxUrl:wxUrl,
      err1:'',
      err2:'',
      err3:'',
      err4:'',
      err5:'',
      err6:'',
      err7:'',
      text:[],
      checklist:[],
      nums:0,
      topnum:0,
      ulheight:0,
      active:null,
      wxlogin:false,
      yhlogin: false,
      zhuce: false,
      yhzc:true,
      pcdenglu: true,
      isnew: true,
      fromurl:'',
      isguoqi:false,
      isgetcode: false,
      isgetcodes: false,
      isgetcodedl: false,
      isgetcodepsd: false,
      second: 60,
      secondpsd: 60,
      seconddl: 60,
      seconds: 60,
      stimer:null,
      stimers:null,
      stimerdl:null,
      stimerpsd:null,
      timer:null,
      wxQRUrl:'',
      sbid:''
    }
  },
  mounted(){
    this.fromurl = this.$route.query.url||'';
    if(!this.wxlogin){
      this.wechat()
    }
    console.log(this.fromurl)
  },
  beforeDestroy(){
    this.stimer&&clearInterval(this.stimer)
    clearInterval(this.stimers)
    clearInterval(this.stimerdl)
    clearInterval(this.stimerpsd)
    clearInterval(this.timer)
  },
  filters:{
    dateFormat: Filters.formatDate.datesFormat
  },
  methods:{
      guanbidenglu(){
        this.$emit('closedenglu',true)
      },
      register(){
        let res=this.checkvalid()
        if(res){
          let data = {
            username: this.zhucemsg.userName,
            password: this.zhucemsg.passWord,
            capcha: this.zhucemsg.code
          };
          if(this.yhzc){
            this.$http.post(zcUrl,data).then(res=>{
              this.$message.success('注册成功')
              this.loginSuccessHandle(res.data)
              // this.resets()
              // this.zhuce = false;
              // this.wxlogin = true;
            }).catch(err=>{
              this.$message.error(err.response.data.msg)
            })
          }else{
            this.$http.post(psdUrl,data).then(res=>{
              this.$message.success('密码找回成功')
              this.loginSuccessHandle(res.data)
              // this.resets()
              // this.zhuce = false;
              // this.wxlogin = true;
            }).catch(err=>{
              this.$message.error(err.response.data.msg)
            })
          }
        }
      },
      loginSuccessHandle(data){
        localStorage.setItem('wqisadmin',data.isAdmin)
        localStorage.setItem('appToken',data.token)
        let str = JSON.stringify(data)
        localStorage.setItem('userlogininfo',str)
        console.log(str)
        localStorage.setItem('nowlogin',1)
        this.resets()
        this.guanbidenglu()
        // if(this.fromurl){
        //   window.location.href=decodeURIComponent(this.fromurl) 
        // }else{
        //   this.$router.push({path:'/page/homepage/home'})
        // }
      },
      login(t){
        let res =this.checkvalid()
        if(res){
          let data
          switch(t){
            case 'yhdl':
              data = {
                username: this.zhmsg.userName,
                password: this.zhmsg.passWord
              }
              this.$http.post(yhdlUrl,data).then(res=>{
                this.$message.success('账号密码登录成功');
                this.loginSuccessHandle(res.data)
                console.log(res.data)
              }).catch(err=>{
                this.$message.error(err.response.data.msg)
              })
              break;
            case 'yzmdl':
              data = {
                phone: this.yzmsg.phone,
                capcha: this.yzmsg.code
              }
              this.$http.post(yzmdlUrl,data).then(res=>{
                this.$message.success('验证码登录成功');
                this.loginSuccessHandle(res.data)
              }).catch(err=>{
                this.$message.error(err.response.data.msg)
              })
              
              break;
            case 'glnew':
              data = {
                username: this.zhucemsg.userName,
                password: this.zhucemsg.passWord,
                capcha: this.zhucemsg.code
              }
              this.$http.post(glnewUrl,data).then(res=>{
                this.$message.success('关联新账号登录成功');
                this.loginSuccessHandle(res.data)
              }).catch(err=>{
                this.$message.error(err.response.data.msg)
              })
              break;
            case 'glold':
              data = {
                username: this.zhucemsg.userName,
                password: this.zhucemsg.passWord
              }
              this.$http.post(gloldUrl,data).then(res=>{
                this.$message.success('关联已有账号登录成功');
                this.loginSuccessHandle(res.data)
              }).catch(err=>{
                this.$message.error(err.response.data.msg)
              })
              
              break;
          }
        }
      },
      resets(){
        this.zhucemsg=Object.assign({},zhucemsg)
        this.zhmsg=Object.assign({},zhmsg)
        this.yzmsg=Object.assign({},yzmsg)
      },
      clear(){
        this.err1 = ''
        this.err2 = ''
        this.err3 = ''
        this.err4 = ''
        this.err5 = ''
        this.err6 = ''
        this.err7 = ''
      },
      checkvalid(){
        this.clear()
        if(this.zhuce){
          if(this.pcdenglu){
            if(!this.zhucemsg.userName){
              this.err5='请输入用户名'
              // this.$message.warning("请输入用户名")
              return false
            }
            if(!this.zhucemsg.code){
              this.err6='请输入验证码'
              // this.$message.warning("请输入验证码")
              return false
            }
            if(!this.zhucemsg.passWord){
              this.err7='请输入密码'
              // this.$message.warning("请输入密码")
              return false
            }
          }else{
            if(this.isnew){
              if(!this.zhucemsg.userName){
                this.err5='请输入用户名'
                // this.$message.warning("请输入用户名")
                return false
              }
              if(!this.zhucemsg.code){
                this.err6='请输入验证码'
                // this.$message.warning("请输入验证码")
                return false
              }
              if(!this.zhucemsg.passWord){
                this.err7='请输入密码'
                // this.$message.warning("请输入密码")
                return false
              }
            }else{
              if(!this.zhucemsg.userName){
                this.err5='请输入用户名'
                // this.$message.warning("请输入用户名")
                return false
              }
              if(!this.zhucemsg.passWord){
                this.err7='请输入密码'
                // this.$message.warning("请输入密码")
                return false
              }
            }
          }
          return true
        }else{
          if(this.wxlogin){
            if(this.yhlogin){
              if(!this.zhmsg.userName){
                this.err1 = '请输入用户名'
                // this.$message.warning("请输入用户名")
                return false
              }
              if(!this.zhmsg.passWord){
                this.err2 = '请输入密码'
                // this.$message.warning("请输入密码")
                return false
              }
              return true;
            }else{
              if(!this.yzmsg.phone){
                this.err3 = '请输入手机号'
                // this.$message.warning("请输入手机号")
                return false
              }
              if(!this.yzmsg.code){
                this.err4 = '请输入验证码'
                // this.$message.warning("请输入验证码")
                return false
              }
              return true;
            }
          }
        }
      },
      //1去注册 2找回密码
      tozhuce(num){
        this.clear()
        if(num==1){
          this.zhuce  = true;
          this.yhzc = true;
        }
        if(num==2){
          this.zhuce  = true;
          this.yhzc = false;
        }
      },
      glnew(){
        this.isnew = true
        this.resets();
        this.clear()
      },
      glold(){
        this.isnew = false
        this.resets();
        this.clear()
      },
      //去登录
      todenglu(){
        this.zhuce = false;
        this.yhdenglu();
        this.resets();
        this.clear()
      },
      // 用户登录
      yhdenglu(){
        this.yhlogin = true;
        this.resets()
        this.clear()
      },
      // 验证码登录
      yzmdenglu(){
        this.yhlogin = false;
        this.resets()
        this.clear()
      },
      // 去微信登录
      towxlogin(){
        this.wxlogin = false;
        this.wechat()
        this.resets()
        this.clear()
          // this.yhlogin = true;
      },
      // 去pc登录
      topclogin(){
        clearInterval(this.timer)
        this.wxlogin = true;
        this.isguoqi = false;
        this.clear()
      },
      // 二维码刷新
      refresh(){
        this.isguoqi = false;
        this.wechat()
        // this.zhuce = true;
        // this.pcdenglu = false;
      },
      // 获取验证码
      getcode(){
        if(!this.zhucemsg.userName){
          this.$message.error('请输入用户名');
          return
        }
        
        
        this.$http.get(bdyzmUrl,{params:{account:this.zhucemsg.userName}}).then(res=>{
          this.$message.success('发送成功')
          this.isgetcode = true;
          this.jishi()
        }).catch(err=>{
              this.$message.error(err.response.data.msg)
            })
      },
      getcodes(){
        if(!this.zhucemsg.userName){
          this.$message.error('请输入用户名');
          return
        }
        
        
        this.$http.get(bdyzmUrl,{params:{account:this.zhucemsg.userName}}).then(res=>{
          this.$message.success('发送成功')
          this.isgetcodes = true;
          this.jishis()
        }).catch(err=>{
              this.$message.error(err.response.data.msg)
            })
      },
      getcodedl(){
        let reg = /^1\d{10}$/
        if(!this.yzmsg.phone){
          this.$message.error('请输入手机号');
          return
        }
        if(!reg.test(this.yzmsg.phone)){
          this.$message.error('请输入正确的手机号');
          return
        }
        
        this.$http.get(dlyzmUrl,{params:{account:this.yzmsg.phone}}).then(res=>{
          this.$message.success('发送成功')
          this.isgetcodedl = true;
        this.jishidl()
        }).catch(err=>{
              this.$message.error(err.response.data.msg)
            })
      },
      getcodepsd(){
        if(!this.zhucemsg.userName){
          this.$message.error('请输入用户名');
          return
        }
        
        this.$http.get(zhyzmUrl,{params:{account:this.zhucemsg.userName}}).then(res=>{
          this.$message.success('发送成功')
          this.isgetcodepsd = true;
          this.jishipsd()
        }).catch(err=>{
              this.$message.error(err.response.data.msg)
            })
      },
      // 验证码计时
      jishi(){
        this.stimer = setInterval(()=>{
          --this.second;
          if(this.second<=0){
            this.isgetcode = false;
            this.second = 60
            clearInterval(this.stimer)
          }
        },1000)
      },
      jishis(){
        this.stimers = setInterval(()=>{
          --this.seconds;
          if(this.seconds<=0){
            this.isgetcodes = false;
            this.seconds = 60
            clearInterval(this.stimers)
          }
        },1000)
      },
      jishidl(){
        this.stimerdl = setInterval(()=>{
          --this.seconddl;
          if(this.seconddl<=0){
            this.isgetcodedl = false;
            this.seconddl = 60
            clearInterval(this.stimerdl)
          }
        },1000)
      },
      jishipsd(){
        this.stimerpsd = setInterval(()=>{
          --this.secondpsd;
          if(this.secondpsd<=0){
            this.isgetcodepsd = false;
            this.secondpsd = 60
            clearInterval(this.stimerpsd)
          }
        },1000)
      },
      wechat(){
    		var self = this;
        	self.$http.post('./ipsebe_union/getWxQRUrl.do')
		    .then((response) => {
		    	self.wxQRUrl = response.data.wxQRUrl;
		    	self.sbid = response.data.sbid;
		    	if(self.wxQRUrl){
		    		self.getPaystatus();
		    	}
		    })
		    .catch((error) => {
		    });
      },
      //轮询获取扫描状态
      getPaystatus(){
        var self = this;
        var i=0;
        self.timer = setInterval(function(){
          self.$http.post(wxdlUrl,qs.stringify({sbid: self.sbid}))
          .then((response) => {
            i++;
            if (i > 300) {
              self.isguoqi = true;
                clearInterval(self.timer);
                return;
            }
            if(response.data.code>-1){
              clearInterval(self.timer);
              if(response.data.code==0){
                var regdata = response.data.data;
                self.zhuce = true;
                self.pcdenglu = false;
                // self.$router.push({path: '/regLogin', query: {headimgurl: regdata.headimgurl,nickname:regdata.nickname,openid:regdata.openid,return_url:self.return_url}});
              }else if(response.data.code==1){
                self.loginSuccessHandle(response.data.data);
              }
            }
          })
          .catch((error) => {
            console.log(error)
            clearInterval(self.timer);
            self.refresh = false;
            self.$message({
              message: error.response.data.msg,
              type: 'warning'
            });
          });
        }, 1000);
      }
  },
}
</script>

<style lang="less">
.mb58{
  margin-bottom: 58px;
}
.mb27{
  margin-bottom: 27px;
}
.loginboxs{
  position: fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  font-family:'PingFangSC-Regular','PingFang SC';
  background-color: rgba(0,0,0,0.5);
  .formboxs{
    padding-bottom: 80px;
    .formcontents{
      max-width: 1200px;
      margin: 0 auto;
      height: 602px;
      padding-top: 200px;
      .guanbi{
        position: absolute;
        right: -30px;
        top: -40px;
        width: 20px;
        height:20px;
        text-align: center;
        line-height: 20px;
        font-size: 20px;
        border-radius: 50%;
        background-color: #fff;
        color:#000;
        cursor: pointer;
      }
      .denglubox{
          position: absolute;
          left: 50%;
          top:50%;
          margin-left: -198px;
          transform: translateY(-50%);
          width:398px;
          // height: 400px;
          padding: 29px 20px;
          // margin: 0 auto;
          background-color: #fff;
          border-radius: 8px;
          .dlbtn{
                height:50px;
                background:#001731;
                border-radius:3px;
                font-size:14px;
                font-family:'PingFangSC-Regular','PingFang SC';
                
                color:#fff;
                line-height:50px;
                text-align: center;
                cursor: pointer;
          }
          .denglu{
            height:33px;
            
            font-family:'PingFangSC-Regular','PingFang SC';
            font-weight: normal;
            
            font-size: 16px;
            color: #999;
            margin-bottom: 26px;
            >span{
              cursor: pointer;
              margin-right: 20px;
            }
            .active{
              line-height:33px;
              font-size:24px;
              color:#001731;
            }
          }
          .erwemabox{
            position: relative;
            width:188px;
            height:188px;
            background-color: #ccc;
            margin: 44px auto 30px;
            >img{
              display: block;
              width: 100%;
              height: 100%;
            }
            .guoqi{
              position: absolute;
              left:0;
              top:0;
              width: 100%;
              height: 100%;
              background: rgba(255, 255, 255, 0.9);
              box-shadow: 0 0 8px 0 rgba(0,0,0,0.17);
              .guoqitishi{
                width: 84px;
                margin: 63px auto 0;
                text-align: center;
                width:84px;
                height:20px;
                font-size:14px;
                
                color:#001731;
                line-height:20px;
                >p{
                  margin-bottom: 15px;
                }
                .freshbtn{
                  cursor: pointer;
                }
              }
            }
          }
          .wxlogintips{
              width:200px;
                height:40px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                
                color:rgba(51,51,51,1);
                line-height:20px;
                margin: 0 auto;
                text-align: center;
          }
            .phonebox{
                height: 50px;
                position: relative;
                box-shadow:0px 2px 34px 0px rgba(0,0,0,0.17);
                .itemtit{
                    float: left;
                    padding-left: 18px;
                    line-height: 50px;
                }
                .inbox{
                    position:relative;
                    margin-left: 91px;
                    height: 20px;
                    line-height: 20px;
                    >input{
                        float: left;
                        width: 100%;
                        padding: 15px 18px 15px 0;
                        line-height: 20px;
                    }
                    .errspan{
                      position: absolute;
                      top: 51px;
                      left: 0;
                      color: rgb(241, 26, 26);
                      font-size: 12px;
                    }
                }
            }
            .yanzm{
                height: 50px;
                position: relative;
                
                box-shadow:0px 2px 34px 0px rgba(0,0,0,0.17);
                .itemtit{
                    float: left;
                    line-height: 50px;
                    padding-left: 18px;
                }
                .inbox{
                    position: relative;
                    margin-left: 91px;
                    >input{
                        float: left;
                        width: 138px;
                        padding: 15px 18px 15px 0;
                        line-height: 20px;
                    }
                    .errspan{
                      position: absolute;
                      top: 51px;
                      left: 0;
                      color: rgb(241, 26, 26);
                      font-size: 12px;
                    }
                }
                .getyzm{
                    position: absolute;
                    right: 6px;
                    top: 6px;
                    width:88px;
                    height:38px;
                    background:#001731;
                    border-radius:1px;
                    font-size:14px;
                    font-family:'PingFangSC-Regular','PingFang SC';
                    
                    color:#fff;
                    line-height:38px;
                    cursor: pointer;
                    text-align: center;
                }
                .getyzmz{
                    position: absolute;
                    right: 6px;
                    top: 6px;
                    width:88px;
                    height:38px;
                    background:#C6C6C6;
                    border-radius:1px;
                    font-size:14px;
                    font-family:'PingFangSC-Regular','PingFang SC';
                    
                    color:#fff;
                    line-height:38px;
                    text-align: center;
                }
            }
          .wxlogin{
              position: absolute;
              right:0;
              top:0;
              width: 65px;
              height: 63px;
              background: url('~assets/img/home/wx.png') top right no-repeat;
              cursor: pointer;
          }
          .pclogin{
              position: absolute;
              right:0;
              top:0;
              width: 65px;
              height: 63px;
              background: url('~assets/img/home/pc.png') top right no-repeat;
              cursor: pointer;
          }
          .logintips{
            position: absolute;
            right: -113px;
            top: 13px;
            width: 106px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            padding-left: 10px;
            background:url("~assets/img/home/tip.png") right top no-repeat;
            font-size: 16px;
            color: #fff;
          }
      }
    }
    
  }
  .acount{
    padding: 10px;
    text-align:center;
    >span{
      margin-right: 60px;
      cursor: pointer;
      &:last-child{
        margin-right: 0;
      }
    }
  }
}

</style>