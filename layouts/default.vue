<template>
  <div id="app">
    <script
      async
      type="application/javascript"
      src="https://a.realsrv.com/ad-provider.js"
    ></script>
    <Navbar />
    <nuxt />
    <Footer />
    <script>
      (AdProvider = window.AdProvider || []).push({ serve: {} });
    </script>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar/Navbar.vue";
import Footer from "~/components/Footer/Footer.vue";
export default {
  head: {
    script: [{}],
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../assets/base-style.scss";
</style>
