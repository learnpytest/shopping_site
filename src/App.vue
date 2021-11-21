<template>
  <div id="app">
    <!-- todo header.vue -->
    <Header />
    <main role="main" class="mt-5">
      <router-view />
    </main>
    <!-- todo footer.vue -->
    <Footer />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/main.scss";
</style>
