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
            class="products__item--thumbnail products--all__item--thumbnail"
          />
          <div class="product">
            <div class="flex-wrapper">
              <div class="product__name products--all__item--name">
                {{ product.title }}
              </div>
              <div class="products--all__item--description">
                {{ product.description }}
              </div>
              <div class="product__price products--all__item--price">
                ${{ product.price }}
              </div>
              <div class="products--all__item--rating">
                評價: {{ product.rating.rate }} ({{ product.rating.count }})
              </div>

              <div
                role="button"
                class="btn btn-danger product__count--add"
                @click.stop.prevent="
                  addProductToBasket({
                    product,
                    quantity: 1,
                  })
                "
              >
                加到購物籃
              </div>
            </div>
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

.products--all__item {
  padding: 1rem 2rem;
  font-family: "Noto Sans TC", "Nunito Sans", sans-serif;
  &--thumbnail {
    width: 200px;
    margin-right: 2rem;
  }
  &--name {
    max-width: 80%;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-left: auto;
    padding: 1rem 0;
  }
  &--description {
    font-size: 0.8rem;
    color: #2a2a2a;
    max-width: 80%;
    border-top: 1px solid #ccc;
    margin-left: auto;
    padding-top: 1rem;
  }
  &--rating {
    margin-bottom: 1rem;
    color: #aaa;
  }
  &--price {
    line-height: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
