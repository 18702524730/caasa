<template>
  <div class="loginboxs">
      <loginheader></loginheader>
      <div class="registerbox">
          <div class="register">
            <div class="top clearfix">
                <span class="title">会员注册</span><span class="tologin">已有账号，去<span class="loginbtn" @click="tologin">登录</span></span>
            </div>
            <ul class="formlist">
                <li><span class="intr">用户名：</span><input type="text" placeholder="请输入用户名" v-model="subdata.userName" maxlength="20"></li>
                <li><span class="intr">手机号：</span><input type="text" placeholder="请输入手机号" v-model="subdata.phone" maxlength="11"></li>
                <li><span class="intr">验证码：</span><input class="hasyzm" type="text" placeholder="请输入验证码" v-model="subdata.code" maxlength="10"><span class="yzm" @click="getcode()">验证码</span></li>
                <li><span class="intr">密 码：</span><input type="password" placeholder="请输入密码" v-model="subdata.password"></li>
                <li><span class="intr">确认密码：</span><input type="password" placeholder="请再次输入密码" v-model="subdata.confrimPassword"></li>
            </ul>
            <div class="xieyibox"><label for="xieyi"><input id="xieyi" type="checkbox" v-model="isCheck">我已阅读并同意</label><span @click="centerDialogVisible=true">《用户服务协议》</span></div>
            <div class="regisbtn" @click="register">注册</div>
          </div>
      </div>
      <pubfooter></pubfooter>
        <el-dialog
            title='用户服务协议'
            :visible.sync="centerDialogVisible"
            height="600"
            >
            <div class="xieyicontent">
                <p class="mb15">
                    欢迎您注册成为本网站的用户！请仔细阅读下面的协议，只有接受协议才能继续进行注册。一经注册，您需要遵守本协议或修改后的本协议的所有条款，本网站已经或将来可能发布的各类规则为本协议不可分割的一部分，与本协议具有同等法律效力。本网站有权根据业务需要酌情修订本协议，并以网站公示的方式进行公告，不再单独通知您。如果您不同意其中的任何条款或者任何修订，请您立刻停止使用服务。如您在协议修订后继续使用本网站的服务，则将视为您已接受经修订的协议条款，当您与本网站发生争议时，应以最新的服务协议为准。本网站有权利通过包括但不限于删除已发布信息，终止账户，屏蔽IP地址、关键字、联系方式，或法律诉讼等方式执行本用户协议。
                </p>
                <p>
                    1. 注册和登录本网站所提供的服务（以下简称“本服务”）仅供能够根据相关法律订立具有法律约束力的合约的个人或公司使用。在您完成注册程序或以其他本网站允许的方式实际使用服务时，您应当是具备完全民事权利能力和与所从事的民事行为相适应的行为能力的自然人、法人或其他组织。
                    注册用户必须保证注册信息真实有效，本网站没有义务对用户注册信息进行核实，由于注册信息错误导致的一切后果均由用户承担。如有合理理由怀疑您提供的信息错误、不实、过时或不完整的，本网站有权向您发出询问及/或要求改正的通知，
                    并有权直接做出删除相应资料的处理， 直至中止、终止对您提供部分或全部服务。本网站对此不承担任何责任，您将承担因此产生的任何直接或间接损失及不利后果。
                    本服务不会提供给被暂时或永久中止资格的本网站用户，并有权追究其使用本网站服务的一切法律责任。
                </p>
                <p>
                    在注册过程中，您将选择用户注册名和密码。您须自行负责对您的用户注册名和密码保密，且须对您在用户注册名和密码下发生的所有活动承担责任。您同意：
                </p>
                <p>
                    （a）如发现任何人未经授权使用您的用户注册名或密码，或发生违反保密规定的任何其他情况，您会立即通知本网站，要求本网站暂停提供相关服务，但本网站就停止提供服务之前已经产生的后果不承担任何责任及费用；
                </p>
                <p class="mb15">
                    （b）确保您在每个上网时段结束时，以正确步骤离开网站。本网站不能也不会对因您未能遵守本款规定而发生的任何损失或损毁负责。
                </p>
                <p>
                    2. 本网站使用规范
                </p>
                <p>
                    在使用本网站服务过程中，您承诺遵守以下约定：
                </p>
                <p>
                    （a）在使用本服务过程中实施的所有行为均遵守国家法律、法规等规范性文件及本网站各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议及相关规则。
                </p>
                <p>
                    （b）对您发布或者上传于本网站的所有信息均享有完整的知识产权，或已经得到相关权利人的合法授权，并保证该信息不侵犯到任何第三人的合法权益。 不发布国家禁止销售的或限制销售的产品或服务信息（除非取得合法且足够的许可），不发布涉嫌侵犯他人知识产权或其它合法权益的产品或服务信息，不发布违背社会公共利益或公共道德或本网站认为不适合在本网站上销售的产品或服务信息，不发布其它涉嫌违法或违反本协议及各类规则的信息。
                </p>
                <p>
                    （c）在与其他用户进行业务对接或服务产品交易的过程中，遵守诚实信用原则，不采取不正当竞争行为，不扰乱对接或交易的正常秩序，不从事与对接或交易无关的行为。不以虚构或歪曲事实的方式不当评价其他用户，不采取不正当方式制造或提高自身的信用度，不采取不正当方式制造或提高（降低）其他用户的信用度；
                </p>
                <p>
                    （d）不使用任何装置、软件或例行程序干预或试图干预本网站的正常运作。您不得采取任何将导致不合理的庞大数据负载加诸本网站网络设备的行动。 您了解并同意：
                </p>
                <p>
                    （a）本网站有权对您是否违反上述承诺做出单方认定，并根据单方认定结果适用规则予以处理或终止向您提供服务，且无须征得您的同意或提前通知予您。
                </p>
                <p>
                    （b）经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者本网站根据自身的判断，认为您的行为涉嫌违反本协议和/或规则的条款或涉嫌违反法律法规的规定的，则本网站有权在网上公示您的该等涉嫌违法或违约行为及本网站已对您采取的措施。
                </p>
                <p>
                    （c）对于您在本网站发布的涉嫌违法或涉嫌侵犯他人合法权利或违反本协议和/或规则的信息，本网站有权不经通知您即予以删除，且按照协议的规定要求您承担法律责任。
                </p>
                <p>
                    （d）对于您在本网站上实施的行为，包括您未在本网站上实施但已经对本网站及其用户产生影响的行为，本网站有权单方认定您行为的性质及是否构成对本协议和/或规则的违反，并据此要求您承担法律责任。您应自行保存与您行为有关的全部证据，并应对无法提供充要证据而承担的不利后果。
                </p>
                <p>
                    （e）对于您的行为对任意第三方造成损害的，您均应当以自己的名义独立承担所有的法律责任，并应确保科服网免于因此产生损失或增加费用。
                </p>
                <p class="mb15">
                    （f）如您涉嫌违反有关法律、法规、规章或者本协议及/或本网站规则之规定，使本网站遭受任何损失，或受到任何第三方的索赔，或受到任何行政管理部门的处罚，您应当赔偿本网站因此造成的损失及（或）发生的费用，包括合理的律师费用。
                </p>
                <p>
                        3. 隐私保护
                </p>
                <p>
                    本网站向您保证不对外公开您的注册资料及您在使用本网站服务时存储在本网站的非公开内容，但下列情况除外：
                </p>
                <p>
                    （a）事先获得您的明确授权的；
                </p>
                <p>
                    （b）根据有关的法律法规要求，我们必须提供的；
                </p>
                <p>
                    （c）按照相关政府主管部门或司法部门的要求，我们必须提供的；
                </p>
                <p>
                    （d）您先行违反本协议内容导致本网站或第三方或者社会公共利益受损或者受到威胁的，我们有权向相关当事人提供您的相关信息。
                </p>
                <p class="mb15">
                    您知悉并认可：本网站可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本网站同等的保护用户隐私的责任，则本网站有权将用户的注册资料等提供给该第三方。另外，在不透露单个用户隐私资料的前提下，本网站有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。
                </p>
                <p>
                    4. 免责条款
                </p>
                <p>
                    您了解：本网站上用户自行发布或由网络其他站点转载的信息，可能存在风险和瑕疵。 本网站仅作为您获取产品或服务信息、物色交易对象、就产品和/或服务的交易进行协商及开展交易的场所，但本网站无法控制交易所涉及的产品或服务的真实性、准确性、安全或合法性，以及交易或对接各方履行其在贸易协议中各项义务的能力。本网站没有义务对所有用户的信息数据、产品或服务信息、交易或对接行为以及相关的其它事项进行事先审查，也没有义务保证、监督用户提供的服务过程或服务质量。
                    您应自行谨慎判断确定相关信息的真实性、合法性和有效性，并自行承担因此产生的责任与损失。
                </p>
                <p>
                    不论在何种情况下，本网站均不对由于信息网络正常的设备维护，信息网络连接故障，电脑、通讯或其他系统的故障，电力故障，罢工，劳动争议，暴乱，起义，骚乱，生产力或生产资料不足，火灾，洪水，风暴，爆炸，战争，政府行为，司法行政机关的命令或第三方的不作为而造成的不能服务或延迟服务承担责任。
                    本网站对任何在本网站发布信息或使用信息所带来的风险不承担任何责任。访问和使用本网站的用户应自行判断相关信息的准确性、完整性和合法性，并同意自行承担访问和使用相关信息可能出现的全部风险。对您使用本网站或者与本网站相关的任何内容、服务或其它链接至本网站的站点、内容均不作直接、间接、法定、约定的保证。
                    无论在任何原因下（包括但不限于疏忽原因），对您或任何人通过使用本网站上的信息或由本网站链接的信息，或其他与本网站链接的网站信息所导致的损失或损害（包括直接、间接、特别或后果性的损失或损害，例如收入或利润之损失，电脑系统之损坏或数据丢失等后果），责任均由使用者自行承担（包括但不限于疏忽责任）。
                </p>
                <p>
                    本用户服务协议的解释权归本网站所有。如果其中有任何条款与国家的有关法律相抵触，则以国家法律的明文规定为准。
                </p>
                <p>
                    因本协议产生争议的，以本网站所在地法院为管辖法院。
                </p>
            </div>
            <span slot="footer" class="iknow">
                <span class="known" @click="read">我知道了</span>
            </span>
        </el-dialog>
  </div>
