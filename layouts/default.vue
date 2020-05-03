<template>
  <div id="app">
    <Sitemap/>
    <Navbar/>
    <Secondarybar/>
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
  },
  data() {
    return {
      show: false,
      showSecondary: false,
      showNav: false,
    };
  },
  methods:{
    toggleNavbar() {
      this.show = !this.show;
      this.showSecondary = !this.showSecondary,
      this.showNav = !this.showNav;
    }
  }
}
</script>

<style lang="scss">
@import "../assets/base-style.scss";
</style>
