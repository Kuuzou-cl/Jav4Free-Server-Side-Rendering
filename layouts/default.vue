<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar/Navbar.vue';
import Sidebar from '~/components/Sidebar/Sidebar.vue';
import Footer from '~/components/Footer/Footer.vue';
export default {
  components: {
    Navbar,Sidebar,Footer
  }
}
</script>

<style lang="scss">
@import "../assets/base-style.scss";
</style>
