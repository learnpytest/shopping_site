<template>
  <div class="chart">
    <div class="chart__title">購物籃</div>
    <div id="chart-goods-list" class="chart__goods-list">
      <!-- goods.vue -->
      <div class="chart__goods-list__item" v-for="good in goods" :key="good.id">
        <img
          :src="good.image"
          alt="good image"
          class="chart__goods-list__item__image"
        />
        <div class="chart__goods-list__item__content">
          <div class="flex-wrapper">
            <div class="good-name">{{ good.name }}</div>
            <div class="good-count">
              <span class="count good-minus" @click.stop="handleMinus(good.id)"
                >-</span
              >
              <span>{{ good.quantityInChart }}</span>
              <span class="count good-plus" @click.stop="handlePlus(good.id)"
                >+</span
              >
            </div>
          </div>
          <div class="good-price">{{ good.total | numberFormat }}</div>
        </div>
      </div>
      <!-- goods.vue -->
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
        ><span id="ship-fee">{{
          this.$store.state.shipping.fee | format
        }}</span>
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
        ><span id="good-sum">{{ totalValue | numberFormat }}</span>
      </div>
      <hr style="background-color: #aaa" />
    </div>
    <!-- stepButtons.vue -->
    <StepButtons @submit="submit" :initCurrentStep="currentStep" />
  </div>
</template>
<script>
import StepButtons from "../components/StepButtons.vue";

export default {
  name: "Chart",
  components: {
    StepButtons,
  },
  props: {
    isSubmited: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      goods: [],
      currentStep: this.$router.currentRoute.name,
    };
  },
  computed: {
    totalValue: {
      get() {
        let total = this.goods
          .map((good) => good.total)
          .reduce((accum, total) => accum + total);
        return total + this.$store.state.shipping.fee;
      },
    },
  },
  created() {
    this.fetchGoods();
  },
  methods: {
    fetchGoods() {
      this.$store.dispatch("getGoodsInChart");
      this.goods = this.$store.state.goodsInChart;
    },
    handlePlus(id) {
      this.goods = this.goods.map((good) => {
        return good.id === id
          ? {
              ...good,
              quantityInChart: good.quantityInChart + 1,
              total: (good.quantityInChart + 1) * good.price,
            }
          : good;
      });
    },
    handleMinus(id) {
      this.goods = this.goods.map((good) => {
        return good.id === id
          ? {
              ...good,
              quantityInChart:
                good.quantityInChart > 0 ? good.quantityInChart - 1 : 0,
              total:
                good.quantityInChart > 0
                  ? (good.quantityInChart - 1) * good.price
                  : 0,
            }
          : good;
      });
    },
    submit() {
      this.$emit("handleCartInfo", { goods: [...this.goods] });
    },
  },
  watch: {
    isSubmited() {
      if (this.isSubmited) {
        //receiving trigger from checkout
        //將資料整理成JSON先傳送父元件，由父元件統一向後端發送API
        this.$emit("handleCartTriggeredByForm", { goods: [...this.goods] });
      }
    },
    $route() {
      this.currentStep = this.$router.currentRoute.name;
    },
  },
  filters: {
    format(number) {
      return number === 0 ? "免費" : `$${number}`;
    },
    numberFormat(number) {
      return `$${Intl.NumberFormat().format(number)}`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/components/_chart.scss";
@import "../assets/scss/components/_formButton";
.form__button-control {
  //桌機
  @include desktop {
    display: none;
  }
}
</style>
