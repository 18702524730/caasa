<template>
	<div class="applyToJoins">
		<cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
		<div class="banner">
			<img src="~assets/img/memberClub/banner.png" alt="">
			<div class="policyTitle">会员天地</div>
		</div>
		<navClub v-if="!isSearchList"></navClub>
		<div v-if="!isSearchList" class="applyToJoinCont">
			<div class="contView">
				<div class="activityTitle">
					<el-divider direction="vertical"></el-divider>会员企业
				</div>
				<div class="viewwidth">
					<h3>一、入盟要求</h3>
					<div class="text">
						1.已获得国家有关部门或行业要求的相关资质认证、经营许可。
						<br>2.具备良好的商业信誉，近两年经营活动中无重大违法、违规记录和正在处理中的重大法律纠纷。
						<br>3.应拥护联盟章程，认可联盟使命和目标。
						<br>4.有意愿加入联盟，并按时缴纳会费。
						<br>5.支持并参加联盟工作和活动。
					</div>
					<h3>二、入盟流程</h3>
					<div class="text">
						1.提交盖公章的入盟申请表及营业执照复印件至联盟会员部。
						<br>2.联盟内部资质审核。
						<br>3.审批通过后，联盟发送入盟通知，申请单位按照要求缴纳会费。
						<br>4.缴费完成后，联盟将为新会员邮寄北京市财政局监制的统一会费收据及牌匾，并在联盟官网进行公示。
					</div>
					<h3>三、加入联盟</h3>
					<div class="title">快速办理入盟通道</div>
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="企业名称：" prop="companyName">
							<el-input v-model="ruleForm.companyName" placeholder="请输入企业名称"></el-input>
						</el-form-item>
						<el-form-item label="企业联系人：" prop="contactName">
							<el-input v-model="ruleForm.contactName" placeholder="请输入企业联系人"></el-input>
						</el-form-item>
						<el-form-item label="联系人职务：" prop="post">
							<el-input v-model="ruleForm.post" placeholder="请输入联系人职务"></el-input>
						</el-form-item>
						<el-form-item label="联系人手机号：" prop="mobile">
							<el-input v-model="ruleForm.mobile" placeholder="请输入联系人手机号" maxlength="11"></el-input>
						</el-form-item>
						<el-form-item label="加入会员级别：" prop="level">
							<el-radio-group v-model="ruleForm.level">
								<el-radio label="常务副理事长单位（10万/年）"></el-radio>
								<el-radio label="副理事长单位（3万/年）"></el-radio>
								<el-radio label="理事成员单位（1万/年）"></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="获取方式：" prop="obtainType">
							<el-radio-group v-model="ruleForm.obtainType">
								<el-radio label="老会员推荐"></el-radio>
								<el-radio label="联盟官网、公众号"></el-radio>
								<el-radio label="联盟会议活动"></el-radio>
								<el-radio label="其他"></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
							<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
						</el-form-item>
					</el-form>
					<div class="fotishi">我们在收到您的申请后1个工作日内尽快与您取得联系，请您保持手机畅通</div>
					<div class="title">人工咨询通道</div>
					<div class="zxtishi">请拨打会员部电话13381444090，进行电话咨询办理</div>
				</div>
			</div>
			<el-dialog
				title="提示"
				:visible.sync="dialogVisible"
				width="30%">
				<span>您的信息已提交成功，我们会尽快与您取得联系，请您保持手机畅通。</span>
				<span slot="footer" class="dialog-footer">
					<!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
					<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
				</span>
			</el-dialog>
		</div>
		<newsList v-show="isSearchList" :searchCont='searchCont'></newsList>
		<myfooter></myfooter>
	</div>
</template>

