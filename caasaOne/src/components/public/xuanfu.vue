<template>
    <div>
        <ul class="smallmark">
            <li>
                <img src="~assets/img/home/tel.png" alt="">
                <div class="hovercont dianhua">
                    <p>客服热线：010-84109061</p>
                    <span class="sanjiao"></span>
                </div>
            </li>
            <li>
                <a href="tencent://message/?uin=1040690393&Site=Sambow&Menu=yes"><img src="~assets/img/home/kf.png" alt=""></a>
                <div class="hovercont dianhua">
                    <p>在线客服为您服务</p>
                    <span class="sanjiao"></span>
                </div>
            </li>
            <li >
                <img src="~assets/img/home/ma.png" alt="">
                <div class="hovercont gzhcode">
                    <img src="~assets/img/home/ewm.jpg" alt="">
                    <p>扫一扫，随时随地掌握维权最新进展！</p>
                    <span class="sanjiao"></span>
                </div>
            </li>
            <li @click="showfk">
                <img src="~assets/img/home/yj.png" alt="">
                <div class="hovercont xinxi">
                    <p>提交反馈信息</p>
                    <span class="sanjiao"></span>
                </div>
            </li>
        </ul>
        <!-- <div class="yjfkmask" v-if="isfk">
            <div class="yjfkbox">
                <h3>国际反侵权假冒服务平台反馈</h3>
                <div>
                    <textarea placeholder='请输入您宝贵的意见'></textarea>
                </div>
            </div>
        </div> -->
        <div class="yjfkbox">
            <el-dialog title="国际反侵权假冒服务平台反馈" width="656px" :visible.sync="isfk">
                <div class="yjfkcont">
                    <div class="wtfk">
                        <span class="fktt">反馈类型：</span>
                        <el-radio-group v-model="ptype">
                            <el-radio label="1" value="1">页面问题</el-radio>
                            <el-radio label="2" value="2">服务问题</el-radio>
                        </el-radio-group>
                    </div>
                    <textarea placeholder='请输入您宝贵的意见' v-model="problemContent"></textarea>
                    <div class="fksubmit" @click="tijiao">立即提交</div>
                </div>
            </el-dialog>
        </div>
    </div>

</template>
<script>
const fankui = './ipsebe_union/feedbackProblem.do'
export default {
    data(){
        return{
            isfk:false,
            ptype:'',
            problemContent:''
        }
    },
    methods:{
        showfk(){
            this.ptype = ''
            this.problemContent = ''
            this.isfk  = true;
        },
        close(){
            this.ptype = ''
            this.problemContent = ''
            this.isfk = false
        },
        tijiao(){
            if(!this.ptype){
                this.$message.warning("请选择反馈问题类型");
                return
            }
            if(!this.problemContent){
                this.$message.warning("请输入反馈问题内容");
                return
            }
            let data = {
                type: this.ptype,
                problemContent: this.problemContent
            }
            this.$http.post(fankui,data).then(res=>{
                this.$message.success("反馈成功，感谢您的宝贵意见")
                this.close()
            }).catch(err=>{
                this.$message.error(err.response.data.msg||'未反馈成功')
            })
        }
    }
}
</script>
<style lang="less">
.smallmark{
    >li{
        position: relative;
        width: 28px;
        height: 28px;
        cursor: pointer;
        margin-bottom: 10px;
        >img{
            width: 100%;
            height: 100%;
        }
        &:hover{
            .hovercont{
                display: block;
            }
        }
        .hovercont{
            display: none;
            position: absolute;
            bottom: 0;
            background-color: #306CC3;
            font-size:14px;
            font-family:'PingFangSC-Regular','PingFang SC';
            
            color:#fff;
            .sanjiao{
                position: absolute;
                right: -20px;
                bottom: 10px;
                width: 0;
                height: 0;
                border-width: 8px 10px;
                border-style: dashed dashed dashed solid;
                border-color: transparent transparent transparent #306CC3;
            }
        }
        .dianhua{
            width: 180px;
            padding: 9px 0;
            left: -199px;
            line-height:20px;
            text-align: center;
        }
        .xinxi{
            width: 130px;
            padding: 9px 0;
            left: -152px;
            line-height:20px;
            text-align: center;
        }
        .gzhcode{
            width: 134px;
            padding-top: 16px;
            padding-bottom: 8px;
            
            left: -156px;
            >img{
                display: block;
                width: 102px;
                // height: 102px;
                margin: 0 auto 8px;
            }
            >P{
                line-height:20px;
                text-align: center;
            }
        }
    }

}
.yjfkbox{
   .el-dialog .el-dialog__title{
       display: inline-block;
       width: 100%;
        height:40px;
        font-size:30px;
        font-family:'MicrosoftYaHei';
        color:rgba(0,23,49,1);
        line-height:40px;
       text-align: center;
   }
   .wtfk{
       margin-bottom: 25px;
        height:21px;
        font-size:16px;
        font-family:'MicrosoftYaHei';
        color:rgba(51,51,51,1);
        line-height:21px;
        .fktt{
            margin-right: 38px;
        }
   }
   .yjfkcont{
       padding: 20px 50px;
       textarea{
           resize: none;
           padding: 17px 25px;
           width: 100%;
           height: 144px;
           border: 1px solid #DBDBDB;
            font-size:16px;
            font-family:'MicrosoftYaHei';
            color:#999;
            line-height:21px;
            border-radius: 4px;
            margin-bottom: 48px;
       }
   }
   .fksubmit{
       width:100%;
        height:60px;
        background:rgba(0,23,49,1);
        border-radius:3px;
        font-size:16px;
        font-family:'MicrosoftYaHei';
        color:rgba(255,255,255,1);
        line-height:60px;
        cursor: pointer;
        text-align: center;
   }
}
</style>

