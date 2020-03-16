<template>
  <div class="container-fluid content">
    <Crumbs />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h6 class="title-white text-left">All JAV Idols</h6>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
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
                type="button"
                @click="pullPage(1)"
                class="btn paginate-index"
              >{{Number(page) - 1}}</button>
            </div>
          </div>
          <div>
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button disabled type="button" class="btn paginate-index">{{Number(page)}}</button>
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
    <div v-if="$device.isDesktop" class="container">
      <div class="row justify-content-center">
        <div v-for="(idol,index) in idols" :key="index" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <CardIdol
            v-if="idol != null"
            v-bind:dataId="idol._id"
            v-bind:dataName="idol.name"
            v-bind:dataUrl="idol.imageUrl"
          ></CardIdol>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobileOrTablet" class="container">
      <div class="row justify-content-center">
        <div v-for="(idol,index) in idols" :key="index" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <CardIdolMobile
            v-if="idol != null"
            v-bind:dataId="idol._id"
            v-bind:dataName="idol.name"
            v-bind:dataUrl="idol.imageUrl"
          ></CardIdolMobile>
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
                type="button"
                @click="pullPage(1)"
                class="btn paginate-index"
              >{{Number(page) - 1}}</button>
            </div>
          </div>
          <div>
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button disabled type="button" class="btn paginate-index">{{Number(page)}}</button>
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
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardIdol from "~/components/Cards/CardIdol00";
import CardIdolMobile from "~/components/Cards/CardIdol00Mobile";

export default {
  name: "Idols",
  components: {
    Crumbs,
    CardIdol,
    CardIdolMobile
  },
  head() {
    return {
      title: "Idols on Jav4Free | Japanese Adult Videos for Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
  async asyncData({ params }) {
    let page = params.index;
    if (
      page == null ||
      page == "" ||
      page == "undefined" ||
      page == undefined
    ) {
      page = "1";
    }
    let idols = await axios.get(
      "https://jav.souzou.dev/jav4free/idols/getIdolsByPage/" + page
    );
    return {
      idols: idols.data.idols,
      page: page,
      nextPage: idols.data.nextPage
    };
  },
  beforeCreate() {
    let routePage = "idols/" + this.$route.params.index;
    this.$store.dispatch("addCrumb", {
      page: "Idols",
      show: "Idols",
      route: routePage
    });
  },
  methods: {
    nextClick() {
      var newPage = Number(this.page) + 1;
      this.$router.push({ path: "/idols/" + newPage });
    },
    prevClick() {
      var newPage = Number(this.page) - 1;
      this.$router.push({ path: "/idols/" + newPage });
    },
    pullPage(indexPage) {
      var newPage = Number(this.page) - Number(indexPage);
      this.$router.push({ path: "/idols/" + newPage });
    },
    pushPage(indexPage) {
      var newPage = Number(this.page) + Number(indexPage);
      this.$router.push({ path: "/idols/" + newPage });
    }
  }
};
</script>

<style lang="scss">
</style>