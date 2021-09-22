<template>
  <div class="caasas">
    <cloudnav @toSearchList="toSearchList" @issearch='issearch'></cloudnav>
    <el-carousel class="banner" height="461px">
      <el-carousel-item v-for="item in searchAdData" :key="item">
        <img :src="item.img" alt="">
        <!-- <div class="banTits">
          <div class="tit1">{{item.sildeName}}</div>
          <div class="tit2">{{item.title}}</div>
        </div> -->
      </el-carousel-item>
    </el-carousel>
    <div v-if="!isSearchList">
      <div class="lbs">
        <div class="lunbo">
          <el-carousel height="200px" direction="vertical" :autoplay="false" @change="lbFn">
            <el-carousel-item v-for="(item,key) in lblist" :key="key">
              <div class="lbImg" @click="toDetail(item.contentId,'首页')">
                <img :src="item.thumb" alt="">
                <div class="lbBgs">
                  <div class="lbTit" :title="item.title">{{item.title}}</div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="lbXws" v-for="(item,num) in lblist" :key="num" v-show="isLBact==num"  @click="toDetail(item.contentId,'首页')">
          <div class="xwTit" :title="item.title">{{item.title | val32}}</div>
          <div class="xwCont">{{item.description}}</div>
        </div>
      </div>
      <div class="dynamic">
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
          <el-tab-pane label="联盟动态">
            <el-carousel indicator-position="outside" :autoplay="true" :arrow="never1">
              <el-carousel-item v-for="(item1,key) in namiclist" :key="key">
                <div class="dts" v-for="(item2,index) in item1" :key="index"  @click="toDetail(item2.contentId,'联盟动态')">
                  <div class="dtImg"><img :src="item2.thumb" alt=""></div>
                  <div class="dtTit">{{item2.title | val29}}</div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>
          <el-tab-pane label="会员动态">
            <el-carousel indicator-position="outside" :autoplay="true" :arrow="never">
              <el-carousel-item v-for="(item1,key) in memberlist" :key="key">
                <div class="dts" v-for="(item2,key) in item1" :key="key"  @click="toDetail(item2.contentId,'会员天地')">
                  <div class="dtImg"><img :src="item2.thumb" alt=""></div>
                  <div class="dtTit">{{item2.title | val29}}</div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="rightsProtection">
        <div class="Rtit">
          <el-divider direction="vertical"></el-divider>
          一键维权快速入口
        </div>
        <div class="Rcont">
          <div class="RClist">
            <div @click="towqFn('检索注册登记')">检索注册登记</div>
            <div @click="towqFn('侵权快速判定报告')">侵权快速判定报告</div>
            <div @click="towqFn('诉讼仲裁')">诉讼仲裁</div>
            <div @click="towqFn('反垄断、反不正当竞争')">反垄断、反不正当竞争</div>
            <div @click="towqFn('商业秘密')">商业秘密</div>
            <div @click="towqFn('品牌溯源保护')">品牌溯源保护</div>
            <div @click="towqFn('质量抽检报告')">质量抽检报告</div>
            <div @click="towqFn('行政查处')">行政查处</div>
            <div @click="towqFn('海外合规咨询')">海外合规咨询</div>
            <div @click="towqFn('监测存证公证')">监测存证公证</div>
            <div @click="towqFn('反侵权假冒（平台）投申诉')">反侵权假冒（平台）投申诉</div>
            <div @click="towqFn('刑事保护')">刑事保护</div>
            <div @click="towqFn('进出口贸易预警保护')">进出口贸易预警保护</div>
            <div @click="towqFn('知识产权质量合规及标准建设')">知识产权质量合规及标准建设</div>
            <div @click="towqFn('展会侵权假冒投申诉')">展会侵权假冒投申诉</div>
            <div @click="towqFn('海关知识产权保护')">海关知识产权保护</div>
            <div @click="towqFn('美国301、337预警及咨询')">美国301、337预警及咨询</div>
            <div @click="towqFn('产品召回解决')">产品召回解决</div>
            <div @click="towqFn('纠纷调解')">纠纷调解</div>
            <div @click="towqFn('产业专项整治')">产业专项整治</div>
            <!-- <div></div> -->
          </div>
          <div class="RCimg">
            <img src="~assets/img/index/men.png" alt="">
            <div class="rightCont">
              <div class="phone">010-84109061</div>
              <div class="telkf">咨询电话</div>
              <div class="ewmimg"><img src="~assets/img/index/ewm2.jpg" alt=""></div>
              <div class="telkf">微信扫一扫 &nbsp; 手机端维权</div>
            </div>
          </div>
        </div>
      </div>
      <div class="zsImg">
        <img src="~assets/img/index/zs1.png" alt="">
        <div class="zsText">
          <div class="zsCn">反侵权假冒联盟</div>
          <div class="zsEn">Anti-Infringement and Anti-Counterfeiting Alliance</div>
        </div>
        
      </div>
      <div class="xwList">
        <div class="xwzxUl">
          <div class="xwzxTit">
            <div><el-divider direction="vertical"></el-divider>新闻政策</div>
            <div><a @click="nextTo('xwzc')">更多>></a></div>
          </div>
          <div class="xwzxCont">
            <ul>
              <li v-for="(item,key) in xwzclist" :key="key" v-show="key<8"  @click="toDetail(item.contentId,'新闻政策')">
                <a><div>{{item.title}}</div><div>{{item.inputdate | dateFormat | splits}}</div></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="xwzxUl">
          <div class="xwzxTit">
            <div><el-divider direction="vertical"></el-divider>国际交流</div>
            <div><a @click="nextTo('gjjl')">更多>></a></div>
          </div>
          <div class="xwzxCont">
            <ul>
              <li v-for="(item,key) in gjjllist" :key="key" v-show="key<8" @click="toDetail(item.contentId,'国际交流')">
                <a><div>{{item.title}}</div><div>{{item.inputdate | dateFormat | splits}}</div></a>
              </li>
            </ul>
          </div>
        </div><div class="xwzxUl">
          <div class="xwzxTit">
            <div><el-divider direction="vertical"></el-divider>会议活动</div>
            <div><a @click="nextTo('hyhd')">更多>></a></div>
          </div>
          <div class="xwzxCont">
            <ul>
              <li v-for="(item,key) in hyhdlist" :key="key" v-show="key<8" @click="toDetail(item.contentId,'会议活动')">
                <a><div>{{item.title}}</div><div>{{item.inputdate | dateFormat | splits}}</div></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="memberClub">
        <div class="memberTit">
          <div><el-divider direction="vertical"></el-divider>会员天地</div>
          <a @click="nextTo('hytd')">更多>></a>
        </div>
        <div class="memberCont">
          <div class="memberbanner">
            <!-- <el-carousel indicator-position="outside" :autoplay="memberautoplay" :arrow="never">
              <el-carousel-item v-for="(item1,key) in Clublist" :key="key">
                <div class="dts" v-for="(item2,index) in item1" :key="index">
                  <div class="dtImg"><img :src="item2.thumb" alt="" @click="tolink(item2.url)"></div>
                </div>
              </el-carousel-item>
            </el-carousel> -->
            <div :style="{width:888*Clublist.length*2+'px'}">
              <div class="uls1" :style="{width:888*Clublist.length+'px'}">
                <div class="pagedt" v-for="(item1,key) in Clublist" :key="key">
                  <div class="dts" v-for="(item2,index) in item1" :key="index">
                    <div class="dtImg"><img :src="item2.thumb" alt="" @click="tolink(item2.url)"></div>
                  </div>
                </div>
              </div>
              <div class="uls2" :style="{width:888*Clublist.length+'px'}">
                <div class="pagedt" v-for="(item1,key) in Clublist" :key="key">
                  <div class="dts" v-for="(item2,index) in item1" :key="index">
                    <div class="dtImg"><img :src="item2.thumb" alt="" @click="tolink(item2.url)"></div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="membermen">
            <div  @click="nextTo('hytd')">
              <img src="~assets/img/index/hy1.png" alt="">
              <span>会员权益</span>
            </div>
            <div @click="nextTo('jrhy')">
              <img src="~assets/img/index/hy2.png" alt="">
              <span>加入会员</span>
            </div>
          </div>
        </div>
      </div>
      <div class="Aboutunion">
        <div class="AboutTit">
          <el-divider direction="vertical"></el-divider>关于联盟-联盟智库
        </div>
        <div class="AboutCont">
          <div @click="toDetail('','联盟智库')">
            <img src="~assets/img/index/about1.png" alt="">
            <span>研究院及专家顾问介绍</span>
          </div>
          <div @click="toDetail('','联盟成果')">
            <img src="~assets/img/index/about2.png" alt="">
            <span>联盟成果发布</span>
          </div>
        </div>
      </div>
      <div class="zixins" v-show="iszx">
        <img src="~assets/img/index/zixun.png" alt="">
        <div class="zxInput">
          <div><el-input v-model="ServiceData.customerName" placeholder="请输入您的姓名"></el-input></div>
          <div><el-input v-model="ServiceData.customerCompany" placeholder="请输入您的企业名称"></el-input></div>
          <div><el-input v-model="ServiceData.customerMobile" maxlength="11" placeholder="请输入您的手机号"></el-input></div>
          <div class="zxbtn" @click="ljzxFn">立即咨询</div>
        </div>
        <!-- <i class="el-icon-close" @click="iszx=false"></i> -->
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
import newsList from './newsList.vue'
import $ from 'jquery'
import myfooter from 'cps/public/footer.vue'
import filters from '../../utils/filters/filters.js'
const cdata = {
  customerFrom:'联盟官网',
  customerName:'',
  customerCompany:'',
  customerMobile:''
}
export default {
  data(){
    return {
      zxname: '',
      zxqiye: '',
      zxphone: '',
      iszx: true,
      dialogVisible: false,
      tabPosition: 'left',
      memberautoplay: true,
      never: 'never',
      never1: 'never',
      isSearchList:false,
      searchCont:'',
      lblist: null,
      namiclist: [],
      xwzclist:null,
      gjjllist:null,
      hytdlist:null,
      Clublist:[],
      hyhdlist: null,
      memberlist: [],
      isLBact: 0,
      pageNumber: 1,
      params:{},
      ServiceData:Object.assign({},cdata),
      searchAdData:'',
    }
  },
  components:{
    myfooter,cloudnav,newsList
  },
  mounted(){
    this.listFn22() //首页推荐轮播
    this.listFn6() //联盟动态
    this.listFn1() //新闻政策
    this.listFn7() //国际交流
    this.listFn32() //LOGO
    this.listFn36() //会议活动
    this.listFn33() //会员动态
    this.searchAdList()   //顶部banner
  },
  methods:{
    lbFn(k){
      this.isLBact = k
    },
    nextTo(type){
      if(type == 'xwzc')  this.$router.push({ path:'/index/newsPolicy'})
      else if(type == 'gjjl') this.$router.push({ path:'/index/internationalExchange'})
      else if(type == 'hyhd') this.$router.push({ path:'/index/allianceNews/allianceNewlist/3'})
      else if(type == 'hytd') this.$router.push({ path:'/index/memberClub'})
      else if(type == 'jrhy') this.$router.push({ path:'/index/memberClub/applyToJoin'})
    },
    toSearchList(val){
      this.isSearchList = val[0];
      this.searchCont = val[1];
    },
		issearch(val){
			this.isSearchList = val
		},
    towqFn(k){
      window.open(CONFIG.submitUrl + '/#/page/homepage/home?active=' + k)
    },
    toDetail(contentId,type){
      if(type == '首页') this.$router.push({ path:`/index/allianceNewDetail/${contentId}/首页`})
      else if(type == '联盟动态') this.$router.push({ path:`/index/allianceNews/allianceNewDetail/${contentId}/0`})
      else if(type == '新闻政策') this.$router.push({ path:`/index/newsPolicy/allianceNewDetail/${contentId}/30`})
      else if(type == '国际交流') this.$router.push({ path:`/index/internationalExchange/allianceNewDetail/${contentId}/10`})
      else if(type == '会议活动') this.$router.push({ path:`/index/allianceNews/allianceNewDetail/${contentId}/3`})
      else if(type == '联盟智库') this.$router.push({ path:'/index/aboutAlliances?islinkNum=4'})
      else if(type == '联盟成果') this.$router.push({ path:'/index/aboutAlliances?islinkNum=5'})
      else if(type == '会员天地') this.$router.push({ path:`/index/memberClub/allianceNewDetail/${contentId}/会员天地`})
		},
    tolink(url){
      if(!url) return
      window.open(url)
    },
    searchAdList(){//顶部banner
      this.showLoaing()
			console.log(new Date().getMonth()+1)
      this.axios.get(CONFIG.indexUrl+'/api/content/searchAdList?sildeName=首页banner')
      .then((res) => {
        this.hideLoading()
				this.searchAdData = res.data.data
        this.searchAdData.forEach(element => {
          element.img = CONFIG.indexUrl + element.img
        });
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
    ljzxFn(){
      this.showLoaing()
      const data = Object.assign({},this.ServiceData)
      console.log(data)
      this.axios.post(CONFIG.submitUrl+'/ipsebe_union/submitCustomerService.do',data)
      .then((res) => {
        this.hideLoading()
        this.dialogVisible = true
				// this.$message({
        //   message: '提交成功',
        //   type: 'success'
        // });
      })
      .catch((err) => {
        this.hideLoading()
				this.$message.error(err&&err.response.data.msg);
        // console.log(err);
      });
    },
    listFn32(){//LOGO
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:32,    //栏目ID
          hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:100   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
        res.data.list.forEach(element => {
          element.thumb = CONFIG.indexUrl + element.thumb
        });
        let arrLength = res.data.list.length; // 数组长度
        let num = 15;  // 每页显示 10 条
        let index = 0;
        for (let i = 0; i < arrLength; i++) {
          if (i % num === 0 && i !== 0) { // 可以被 15 整除
            this.Clublist.push(res.data.list.slice(index, i));
            index = i;
          };
          if ((i + 1) === arrLength) {
            this.Clublist.push(res.data.list.slice(index, (i + 1)));
          }
        };
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
    listFn22(){ //首页推荐轮播
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:22,    //栏目ID
          isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:6   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
        this.lblist = res.data.list
        this.lblist.forEach(element => {
          element.thumb = CONFIG.indexUrl + element.thumb
        });
        this.$nextTick(() => {
          $(".lunbo .el-carousel__indicator").toArray().forEach((element,index) => {
            $(element).html('<img class="lis" src="' + this.lblist[index].thumb + '" alt="">')
          });
        })
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
    listFn33(){//会员动态
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:33,    //栏目ID
          hasChild:1,
          isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:9   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
        res.data.list.forEach(element => {
          element.thumb = CONFIG.indexUrl + element.thumb
        });
        let arrLength = res.data.list.length; // 数组长度
        let num = 3;  // 每页显示 10 条
        let index = 0;
        for (let i = 0; i < arrLength; i++) {
          if (i % num === 0 && i !== 0) { // 可以被 3 整除
            this.memberlist.push(res.data.list.slice(index, i));
            index = i;
          };
          if ((i + 1) === arrLength) {
            this.memberlist.push(res.data.list.slice(index, (i + 1)));
          }
        };
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
    listFn6(){//联盟动态
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:6,    //栏目ID
          hasChild:1,
          isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:0,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:9   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
        res.data.list.forEach(element => {
          element.thumb = CONFIG.indexUrl + element.thumb
        });
        let arrLength = res.data.list.length; // 数组长度
        let num = 3;  // 每页显示 10 条
        let index = 0;
        for (let i = 0; i < arrLength; i++) {
          if (i % num === 0 && i !== 0) { // 可以被 3 整除
            this.namiclist.push(res.data.list.slice(index, i));
            index = i;
          };
          if ((i + 1) === arrLength) {
            this.namiclist.push(res.data.list.slice(index, (i + 1)));
          }
        };
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
    listFn1(){//新闻政策
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:1,    //栏目ID
          hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          // isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:8   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
        this.xwzclist = res.data.list
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
    listFn7(){//国际交流
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:7,    //栏目ID
          hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          // isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:8   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
        this.gjjllist = res.data.list
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
    listFn36(){//会议活动
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/content/list',{
        params: {
          siteId: 1,    //站点，默认都传1
          categoryId:36,    //栏目ID
          hasChild:1,
          // isRecommend:1,    //是否推荐，0：不推荐，1：推荐
          orderBy:2,    //排序，1：新增ID,2:录入时间降序，3：录入时间升序，4：更新时间降序，5：更新时间升序
          // isPic:1,    //是否有封面，0:没有，1：有
          pageNumber:1,   //页码
          pageSize:8   //每页条数
        }
      })
      .then((res) => {
        this.hideLoading()
        this.hyhdlist = res.data.list
      })
      .catch((err) => {
        this.hideLoading()
        console.log(err);
      });
    },
  },
  watch : {
    
  },
  beforeDestroy(){
    
  },
  filters: {
      dateFormat: filters.formatDate.dateFormat,
      splits: function (value) {
        if (!value) return ''
        return value.split(" ")[0]
      },
      val32: function (value) {
        if(value.length>32) return value.substr(0,32)+'...'
        else return value
      },
      val29: function (value) {
        if(value.length>29) return value.substr(0,29)+'...'
        else return value
      },
  },
}
  

</script>
<style lang='less'>
  .caasas{
    .banner{
      position: relative;
      img{display: block;width: 100%;height: 100%;}
      .banTits{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        text-align: center;
        .tit1{
          height: 61px;
          font-size: 45px;
          color: #FFFFFF;
          line-height: 61px;
        }
        .tit2{
          height: 20px;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 20px;
          margin-top: 6px;
        }
      }
    }
    .el-dialog__footer{
			text-align: center;
		}
		.el-button--primary{
			color: #FFF;
			background-color: #1357A4;
			border-color: #1357A4;
			width: 100px;
		}
    .zixins{
      position: relative;
      left: 0;
      bottom: 0;
      z-index: 99;
      >i{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 18px;
        cursor: pointer;
      }
      .zxInput{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -o-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        width: 100%;
        >div{
          margin: 0 11px;
        }
        .el-input__inner{
          height: 42px;
        }
        .zxbtn{
          width: 99px;
          height: 42px;
          background: linear-gradient(225deg, #F58669 0%, #D86B1E 100%);
          border-radius: 4px;
          text-align: center;
          line-height: 42px;
          font-size: 18px;
          color: #fff;
          cursor: pointer;
        }
      }
      img{display: block;width: 100%;}
    }
    .Aboutunion{
      width: 1200px;
      margin: 33px auto 43px;
      .AboutTit{
        font-size: 18px;
        font-family: AlibabaPuHuiTiR;
        color: #FFFFFF;
        line-height: 51px;
        background: #1357A4;
        padding-left: 18px;
      }
      .AboutCont{
        display: flex;
        justify-content: space-between;
        padding: 27px 25px;
        border: 1px solid #E6E6E6;
        >div{
          position: relative;
          cursor: pointer;
          >span{
            position: absolute;
            top: 50%;
            left: 50%;
            font-size: 21px;
            font-family: AlibabaPuHuiTiM;
            color: #FFFFFF;
            transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            -moz-transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            -o-transform: translate(-50%,-50%);
          }
        }
      }
    }
    .memberClub{
      width: 1200px;
      margin: 0 auto;
      .memberTit{
        font-size: 18px;
        font-family: AlibabaPuHuiTiR;
        color: #FFFFFF;
        line-height: 51px;
        background: #1357A4;
        padding: 0 18px;
        display: flex;
        justify-content: space-between;
        a{
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }
      }
      .memberCont{
        display: flex;
        justify-content: space-between;
        padding: 27px 0;
        border: 1px solid #E6E6E6;
        .memberbanner{
          width: 888px;
          overflow: hidden;
          // .el-carousel__container{
          //   height: 180px;
          // }
          // .el-carousel__item{
          //   display: flex;
          //   padding: 0 27px;
          //   flex-flow: wrap;
          // }
          >div{
            display: flex;
          }
          >div:hover .uls1{
            animation-play-state: paused;
          }
          .uls1{
            display: flex;
            height: 209px;
            animation:myfirst 80s linear;
	          -webkit-animation:myfirst 80s linear infinite; /* Safari and Chrome */
          }
          .uls2{
            display: flex;
            height: 209px;
          }
          @keyframes myfirst
          {
              from {margin-left: 0;}
              to {margin-left: -50%;}
          }
          
          @-webkit-keyframes myfirst /* Safari 与 Chrome */
          {
              from {margin-left: 0;}
              to {margin-left: -50%;}
          }
          .pagedt{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
          }
          .dts{
            width: 137px;
            margin-right: 40px;
            img{width: 100%;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);cursor: pointer;}
          }
          .dts:nth-child(5n+5){
            margin-right: 0;
          }
        }
        .membermen{
          width: 303px;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          >div{
            position: relative;
            cursor: pointer;
            >span{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
              -ms-transform: translate(-50%,-50%);
              -moz-transform: translate(-50%,-50%);
              -webkit-transform: translate(-50%,-50%);
              -o-transform: translate(-50%,-50%);
              font-size: 19px;
              font-family: AlibabaPuHuiTiM;
              color: #FFFFFF;
            }
          }
          img{display: block;width: 100%;}
        }
        .el-carousel__indicators{
          >li{
            >button{
              background: #fff;
              width: 14px;
              height: 14px;
              border-radius: 50%;
              border: 1px solid #fff;
              background: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            >button::before{
              content: '';
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #666;
              display: inline-block;
            }
          }
          .is-active{
            background: #fff;
            >button{
              border: 1px solid #1357A4;
            }
            >button::before{
              background: #1357A4;
            }
          }
        }
      }
    }
    .xwList{
      width: 1200px;
      margin: 33px auto;
      display: flex;
      justify-content: space-between;
      >div{
        width: 381px;
        height: 363px;
        border: 1px solid #E6E6E6;
      }
      .xwzxUl{
        .xwzxCont{
          padding: 16px 18px;
          li{margin-top: 17px;}
          li:first-child{margin-top: 0;}
          li>a{
            display: flex;
            justify-content: space-between;
            color: #333333;
            cursor: pointer;
            >div{
              height: 20px;
              font-size: 14px;
              font-family: AlibabaPuHuiTiR;
              line-height: 20px;
            }
            >div:first-child{
              width: 235px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            >div:first-child::before{
              content: '';
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #333;
              margin-right: 6px;
            }
            >div:last-child{
              color: #999999;
            }
          }
          // li:hover{
          //   text-decoration: underline;
          // }
        }
        .xwzxTit{
          display: flex;
          justify-content: space-between;
          padding: 0 18px;
          height: 51px;
          background: #1357A4;
          line-height: 51px;
          font-size: 18px;
          font-family: AlibabaPuHuiTiR;
          color: #FFFFFF;
          >div:last-child{
            font-size: 14px;
            cursor: pointer;
            a{color: #fff;}
          }
        }
      }
    }
    .zsImg{
      position: relative;
      width: 1200px;
      margin: 0 auto;
      img{display: block;}
      .zsText{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        text-align: center;
        font-family: AlibabaPuHuiTiB;
        color: #FFFFFF;
        .zsCn{
          height: 46px;
          font-size: 33px;
          line-height: 46px;
        }
        .zsEn{
          height: 16px;
          font-size: 11px;
          line-height: 16px;
        }
      }
      
    }
    .rightsProtection{
      width: 1200px;
      margin: 0 auto;
      .Rtit{
        font-size: 18px;
        font-family: AlibabaPuHuiTiR;
        color: #FFFFFF;
        line-height: 51px;
        background: #1357A4;
        padding-left: 18px;
      }
      .Rcont{
        display: flex;
        align-items: center;
        height: 425px;
        border: 1px solid #E6E6E6;
        .RCimg{
          width: 300px;
          position: relative;
          img{display: block;}
          .rightCont{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            color: #FFFFFF;
            text-align: center;
            .phone{
              font-size: 34px;
              line-height: 47px;
              margin: 46px auto 7px;
            }
            .telkf{
              font-size: 19px;
              line-height: 26px;
            }
            .ewmimg{
              margin: 0 auto 16px;
              width: 127px;
              img{display: block;margin: 10px auto;width: 100%;}
            }
          }
        }
        .RClist{
          display: flex;
          flex-wrap: wrap;
          padding: 0 28px 28px;
          // justify-content: space-between;
          >div{
            width: 159px;
            height: 52px;
            background: #FFFFFF;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            border-radius: 7px;
            justify-content: center;
            text-align: center;
            color: #333;
            line-height: 22px;
            font-size: 16px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            margin-top: 25px;
            margin-right: 58px;
            border: 1px solid transparent;
            cursor: pointer;
          }
          >div:nth-child(4n+4){
            margin-right: 0;
          }
          // >div:nth-child(1),>div:nth-child(2),>div:nth-child(3),>div:nth-child(4){
          //   margin-right: 0;
          // }
          >div:hover{
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
    .dynamic{
      width: 1200px;
      margin: 77px auto 0;
      height: 400px;
      padding-bottom: 50px;
      .dts{
        width: 323px;
        background: #FFFFFF;
        border: 1px solid #E6E6E6;
        cursor: pointer;
        flex-shrink: 0;
        overflow: hidden;
        margin: 0 8px;
        .dtTit{
          width: 273px;
          height: 50px;
          font-size: 18px;
          font-family: AlibabaPuHuiTiM;
          color: #333333;
          line-height: 25px;
          margin: 28px auto;
          flex-shrink: 0;
        }
        .dtImg{
          width: 323px;
          height: 180px;
          overflow: hidden;
          overflow: hidden;
          img{display: block;width: 100%;height: 100%;transition: .3s;}
        }
      }
      .dts:hover{
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        .dtImg>img{
          transform: scale(1.2);
        }
      }
      .el-carousel__item{
        display: flex;
        // justify-content: space-between;
      }
      .el-carousel__indicators{
        >li{
          >button{
            background: #fff;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 1px solid #fff;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          >button::before{
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #666;
            display: inline-block;
          }
        }
        .is-active{
          background: #fff;
          >button{
            border: 1px solid #1357A4;
          }
          >button::before{
            background: #1357A4;
          }
        }
      }
      .el-carousel__container{
        height: 286px;
      }
      .el-tabs--left{
        height: 400px !important;
      }
      .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        // line-height: 400px;
        // height: 400px;
        margin: 0;
      }
      
      // .el-carousel__item:nth-child(2n) {
      //   background-color: #99a9bf;
      // }
      
      // .el-carousel__item:nth-child(2n+1) {
      //   background-color: #d3dce6;
      // }
      .el-tabs__active-bar{
        background: transparent;
      }
      .el-tabs__nav-wrap::after{
        width: 0;
      }
      .el-tabs__header{
        margin-right: 69px;
      }
      .el-tabs__item{
        border: 0;
        width: 119px;
        height: 47px;
        text-align: center;
        padding: 0;
        font-size: 23px;
        line-height: 47px;
        color: #666666;
      }
      .el-tabs__item.is-active{
        background: #1357A4;
        color: #FFFFFF;
      }
    }
    .lbs{
      width: 1200px;
      margin: 70px auto 0;
      display: flex;
      .el-carousel__item{
        width: 537px;
        margin-right: 13px;
        // cursor: pointer;
      }
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
      .el-carousel--vertical{
        height: 338px;
        .el-carousel__container{
          height: 338px !important;
        }
      }
      .el-carousel__indicators{
        height: 100%;
      }
      .el-carousel__indicator{
        width: 75px;
        // height: 75px;
        border: 1px solid transparent;
        opacity: .7;
        padding: 0;
        margin-top: 10px;
        >img{width: 100%;display: block;}
      }
      .el-carousel__indicator:first-child{
        margin-top: 0;
      }
      .el-carousel__indicator:hover,.is-active{
        // border: 1px solid #1357A4;
        opacity: 1;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
      .lbXws{
        display: flex;
        justify-content: center;
        height: 338px;
        flex-direction: column;
        padding-left: 70px;
        width: 575px;
        cursor: pointer;
        >div{margin: 18px 0;}
        .xwTit{
          height: 84px;
          font-size: 30px;
          color: #333333;
          line-height: 42px;
        }
        .xwCont{
          font-size: 16px;
          color: #666666;
          line-height: 24px;
        }
      }
      .hide{display: none;}
      .lunbo{
        width: 625px;
        cursor: pointer;
        .lbImg{
          position: relative;
          >img{display: block;width: 100%;}
          .lbBgs{
            height: 244px;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(33, 33, 33, 0.82) 100%);
            position: absolute;
            bottom: 0;
            padding: 0 20px;
            width: 100%;
            .lbTit{
              height: 78px;
              font-size: 26px;
              color: #FFFFFF;
              line-height: 39px;
              margin-top: 146px;
            }
          }
          
        }
      }
      .lis{

      }
    }
  }
</style>