<template>
  <div class="products products--baskets">
    <div class="products__title products--baskets__title">購物籃</div>
    <div id="basket-list" class="products__list products--basket__list">
      <!-- products -->
      <div
        class="products__item products--basket__item"
        v-for="product in productsInBasket"
        :key="product.id"
      >
        <img
          :src="product.image"
          alt="basket product thumbnail"
          class="products__item--thumbnail"
        />
        <div class="product">
          <div class="flex-wrapper">
            <div class="product__name">{{ product.title }}</div>
            <div class="product__control">
              <span
                class="product__control--minus"
                @click.stop.prevent="
                  reduceProductFromBaske({
                    product,
                  })
                "
                >-</span
              >
              <span>{{ product.quantity }}</span>
              <span
                class="product__control--plus"
                @click.stop.prevent="
                  addProductToBasket({
                    product,
                    quantity: 1,
                  })
                "
                >+</span
              >
            </div>
          </div>
          <div class="product__price">${{ product.price }}</div>
        </div>
      </div>
      <!-- products -->
    </div>

    <div class="amount-wrapper">
      <div
        class="
          amount
          shipment-fee
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <span class="item">運費</span
        ><span id="ship-fee">{{ shipmentFee ? shipmentFee : "未選擇" }}</span>
      </div>
      <hr style="background-color: #aaa" />
      <div
        class="
          amount
          shipment-sum
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <span class="item">小計</span
        ><span id="good-sum">${{ amountToCheckout | numberFormat }}</span>
      </div>
      <hr style="background-color: #aaa" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  GET_PRODUCTS_BASKET,
  GET_AMOUNT_TO_CHECKOUT,
  GET_SHIPMENT_FEE,
  ADD_TO_BASKET,
  REDUCE_FROM_BASKET,
} from "../store/store-types";

export default {
  name: "BasketItems",

  computed: {
    ...mapGetters({
      productsInBasket: GET_PRODUCTS_BASKET,
      amountToCheckout: GET_AMOUNT_TO_CHECKOUT,
      shipmentFee: GET_SHIPMENT_FEE,
    }),
  },
  methods: {
    ...mapActions({
      addProductToBasket: ADD_TO_BASKET,
      reduceProductFromBaske: REDUCE_FROM_BASKET,
    }),
  },
  filters: {
    numberFormat(number) {
      return Intl.NumberFormat().format(number);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/components/_products.scss";
@import "../assets/scss/components/_formButton";
.form__button-control {
  //桌機
  @include desktop {
    display: none;
  }
}
.products__list {
  max-height: 200px;
  overflow-y: scroll;
}
</style>
