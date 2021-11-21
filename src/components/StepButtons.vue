<template>
  <div
    id="form__button-control"
    :class="[
      'form__button-control',
      { 'display-one-btn': stepNow === 'address' },
    ]"
  >
    <router-link
      :to="{ name: prevStep }"
      class="btn form__button-control__button--outline"
      v-show="stepNow !== 'address'"
    >
      上一步
    </router-link>
    <button
      class="btn form__button-control__button--primary last-step"
      v-if="stepNow === 'method'"
      @click.stop.prevent="submit"
    >
      確認下單
    </button>
    <router-link
      :to="{ name: nextStep }"
      class="btn form__button-control__button--primary"
      v-else
    >
      下一步
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  GET_CURRENT_PAYMENTS_STEP,
  GET_NEXT_PAYMENTS_STEP,
  GET_PREV_PAYMENTS_STEP,
} from "@/store/store-types";

export default {
  name: "StepButtons",

  computed: {
    ...mapGetters({
      stepNow: GET_CURRENT_PAYMENTS_STEP,
      nextStep: GET_NEXT_PAYMENTS_STEP,
      prevStep: GET_PREV_PAYMENTS_STEP,
    }),
  },
};
</script>
