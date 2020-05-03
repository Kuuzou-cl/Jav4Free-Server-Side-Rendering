<template>
  <div id="app">
    <Sitemap />
    <Navbar />
    <Sidebar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Sitemap from '~/components/Sitemap/Sitemap.vue';
import Navbar from '~/components/Navbar/Navbar.vue';
import Secondarybar from '~/components/Secondarybar/Secondarybar.vue';
import Sidebar from '~/components/Sidebar/Sidebar.vue';
import Footer from '~/components/Footer/Footer.vue';
export default {
  components: {
    Sitemap,Navbar,Secondarybar,Sidebar,Footer
  }
}
</script>

<style lang="scss">
@import "../assets/base-style.scss";
</style>
