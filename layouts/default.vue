<template>
  <div id="app">
    <Navbar/>
    <Secondarybar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Sitemap from '~/components/Sitemap/Sitemap.vue';
import Navbar from '~/components/Navbar/Navbar.vue';
import Secondarybar from '~/components/Secondarybar/Secondarybar.vue';
import Footer from '~/components/Footer/Footer.vue';
export default {
  components: {
    Sitemap,Navbar,Secondarybar,Footer
  }
}
</script>

<style lang="scss">
@import "../assets/base-style.scss";
</style>
