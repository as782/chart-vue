import Vue from 'vue'
import App from './App.vue'

//antd for Vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
 
// //Echart 图表
// import echarts from './echarts';
// //全局绑定echarts
// Vue.prototype.$echarts = echarts;

//引入路由
import VueRouter from 'vue-router';
import router from '@/router/index'

//Vux组件状态管理
import store from '@/store/index'

// import  "./mock";


// 关闭生产提示
Vue.config.productionTip = false
//使用路由
Vue.use(VueRouter);
//使用antd
Vue.use(Antd);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
