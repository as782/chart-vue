import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import login from "./modules/login";
import mychart from "./modules/mychart";
import singlechart from "./modules/singlechart";
const store = new Vuex.Store({
  modules:{
    login,
    mychart,
    singlechart
  }
});
export default store;