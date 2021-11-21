import {
  STORAGEKEY,
  GET_PRODUCTS_BASKET,
  ADD_TO_BASKET,
  REDUCE_FROM_BASKET,
  GET_BASKET_TOTAL_PRICE,
  SET_BASKET_TOTAL_PRICE,
  REMOVE_FROM_BASKET,
  CLEAR_BASKET,
  GET_SHIPMENT_FEE,
  SET_SHIPMENT_FEE,
  GET_AMOUNT_TO_CHECKOUT,
  SET_AMOUNT_TO_CHECKOUT,
} from "../store-types";

// defaul value that gets from persisted value
let basketTotalPricePersisted = 0;
const basketPersisted = window.localStorage.getItem(STORAGEKEY);
JSON.parse(basketPersisted).forEach((product) => {
  if (product.price) {
    console.log(product.price);
    basketTotalPricePersisted += product.price;
  }
  return basketTotalPricePersisted;
});

const state = {
  basket: basketPersisted ? JSON.parse(basketPersisted) : [],
  basketTotalPrice: basketTotalPricePersisted ? basketTotalPricePersisted : 0,
  shipmentType: {
    standard: 0,
    dhl: 500,
  },
  shipmentFee: 0,
  amountToCheckout: basketTotalPricePersisted ? basketTotalPricePersisted : 0,
};
const getters = {
  [GET_PRODUCTS_BASKET]: (state) => state.basket,
  [GET_BASKET_TOTAL_PRICE]: (state) => state.basketTotalPrice,
  [GET_SHIPMENT_FEE]: (state, type) => state[type],
  [GET_AMOUNT_TO_CHECKOUT]: (state) => state.amountToCheckout,
};
const actions = {
  [ADD_TO_BASKET]: ({
    commit,
    dispatch
  }, {
    product,
    quantity
  }) => {
    commit("ADD_TO_BASKET", {
      product,
      quantity,
    });
    window.localStorage.setItem(STORAGEKEY, JSON.stringify(state.basket));
    dispatch(SET_BASKET_TOTAL_PRICE);
    commit(SET_AMOUNT_TO_CHECKOUT);
  },
  [REDUCE_FROM_BASKET]: ({
    commit,
    dispatch
  }, product) => {
    commit(REDUCE_FROM_BASKET, product);
    window.localStorage.setItem(STORAGEKEY, JSON.stringify(state.basket));
    dispatch(SET_BASKET_TOTAL_PRICE);
    commit(SET_AMOUNT_TO_CHECKOUT);
  },
  [REMOVE_FROM_BASKET]: ({
    commit
  }, product) => {
    commit(REMOVE_FROM_BASKET, product);
    window.localStorage.setItem(STORAGEKEY, JSON.stringify(state.basket));
  },
  [CLEAR_BASKET]: ({
    commit
  }) => {
    commit(CLEAR_BASKET);
    window.localStorage.setItem(STORAGEKEY, JSON.stringify(state.basket));
  },
  [SET_SHIPMENT_FEE]: ({
    commit
  }, type) => {
    commit(SET_SHIPMENT_FEE, type);
    commit(SET_AMOUNT_TO_CHECKOUT);
  },
  [SET_BASKET_TOTAL_PRICE]: ({
    commit
  }) => {
    let total = 0;
    state.basket.forEach((product) => {
      total += product.price * product.quantity;
    });
    commit(SET_BASKET_TOTAL_PRICE, total);
  },
};
const mutations = {
  [REMOVE_FROM_BASKET]: (state, product) => {
    state.basket = state.basket.filter((item) => item.id !== product.id);
  },
  [ADD_TO_BASKET]: (state, {
    product,
    quantity
  }) => {
    // 如果發現品項已經存在，在購物籃中的數量加上選取的數量，如果發現品項尚未建立，放入state.basket
    let found = state.basket.find((item) => item.id === product.id);
    if (found) {
      return (found.quantity += quantity);
    } else {
      state.basket.push({
        ...product,
        quantity: 1,
      });
    }
  },
  [REDUCE_FROM_BASKET]: (state, {
    product
  }) => {
    let found = state.basket.find((item) => item.id === product.id);
    if (!found) return;
    if (found.quantity <= 1) {
      found.quantity = 0;
    } else {
      found.quantity -= 1;
    }
  },
  [SET_BASKET_TOTAL_PRICE]: (state, basketTotalPrice) =>
    (state.basketTotalPrice = basketTotalPrice),
  [CLEAR_BASKET]: (state) => {
    state.basket = [];
  },
  [SET_SHIPMENT_FEE]: (state, type) => {
    state.shipmentFee = state.shipmentType[type];
  },
  [SET_AMOUNT_TO_CHECKOUT]: (state) => {
    state.amountToCheckout = state.basketTotalPrice + state.shipmentFee;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};