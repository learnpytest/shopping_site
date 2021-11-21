import {
  GET_PRODUCTS_BASKET,
  SET_PRODUCTS_BASKET,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  STORAGEKEY,
} from "../store-types";

const basket = window.localStorage.getItem(STORAGEKEY);

const state = {
  basket: basket ? JSON.parse(basket) : [],
};
const getters = {
  [GET_PRODUCTS_BASKET]: (state) => state.basket,
};
const actions = {
  [SET_PRODUCTS_BASKET]: ({
    commit,
    state
  }, options) => {
    // call mutation ADD_TO_BASKET，state.basket會更新，用更新後的state.basket更新localStorage
    commit(options.type, options.product);
    window.localStorage.setItem(STORAGEKEY, JSON.stringify(state.basket));
  },
};
const mutations = {
  [REMOVE_FROM_BASKET]: (state, product) => {
    state.basket = state.basket.filter((item) => item.id !== product.id);
  },
  [ADD_TO_BASKET]: (state, product) => {
    // 如果發現品項已經存在，在購物籃中的數量加1，如果發現品項尚未建立，放入state.basket
    let found = state.basket.find((item) => item.id === product.id);
    if (found) {
      found.quantityInBasket++;
    } else {
      state.basket.push({
        ...product,
        quantityInBasket: 1,
      });
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};