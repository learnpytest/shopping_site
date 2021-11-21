import axios from "axios";

import {
  GET_PRODUCTS,
  SET_PRODUCTS
} from "../store-types";

const state = {
  products: [],
};
const getters = {
  [GET_PRODUCTS]: (state) => state.products,
};
const actions = {
  [SET_PRODUCTS]: async ({
    commit
  }) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    commit(SET_PRODUCTS, response.data);
  },
};
const mutations = {
  [SET_PRODUCTS]: (state, products) => (state.products = products),
};

export default {
  state,
  getters,
  actions,
  mutations,
};