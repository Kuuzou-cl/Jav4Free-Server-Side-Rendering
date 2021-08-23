<template>
  <div id="app">
    <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="7833"></script>
    <Navbar/>
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
