<template>
    <div class="wqdetailbox">
        <h2 class="breadbox">案件详情 <span @click="backlist">返回列表</span></h2>
        <div>
            <h3 class="msgtitle">维权信息</h3>
            <ul class="threerows">
                <li><strong>维权编号：</strong>{{order_detail.userRightProtect.rightProtectSn}}</li>
                <li><strong>业务类型：</strong>{{order_detail.userRightProtect.businessType}}</li>
                <li><strong>申请时间：</strong>{{order_detail.userRightProtect.createTime| dateFormat}}</li>
                <li><strong>联系人称呼：</strong>{{order_detail.userRightProtect.name}}</li>
                <li><strong>联系手机：</strong>{{order_detail.userRightProtect.phone}}</li>
                <li><strong>诉求描述：</strong>{{order_detail.userRightProtect.appealContent}}</li>
            </ul>
            <h3 class="msgtitle">用户信息</h3>
            <ul class="threerows">
                <li><strong>用户编号：</strong>{{order_detail.user.userSn}}</li>
                <li><strong>注册手机：</strong>{{order_detail.user.phone}}</li>
                <li><strong>注册邮箱：</strong>{{order_detail.user.email}}</li>
                <li><strong>微信绑定：</strong>{{order_detail.user.ifBindWechat|isBindFormat}}</li>
                <li><strong>注册时间：</strong>{{order_detail.user.createTime| dateFormat}}</li>
            </ul>
            <h3 class="msgtitle">处理信息</h3>
            <ul class="threerows">
                <li><strong>维权平台：</strong>{{order_detail.userRightProtect.rightProtectPlatform}}</li>
                <li><strong>维权内容：</strong>{{order_detail.userRightProtect.rightProtectContent}}</li>
                <li><strong>处理结果：</strong>{{order_detail.userRightProtect.processResult}}</li>
            </ul>
            <h3 class="msgtitle">用户评价</h3>
            <ul>
                <li><strong>服务满意度：</strong>{{order_detail.userRightProtect.evaluateSatisfyDegree}}</li>
                <li><strong>服务态度：</strong>{{order_detail.userRightProtect.evaluateAttitudeDegree}}</li>
                <li><strong>服务专业性：</strong>{{order_detail.userRightProtect.evaluateSpecialDegree}}</li>
                <li><strong>及时性：</strong>{{order_detail.userRightProtect.evaluateTimeDegree}}</li>
                <li><strong>评价内容：</strong>{{order_detail.userRightProtect.evaluateContent}}</li>
            </ul>
            <h3 class="msgtitle">状态信息</h3>
            <ul>
                <li><strong>当前状态：</strong>{{order_detail.userRightProtect.state|wqstateFormat}} <span class="chulibtn" @click="shoulicase" v-if="order_detail.userRightProtect.state==0">受理</span><span class="chulibtn" v-if="order_detail.userRightProtect.state==1" @click="chulicase">提交结果</span></li>
                <li><strong>业务转化：</strong>{{order_detail.userRightProtect.ifTransfer|busiChangeFormat}}</li>
            </ul>
                
            <ul class="fourows tabhead">
                <li><strong>操作</strong></li>
                <li><strong>操作后状态</strong></li>
                <li><strong>角色</strong></li>
                <li><strong>时间</strong></li>
            </ul>
            <ul class="fourows notborder" v-for="(jilu,key) in order_detail.rightProtectOperateList" :key="key">
                <li>{{jilu.operateType|operateTypeFormat}}</li>
                <li>{{jilu.stateAfterOperate|wqstateFormat}}</li>
                <li>{{jilu.operator}}</li>
                <li>{{jilu.createTime| dateFormat}}</li>
            </ul>
        </div>
        <el-dialog :visible.sync="shouli" width="700px">
            <div class="shoulidialog">
                <h3 class="typetitle">受理</h3>
                <div class="shoulitips">受理前请先联系用户，确认用户需求</div>
                <div class="mb20"><span class="wqpt">维权平台</span><div class="wqnr"><input type="text" v-model="dataobj.rightProtectPlatform" placeholder="请输入用户投诉的平台" maxlength="20"></div></div>
                <div class="mb20"><span class="wqpt">维权内容</span><div class="wqnr"><textarea v-model="dataobj.rightProtectContent" placeholder="请输入用户所需维权内容" maxlength="200"></textarea><span class="contsize">{{dataobj.rightProtectContent.length}}-200</span></div></div>
                <div class="clearfix"><span class="czbtn" @click="shoulianjian">受理</span><span class="czbtn" @click="shouli=false">取消</span></div>
            </div>

        </el-dialog>
        <el-dialog :visible.sync="chuli" width="700px">
            <div class="shoulidialog">
                <h3 class="typetitle">处理结果</h3>
                <div class="shoulitips">若按案件有转化业务，请选择已转化！</div>
                <div class="mb20">
                    <span class="wqpt">业务转化</span>
                    <div class="wqnr">
                        <el-radio-group v-model="dataobjs.ifTransfer">
                            <el-radio :label="1" :value="1">是</el-radio>
                            <el-radio :label="0" :value="0">否</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div class="mb20"><span class="wqpt">处理结果</span><div class="wqnr"><textarea v-model="dataobjs.processResult" placeholder="请输入案件处理结果" maxlength="200"></textarea></div></div>
                <div class="clearfix"><span class="czbtn" @click="chulianjian">提交结果</span><span class="czbtn" @click="chuli=false">取消</span></div>
            </div>

        </el-dialog>
    </div>
