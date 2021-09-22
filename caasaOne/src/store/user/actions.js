/**
 * Created by ling on 2017/5/10.
 */

import * as types from './mutations_types.js';

export default {
	changelogin({commit},data){
		commit(types.CHANGELOGIN,data)
	},
	update_userinfo: ({
		commit
	}, {
		userinfo
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.UPDATE_USERINFO, {
				userinfo
			});
			resolve()
		});
	},

	remove_userinfo: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.REMOVE_USERINFO);
			resolve()
		});
	},

	update_logininfo: ({commit}, logininfo) => {
		console.log('update: '+JSON.stringify(logininfo) )
		return new Promise((resolve, reject) => {
			commit(types.UPDATE_LOGININFO,logininfo);
			resolve()
		});
	},

	remove_logininfo: ({commit}) => {
		return new Promise((resolve, reject) => {
			commit(types.REMOVE_LOGININFO);
			resolve()
		});
	},

	update_remumber: ({
		commit
	}, {
		remumber_flag,
		remumber_login_info
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.UPDATE_REMUMBER, {
				remumber_flag,
				remumber_login_info
			});
			resolve()
		});
	},

	remove_remumber: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.REMOVE_REMUMBER);
			resolve()
		});
	}
};