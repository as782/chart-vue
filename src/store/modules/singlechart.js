import { reqChartData } from '@/api/index';
import { setToken, getToken,removeToken } from "@/utils/token";
import { message } from 'ant-design-vue';
export default {
    namespaced: true,
    state: {
        chartdata: {},
        isLoading:true
    },
    actions: {
       async getSingleChartData({commit},formdata){

         try {
            let result= await  reqChartData(formdata);
            console.log(result);
            commit('GETSINGLECHARTDATA',result.data);
            return result;
         } catch (error) {
            message.error(error);
         }
        }

    },
    mutations: {
       GETSINGLECHARTDATA(state,val){
        state.chartdata = val;
        state.isLoading = false;
       }
    }
}