</template>
<script>
import Filters from 'utils/filters/'
const detailUrl = './ipsebe_union/findUserRightProtectDetail/{rightProtectSn}.do'
const slUrl = './ipsebe_union/accept.do'
const tjUrl = './ipsebe_union/submitResult.do'
const shouliobj = {
    rightProtectContent:'',
    rightProtectPlatform:'',
}
const chuliobj = {
    ifTransfer:2,
    processResult:'',
}
export default {
    data(){
        return{
            dataobj: Object.assign({},shouliobj),
            dataobjs: Object.assign({},chuliobj),
            ordersn:'',
            order_detail:{
                userRightProtect:{},
                user:{},
                rightProtectOperateList:[]
            },
            shouli:false,
            chuli:false
        }
    },
    methods:{
        getdetail(){
            this.$http.get(detailUrl.replace('{rightProtectSn}',this.ordersn)).then(res=>{
                this.order_detail =res.data;
            }).catch(err=>{
                var odata = err.response.data;
                if (odata.code == 'U00015') {
                    let furl = window.location.href
                    localStorage.removeItem('userlogininfo')
                    localStorage.setItem('hdUrl',furl)
                    window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
                    return;
                }
                this.$message.error(err.response.data.msg||'未查到数据')
            })
        },
        shoulicase(){
            this.dataobj = Object.assign({},shouliobj)
            this.shouli = true;
        },
        chulicase(){
            this.dataobjs = Object.assign({},chuliobj)
            this.chuli = true;
        },
        shoulianjian(){
            if(!this.dataobj.rightProtectPlatform){
                this.$message.warning('请输入维权平台');
                return
            }
            if(!this.dataobj.rightProtectContent){
                this.$message.warning('请输入维权内容');
                return
            }
            let data = Object.assign({},this.dataobj)
            data.rightProtectSn = this.ordersn;
            this.$http.put(slUrl,data).then(res=>{
                this.$message.success('受理成功')
                this.dataobj = Object.assign({},shouliobj)
                this.shouli = false;
                this.getdetail();
            }).catch(err=>{
                this.$message.error(err.response.data.msg||'受理失败')
            })
        },
        backlist(){
            this.$router.go(-1)
        },
        chulianjian(){
            if(!this.dataobjs.ifTransfer==2){
                this.$message.warning('请选择业务转化结果');
                return
            }
            if(!this.dataobjs.processResult){
                this.$message.warning('请输入案件处理结果');
                return
            }
            let data = Object.assign({},this.dataobjs)
            data.rightProtectSn = this.ordersn;
            this.$http.put(tjUrl,data).then(res=>{
                this.$message.success('提交成功')
                this.dataobjs = Object.assign({},chuliobj)
                this.chuli = false;
                this.getdetail();
            }).catch(err=>{
                this.$message.error(err.response.data.msg||'提交失败')
            })
        }
    },
    mounted(){
        this.ordersn = this.$route.params.id;
        this.getdetail()
    },
    filters: {
        dateFormat: Filters.formatDate.dateFormat,
        wqstateFormat: Filters.wqstateFormat,
        wqtypeFormat: Filters.wqtypeFormat,
        busiChangeFormat:function(ins){
            if(ins=='0'){
                return '未转化'
            }
            if(ins=='1'){
                return '已转化'
            }
        },
        isBindFormat:function(ins){
            if(ins=='0'){
                return '否'
            }
            if(ins=='1'){
                return '是'
            }
        },
        operateTypeFormat(ins){
            if(ins=='0'){
                return '申请'
            }
            if(ins=='1'){
                return '受理'
            }
            if(ins=='2'){
                return '完成'
            }
            if(ins=='3'){
                return '催单'
            }
        }
    },
}
</script>
<style lang="less">
.wqdetailbox{
    color: #333;
    padding: 30px;
    .breadbox{
		font-size: 16px;
		font-weight: 600;
		color: #333;
		>span{
			display: inline-block;
			width: 120px;
			height: 30px;
			font-size: 14px;
			font-weight: normal;
			border-radius: 15px;
			background-color: #379dea;
			margin-left: 20px;
            line-height: 30px;
            color: #fff;
            text-align: center;
            cursor: pointer;
            margin-bottom: 30px;
		}
	}
    ul{
        padding: 10px 20px;
        border: 1px solid #f4f4f4;
        margin-bottom: 20px;
    }
    li{
        line-height: 30px;
        strong{
            color:#999;
        }
    }
    .msgtitle{
        padding-left: 20px;
        font-size: 14px;
        color: #333;
        height: 40px;
        line-height: 40px;
        background-color: #f4f4f4;
        
    }
    .threerows{
        overflow: hidden;
        >li{
            float: left;
            line-height: 30px;
            width: 33%;
        }
    }
    .tabhead{
        
        strong{
            color: #333;
        }
    }
    .fourows{
        overflow: hidden;
        
        margin-bottom: 0;
        >li{
            float: left;
            width: 25%;
            line-height: 30px;
        }
        strong{
            color: #333;
        }
    }
    .notborder{
        border-top: none;
    }
    .chulibtn {
      display: inline-block;
      width: 80px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      color: #fff;
      background: #379dea;
      border-radius: 4px;
      margin-left: 10px;
      cursor: pointer;
  }
  .shoulidialog{
    padding: 0 20px 20px;
    .typetitle{
        font-size: 16px;
        color: #000;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #666;

    }
    .shoulitips{
        margin-bottom: 20px;
        line-height: 20px;
        font-size: 12px;
        color: rgba(209, 209, 29, 0.932);
    }
    .wqpt{
        float: left;
        width: 100px;
        line-height: 30px;
    }
    .wqnr{
        position: relative;
        margin-left: 110px;
        input{
            width: 100%;
            padding-left: 5px;
            border: 1px solid #eee;
            border-radius: 2px;
            height: 30px;
            line-height: 28px;
        }
        textarea{
            resize: none;
            border: 1px solid #eee;
            border-radius: 2px;
            padding: 10px 10px 20px;
            width: 100%;
            height: 110px;
            line-height: 20px;
            font-size: 12px;
            color: #333;
        }
        .contsize{
            position: absolute;
            right:5px ;
            bottom:  0;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #333;
        }
        
    }
  }
  .czbtn{
        float: right;
        width: 100px;
        height: 30px;
        background-color: #379dea;
        color:#fff;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        margin-left: 40px;
        border-radius: 2px;
    }
}
</style>

