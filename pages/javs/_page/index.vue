<template>
  <div class="container-fluid">
    <Crumbs />
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h6 class="title-white text-left">
            Recently Added Videos
          </h6>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row">
        <div class="pagination">
          <div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-xs-6">
              <button v-if="page!=1" @click="prevClick()" type="button" class="btn paginate-prev">Prev</button>
              <button v-else disabled type="button" class="btn paginate-prev">Prev</button>
            </div>
          </div>
          <div v-if="Number(page) - 1 !=1 && Number(page) - 1 != 0">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button type="button"  @click="pullPage(2)" class="btn paginate-index">{{Number(page) - 2}}</button>
            </div>
          </div>
          <div v-if="Number(page)!=1">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button v-if="page!=1"  @click="pullPage(1)" type="button" class="btn paginate-index">{{Number(page) - 1}}</button>
            </div>
          </div>
          <div>
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button disabled type="button" class="btn paginate-index">{{page}}</button>
            </div>
          </div>
          <div v-if="nextPage">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button type="button" @click="pushPage(1)" class="btn paginate-index">{{Number(page) + 1}}</button>
            </div>
          </div>
          <div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-xs-6 text-center">
              <button
                v-if="nextPage"
                type="button"
                class="btn paginate-next"
                @click="nextClick()"
              >Next</button>
              <button v-else disabled type="button" class="btn paginate-next">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div v-if="$device.isDesktopOrTablet" class="container">
      <div class="row">
        <div v-for="jav in javs" :key="jav._id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <CardJav v-bind:dataJav="jav" />
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile" class="container">
      <div class="row">
        <div v-for="jav in javs" :key="jav._id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <CardJavMobile v-bind:dataJav="jav" />
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row">
        <div class="pagination">
          <div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-xs-6">
              <button v-if="page!=1" @click="prevClick()" type="button" class="btn paginate-prev">Prev</button>
              <button v-else disabled type="button" class="btn paginate-prev">Prev</button>
            </div>
          </div>
          <div v-if="Number(page) - 1 !=1 && Number(page) - 1 != 0">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button type="button"  @click="pullPage(2)" class="btn paginate-index">{{Number(page) - 2}}</button>
            </div>
          </div>
          <div v-if="Number(page)!=1">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button v-if="page!=1"  @click="pullPage(1)" type="button" class="btn paginate-index">{{Number(page) - 1}}</button>
            </div>
          </div>
          <div>
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button disabled type="button" class="btn paginate-index">{{page}}</button>
            </div>
          </div>
          <div v-if="nextPage">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button type="button" @click="pushPage(1)" class="btn paginate-index">{{Number(page) + 1}}</button>
            </div>
          </div>
          <div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-xs-6 text-center">
              <button
                v-if="nextPage"
                type="button"
                class="btn paginate-next"
                @click="nextClick()"
              >Next</button>
              <button v-else disabled type="button" class="btn paginate-next">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardJav from "~/components/Cards/CardJav00";
import CardJavMobile  from "~/components/Cards/CardIdol00Mobile";

export default {
  name: "RecentJavs",
  components: {
    Crumbs,
    CardJav,
    CardJavMobile
  },
  async asyncData({ params }) {
    let page = params.page;
    if (page == null || page == "") {
      page = "1";
    }
    let javs = await axios.get(
      "https://jav.souzou.dev/jav4free/javs/getJavsByPage/" + page
    );
    return {
      javs: javs.data.javs,
      page: page,
      nextPage: javs.data.nextPage
    };
  },
  beforeCreate(){
    let routePage = "javs/" + this.$route.params.page;
    this.$store.dispatch("addCrumb", {page:"Javs", show:"Recently Added Videos",route:routePage});
  },
  methods: {
    nextClick(){
      var newPage = Number( this.page ) + 1
      this.$router.push({ path: "/javs/"+ newPage });
    },
    prevClick(){
      var newPage = Number( this.page ) - 1
      this.$router.push({ path: "/javs/"+ newPage });
    },
    pullPage(indexPage){
      var newPage = Number( this.page ) - Number(indexPage)
      this.$router.push({ path: "/javs/"+ newPage });
    },
    pushPage(indexPage){
      var newPage = Number( this.page ) + Number(indexPage)
      this.$router.push({ path: "/javs/"+ newPage });
    }
  }
};
</script>

<style lang="scss">
</style>