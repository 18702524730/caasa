<template>
  <div>
      <ul class="commonSearch">
            <li>
              <strong>关键字</strong>
              <div class="cont pdr100" >
                  <div class="keybox">
                      <div class="textbox">
                        <input type="text" v-model="keyword">
                      </div>
                      <span class="searchbtn" @click="seachkeyword">搜索</span>
                  </div>
              </div>
            </li>
            <li>
                <strong>技术类型</strong>
                <div class="cont">
                    <span class="commonItem" v-for="(item,key) in typeList" :key="key" :class="{activestyle: nowtype==item.id}" @click="change(item,'type')">{{item.name}}</span>
                </div>
            </li>
            <li>
                <strong>价格区间</strong>
                <div class="cont">
                    <span class="commonItem" v-for="(item,key) in priceList" :key="key" :class="{activestyle: nowprice==item.id}" @click="change(item,'price')">{{item.name}}</span>
                </div>
            </li>
            <li>
                <strong>专利信息</strong>
                <div class="cont">
                    <span class="commonItem" v-for="(item,key) in isPatent" :key="key" :class="{activestyle: nowpatent==item.id}" @click="change(item,'patent')">{{item.name}}</span>
                </div>
            </li>
            <li>
                <strong>转化方式</strong>
                <div class="cont">
                    <span class="commonItem" v-for="(item,key) in transerList" :key="key" :class="{activestyle: nowtranser==item.id}" @click="change(item,'transer')">{{item.name}}</span>
                </div>
            </li>
            <li>
                <strong>排序方式</strong>
                <div class="cont">
                    <span class="commonItem" v-for="(item,key) in sortList" :key="key" :class="{activestyle: nowsort==item.id}" @click="change(item,'sort')">{{item.name}}</span>
                </div>
            </li>
      </ul>
  </div>
</template>

<script>
const initdata = {
    keyword:'',
    type: '',
    price: '',
    patent: '',
    transer: '',
    sort: ''
}
export default {
    data(){
        return {
            nowtype: 0,
            nowprice: 0,
            nowpatent: -1,
            nowtranser: 0,
            nowsort: 0,
            keyword: '',
            typeList:[
                {id:1,name:"采矿业"},
                {id:2,name:"制造业"},
                {id:3,name:"建筑业"},
                {id:4,name:"金融业"},
                {id:5,name:"房地产"},
                {id:6,name:"教育"},
                {id:7,name:"国际组织"},
                {id:8,name:"科学研究和技术服务业"},
                {id:9,name:"卫生和社会工作"},
                {id:10,name:"农、林、牧、渔业"},
                {id:11,name:"批发和零售业"},
                {id:12,name:"租赁和商务服务业"},
                {id:13,name:"文化、体育和娱乐业"},
                {id:14,name:"住宿和餐饮业"},
                {id:15,name:"交通运输、仓储和邮政业"},
                {id:16,name:"水利、环境和公共设施管理业"},
                {id:17,name:"公共管理、社会保障和社会服务"},
                {id:18,name:"信息传输、软件和信息技术服务业"},
                {id:19,name:"居民服务、修理和其他服务业"},
                {id:20,name:"电力、热力、燃气、及水生产和供应业"},
            ],
            priceList:[
                {id:1,name:"小于10万"},
                {id:2,name:"10-20万"},
                {id:3,name:"20-50万"},
                {id:4,name:"50-100万"},
                {id:5,name:"100-500万"},
                {id:6,name:"500-1000万"},
                {id:7,name:"大于1000万"},

            ],
            isPatent:[
                {id:1,name:"专利"},
                {id:0,name:"非专利"},
            ],
            transerList:[
                {id:1,name:"完全转让"},
                {id:2,name:"授权许可"},
                {id:3,name:"技术入股"},
                {id:4,name:"合作生产"},
                {id:5,name:"其他"},
            ],
            sortList:[
                {id:1,name:"价格"},
                {id:2,name:"发布时间"},
            ],
            subdata: Object.assign({},initdata)
        }
    },
    methods:{
        change(it,t){
            this['now'+t] = it.id
            this.subdata[t] = it.id
            this.$emit('querychange',this.subdata)
            // this.$store.dispatch('set_techquery',this.subdata)
            // console.log(this.subdata)
        },
        seachkeyword(){
            this.subdata.keyword = this.keyword
        }
    },
    mounted(){
        // this.$store.dispatch('set_techquery',{})
    }
}
</script>

<style lang='less'>
.commonSearch{
    font-size: 14px;
    >li{
        margin-bottom: 10px;
        >strong{
            float: left;
            width: 100px;
            font-size: 16px;
            font-weight: bold;
        }
        .pdr100{
            padding-right: 100px;
        }
        .cont{
            margin-left: 110px;
            overflow: hidden;
            .textbox{
                float: left;
                width: 100%;
                height: 30px;
                padding: 5px 0;
                border: 1px solid #ccc;
                border-radius: 15px 0 0 15px;
                >input{
                    float: left;
                    height: 18px;
                    line-height: 18px;
                    padding-left: 20px;
                    padding-right: 10px;
                    width: 100%;
                }
            }
            .searchbtn{
                float: left;
                width: 100px;
                height: 30px;
                margin-right: -100px;
                line-height: 30px;
                text-align: center;
                padding-right: 10px;
                border: 1px solid #ccc;
                border-radius: 0 15px 15px 0;
                border-left: none;
                cursor: pointer;
            }
            .commonItem{
                display: inline-block;
                margin-right: 20px;
                cursor: pointer;
            }
            .activestyle{
                color: #379dea;
            }
        }
    }
}
</style>