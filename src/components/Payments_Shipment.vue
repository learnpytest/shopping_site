<template>
  <div class="form--shipment">
    <div class="form__title">運送方式</div>
    <div id="tr-methods" class="form__group form--shipment__group">
      <div class="form__row form--shipment__row d-flex align-items-center">
        <input
          name="tr-method"
          type="radio"
          value="standard"
          v-model="method"
        />
        <label for="" class="label">
          <div class="label--wrapper">
            <div class="label--type">標準運送</div>
            <div class="label--time">約3~7個工作天</div>
          </div>
          <div class="label--fee">免費</div>
        </label>
      </div>
      <div class="form__row form--shipment__row d-flex align-items-center">
        <input name="tr-method" type="radio" value="dhl" v-model="method" />
        <label for="" class="label">
          <div class="label--wrapper">
            <div class="label--type" style="font-weight: 700">DHL貨運</div>
            <div class="label--time">48小時內送達</div>
          </div>
          <div class="label--fee">$500</div>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import { SET_SHIPMENT_FEE } from "@/store/store-types.js";

export default {
  name: "FormShipment",
  data() {
    return {
      method: "",
    };
  },

  methods: {
    ...mapActions({
      setShipmentFee: SET_SHIPMENT_FEE,
    }),
    onShipmentTypeSelected(newValue) {
      this.setShipmentFee(newValue);
    },
  },
  watch: { method: "onShipmentTypeSelected" },
};
</script>
