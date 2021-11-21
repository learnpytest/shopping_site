<template>
  <div class="form--method">
    <div class="form__title">付款資訊</div>
    <div class="form__group form--method__group">
      <div class="form__row form--method__row">
        <label for="cardholder-name">持卡人姓名</label>
        <input
          id="cardholder-name"
          class="cardholder-name"
          type="text"
          placeholder="John Doe"
          v-model="currentEditFormPayment.cardHolder"
        />
      </div>
      <div class="form__row form--method__row">
        <label for="credit-card">卡號</label>
        <input
          id="credit-card"
          class="credit-card"
          type="text"
          placeholder="1111 2222 3333 4444"
          v-model="currentEditFormPayment.creditCard"
        />
      </div>
    </div>
    <div class="form__group form--method__group">
      <div class="form__row form--method__row">
        <label>有效期限</label
        ><input
          id="expire-date"
          name="expire-date"
          type="text"
          placeholder="MM/YY"
          value=""
          required
          v-model="currentEditFormPayment.expireDate"
        />
      </div>
      <div class="form__row form--method__row">
        <label for="a-address">CVC / CCV</label>
        <input
          id="cvc-ccv"
          class="cvc-ccv"
          type="text"
          placeholder="123"
          v-model="currentEditFormPayment.cvcCcv"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormPayment",
  props: {
    initCurrentEditFormPayment: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      currentEditFormPayment: this.initCurrentEditFormPayment,
    };
  },
};
</script>
