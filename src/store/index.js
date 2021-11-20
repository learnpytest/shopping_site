import Vue from "vue";
import Vuex from "vuex";

import products from "./modules/products";
import productsBasket from "./modules/productsBasket";
import basketPayments from "./modules/basketPayments";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    productsBasket,
    basketPayments,
  },
});