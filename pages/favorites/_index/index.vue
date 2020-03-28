<template>
  <div class="container-fluid content">
    <Crumbs v-if="this.$store.state.breadCrumbs" />
    <div v-if="$device.isDesktop" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h6 class="title-white text-left">Your favorites videos</h6>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div v-if="$device.isDesktop" class="container">
      <div class="row">
        <div v-for="jav in favorites" :key="jav._id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <CardJav v-bind:dataJav="jav" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardJav from "~/components/Cards/CardJav00";
import CardJavMobile from "~/components/Cards/CardJav00Mobile";
export default {
  name: "Favorites",
  components: {
    Crumbs,
    CardJav,
    CardJavMobile
  },
  head() {
    return {
      title:
        "Your favorites videos | Favorites on Jav4Free | Japanese Adult Videos for Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Here you can find almost every japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
  async asyncData({ params, store }) {
    let page = params.index;
    if (
      page == null ||
      page == "" ||
      page == "undefined" ||
      page == undefined
    ) {
      page = "1";
    }
    var dataFavorites = {
      javsBatch: store.getters.getFavorites
    };
    const favorites = await axios.post(
      "https://jav.souzou.dev/jav4free/javs/getJavsByBatch/" + page,
      dataFavorites
    );
    return {
      favorites: favorites.data.history,
      nextPage: favorites.data.nextPage
    };
  },
  beforeCreate() {
    this.$store.dispatch("addCrumb", {
      page: "Favorites",
      show: "Favorites",
      route: "favorites/1"
    });
  }
};
</script>
<style lang="scss">
</style>