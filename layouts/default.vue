<template>
  <div id="app">
    <Navbar />
    <Notification v-bind:dataTitle="dataTitle" v-bind:dataText="dataText"/>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar/Navbar.vue";
import Notification from "~/components/Notification/Notification.vue";
import Footer from "~/components/Footer/Footer.vue";
export default {
  components: {
    Navbar,
    Notification,
    Footer,
  },
  data() {
    return {
      dataText: "Try the new 480p quality selection in the video player for slow connections.",
      dataTitle: "New Update!",
    };
  },
};
</script>

<style lang="scss">
@import "../assets/base-style.scss";
</style>
