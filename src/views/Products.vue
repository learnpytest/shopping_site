<template>
  <main style="padding: 0 10%">
    <div class="products products--all">
      <div id="productsAll" class="products__list products--all__list">
        <!-- products -->
        <div
          class="products__item products--all__item"
          v-for="product in products"
          :key="product.id"
        >
          <img
            :src="product.image"
            alt="product thumbnail"
            class="products__item--thumbnail"
          />
          <div class="product">
            <div class="flex-wrapper">
              <div class="product__name">{{ product.title }}</div>
              <div class="product__control">
                <span>{{ product.qyantity }}</span>

                <span
                  role="button"
                  class="btn btn-danger product__count--add"
                  @click.stop.prevent="
                    addProductToBasket({
                      product,
                      quantity: 1,
                    })
                  "
                  >加到購物籃</span
                >
              </div>
            </div>
            <div class="product__price">{{ product.price }}</div>
          </div>
        </div>
        <!-- products -->
      </div>
    </div>
  </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import {
  GET_PRODUCTS,
  SET_PRODUCTS,
  GET_PRODUCTS_BASKET,
  ADD_TO_BASKET,
} from "../store/store-types";

export default {
  name: "Products",

  computed: {
    ...mapGetters({
      products: GET_PRODUCTS,
      productsBasket: GET_PRODUCTS_BASKET,
    }),
    foundInBasket(product) {
      return this.productsBasket.find((item) => item.id === product.id);
    },
  },
  methods: {
    ...mapActions({
      setProducts: SET_PRODUCTS,
    }),
    ...mapActions({
      addProductToBasket: ADD_TO_BASKET,
    }),
  },
  created() {
    this.setProducts();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/components/_products.scss";
</style>
