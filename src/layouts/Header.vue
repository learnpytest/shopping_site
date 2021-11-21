<template>
  <header class="nav--header">
    <!--  漢堡排與導覽列    -->
    <label for="nav-toggle--hamburger" class="nav--header__label">
      <span class="hamburger"></span>
    </label>
    <input
      type="checkbox"
      class="nav--header__input nav--header__checkbox"
      id="nav-toggle--hamburger"
    />
    <nav class="subnav">
      <ul class="subnav__list">
        <li class="subnav__item">
          <a class="subnav__link" href="#activity">男款</a>
        </li>
        <li class="subnav__item">
          <a class="subnav__link" href="#album">女款</a>
        </li>
        <li class="subnav__item">
          <a class="subnav__link" href="#adoption">最新消息</a>
        </li>
        <li class="subnav__item">
          <a class="subnav__link" href="#adoption">聯絡我們</a>
        </li>
        <li class="subnav__item">
          <a class="subnav__link" href="#adoption">客製商品</a>
        </li>
        <span class="subnav__item subnav__icons">
          <i class="subnav__link icon icon-search"></i>

          <div>
            <b-dropdown
              dropleft
              size="sm"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <i
                  :to="{ name: 'address' }"
                  class="subnav__link icon icon-chart"
                >
                  <span class="total-quantity">{{
                    productsInBasket ? productsInBasket.length : 0
                  }}</span></i
                >
              </template>
              <b-dropdown-item
                v-for="product in productsInBasket"
                :key="product.id"
              >
                <div class="product">
                  <div class="product__control">
                    <span class="product__title">{{ product.title }}</span>
                    <span
                      class="product__remove btn btn-danger"
                      @click.stop.prevent="removeProductFromBasket(product)"
                      >移除</span
                    >
                  </div>
                  <div class="product__price">
                    {{ product.quantity }} X ${{ product.price }}
                  </div>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  v-if="productsInBasket.length"
                  class="product__total-price"
                >
                  <strong> Total: ${{ basketTotalPrice }} </strong>
                  <div
                    class="product__remove-all btn btn-secondary"
                    @click.stop.prevent="clearBasket"
                  >
                    清空購物籃
                  </div>
                </div>
                <div class="m-3" v-else>購物籃中沒有任何商品!</div>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link
                  v-if="productsInBasket.length"
                  :to="{ name: 'address' }"
                  class="product__checkout btn btn-primary p-2"
                  >結帳</router-link
                >
              </b-dropdown-item>
            </b-dropdown>
          </div>

          <i id="colorThemeSwitcher" theme="light" class="subnav__link icon"
            ><b-icon icon="moon"></b-icon
          ></i>
        </span>
      </ul>
    </nav>

    <router-link :to="{ name: 'root' }" class="logo logo--header">
      <img
        class="site-logo"
        src="https://i.imgur.com/gvRKoTR.png"
        alt="site logo"
      />
    </router-link>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  GET_PRODUCTS_BASKET,
  GET_BASKET_TOTAL_PRICE,
  REMOVE_FROM_BASKET,
  CLEAR_BASKET,
} from "@/store/store-types.js";

export default {
  name: "Header",
  computed: mapGetters({
    productsInBasket: GET_PRODUCTS_BASKET,
    basketTotalPrice: GET_BASKET_TOTAL_PRICE,
  }),
  methods: {
    ...mapActions({
      removeProductFromBasket: REMOVE_FROM_BASKET,
      clearBasket: CLEAR_BASKET,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/_header";

.subnav__item :first-child {
  height: 100%;
  min-height: 0;
  border: 0;
  padding: 0;
  font-family: "Noto Sans TC", "Nunito Sans", sans-serif;
}

.product {
  font-size: 0.5rem;
  white-space: normal;
  width: 300px;
  min-width: 0;

  &__control {
    display: flex;
    margin: 1rem;
  }
  &__title {
    flex: 1 1 70%;
    font-weight: bold;
  }
  &__remove {
    flex: 1;
    padding: 0;
    height: fit-content;
  }
  &__price {
    margin: 1rem;
    border-bottom: 1px solid #ccc;
  }
  .icon-chart {
    color: #ccc;
  }
  &__checkout {
    display: flex;
    justify-content: center;
    margin: 1rem;
    min-width: 0;
  }
  &__total-price {
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
  }
  &__remove-all {
    font-size: 0.5rem;
    margin-left: auto;
  }
}
</style>
