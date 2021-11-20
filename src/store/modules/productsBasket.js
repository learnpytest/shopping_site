import {
  GET_CURRENT_BASKET,
  SET_CURRENT_BASKET,
  ADD_TO_BASKET,
  STORAGEKEY,
} from "../store-types";

const basket = window.localStorage.getItem(STORAGEKEY);

const state = {
  basket: basket ? JSON.parse(basket) : [],
};
const getters = {
  [GET_CURRENT_BASKET]: (state) => state.basket,
};
const actions = {
  [SET_CURRENT_BASKET]: ({
    commit,
    state
  }, item) => {
    // call mutation ADD_TO_BASKET，state.basket會更新，用更新後的state.basket更新localStorage
    commit(ADD_TO_BASKET, item);
    window.localStorage.setItem(STORAGEKEY, JSON.stringify(state.basket));
  },
};
const mutations = {
  [ADD_TO_BASKET]: (state, item) => {
    // 如果發現品項已經存在，在購物籃中的數量加1，如果發現品項尚未建立，放入state.basket
    let found = state.basket.find((product) => product.id === item.id);
    if (found) {
      found.quantityInBasket++;
    } else {
      state.basket.push({
        ...item,
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