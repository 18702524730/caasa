<template>
	<div class="commonListAll myServiceOrder">
		<h2 class="breadbox">联盟服务平台 <span>需求列表</span></h2>
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
						<td>{{item.businessType|wqtypeFormat}}</td>
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
    const wqtypeOptions = [
		{
			value: 1,
			label: '商标'
		}, {
			value: 2,
			label: '专利'
		}, {
			value: 3,
			label: '版权'
        },
        {
			value: 4,
			label: '质量抽检'
		}, {
			value: 5,
			label: '海关'
		}, {
			value: 6,
			label: '线下'
        },
        {
			value: 7,
			label: '电商'
		}, {
			value: 8,
			label: '外贸'
		}, {
			value: 9,
			label: '其他'
		}
	];
	export default {
		name: 'order-list',
		data() {
			return {
				notFirst: false,//用于判定是否第一次用于记忆query参数
				dataObj: Object.assign({}, dataObj), //除时间和商品分类外的筛选条件
				order_state:'',
				order_tasking_state:'',
				order_service_state:'',
				payment_time: '',
				finished_time:'',
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
				dataList:[],
				//currentPage: 1,
				pgIndex: 1,
				pgCount: 10,
				total:0,
				loading: false,
			}
		},
		mounted() {
			this.recoverQueryData()
			this.search();
		},
		methods: {
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
				//console.log(data)
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
						window.location.href = CONFIG.indexUrl+'/#/page/login/homelogin?url='+ furl
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
