<template>
	<div class="organizationStructures">
		<!-- <div class="StructuresTitle">组织结构</div> -->
		<div class="StructuresCont">
			<div class="image">
				<img src="~assets/img/aboutAlliances/jigou.jpg" alt="">
			</div>
			<div class="text">
				<h3>联盟组织机构设置为理事会、监事会、秘书处</h3>
				<div class="cont">
					（一）理事会为联盟的最高决策机构，理事会由理事长单位及理事单位组成，理事长单位由全体理事单位推选产生。理事会任职人员由理事单位派出的现职人员组成，任职人员应为理事单位法人代表或持有法人代表委托授权书的高层领导。理事会设理事长1人，副理事长2人，理事13人。理事会任期为五年。换届时理事是否变更由派出单位决定。
					<br>（二）本团体设监事会，由5人组成，由会员大会选举产生，向会员大会负责。
					<br>（三）秘书处是联盟理事会的常设执行机构。联盟秘书处实行秘书长负责制，设秘书长1名，由联盟理事长提名，经理事会批准后任职。秘书长向理事会负责，秘书处工作人员由秘书长聘任。秘书处工作人员任期为三年。
				</div>
				<h3>理事会</h3>
				<div class="cont">
					（一）理事会职责
					<br>1．选举产生联盟理事长，决定监事长、秘书长的任职和罢免事项。
					<br>（一）执行会员大会的决议；
					<br>（二）选举和罢免理事长、副理事长、秘书长；
					<br>（三）筹备召开会员大会；
					<br>（四）向会员大会报告工作和财务状况；
					<br>（五）决定会员的吸收或除名；
					<br>（六）决定办事机构、分支机构、代表机构、实体机构的设立和办公住所的变更；
					<br>（七）决定副秘书长、各机构主要负责人的聘任；
					<br>（八）领导本团体各机构开展工作；
					<br>（九）制定内部管理制度；
					<br>（十）接受监事会提出的对本团体违纪问题的处理意见，提出解决办法并接受其监督;
					<br>（十一）决定其他重大事项。
					<br>（二）理事会定期或不定期召开会议。理事会于每年3月定期召开，经2/3理事提议可以召开临时会议。会议由理事长主持，须有2/3以上理事或委托人出席方可召开，其决议经到会理事或委托人2/3及以上通过即可生效。但以下事项须经理事会成员一致同意方能生效：
					<br>1．修改联盟章程、有关专利许可的协议及相关约定；
					<br>2．联盟的终止、解散、分立、合并；
					<br>3．其他理事会认为须经理事会成员一致通过的重大事项。
				</div>
				<h3>监事会</h3>
				<div class="cont">
					监事会的职责，包含以下几个方面：
					<br>（一）选举产生监事长；
					<br>（二）出席理事会；
					<br>（三）监督本团体及领导成员依照《社会团体登记管理条例》和有关法律、法规开展活动；
					<br>（四）督促本团体及领导成员依照核定的章程、业务范围及内部管理制度开展活动；
					<br>（五）对本团体成员违反本团体纪律，损害本团体声誉的行为进行监督；
					<br>（六）对本团体的财务状况进行监督；
					<br>（七）对本团体的违法违纪行为提出处理意见，提交理事会并监督其执行。
				</div>
				<h3>秘书处</h3>
				<div class="cont">
					（一）秘书处职责，包含以下几个方面：
					<br>1．联盟章程的解释；
					<br>2．执行理事会决议，负责联盟日常事务；
					<br>3．负责理事会的筹备，向理事会作年度工作总结报告，编制年度工作计划、财务预算和决算方案；
					<br>4．负责受理联盟外单位加入联盟的申请，对其资格进行初步审查；
					<br>5．负责受理联盟项目的立项申请，经形式审查后，提交专家委员会评议、理事会审批；
					<br>6．负责组织向有关部门申报项目；
					<br>7．对项目知识产权归属、成果推广等事项进行登记，对相关事务进行协调和调查等工作；
					<br>8．依据联盟章程和有关规定，负责对加盟单位进行定期考核；
					<br>9．负责联盟对外宣传、各类情报的收集、整理、归档等；收集的情报让联盟成员共享。
					<br>（二）秘书处工作人员的任期为3年，换届应在理事会换届后３个月内完成，可连选连任。秘书处工作人员应保持相对稳定，每届人员更换比例原则上应不超过50%，以保持工作的连续性。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import filters from '../../utils/filters/filters.js'
export default {
	data(){
		return {

		}
	},
	mounted(){

	},
	methods:{
		
	},
	filters: {
		dateFormat: filters.formatDate.dateFormat,
  },
}
</script>

<style lang='less'>
.organizationStructures{
	.StructuresTitle{
		font-size: 28px;
		font-family: AlibabaPuHuiTiM;
		color: #333333;
		line-height: 38px;
		text-align: center;
		position: relative;
		margin: 98px 0 81px;
	}
	.StructuresTitle::before{
		content: 'mechanism';
    position: absolute;
    display: block;
    width: 169px;
    height: 38px;
    font-size: 28px;
    font-family: AlibabaPuHuiTiM;
    color: #1357A4;
    line-height: 38px;
    left: 50%;
    letter-spacing: 1px;
    opacity: .1;
    transform: translateX(-50%);
    top: 6px;
	}
	.StructuresCont{
		// padding-top: 82px;
		margin-bottom: 76px;
		.image{
			width: 1191px;
			margin: 0 auto;
			img{
				width: 100%;
				display: block;
				width: 50%;
				margin: 0 auto;
			}
		}
		.text{
			// margin-top: 37px;
			padding: 37px 22px 28px;
			background: #F9FAFC;
			h3{
				font-size: 20px;
				text-align: center;
			}
			.cont{
				font-size: 16px;
				margin-top: 30px;
				line-height: 27px;
				font-family: AlibabaPuHuiTiM;
				color: #333333;
			}
		}
	}
}
</style>