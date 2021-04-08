<template>
<div class="casesbox">
  <div class="cases">
    <div class="casescont">
        <h3 class="classiccase">典型案例</h3>
        <ul class="caselist">
            <li v-for="(item,key) in text" :key="key">
                <h3 class="casetitle">{{item.title}}</h3>
                <div class="classicpic">
                    <img :src="item.pic" alt="">
                </div>
                <p v-for="(page,k) in item.articles" :key="k">{{page}}</p>
            </li>
        </ul>
    </div>
  </div>
  <div class="xuanfuboxes">
      <xuanfu></xuanfu>
    </div>
</div>
</template>
<script>
    import xuanfu from 'cps/public/xuanfu.vue'
export default {
    data(){
        return{
            text:[
                {title:'江中制药线上线下“雷霆行动”打假案',pic:require('assets/img/home/case2.png'),articles:[' 2017年4月26日，在联盟协调组织下，江中集团安全管理部、阿里巴巴打假特战队、湖南省公安厅、娄底市公安局等多个单位协同作战。通过大数据分析，准确得出售假犯罪行为的规律，快速完成了案件线索汇总、犯罪地址定位、犯罪证据调取等工作，历时不到一个月，在湖南省娄底市冷水江城区成功捣毁一个制售“江中猴姑”米稀产品的生产窝点，现场收缴了大量假冒伪劣产品及造假原材料，抓获犯罪嫌疑人3名。']},
                {title:'小猪佩奇线上线下协同打击侵权案',pic:require('assets/img/home/case1.png'),articles:['  英国eOne 在中国享有“Peppa Pig（小猪佩奇）”商标专有权和著作权。随着小猪佩奇动画片在中国受欢迎程度的不断提高，其授权的儿童产品也出现了假冒侵权现象。','联盟联合各大电商平台提供涉案数据，进行线上到线下的一系列数据信息对比、调查并进行固证，最终成功于2017年11月9日协同扬州市公安局生态科技新城分局对生产厂家、仓库完成执法打击，当场查获了儿童牙膏10余万支、儿童牙刷20余万支、儿童洗发沐浴露二合一2万余瓶、儿童湿纸巾10余万包、儿童漱口杯8万余只等大量侵权假冒商品，涉案金额高达450余万。']},
                {title:'立体保护新模式成立智能短交通联盟进行专利授权许可',pic:require('assets/img/home/case.png'),articles:['电动平衡车是近年来快速兴起的智能短途交通时尚出行工具，随着市场规模的扩大，假冒伪劣平衡车产品不断涌现。','行业龙头赛格威-纳恩博和杭州骑客共拥有平衡车产品的95%以上的核心专利，但两者专利诉讼纠纷也不断，商务部、海关总署多次调停未果。','联盟组织纳恩博、骑客进行了深度交流，促使双方停止专利战。2018年5月29日京交会上，联盟、赛格威、骑客三方共同发起智能短交通行业知识产权联盟，并构建电动平衡车专利池。','通过社会共治立体打击与专利池授权许可结合的模式，截止18年底短短六个月内，已有 20 余家平衡车企业加入联盟，并帮助权利人与 10余家平衡车厂商签订专利授权许可合同，预计19年专利授权许可费达到千万级。']},
            ]
        }

    },
    components:{
      xuanfu
    }
}
</script>
<style lang="less">
.casesbox{
  font-family:'PingFangSC-Regular','PingFang SC';
  background:linear-gradient(270deg,rgba(5,39,77,1) 0%,rgba(0,23,49,1) 100%);
  .cases{
    padding-bottom: 20px;
    
    .casescont{
      width: 1200px;
      margin: 0 auto;
      padding-top: 40px;
      background: url('~assets/img/home/bg.png') center top no-repeat;
      color:#fff;
      .classiccase{
        height:30px;
        font-size:22px;
        font-family:'PingFangSC-Medium','PingFang SC';
        font-weight:500;
        line-height:30px;
        margin-bottom: 74px;
        text-align: center;
      }
      .caselist{
          width: 1140px;
          height: 596px;
          margin: 0 auto;
          >li{
            float: left;
            width: 330px;
            height: 596px;
            margin-right: 75px;
            padding: 36px 20px;
            background:linear-gradient(180deg,rgba(0,51,95,1) 0%,rgba(3,32,65,1) 100%);
            box-shadow:0px 2px 34px 0px rgba(0,0,0,0.17);
            border-radius:8px;
            &:last-child{
                padding-top: 23px;
                margin-right: 0;
                .casetitle{
                    margin-bottom: 14px;
                }
            }
            .casetitle{
                font-size:17px;
                font-family:'PingFangSC-Medium','PingFang SC';
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:24px;
                text-align: center;
                margin-bottom: 22px;
            }
            .classicpic{
                width: 212px;
                height: 141px;
                margin: 0 auto 30px;
                >img{
                  width: 100%;
                  height: 100%;
                }
            }
            >p{
                font-size:12px;
                font-family:'PingFangSC-Regular','PingFang SC';
                
                color:rgba(255,255,255,1);
                line-height:17px;
                text-indent: 2em;
                padding: 0 8px;
                margin-bottom: 20px;
            }
          }
      }
    }
    
  }
}
</style>
