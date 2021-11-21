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
          <router-link
            :to="{ name: 'address' }"
            class="subnav__link icon icon-chart"
            ><span v-show="productsInBasket.length" class="total-quantity">{{
              productsInBasket.length
            }}</span></router-link
          >
          <i id="colorThemeSwitcher" theme="light" class="subnav__link icon"
            ><b-icon icon="moon"></b-icon
          ></i>
        </span>
      </ul>
    </nav>
    <!--  漢堡排與導覽列    -->
    <div class="logo logo--header">
      <img
        class="site-logo"
        src="https://i.imgur.com/gvRKoTR.png"
        alt="site logo"
      />
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_PRODUCTS_BASKET } from "@/store/store-types.js";

export default {
  name: "Header",
  computed: mapGetters({
    productsInBasket: GET_PRODUCTS_BASKET,
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/_header";
</style>
