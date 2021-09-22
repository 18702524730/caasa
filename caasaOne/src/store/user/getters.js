/**
 * Created by ling on 2017/5/10.
 */

export default {
	getUserinfo(state) {
		return state.userinfo;
	},
	getlogininfo(state) {
		return state.logininfo;
	},
	getToken(state) {
		return state.userinfo && state.userinfo.token ? state.userinfo.token : '';
	},

	getRemumber(state){
		return state.remumber;
	}
};