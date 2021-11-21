<template>
  <div id="stepper-control" class="panel stepper-panel">
    <div class="wrapper stepper-panel__stepper-wrapper justify-content-between">
      <div :class="['step', 'active', { checked: stepNow !== 'address' }]">
        <div class="circle-container"></div>
        <span class="step__label">寄送地址</span>
      </div>
      <div
        :class="[
          'step',
          { active: stepNow === 'shipment' },
          { checked: stepNow === 'method' },
        ]"
      >
        <div class="circle-container"></div>
        <span class="step__label label-container">運送方式</span>
        <span class="connect-line"></span>
      </div>
      <div :class="['step', { active: stepNow === 'method' }]">
        <div class="circle-container"></div>
        <span class="step__label label-container">付款資訊</span>
        <span class="connect-line"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import { GET_CURRENT_PAYMENTS_STEP } from "@/store/store-types.js";

export default {
  name: "Stepper",
  computed: mapGetters({
    stepNow: GET_CURRENT_PAYMENTS_STEP,
  }),
};
</script>
<style lang="scss">
@import "../assets/scss/components/_stepper.scss";
</style>