<script>
import cloudnav from 'cps/public/cloudnav.vue'
import navClub from './navClub.vue'
import $ from 'jquery'
import myfooter from 'cps/public/footer.vue'
import newsList from './newsList.vue'
import filters from '../../utils/filters/filters.js'
export default {
	data(){
		return {
			isSearchList: false,
			searchCont: '',
			dialogVisible:false,
			ruleForm: {
				companyName: '',
				level: '',
				contactName: '',
				post: '',
				mobile: '',
				obtainType: '',
			},
			rules: {
				companyName: [
					{ required: true, message: '请输入企业名称', trigger: 'blur' },
					// { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				contactName: [
					{ required: true, message: '请输入企业联系人', trigger: 'blur' }
				],
				post: [
					{ required: true, message: '请输入联系人职务', trigger: 'blur' }
				],
				mobile: [
					{ required: true, message: '请输入联系人手机号', trigger: 'blur' },
					{ min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
				],
				level: [
					{ required: true, message: '请选择会员级别', trigger: 'blur' }
				],
				obtainType: [
					{ required: true, message: '请选择获取方式', trigger: 'blur' }
				]
			}
		}
	},
	components:{
		myfooter,cloudnav,newsList,navClub
	},
	mounted(){

	},
	methods:{
		toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
		submitJoinCaasa(){////入会申请
      this.showLoaing()
      this.axios.post(CONFIG.submitUrl+'/ipsebe_union/submitJoinCaasa.do',this.ruleForm)
      .then((res) => {
        this.hideLoading()
				this.dialogVisible = true
      })
      .catch((err) => {
        this.hideLoading()
				this.$message.error(err&&err.response.data.msg);
        // console.log(err);
      });
    },
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				console.log(valid)
				if (valid) {
					this.submitJoinCaasa()
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		// resetForm(formName) {
		// 	this.$refs[formName].resetFields();
		// }
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
  },
}
</script>

<style lang='less'>
.applyToJoins{
	.banner{
		position: relative;
		>img{width: 100%;display: block;}
		.policyTitle{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			font-size: 28px;
			font-family: AlibabaPuHuiTiM;
			color: #FFFFFF;
		}
	}
	.activityTitle{
		height: 51px;
		line-height: 51px;
		font-size: 18px;
		font-family: AlibabaPuHuiTiR;
		color: #FFFFFF;
		background: #1357A4;
		padding-left: 18px;
	}
	.applyToJoinCont{
		width: 1200px;
		margin: 51px auto 176px;
		.el-dialog__footer{
			text-align: center;
		}
		.el-button--primary{
			color: #FFF;
			background-color: #1357A4;
			border-color: #1357A4;
			width: 100px;
		}
		.contView{
			.viewwidth{
				width: 734px;
				margin: 39px auto 0;
				>h3{
					font-size: 18px;
					color: #1357A4;
					line-height: 25px;
					margin-top: 26px;
				}
				.text{
					margin-top: 26px;
					font-size: 16px;
					color: #333;
					line-height: 25px;
				}
				.title{
					font-size: 16px;
					font-family: AlibabaPuHuiTiR;
					color: #FFFFFF;
					line-height: 32px;
					text-align: center;
					background: linear-gradient(225deg, #2B90D1 0%, #1357A4 100%);
					width: 162px;
					height: 32px;
					margin: 29px auto 33px;
				}
				.demo-ruleForm{
					.el-form-item__label{
						width: 100% !important;
						text-align: left;
						color: #1357A4;
						font-size: 14px;
					}
					.el-form-item__content{
						margin-left: 0 !important;
						.el-radio__input.is-checked+.el-radio__label{
							color: #556677;
						}
						.el-radio__input.is-checked .el-radio__inner{
							border-color: #1357A4;
    					background: #1357A4;
						}
						.el-button--primary{
							width: 734px;
							height: 50px;
							background: #1357A4;
							font-size: 16px;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 50px;
							padding: 0;
						}
					}
				}
				.fotishi{
					font-size: 14px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #556677;
					line-height: 20px;
					text-align: center;
					margin: 14px 0 98px;
				}
				.zxtishi{
					font-size: 16px;
					font-family: AlibabaPuHuiTiR;
					color: #556677;
					line-height: 22px;
					text-align: center;
					margin-top: 18px;
				}
			}
		}
	}
}
</style>