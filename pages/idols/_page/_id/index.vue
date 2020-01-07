<template>
  <div class="container-fluid">
    <Crumbs />
    <div class="need-space"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div class="row">
            <h6 class="title-white text-left">{{idol.name}} | JAV Idol</h6>
          </div>
          <div class="row">
            <CardIdol
              v-bind:dataId="idol._id"
              v-bind:dataName="idol.name"
              v-bind:dataUrl="idol.imageUrl"
            />
          </div>
          <div class="row">
            <h6 class="title-white text-left">Featured Videos | {{javs.length}} JAV's</h6>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"></div>
      </div>
    </div>
    <div class="need-space"></div>
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardIdol from "../../../../components/Cards/CardIdol00";

export default {
  name: "idol",
  components: {
    Crumbs,CardIdol
  },
  async asyncData({ params }) {
    let page = params.page;
    if (page == null || page == "") {
      page = "1";
    }
    let idolId = params.id;
    let idol = await axios.get(
      "https://jav.souzou.dev/jav4free/idols/" + idolId
    );
    let javs = await axios.get(
      "https://jav.souzou.dev/jav4free/javs/getJavByIdol/" + page + "/" + idolId
    );
    return {
      idol: idol.data.idol,
      javs: javs.data.javs,
      page: page,
      nextPage: javs.data.nextPage
    };
  },
  beforeCreate(){
    let routePage = "idols/" + this.$route.params.page + "/" + this.$route.params.id;
    this.$store.dispatch("addCrumb", {page:"Idol", show:this.$route.params.id,route:routePage});
  }
};
</script>
