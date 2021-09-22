<template>
    <div class="newsLists">
      <div class="newsNumber" v-show="newslistdata&&newslistdata.length>0">找到相关新闻 {{newslistdata?newslistdata.length:''}} 篇</div>
      <div :class="!newslistdata?'marginTop':newslistdata.length==0?'marginTop':''">
        <div class="newsListLeft">
          <div class="newss" v-show="newslistdata&&newslistdata.length>0">
            <div v-for="(item,key) in newslistdata" :key="key" class="newUl" @click="toDetail(item.id)">
              <a class="newTitle" v-html="item.title"></a>
              <div class="newstime">{{item.postDate}}</div>
            </div>
            <div class="paginations">
              <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :page-size="pageSize"
                :total="total">
              </el-pagination>
            </div>
          </div>
          <div class="nonews" v-show="!newslistdata || newslistdata.length==0">
            <img src="~assets/img/index/nonews.png" alt="">
            <div>暂无搜索内容，请联系工作人员</div>
          </div>
        </div>
        <div class="newsListRight">
          <img src="~assets/img/index/men.png" alt="">
          <div class="rightCont">
            <div class="phone">010-84109061</div>
            <div class="telkf">客服电话</div>
            <div class="ewmimg"><img src="~assets/img/index/ewm.jpg" alt=""></div>
            <div class="telkf">微信扫一扫 &nbsp; 手机端维权</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	data(){
		return {
      newslistdata: '',
      total: 1,
			pageSize: 10,
			pageNumber: 1,
		}
	},
	props: ['searchCont'],
	mounted(){
		
	},
	methods:{
		handleCurrentChange(val){
      this.pageNumber = `${val}`
      this.newsListFn()
    },
		toDetail(contentId){
			this.$router.replace({ path:`/index/allianceNewDetail/${contentId}/首页`})
		},
    newsListFn(){
      this.showLoaing()
      this.axios.get(CONFIG.indexUrl+'/api/fullSearch',{
        params: {
          keyword: this.searchCont,
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
        }
      })
      .then((res) => {
        this.hideLoading()
        console.log(res)
        this.newslistdata = res.data.list
        this.total = res.data.total
      })
      .catch((err) => {
        this.hideLoading()
        // console.log(err.message);
        // this.$message.error(err.message);
      });
    },
	},
	watch:{
		searchCont(val, oldVal){//普通的watch监听
			this.newsListFn()
		},
	},
}
</script>

<style lang='less'>
.newsLists{
	background: #fff;
	.newsNumber{
		width: 1200px;
		margin: 28px auto;
		height: 20px;
		font-size: 14px;
		color: #666666;
		line-height: 20px;
	}
	>div{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	.marginTop{
		margin-top: 75px;
	}
	.newsListLeft{
		width: 770px;
		.newss{
			width: 100%;
			.paginations{
				margin-top: 30px;
				>div{
					display: flex;
					justify-content: center;
				}
				.el-pagination.is-background .el-pager li,.el-pagination.is-background .btn-prev,.el-pagination.is-background .btn-next{
					width: 40px;
					height: 40px;
					line-height: 40px;
					font-size: 14px;
					color: #333;
				}
				.el-pagination.is-background .el-pager li:not(.disabled).active{
					background: #1357A4;
					color: #fff;
				}
				// .el-pagination.is-background .el-pager li:not(.disabled):hover{
				//   color: #1357A4;
				// }
			}
			.newUl{
				padding: 22px 14px 12px 22px;
				border: 1px solid #E6E6E6;
				border-bottom: 0;
				.newTitle{
					width: 734px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-bottom: 7px;
					display: inline-block;
					cursor: pointer;
					font-size: 20px;
					color: #333333;
					line-height: 27px;
					font{color: #DF2E2E;}
				}
				.newstime{
					height: 17px;
					font-size: 12px;
					color: #999999;
					line-height: 17px;
				}
			}
			>div:nth-last-child(2){
				border-bottom: 1px solid #E6E6E6;
			}
		}
		.nonews{
			display: flex;
			flex-flow: wrap;
			justify-content: center;
			>div{
				width: 100%;
				text-align: center;
				font-size: 14px;
				color: #999999;
				margin-top: 30px;
			}
		}
	}
	.newsListRight{
		width: 300px;
		position: relative;
		margin-bottom: 75px;
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
}
</style>