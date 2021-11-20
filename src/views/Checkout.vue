<template>
  <main id="main-content" style="padding: 0 10%">
    <div class="stepper-panel__title">結帳</div>
    <!-- Stepper.vue -->
    <!-- <Stepper /> -->
    <!-- Form -->
    <div class="content-wrapper">
      <Form
        :isSubmited="isSubmited"
        @afterShipInfoHandled="afterShipInfoHandled"
        @handleShipInfoTriggeredByCart="afterHandleShipInfoTriggeredByCart"
      />
      <!-- Chart -->
      <Chart
        :isSubmited="isSubmited"
        @handleCartTriggeredByForm="handleCartTriggeredByForm"
        @handleCartInfo="afterHandleCartInfo"
      />
      <div>
        <b-modal id="showResults" title="Purchase order">
          <pre class="my-4">{{ results.shipInfo }}</pre>
          <pre class="my-4">{{ results.goodsInCart }}</pre>
        </b-modal>
      </div>
    </div>
  </main>
</template>
<script>
import Form from "../components/Form.vue";
import Chart from "../components/Chart.vue";

export default {
  name: "Checkout",
  components: {
    // Stepper,
    Form,
    Chart,
  },
  data() {
    return {
      results: { shipInfo: {}, goodsInCart: [] },
      isSubmited: false,
    };
  },
  methods: {
    afterShipInfoHandled(payload) {
      //save form's ship info
      this.results.shipInfo = { ...payload };
      this.isSubmited = true;
    },
    handleCartTriggeredByForm(payload) {
      this.results.goodsInCart = [payload.goods];
      this.$bvModal.show("showResults");
      this.isSubmited = false;
    },
    afterHandleCartInfo(payload) {
      this.results.goodsInCart = [payload.goods];
      this.isSubmited = true;
    },
    afterHandleShipInfoTriggeredByCart(payload) {
      this.results.shipInfo = { ...payload };
      this.$bvModal.show("showResults");
      this.isSubmited = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/abstracts/_mixins";

@include desktop {
  .content-wrapper {
    padding-top: 3em;
    display: flex;
    justify-content: center;
  }
}
</style>
