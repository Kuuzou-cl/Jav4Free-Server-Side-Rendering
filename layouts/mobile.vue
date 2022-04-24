<template>
  <div id="app-mobile">
    <Navbar />
    <Notification v-bind:dataTitle="dataTitle" v-bind:dataText="dataText"/>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/NavbarMobile/NavbarMobile.vue";
import Notification from "~/components/Notification/Notification.vue";
import Footer from "~/components/FooterMobile/FooterMobile.vue";
export default {
  components: {
    Navbar,
    Notification,
    Footer,
  },
  data() {
    return {
      dataText: "Try the new 480p quality.",
      dataTitle: "New Update!",
    };
  },
};
</script>

<style lang="scss">
@import "../assets/base-style-mobile.scss";
</style>