</template>

<script>
import md5 from 'md5'
import pubfooter from 'cps/public/newfooter.vue'
import loginheader from 'cps/public/loginheader.vue'
const registerUrl = './techinnovation/register'
const sendCodeUrl = './techinnovation/sendPhoneCode'
const checkUserUrl = './techinnovation/checkUserName'
const dataobj = {
    userName:'',
    phone:'',
    code:'',
    password:'',
    confrimPassword:'',
    
}
export default {
    data(){
        return{
            subdata: Object.assign({},dataobj),
            isCheck:false,
            centerDialogVisible: false,
            url:''
        }
    },
    components:{
        pubfooter,
        loginheader
    },
    methods:{
        read(){
            this.centerDialogVisible = false;
            this.isCheck = true;
        },
        tologin(){
            this.$router.replace({path:'/login',query:{url: this.url}})
        },
        getcode(){
            let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
            if(!this.subdata.phone){
                this.$message.warning('请输入手机号');
                return;
            }
            if(!reg.test(this.subdata.phone)){
                this.$message.warning('请输入正确的手机号');
                return;
            }
            let data = {
                phone: this.subdata.phone
            }
            this.$http.get(sendCodeUrl,{params: data}).then(res=>{
                this.$message.success('发送成功')
            }).catch(err=>{
                this.$message.error(err.response.data.msg||'发送失败')
            })
        },
        register(){
            let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
            if(!this.subdata.userName){
                this.$message.warning('用户名不能为空');
                return;
            }
            if(!this.subdata.phone){
                this.$message.warning('手机号不能为空');
                return;
            }
            if(!reg.test(this.subdata.phone)){
                this.$message.warning('手机号格式不正确');
                return;
            }
            if(!this.subdata.code){
                this.$message.warning('请输入验证码');
                return;
            }
            if(!this.subdata.password){
                this.$message.warning('请输入密码');
                return;
            }
            if(!this.subdata.confrimPassword){
                this.$message.warning('请再次输入密码');
                return;
            }
            if(this.subdata.password!=this.subdata.confrimPassword){
                this.$message.warning('两次密码不一致');
                return;
            }
            if(!this.isCheck){
                this.$message.warning('请勾选我已阅读并同意《用户服务协议》');
                return;
            }
            let udata ={
                userName: this.subdata.userName
            }
            let data = Object.assign({},this.subdata);
            data.password = md5(this.subdata.password);
            data.confrimPassword = md5(this.subdata.confrimPassword)
            this.$http.get(checkUserUrl,{params: udata}).then(res=>{
                this.$http.post(registerUrl,data).then(res=>{
                    this.$message.success('注册成功');
                    this.subdata = Object.assign({},dataobj);
                    this.tologin()
                }).catch(err=>{
                    this.$message.error(err.response.data.msg||'注册失败')
                })
                
            }).catch(err=>{
                this.$message.error(err.response.data.msg||'用户名不可用')
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
.xieyicontent{
    padding: 20px;
    max-height: 500px;
    overflow-y: auto;
    
}
.known{
    display: inline-block;
    width: 80px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    background-color: #169bd5;
    color: #fff;
    border-radius: 2px;
    font-size: 14px;
    cursor: pointer;
}
.xieyicontent::-webkit-scrollbar{
    width: 4px;
    background-color: #eee;
}
.xieyicontent::-webkit-scrollbar-thumb{
    width: 4px;
    background-color: #169bd5;
}
.xieyicontent::-webkit-scrollbar-track{
    width: 4px;
}
.loginboxs{
    background-color: #efefef;
    .registerbox{
        padding: 50px 0;
        .register{
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 30px;
            .top{
                padding: 15px 0 15px 30px;
                border-bottom: 1px solid #ccc;
                font-size: 20px;
                color: #000;
                .title{
                    float: left;
                }
                .tologin{
                    float: right;
                    .loginbtn{
                        color: #337ab7;
                        cursor: pointer;
                    }
                }
            }
            .formlist{
                width: 400px;
                padding-top: 35px;
                margin-right: auto;
                margin-left: auto;
                >li{
                    position: relative;
                    margin-bottom: 30px;
                    height: 35px;
                    .intr{
                        float: left;
                        width: 90px;
                        height: 35px;
                        line-height: 35px;
                        font-size: 14px;
                        &:before{
                            content: "*";
                            font-size: 12px;
                            color: rgb(241, 28, 28);
                        }
                    }
                    .hasyzm{
                        width: 210px
                    }
                    input{
                        float: left;
                        width: 310px;
                        height: 35px;
                        padding: 4px 10px;
                        border: 1px solid #ccc;
                    }
                    .yzm{
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 100px;
                        height: 35px;
                        line-height: 35px;
                        text-align: center;
                        font-size: 14px;
                        color: #fff;
                        background-color: #337ab7;
                        cursor: pointer;
                    }
                }
            }
            .xieyibox{
                width: 400px;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 30px;
                font-size: 14px;
                label{
                    vertical-align: middle
                }
                span{
                    vertical-align: middle;
                    color: #337ab7;
                    cursor: pointer;
                }
            }
            .regisbtn{
                height: 40px;
                width: 260px;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 20px;
                line-height: 40px;
                text-align: center;
                font-size: 18px;
                border-radius: 5px;
                color: #fff;
                background-color: #169bd5;
                cursor: pointer;
            }
        }
    }
}
</style>