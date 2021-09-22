import config from '../config/hostConfig';
import axios from '../utils/http';
import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
const api={
  uploadapi(params) {
      return axios.post(config.indexUrl+'/file/upload.htm',params).then( (response) => {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  },
  submitIpProtectInfo(params,self){
    return axios.post(config.indexUrl+'/ipprotect/submitIpProtectInfo.htm',params).then( (res) => {
      console.log(res);
    }).catch((err) => {
      if(err&&err.data&&err.data.msg){
        self.$message.error(err.data.msg);
      }else{
        self.$message.error("系统繁忙，请稍后再试！");
      }
    });
  }
}
export default api;