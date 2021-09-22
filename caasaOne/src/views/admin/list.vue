<template>
	<div class="commonListAll myServiceOrder">
		<h2 class="breadbox">联盟服务平台 <span :class="{'active':is_act==1}" @click="is_act=1">需求列表</span><span @click="is_act=2" :class="{'active':is_act==2}">入盟申请</span><span @click="is_act=3" :class="{'active':is_act==3}">客服咨询</span></h2>
		<div v-show="is_act==1">
			<div class="condition clearfix">
				<div class="form_control"><el-input v-model="dataObj.rightProtectSn" placeholder="维权编号"></el-input></div>
							<div class="form_control">
					<el-select v-model="dataObj.businessType" clearable placeholder="业务类型">
						<el-option
							v-for="item in wqtypeOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
							<div class="form_control data_picker">
					<el-date-picker
						v-model="finished_time"
						type="daterange"
						align="left"
						range-separator="-"
						start-placeholder="开始日期"
						end-placeholder="结束日期"
						:picker-options="pickerOptions">
					</el-date-picker>
				</div>
							<div class="form_control">
					<el-select v-model="dataObj.state" clearable placeholder="当前状态">
						<el-option
							v-for="item in wqStatusOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="form_control"><el-input v-model="dataObj.name" placeholder="联系人称呼"></el-input></div>
				<div class="form_control"><el-input v-model="dataObj.phone" placeholder="联系手机"></el-input></div>
				
				
				
				
				<div class="form_submit">
					<button class="submit" @click="search(true)">搜索</button>
					<button class="reset" @click="reset()">重置</button>
				</div>
			</div>
			<div class="result">
				<!-- <div class="table_handle">
					<div class="all"><el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleAllCheckChange"></el-checkbox></div><div class="table_handle_btn batch" @click="batch">接单</div>|<div class="table_handle_btn infoSubmit" @click="infoSubmit">办理</div>|<div class="table_handle_btn batchDistribute" @click="getOperators" v-if="distributeIsAllowed">分配</div>
				</div> -->
				<table class="result_type">
					<thead>
						<tr class="thead">
							<th class="alignc" width="100">序号</th>
							<th >维权编号</th>
							<th class="minWidth">业务类型</th>
							<th>申请时间</th>
							<th class="minWidth">联系人称呼</th>
							<th class="minWidth">联系手机</th>
							<th class="minWidth">维权平台</th>
							<th>诉求</th>
							<th class="minWidth">当前状态</th>
							<th width="60" style="padding-right: 17px;text-align: right;">操作</th>
						</tr>
					</thead>
					<tbody class="tr-color">
						<tr :class="{hover:item.checked}" v-for="(item, index) in dataList" v-show="!loading && dataList.length">
							<td class="alignc">{{item.seqNo}}</td>
							<td >{{item.rightProtectSn}}</td>
							<td>{{item.businessType}}</td>
							<td>{{item.createTime|dateFormat}}</td>
							<td>{{item.name}}</td>
							<td>{{item.phone}}</td>
							<td>{{item.rightProtectPlatform}}</td>
							<td>{{item.appealContent}}</td>
													<td>{{item.state|wqstateFormat}}</td>
							<td class="alignc action">
								<a href="#" class="view" @click.prevent="view(item)">查看</a>
							</td>
						</tr>
						<tr class="empty" v-show="!loading && !dataList.length">
							<td colspan="10" class="norecord">
								<div class="empty_ic"><span>暂无信息</span></div>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="my_loading" v-show="loading" v-loading="loading">
				</div>
				<div class="tb_pagination" v-if="!loading && dataList.length">
					<el-pagination
						@current-change="handleCurrentChange"
						:current-page.sync="pgIndex"
						:page-size="pgCount"
						layout="total, prev, pager, next"
						:total="total" class="fr">
					</el-pagination>
				</div>
			</div>
		</div>
		<div v-show="is_act==2">
			<div class="condition clearfix">
				<div class="form_control"><el-input v-model="datarmObj.companyName" placeholder="企业名称"></el-input></div>
							<div class="form_control">
					<el-select v-model="datarmObj.state" clearable placeholder="服务状态">
						<el-option
							v-for="item in ztStatusOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="form_control"><el-input v-model="datarmObj.contactName" placeholder="企业联系人"></el-input></div>
				<div class="form_control"><el-input v-model="datarmObj.mobile" placeholder="联系人手机"></el-input></div>
				<div class="form_submit">
					<button class="submit" @click="search2()">搜索</button>
					<button class="reset" @click="reset2()">重置</button>
				</div>
			</div>
			<div class="result">
				<!-- <div class="table_handle">
					<div class="all"><el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleAllCheckChange"></el-checkbox></div><div class="table_handle_btn batch" @click="batch">接单</div>|<div class="table_handle_btn infoSubmit" @click="infoSubmit">办理</div>|<div class="table_handle_btn batchDistribute" @click="getOperators" v-if="distributeIsAllowed">分配</div>
				</div> -->
				<table class="result_type">
					<thead>
						<tr class="thead">
							<th class="alignc" width="100">序号</th>
							<th  class="minWidth">企业名称</th>
							<th>企业联系人</th>
							<th class="minWidth">申请时间</th>
							<th>联系人手机号</th>
							<th class="minWidth">会员级别</th>
							<th class="minWidth">获取方式</th>
							<th class="minWidth">备注</th>
							<th>当前状态</th>
							<th width="60" style="padding-right: 17px;text-align: right;">操作</th>
						</tr>
					</thead>
					<tbody class="tr-color">
						<tr :class="{hover:item.checked}" v-for="(item, index) in datarmList" v-show="!loading && datarmList.length">
							<td class="alignc">{{item.seqNo}}</td>
							<td >{{item.companyName}}</td>
							<td>{{item.contactName}}</td>
							<td>{{item.createTime|dateFormat}}</td>
							<td>{{item.mobile}}</td>
							<td>{{item.level}}</td>
							<td>{{item.obtainType}}</td>
							<td>{{item.memo}}</td>
							<td>{{item.state|rmstateFormat}}</td>
							<td class="alignc action">
								<a href="#" class="view" @click="shenheFn1(item.id)">服务</a>
							</td>
						</tr>
						<tr class="empty" v-show="!loading && !datarmList.length">
							<td colspan="10" class="norecord">
								<div class="empty_ic"><span>暂无信息</span></div>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="my_loading" v-show="loading" v-loading="loading">
				</div>
				<div class="tb_pagination" v-if="!loading && dataList.length">
					<el-pagination
						@current-change="handleCurrentChangerm"
						:current-page.sync="pgrmIndex"
						:page-size="pgCount"
						layout="total, prev, pager, next"
						:total="totalrm" class="fr">
					</el-pagination>
				</div>
			</div>
			<el-dialog
				title="提示"
				:visible.sync="dialogVisible1"
				width="40%">
				<el-input
					type="textarea"
					:rows="2"
					placeholder="请输入服务备注"
					maxlength="150"
  				show-word-limit
					v-model="textarea1">
				</el-input>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible1 = false">取 消</el-button>
					<el-button type="primary" @click="editJoinCaasa()">确 定</el-button>
				</span>
			</el-dialog>
		</div>
		<div v-show="is_act==3">
			<div class="condition clearfix">
				<div class="form_control"><el-input v-model="datazxObj.customerCompany" placeholder="企业名称"></el-input></div>
							<div class="form_control">
					<el-select v-model="datazxObj.state" clearable placeholder="服务状态">
						<el-option
							v-for="item in ztStatusOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="form_control"><el-input v-model="datazxObj.customerName" placeholder="客户姓名"></el-input></div>
				<div class="form_control"><el-input v-model="datazxObj.customerMobile" placeholder="联系人手机"></el-input></div>
				<div class="form_submit">
					<button class="submit" @click="search3()">搜索</button>
					<button class="reset" @click="reset3()">重置</button>
				</div>
			</div>
			<div class="result">
				<!-- <div class="table_handle">
					<div class="all"><el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleAllCheckChange"></el-checkbox></div><div class="table_handle_btn batch" @click="batch">接单</div>|<div class="table_handle_btn infoSubmit" @click="infoSubmit">办理</div>|<div class="table_handle_btn batchDistribute" @click="getOperators" v-if="distributeIsAllowed">分配</div>
				</div> -->
				<table class="result_type">
					<thead>
						<tr class="thead">
							<th class="alignc" width="100">序号</th>
							<th  class="minWidth">企业名称</th>
							<th>企业联系人</th>
							<th class="minWidth">申请时间</th>
							<th>联系人手机号</th>
							<!-- <th class="minWidth">会员级别</th>
							<th class="minWidth">获取方式</th> -->
							<th class="minWidth">备注</th>
							<th>当前状态</th>
							<th width="60" style="padding-right: 17px;text-align: right;">操作</th>
						</tr>
					</thead>
					<tbody class="tr-color">
						<tr :class="{hover:item.checked}" v-for="(item, index) in datazxList" v-show="!loading && datazxList.length">
							<td class="alignc">{{item.seqNo}}</td>
							<td >{{item.customerCompany}}</td>
							<td>{{item.customerName}}</td>
							<td>{{item.createTime|dateFormat}}</td>
							<td>{{item.customerMobile}}</td>
							<!-- <td>{{item.level}}</td>
							<td>{{item.obtainType}}</td> -->
							<td>{{item.memo}}</td>
							<td>{{item.state|rmstateFormat}}</td>
							<td class="alignc action">
								<a href="#" class="view" @click="shenheFn2(item.id)">服务</a>
							</td>
						</tr>
						<tr class="empty" v-show="!loading && !datazxList.length">
							<td colspan="10" class="norecord">
								<div class="empty_ic"><span>暂无信息</span></div>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="my_loading" v-show="loading" v-loading="loading">
				</div>
				<div class="tb_pagination" v-if="!loading && dataList.length">
					<el-pagination
						@current-change="handleCurrentChangezx"
						:current-page.sync="pgzxIndex"
						:page-size="pgCount"
						layout="total, prev, pager, next"
						:total="totalzx" class="fr">
					</el-pagination>
				</div>
			</div>
			<el-dialog
				title="提示"
				:visible.sync="dialogVisible2"
				width="40%">
				<el-input
					type="textarea"
					:rows="2"
					placeholder="请输入服务备注"
					maxlength="150"
  				show-word-limit
					v-model="textarea2">
				</el-input>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible2 = false">取 消</el-button>
					<el-button type="primary" @click="editCustomerService()">确 定</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import qs from 'qs'
	import Filters from 'utils/filters/'
	import {store} from 'utils/';
	const bsOrderListUrl = './ipsebe_union/findUserRightProtectList.do';
    const dataObj= {
        rightProtectSn:null,
        businessType:null,
        state:null,
        name:null,
        phone:null,
    }
		const datarmObj = {
			companyName:'',
			state:'',
			contactName:'',
			mobile:'',
		}
		const datazxObj = {
			customerName:'',
			customerCompany:'',
			customerMobile:'',
			state:''
		}
	const wqStatusOptions = [
		{
			value: 0,
			label: '待受理'
		}, {
			value: 1,
			label: '维权中'
		}, {
			value: 2,
			label: '已完成'
		}
    ];
	const ztStatusOptions = [
		{
			value: 0,
			label: '待服务'
		}, {
			value: 1,
			label: '已服务'
		}
	];
	const wqtypeOptions = [
		{label:'检索注册登记',value:'检索注册登记'},
		{label:'侵权快速判定报告',value:'侵权快速判定报告'},
		{label:'诉讼仲裁',value:'诉讼仲裁'},
		{label:'商业秘密',value:'商业秘密'},
		{label:'反垄断、反不正当竞争',value:'反垄断、反不正当竞争'},
		{label:'品牌溯源保护',value:'品牌溯源保护'},
		{label:'质量抽检报告',value:'质量抽检报告'},
		{label:'行政查处',value:'行政查处'},
		{label:'海外合规咨询',value:'海外合规咨询'},
		{label:'监测存证公证',value:'监测存证公证'},
		{label:'反侵权假冒（平台）投申诉',value:'反侵权假冒（平台）投申诉'},
		{label:'刑事保护',value:'刑事保护'},
		{label:'进出口贸易预警保护',value:'进出口贸易预警保护'},
		{label:'知识产权质量合规及标准建设',value:'知识产权质量合规及标准建设'},
		{label:'展会侵权假冒投申诉',value:'展会侵权假冒投申诉'},
		{label:'海关知识产权保护',value:'海关知识产权保护'},
		{label:'美国301、337预警及咨询',value:'美国301、337预警及咨询'},
		{label:'产品召回解决',value:'产品召回解决'},
		{label:'纠纷调解',value:'纠纷调解'},
		{label:'产业专项整治',value:'产业专项整治'},
	];
	export default {
		name: 'order-list',
		data() {
			return {
				notFirst: false,//用于判定是否第一次用于记忆query参数
				dataObj: Object.assign({}, dataObj), //除时间和商品分类外的筛选条件
				datarmObj: Object.assign({},datarmObj),
				datazxObj: Object.assign({},datazxObj),
				order_state:'',
				order_tasking_state:'',
				order_service_state:'',
				payment_time: '',
				finished_time:'',
				is_act: 1,
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				wqStatusOptions: wqStatusOptions,
				wqtypeOptions: wqtypeOptions,
				ztStatusOptions:ztStatusOptions,
				dataList:[],
				//currentPage: 1,
				pgIndex: 1,
				pgCount: 10,
				total:0,
				loading: false,
				pgrmIndex: 1,
				totalrm: 0,
				datarmList:'',
				dialogVisible1: false,
				textarea1: '',
				act_id1: '',
				act_id2: '',
				datazxList:'',
				pgzxIndex:1,
				totalzx:0,
				dialogVisible2: false,
				textarea2: '',
			}
		},
		mounted() {
			this.recoverQueryData()
			this.search();
			this.search2();
			this.search3()
		},
		methods: {
			search2(){
				this.loading = true;
				this.datarmObj.pgCount = this.pgCount
				this.$http.get('./ipsebe_union/findJoinCaasaList.do', {params: this.datarmObj})
				.then((resp) => {
					this.loading = false;
					this.datarmList = resp.data.elements;
					console.log(this.dataList)
					this.pgrmIndex = resp.data.pageNo || 1;
					this.totalrm = resp.data.totalElements;
					
					this.notFirst = true;
				})
				.catch((err) => {
					this.loading = false;
					var odata = err.response.data;
					if (odata.code == 'U00015') {
						let furl = window.location.href
						localStorage.removeItem('userlogininfo')
        		localStorage.setItem('hdUrl',furl)
						window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
						return;
					}
					console.log(err);
				});
			},
			reset2(){
				this.datarmObj = Object.assign({}, datarmObj);
			},
			reset3(){
				this.datazxObj = Object.assign({}, datazxObj);
			},
			search3(){
				this.loading = true;
				this.datazxObj.pgCount = this.pgCount
				this.$http.get('./ipsebe_union/findCustomerServiceList.do', {params: this.datazxObj})
				.then((resp) => {
					this.loading = false;
					this.datazxList = resp.data.elements;
					console.log(this.dataList)
					this.pgzxIndex = resp.data.pageNo || 1;
					this.totalzx = resp.data.totalElements;
					
					this.notFirst = true;
				})
				.catch((err) => {
					this.loading = false;
					var odata = err.response.data;
					if (odata.code == 'U00015') {
						let furl = window.location.href
						localStorage.removeItem('userlogininfo')
        		localStorage.setItem('hdUrl',furl)
						window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
						return;
					}
					console.log(err);
				});
			},
			shenheFn1(id){
				this.act_id1 = id;
				this.dialogVisible1 = true;
			},
			shenheFn2(id){
				this.act_id2 = id;
				this.dialogVisible2 = true;
			},
			editJoinCaasa(){
				this.dialogVisible1 = false;
				this.loading = true;
				this.$http.put('./ipsebe_union/editJoinCaasa.do', 
					{
						id: this.act_id1,
						memo:this.textarea1
					}
				)
				.then((resp) => {
					this.loading = false;
					this.textarea1 = ''
					this.search2()
					this.$message({
						message: '服务成功！',
						type: 'success'
					});
				})
				.catch((err) => {
					this.loading = false;
					var odata = err.response.data;
					if (odata.code == 'U00015') {
						let furl = window.location.href
						localStorage.removeItem('userlogininfo')
        		localStorage.setItem('hdUrl',furl)
						window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
						return;
					}
					this.$message.error(err.response.data.msg);
					console.log(err);
				});
			},
			editCustomerService(){
				this.dialogVisible2 = false;
				this.loading = true;
				this.$http.put('./ipsebe_union/editCustomerService.do', 
					{
						id: this.act_id2,
						memo:this.textarea2
					}
				)
				.then((resp) => {
					this.loading = false;
					this.textarea2 = ''
					this.search3()
					this.$message({
						message: '服务成功！',
						type: 'success'
					});
				})
				.catch((err) => {
					this.loading = false;
					var odata = err.response.data;
					if (odata.code == 'U00015') {
						let furl = window.location.href
						localStorage.removeItem('userlogininfo')
        		localStorage.setItem('hdUrl',furl)
						window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
						return;
					}
					this.$message.error(err.response.data.msg);
					console.log(err);
				});
			},
			//恢复路由上的查询参数
			recoverQueryData(){
				var queryObj = this.queryObj = this.$route.query;
				var dataObj = this.dataObj;
				for (var n in dataObj){
					if (dataObj.hasOwnProperty(n)) {
						dataObj[n] = queryObj[n];
					}
				}
				this.finished_time = queryObj.createTimeStart && [new Date(queryObj.createTimeStart-0), new Date(queryObj.createTimeEnd-86390000)];

				this.pgIndex = queryObj.pgIndex;
				
			},
			//查询条件整合
			search(extra){
				var ret = {}
				if (this.finished_time) {
					ret.createTimeStart = this.finished_time[0] ? new Date(this.finished_time[0]).getTime() : null;
					ret.createTimeEnd = this.finished_time[1] ? new Date(this.finished_time[1]).getTime() + 86390000 : null;
				}
				ret.pgIndex = extra ? 1 : this.pgIndex;
				ret.pgCount = this.pgCount;
				var data = Object.assign({}, this.dataObj, ret);
				this.$router.replace({query: Object.assign({}, data)});
				this.getOrderList(data);
			},
			reset(){
				this.dataObj = Object.assign({}, dataObj);
				this.finished_time = '';
			},
			handleCurrentChange(val) {
				this.pgIndex = val;
				this.search();
			},
			handleCurrentChangerm(val){
				this.pgrmIndex = val;
				this.datarmObj.pgIndex = this.pgrmIndex
				this.search2();
			},
			handleCurrentChangezx(val){
				this.pgzxIndex = val;
				this.datazxObj.pgIndex = this.pgzxIndex
				this.search3();
			},
			//查询数据
			getOrderList(paramsData){
				paramsData = paramsData || {};
				this.loading = true;
				this.$http.get(bsOrderListUrl, {params: paramsData})
				.then((resp) => {
					this.loading = false;
					var data = resp.data;
					var dataList = data.elements;
					this.dataList = dataList;
					this.pgIndex = data.pageNo || 1;
					this.total = data.totalElements;
					
					this.notFirst = true;
				})
				.catch((err) => {
					this.loading = false;
					var odata = err.response.data;
					if (odata.code == 'U00015') {
						let furl = window.location.href
						localStorage.removeItem('userlogininfo')
        		localStorage.setItem('hdUrl',furl)
						window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin'
						return;
					}
					console.log(err);
				});
			},
			view(item){
				//work_order_type: 0 默认; 1 创新保; 2 国内商标自助注册
				this.$router.push({name: 'myipdetail', params: {id: item.rightProtectSn}})
			},
		},
		filters: {
			dateFormat: Filters.formatDate.dateFormat,
			wqstateFormat: Filters.wqstateFormat,
			wqtypeFormat: Filters.wqtypeFormat,
			rmstateFormat: Filters.rmstateFormat,
		},
		watch:{
			/*$route(to, from) {
				console.log(3)
				if (to.query.selfChange) {
					return;
				}
				this.formatTabName();
				this.recoverQueryData()
				this.search();
			}*/
		}
	}
