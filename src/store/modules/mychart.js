import { reqChartPageData } from '@/api/index';
import { message } from 'ant-design-vue';

export default {
  namespaced: true,
  state: {
    currentPageChartList: [],//当前页数的图表数据列表
    // size:0,//分页大小
    total:0,//数据总数
    // pages:0,//第几页
  },
  actions: {

    // 请求一个分页的数据
    async reqChartPageData({ commit }, info) {
      try {
        const result = await reqChartPageData(info);
        console.log('请求一个分页的数据:', result);
        commit('CHARTPAGEDATA', result.data);
        return result.ok;
      } catch (error) {
        console.log('页面数据亲求失败：', error);
        message.error(error);
      }
    }

  },
  mutations: {
    //存储分页数据
    CHARTPAGEDATA(state, val) {
      state.currentPageChartList = val.records;
      // state.size = val.size;
      state.total = val.total;
      // state.pages = val.pages;
    }
  }
}
