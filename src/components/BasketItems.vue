<template>
  <div class="products products--baskets">
    <div class="products__title products--baskets__title">購物籃</div>
    <div id="basket-list" class="products__list products--basket__list">
      <!-- products -->
      <div
        class="products__item products--basket__item"
        v-for="product in basket"
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
                @click.stop="handleMinus(product.id)"
                >-</span
              >
              <span>{{ product.quantityInChart }}</span>
              <span
                class="product__control--plus"
                @click.stop="handlePlus(product.id)"
                >+</span
              >
            </div>
          </div>
          <div class="product__price">{{ product.price }}</div>
        </div>
      </div>
      <!-- products -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_PRODUCTS_BASKET } from "../store/store-types";

export default {
  name: "BasketItems",
  computed: {
    ...mapGetters({ basket: GET_PRODUCTS_BASKET }),
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
</style>
