<template>
  <div
    id="form__button-control"
    :class="[
      'form__button-control',
      { 'display-one-btn': currentStep === 'form-address' },
    ]"
  >
    <button
      class="btn form__button-control__button--outline"
      v-show="currentStep !== 'form-address'"
      @click.stop.prevent="goPrevStep"
    >
      上一步
    </button>

    <button
      class="btn form__button-control__button--primary"
      v-show="currentStep !== 'form-payment'"
      @click.stop.prevent="goNextStep"
    >
      下一步
    </button>
    <button
      class="btn form__button-control__button--primary last-step"
      v-show="currentStep === 'form-payment'"
      @click.stop.prevent="submit"
    >
      確認下單
    </button>
  </div>
</template>
<script>
export default {
  name: "StepButtons",
  props: {
    initCurrentStep: {
      type: String,
      default: "form-address",
    },
  },
  data() {
    return {
      currentStep: this.initCurrentStep,
    };
  },
  watch: {
    initCurrentStep() {
      this.currentStep = this.initCurrentStep;
    },
  },
  methods: {
    goPrevStep() {
      switch (this.currentStep) {
        case "form-shipment":
          this.currentStep = "form-address";
          break;
        case "form-payment":
          this.currentStep = "form-shipment";
          break;
        default:
          this.currentStep = "form-shipment";
      }
      this.$router.push({ name: this.currentStep });
    },
    goNextStep() {
      switch (this.currentStep) {
        case "form-address":
          this.currentStep = "form-shipment";
          break;
        case "form-shipment":
          this.currentStep = "form-payment";
          break;
        default:
          this.currentStep = "form-address";
      }
      this.$router.push({ name: this.currentStep });
    },
    submit() {
      this.$emit("submit");
    },
  },
};
</script>
