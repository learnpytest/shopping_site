<template>
  <main id="main-content" style="padding: 0 10%">
    <div class="content--horizontal">
      <div class="container--payments">
        <!-- stepper -->
        <form id="formPayments" class="form form--payments">
          <Stepper />
          <div class="form__wrapper">
            <div class="form__innercontainer">
              <router-view />
              <!-- address -->
              <!-- shipment -->
              <!-- method -->
            </div>
          </div>
          <!-- StepButtons.vue -->
          <StepButtons />
        </form>
      </div>
      <!-- BasketItems.vue -->
      <BasketItems />
    </div>
  </main>
</template>
<script>
import Stepper from "@/components/Stepper.vue";
import StepButtons from "@/components/StepButtons.vue";
import BasketItems from "@/components/BasketItems.vue";

import { mapActions } from "vuex";
import { SET_PAYMENTS_STEPS } from "@/store/store-types";

export default {
  name: "Basket",
  components: {
    Stepper,
    StepButtons,
    BasketItems,
  },
  methods: {
    ...mapActions({
      setSteps: SET_PAYMENTS_STEPS,
    }),
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler: function (to) {
        this.setSteps(to.name);
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_form";
@import "@/assets/scss/components/_formButton";
@import "@/assets/scss/abstracts/_mixins";

@include desktop {
  .content--horizontal {
    display: flex;
    justify-content: center;
  }
}
</style>
