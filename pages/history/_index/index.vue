<template>
  <div class="container-fluid content">
    <Crumbs v-if="!this.$store.state.breadCrumbs" />
    <div v-if="$device.isDesktop" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h6 class="title-white text-left">Your History</h6>
        </div>
      </div>
    </div>
     <div class="need-space"></div>
     <div v-if="$device.isDesktop" class="container">
      <div class="row">
        <div
          v-for="jav in history"
          :key="jav._id"
          class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
        >
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
  name: "History",
  components: {
    Crumbs,
    CardJav,
    CardJavMobile
  },
  head() {
    return {
      title:
        "What you have watched | History on Jav4Free | Japanese Adult Videos for Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Here you can find almost every japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
  async asyncData({ params,store }) {
    let page = params.index;
    if (
      page == null ||
      page == "" ||
      page == "undefined" ||
      page == undefined
    ) {
      page = "1";
    }
    var dataHistory = {
        javsBatch: store.getters.getHistory,
      };
    const history = await axios.post(
      "https://jav.souzou.dev/jav4free/javs/getJavsByBatch/" + page,dataHistory
    );
    return {
      history: history.data.history,
      nextPage: history.data.nextPage
    };
  },
  beforeCreate() {
    this.$store.dispatch("addCrumb", { page: "History", route: "" });
  }
};
</script>
<style lang="scss">
</style>