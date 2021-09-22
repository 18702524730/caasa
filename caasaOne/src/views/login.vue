<template>
  <div class="loginbox">
      <loginheader></loginheader>
      <div class="box clearfix">
          <div class="logoimgbox"><img src="~assets/img/login/login.jpg" alt=""></div>
          <div class="formbox">
              <h3>账号密码登录</h3>
              <div class="itembox">
                  <span class="iconbox"><img src="~assets/img/login/user.png" alt=""></span><input type="text" placeholder="请输入账号" v-model="user" maxlength="20">
              </div>
              <div class="itembox">
                  <span class="iconbox"><img src="~assets/img/login/pass.png" alt=""></span><input type="password" @keyup.enter="login" placeholder="请输入密码" v-model="password" maxlength="20">
              </div>
              <div class="denglu" @click="login">
                  登录
              </div>
              <p @click="toregister">新用户注册</p>
          </div>
      </div>
      <pubfooter></pubfooter>
  </div>
</template>

<script>
import md5 from 'md5'
import pubfooter from 'cps/public/newfooter.vue'
import loginheader from 'cps/public/loginheader.vue'
const loginUrl = './techinnovation/login'

export default {
    data(){
        return{
            user:'',
            password:'',
            url:''
        }
    },
    components:{
        pubfooter,
        loginheader
    },
    methods:{
        toregister(){
            this.$router.replace({path:'/register',query:{url: this.url}})
        },
        login(){
            if(!this.user){
                this.$message.warning('请输入用户名!');
                return
            }
            if(!this.password){
                this.$message.warning('请输入密码!');
                return
            }
            let data = {
                userName: this.user,
                password: md5(this.password)
            }
            this.$http.get(loginUrl,{params:data}).then(res=>{
                let data = res.data;
                let userName = data.userName;
                let phone = data.phone;
                // localStorage.setItem('techUserName',userName);
                // localStorage.setItem('techUserPhone',phone);
                this.$store.dispatch('update_logininfo',data)
                this.user ='';
                this.password = '';
                if(this.url){
                    window.location.href = this.url
                }else{
                    this.$router.replace({path:'/page'})
                }
                
            }).catch(err=>{
                this.$message.error(err&&err.reponse&&err.response.msg)
            })
        }
    },
    mounted(){
        let local = window.location.href.split('?')[1];
        if(local){
            let obj = {}
            let arr = local.split('=')
            obj[arr[0]] = arr[1]
            if(obj['url']){
                this.url = decodeURIComponent(obj['url'])
            }
        }
        console.log(this.url)
    }
}
</script>

<style lang="less">
.loginbox{
    background-color: #fff;
    
    .box{
        max-width: 1200px;
        margin-right: auto;
        margin-left: auto;
        padding: 170px 0;
        .logoimgbox{
            width: 730px;
            height: 330px;
            float: left;
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .formbox{
            float:right;
            width: 430px;
            height: 330px;
            padding: 50px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            h3{
                font-size: 18px;
                margin-bottom: 15px;
                font-weight: normal;
            }
            .itembox{
                height: 46px;
                border: 1px solid #ccc;
                margin-bottom: 15px;
                padding: 8px 8px 8px 40px;
                .iconbox{
                    float: left;
                    width: 25px;
                    height: 30px;
                    margin-left: -33px;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                input{
                    width: 100%;
                    float: left;
                    padding: 5px 0;
                    font-size: 14px;
                }
            }
            .denglu{
                height: 50px;
                margin-bottom: 15px;
                font-size: 18px;
                line-height: 50px;
                color: #fff;
                text-align: center;
                cursor: pointer;
                background-color: #3675ff;
            }
            p{
                font-size: 18px;
                color: #337ab7;
                cursor: pointer;
            }
        }
    }
    
}
</style>