</script>
<style lang='less'>
.commonListAll{
    /* border: 1px solid #DFE2E5; */width: 100%;overflow: hidden;padding:20px 20px;
    .el-input__icon{line-height: 30px;}
    .el-range-editor.el-input__inner {width: 100%;}
    .el-date-editor .el-range__icon{margin-bottom: 7px;}
    .el-date-editor .el-range__close-icon{margin-bottom: 7px;}
	.el-date-editor .el-range-separator{line-height: 24px}
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
			background-color: #F5F5F5;
			margin-left: 20px;
			line-height: 30px;
			text-align: center;
			cursor: pointer;
		}
		.active{
			border: 1px solid #479CFF;
    	background: #479CFF;
			color: #fff;
		}
	}
	.commonListHead{
		position: relative;
		height: 50px;
		//.el-tabs{position: absolute;bottom:0;width: 100%;}
		.el-tabs__header{margin-bottom: 0;padding-left: 0;}
		.el-tabs__item{padding: 0 20px;height: 50px;line-height: 50px;}
	}
	.condition{
		padding-left: 0;padding-top: 15px;
		.form_control{
			float: left;width: 150px;display: inline-block;margin-right: 10px;margin-bottom: 10px;
			.el-input__inner{height: 30px!important;border-radius:2px;font-size:13px;}
		}
		.data_picker{
			width: 250px;
			// .el-date-editor--daterange.el-input{
			// 	width: 220px;
			// }
		}
		.form_submit{
			float: left;
			button{float: left;width: 88px;height: 30px;line-height: 30px;text-align:center;color:#fff;font-size:14px;border:1px solid #479CFF;background: #479CFF;border-radius: 2px;margin-right: 10px;}
			.submit{}
			.reset{background-color: #fff;color:#479CFF;}
			.submit:hover{border-color: #408CE6;background-color: #408CE6;}
			.reset:hover{border-color: #408CE6;color: #408CE6;}
		}
	}
	.el-textarea__inner{
		height: 120px;
	}
	.result{
		padding: 10px 0 0 0;
		.table_handle{
			height: 50px;background: #F9F9F9;border: 1px solid #DFE2E5;border-bottom:0;padding:14px 0 0;font-size: 16px;color:#DFE2E5;line-height: 20px;vertical-align: top;
			.all{
				margin-left: 20px;height: 20px;display: inline-block;
				.el-checkbox{height: 20px;vertical-align: top;}
			}
			.table_handle_btn{margin-left: 20px;margin-right: 20px;font-size: 14px;color:#479CFF;display: inline-block;display: inline-block;cursor: pointer;}
			.batch{}
		}
		.result_type{
			width:100%;background-color: #F5F5F5;border: 1px solid #DFE2E5;
			thead{
				height: 50px;overflow:hidden;border: 1px solid #DFE2E5;
				tr{
					height: 50px;overflow:hidden;
					th{text-align: left;font-size: 13px;color: #223344;font-weight: normal;padding:5px 3px;}
					th.minWidth{min-width: 100px;}
					th.alignc{text-align: center;}
					th.alignr{text-align: right;}
					th.paddingR{padding-right: 10px;}
					th.paddingL{padding-left: 10px;}
					th.minWidth.paddingR{min-width: 70px;}
					th.minWidth.paddingL{min-width: 70px;}
				}
			}
			tbody{
				tr{
					height: 50px;border: 1px solid #DFE2E5;background-color: #fff;
					td{
						min-height: 50px;font-size: 13px;color: #556677;padding:5px 3px;
						.el-checkbox{position: relative;top: -1px;}
					}
					td.check_wrap{padding-left: 20px;padding-right: 20px;width: 16px;}
					td.minWidth{min-width: 60px;}
					td.alignc{text-align: center;}
					td.alignr{text-align: right;}
					td.paddingR{padding-right: 10px;}
					td.paddingL{padding-left: 10px;}
					td.action{
						a{color: #479CFF;}
						a:hover{text-decoration: none;color: #408CE6;}
					}
					td.pay{color: #36AF47;}
					td.nopay{color: #F64744;}
				}
				tr:hover,tr.hover{
					background-color: #F9F9F9;
				}
				tr.empty{
					.empty_ic{
						height: 200px;text-align: center;padding-top:83px;
						span{display: inline-block;height: 34px;line-height: 34px;padding-left: 40px; color: #A8AFB5}
					}
					&:hover{background-color: #fff;}
				}
			}
			tfoot{

			}
		}
		.my_loading{border: 1px solid #DFE2E5;height: 400px;margin-top: -1px;margin-bottom: 75px;}
		.tb_pagination{
			padding-top: 20px;
			.el-pagination{padding:0;}
		}
	}

	.distributeDialog{
		// 弹框公用样式继承自common.css
		.el-dialog{
			width: 330px;transform:translate(-50%,-50%);
			.distribute_in{
				h5{font-size: 14px;color: #556677;font-weight: normal;}
				.dialog_con_box{
					padding-top: 10px;
					.el-radio-group{line-height: 18px;}
					.el-radio{width: 96px;overflow: hidden;margin-bottom: 8px;}
					.el-radio+.el-radio{margin-left: 0; }
					.el-radio__inner{width: 16px;height: 16px;}
				}
				.el-textarea{margin-top: 10px;}
				>p{text-align: right;padding-top: 12px;}
			}
		}
	}

	.memoDialog{
		.el-dialog{
			width: 500px;height: 256px;
			.el-dialog__title{font-size: 14px;font-weight: normal;color: #223344;}
			.el-dialog__headerbtn{font-size: 14px;}
			.el-dialog__body{
				padding:10px 20px;
				h5{font-size: 14px;color: #556677;font-weight: normal;}
				.el-textarea{margin-top: 10px;}
			}
		}
	}

}
.dialog_con_box .circular{width: 30px;height: 30px;}
</style>
