<template>
  <div id="app-mobile">
    <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="7833"></script>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/NavbarMobile/NavbarMobile.vue';
import Footer from '~/components/FooterMobile/FooterMobile.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import "../assets/base-style-mobile.scss";
</style>
