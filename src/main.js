import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import {
  BootstrapVue,
  IconsPlugin,
  BootstrapVueIcons
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

import "../src/assets/scss/icomoon-v1.0/style.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

// Make suer service worker supported by browser then register
if ("serviceWorker" in navigator) {
  console.log("Service Worker Supported");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/cache_site.js")
      .then(() => {
        console.log("Service Worker: Registered");
      })
      .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");