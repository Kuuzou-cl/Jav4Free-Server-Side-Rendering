<template>
  <div class="container-fluid">
    <Crumbs />
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h6 class="title-white text-left">Category - {{category.name}} | Latest JAV's</h6>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <h1>{{ page }}</h1>
    </div>
    <div class="need-space"></div>
    <div class="need-space"></div>
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";

export default {
  name: "category",
  components: { Crumbs },
  async asyncData({ params }) {
    let page = params.page;
    if (page == null || page == "") {
      page = "1";
    }
    let categoryId = params.id;
    let category = await axios.get(
      "https://jav.souzou.dev/jav4free/categories/" + categoryId
    );
    let javs = await axios.get(
      "https://jav.souzou.dev/jav4free/javs/getJavByCategory/" +
        page +
        "/" +
        categoryId
    );
    return {
      category: category.data.category,
      javs: javs.data.javs,
      page: page
    };
  },
  beforeCreate(){
    let routePage = "categories/" + this.$route.params.page + "/" + this.$route.params.id;
    this.$store.dispatch("addCrumb", {page:"Category", show:this.$route.params.id,route:routePage});
  }
};
</script>

<style scoped>
</style>