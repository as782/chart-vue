import { rqLoginAccount, reqLogout,rqUserInfoData } from '@/api/index';
import { setToken, getToken, removeToken } from "@/utils/token";
import { message } from 'ant-design-vue';
export default {
    namespaced: true,
    state: {
        // 存储token
        Authorization: getToken() ? getToken() : "",
        userinfo: {},
    },
    actions: {
        //登入
        async Login({ commit }, data) {
            try {
                let result = await rqLoginAccount(data);
                if (result.code == 200) {
                    commit('REQLOGINSYSTEM', result.data);
                    //把token存储到本地
                    setToken(result.data);
                    return result;
                }
            } catch (error) {
                return console.log(error);
            }

        },
        async getUserInfo({ commit }) {
            try {
                // 登入成功后获取用户数据；
                let result = await rqUserInfoData();
                if (result.code === 200) {
                    commit("GETUSERINFO", result.data);
                    return  result;
                }
            } catch (error) {
                return Promise.reject(new Error(error+'获取用户信息失败！'));
            }
        },
        // 退出登入
        async Loginout({ commit }) {
            let result = await reqLogout();
            if (result.code == 200) {
                commit('RELOGINOUT');
                return result;
            }
            else {
                return Promise.reject(new Error('登出请求失败！'));
            }
        }


    },
    mutations: {
        // 将token存入vuex
        REQLOGINSYSTEM(state, value) {
            state.Authorization = value;
        },
        //存入用户信息
        GETUSERINFO(state, userInfo) {
            state.userinfo = userInfo;
        },
        //退出清除用户数据
        RELOGINOUT(state) {
            state.Authorization = '';
            state.userinfo = {};
            //清除本地token
            removeToken();
        }
    }
}
