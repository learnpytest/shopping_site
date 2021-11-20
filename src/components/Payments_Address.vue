<template>
  <div class="form__content--address">
    <div class="form__title">寄送地址payment</div>
    <div class="form-group">
      <div class="form-row">
        <label>稱謂</label>
        <div class="select-wrapper">
          <select
            name="a-title"
            id="a-title"
            required
            v-model="currentEditFormAddress.appellation"
          >
            <option value="mr" selected>先生</option>
            <option value="ms">女士</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <label for="a-name">姓名</label>
        <input
          id="a-name"
          class="a-name"
          type="text"
          placeholder="請輸入姓名"
          v-model="currentEditFormAddress.name"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-row">
        <label for="a-phone">電話</label>
        <input
          id="a-phone"
          class="a-phone"
          type="text"
          placeholder="請輸入行動電話"
          v-model="currentEditFormAddress.phone"
        />
      </div>
      <div class="form-row">
        <label for="a-email">Email</label>
        <input
          id="a-email"
          class="a-email"
          type="email"
          placeholder="請輸入電子郵件"
          v-model="currentEditFormAddress.email"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-row">
        <label>縣市</label>
        <div class="select-wrapper">
          <select
            name="a-city"
            id="a-city"
            required
            v-model="currentEditFormAddress.city"
          >
            <option value="game" disabled selected>請選擇縣市</option>

            <option value="taipei" selected>台北</option>
            <option value="newtaipei">新北</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <label for="a-address">地址</label>
        <input
          id="a-address"
          class="a-address"
          type="text"
          placeholder="請輸入地址"
          v-model="currentEditFormAddress.address"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormAddress",
  props: {
    initCurrentEditFormAddress: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      currentEditFormAddress: this.initCurrentEditFormAddress,
    };
  },
};
</script>
