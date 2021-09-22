<template>
	<div class="testCont">
		<div class="tiaojian">
			<div>
				<span>区域：</span>
				<el-select v-model="value" placeholder="请选择">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</div>
			<div>
				<span>时间范围：</span>
				<el-date-picker
					v-model="value1"
					type="daterange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期">
				</el-date-picker>
			</div>
			<div>
				<span>专利类型：</span>
				<el-radio v-model="radio" label="1">申请量</el-radio>
  			<el-radio v-model="radio" label="2">授权量</el-radio>
			</div>
		</div>
		<div id="main"></div>
	</div>
</template>
<script>
import echarts from 'echarts';
export default {
	data(){
		return {
			radio: '',
			value1: '',
			options: [{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
		}
	},
	mounted(){
		var chartDom = document.getElementById('main');
		var myChart = echarts.init(chartDom, 'dark');
		var option;

		option = {
				// backgroundColor: '#100C2A',
				title: {
						text: ''
				},
				tooltip: {
						trigger: 'axis'
				},
				legend: {
						data: ['嘉兴市','秀洲区', '南湖区', '平湖市', '桐乡市', '海宁市', '嘉善县', '海盐县'],
						textStyle:{//图例文字的样式
								color:'#ffffff',
								fontSize:16
						}
				},
				grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
				},
				toolbox: {
						feature: {
								saveAsImage: {}
						}
				},
				xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
						axisLine:{
								lineStyle:{
										color:'#fff'
								}
						} 
				},
				yAxis: {
						type: 'value',
						axisLine:{
								lineStyle:{
										color:'#fff'
								}
						} 
				},
				series: [
						{
								name: '嘉兴市',
								type: 'line',
								data: [9, 11, 16, 18, 20, 26, 37, 46, 58,69]
						},
						{
								name: '秀洲区',
								type: 'line',
								data: [2, 4, 6, 3, 9, 10, 13, 15, 19,23]
						},
						{
								name: '南湖区',
								type: 'line',
								data: [5, 7, 3, 8, 12, 15, 17, 21, 26,33]
						},
						{
								name: '平湖市',
								type: 'line',
								data: [1, 2, 5, 7, 12, 11, 19, 21, 28,26]
						},
						{
								name: '桐乡市',
								type: 'line',
								data: [1, 2, 3, 5, 8, 15, 17, 22, 21,25]
						},
						{
								name: '海宁市',
								type: 'line',
								data: [3, 4, 5, 7, 16, 19, 23, 33, 36,43]
						},
						{
								name: '嘉善县',
								type: 'line',
								data: [1, 3, 4, 8, 11, 15, 19, 19, 22,16]
						},
						{
								name: '海盐县',
								type: 'line',
								data: [5, 1, 3, 6, 9, 15, 16, 21, 11,10]
						}
				]
		};

		option && myChart.setOption(option);
	},
	methods:{
		
	},
}
</script>

<style lang='less'>
	.testCont{
		padding-top: 60px;
		.tiaojian{
			display: flex;
			align-items: center;
			>div{
				margin-right: 30px;
				line-height: 30px;
				>span{
					line-height: 30px;
					display: inline-block;
				}
			}
		}
		.el-range-editor.el-input__inner{
			height: 30px;
			line-height: 30px;
			padding: 0 10px;
		}
		.el-date-editor .el-range-separator{
			// line-height: 24px;
		}
		#main{
			width: 800px;
			height: 400px;
			margin-top: 30px;
		}
		.el-select{
			width: 100px;
		}
		.el-input--suffix .el-input__inner{
			border-radius: 2px;
		}
		.el-input__icon{
			line-height: 30px;
		}
	}
</style>