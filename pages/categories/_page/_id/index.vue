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
      <div class="row">
        <div class="pagination">
          <div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-xs-6">
              <button
                v-if="page!=1"
                @click="prevClick()"
                type="button"
                class="btn paginate-prev"
              >Prev</button>
              <button v-else disabled type="button" class="btn paginate-prev">Prev</button>
            </div>
          </div>
          <div v-if="Number(page) - 1 !=1 && Number(page) - 1 != 0">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                type="button"
                @click="pullPage(2)"
                class="btn paginate-index"
              >{{Number(page) - 2}}</button>
            </div>
          </div>
          <div v-if="Number(page)!=1">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                v-if="page!=1"
                @click="pullPage(1)"
                type="button"
                class="btn paginate-index"
              >{{Number(page) - 1}}</button>
            </div>
          </div>
          <div>
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button disabled type="button" class="btn paginate-index">{{page}}</button>
            </div>
          </div>
          <div v-if="nextPage">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                type="button"
                @click="pushPage(1)"
                class="btn paginate-index"
              >{{Number(page) + 1}}</button>
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
    <div class="container">
      <div class="row">
        <div v-for="jav in javs" :key="jav._id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <CardJav v-bind:dataJav="jav" />
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row">
        <div class="pagination">
          <div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-xs-6">
              <button
                v-if="page!=1"
                @click="prevClick()"
                type="button"
                class="btn paginate-prev"
              >Prev</button>
              <button v-else disabled type="button" class="btn paginate-prev">Prev</button>
            </div>
          </div>
          <div v-if="Number(page) - 1 !=1 && Number(page) - 1 != 0">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                type="button"
                @click="pullPage(2)"
                class="btn paginate-index"
              >{{Number(page) - 2}}</button>
            </div>
          </div>
          <div v-if="Number(page)!=1">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                v-if="page!=1"
                @click="pullPage(1)"
                type="button"
                class="btn paginate-index"
              >{{Number(page) - 1}}</button>
            </div>
          </div>
          <div>
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button disabled type="button" class="btn paginate-index">{{page}}</button>
            </div>
          </div>
          <div v-if="nextPage">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                type="button"
                @click="pushPage(1)"
                class="btn paginate-index"
              >{{Number(page) + 1}}</button>
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
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardJav from "~/components/Cards/CardJav00";

export default {
  name: "category",
  components: { Crumbs, CardJav },
  head() {
    return {
      title: this.titleC + " Videos | Jav4Free",
      meta: [
        {
          name: "description",
          content: "Jav4Free, Here you can watch" + this.titleC + " porn videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
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
      titleC: category.data.category.name,
      category: category.data.category,
      javs: javs.data.javs,
      page: page,
      nextPage: javs.data.nextPage
    };
  },
  beforeCreate() {
    let routePage =
      "categories/" + this.$route.params.page + "/" + this.$route.params.id;
    this.$store.dispatch("addCrumb", {
      page: "Category",
      show: this.$route.params.id,
      route: routePage
    });
  },
  methods: {
    nextClick() {
      var newPage = Number(this.page) + 1;
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id
      });
    },
    prevClick() {
      var newPage = Number(this.page) - 1;
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id
      });
    },
    pullPage(indexPage) {
      var newPage = Number(this.page) - Number(indexPage);
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id
      });
    },
    pushPage(indexPage) {
      var newPage = Number(this.page) + Number(indexPage);
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id
      });
    }
  }
};
</script>

<style scoped>
</style>