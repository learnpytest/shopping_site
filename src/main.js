import Vue from "vue";
// import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";

import store from "./store";

import "bootstrap";
import {
  BootstrapVue,
  IconsPlugin,
  BootstrapVueIcons
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
// Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//     goodsInChart: [],
//     shipping: {
//       method: "standard",
//       fee: 0,
//     },
//   },
//   actions: {
//     getGoodsInChart(context) {
//       context.commit("mutationGetGoodsInChart", goodsInChart);
//     },
//   },
//   mutations: {
//     mutationGetGoodsInChart(state, payload) {
//       state.goodsInChart = payload;
//     },
//   },
// });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");