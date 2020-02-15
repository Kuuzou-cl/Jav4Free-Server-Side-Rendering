<template>
  <div class="container-fluid">
    <Crumbs />
    <div class="need-space"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div class="row">
            <h6 class="title-white text-left">{{ idol.name }} | JAV Idol</h6>
          </div>
          <div class="row">
            <CardIdol
              v-bind:dataId="idol._id"
              v-bind:dataName="idol.name"
              v-bind:dataUrl="idol.imageUrl"
            />
          </div>
          <div class="row">
            <h6 class="title-white text-left">
              Featured Videos | {{ javs.length }} JAV's
            </h6>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <div class="row justify-content-center">
            <!-- JuicyAds v3.1 -->
            <script
              type="application/javascript"
              data-cfasync="false"
              async
              src="https://poweredby.jads.co/js/jads.js"
            ></script>
            <ins id="825394" data-width="908" data-height="270"></ins>
            <script type="application/javascript" data-cfasync="false" async>
              (adsbyjuicy = window.adsbyjuicy || []).push({ adzone: 825394 });
            </script>
            <!--JuicyAds END-->
          </div>
          <div class="row justify-content-center">
            <!-- JuicyAds v3.1 -->
            <script
              type="application/javascript"
              data-cfasync="false"
              async
              src="https://poweredby.jads.co/js/jads.js"
            ></script>
            <ins id="825395" data-width="908" data-height="270"></ins>
            <script type="application/javascript" data-cfasync="false" async>
              (adsbyjuicy = window.adsbyjuicy || []).push({ adzone: 825395 });
            </script>
            <!--JuicyAds END-->
          </div>
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
                v-if="page != 1"
                @click="prevClick()"
                type="button"
                class="btn paginate-prev"
              >
                Prev
              </button>
              <button v-else disabled type="button" class="btn paginate-prev">
                Prev
              </button>
            </div>
          </div>
          <div v-if="Number(page) - 1 != 1 && Number(page) - 1 != 0">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                type="button"
                @click="pullPage(2)"
                class="btn paginate-index"
              >
                {{ Number(page) - 2 }}
              </button>
            </div>
          </div>
          <div v-if="Number(page) != 1">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                v-if="page != 1"
                @click="pullPage(1)"
                type="button"
                class="btn paginate-index"
              >
                {{ Number(page) - 1 }}
              </button>
            </div>
          </div>
          <div>
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button disabled type="button" class="btn paginate-index">
                {{ page }}
              </button>
            </div>
          </div>
          <div v-if="nextPage">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                type="button"
                @click="pushPage(1)"
                class="btn paginate-index"
              >
                {{ Number(page) + 1 }}
              </button>
            </div>
          </div>
          <div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-xs-6 text-center">
              <button
                v-if="nextPage"
                type="button"
                class="btn paginate-next"
                @click="nextClick()"
              >
                Next
              </button>
              <button v-else disabled type="button" class="btn paginate-next">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row">
        <div
          v-for="jav in javs"
          :key="jav._id"
          class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
        >
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
                v-if="page != 1"
                @click="prevClick()"
                type="button"
                class="btn paginate-prev"
              >
                Prev
              </button>
              <button v-else disabled type="button" class="btn paginate-prev">
                Prev
              </button>
            </div>
          </div>
          <div v-if="Number(page) - 1 != 1 && Number(page) - 1 != 0">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                type="button"
                @click="pullPage(2)"
                class="btn paginate-index"
              >
                {{ Number(page) - 2 }}
              </button>
            </div>
          </div>
          <div v-if="Number(page) != 1">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                v-if="page != 1"
                @click="pullPage(1)"
                type="button"
                class="btn paginate-index"
              >
                {{ Number(page) - 1 }}
              </button>
            </div>
          </div>
          <div>
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button disabled type="button" class="btn paginate-index">
                {{ page }}
              </button>
            </div>
          </div>
          <div v-if="nextPage">
            <div class="col-lg-1 d-none d-lg-block text-center">
              <button
                type="button"
                @click="pushPage(1)"
                class="btn paginate-index"
              >
                {{ Number(page) + 1 }}
              </button>
            </div>
          </div>
          <div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-xs-6 text-center">
              <button
                v-if="nextPage"
                type="button"
                class="btn paginate-next"
                @click="nextClick()"
              >
                Next
              </button>
              <button v-else disabled type="button" class="btn paginate-next">
                Next
              </button>
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
import CardIdol from "../../../../components/Cards/CardIdol00";
import CardJav from "~/components/Cards/CardJav00";

export default {
  name: "idol",
  components: {
    Crumbs,
    CardIdol,
    CardJav
  },
  head() {
    return {
      title: this.titleI + " Videos | Jav4Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Here you can watch every porn video of " +
            this.titleI +
            ", find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
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
      titleI: idol.data.idol.name,
      idol: idol.data.idol,
      javs: javs.data.javs,
      page: page,
      nextPage: javs.data.nextPage
    };
  },
  beforeCreate() {
    let routePage =
      "idols/" + this.$route.params.page + "/" + this.$route.params.id;
    this.$store.dispatch("addCrumb", {
      page: "Idol",
      show: this.$route.params.id,
      route: routePage
    });
  },
  beforeCreate() {
    let routePage = "javs/" + this.$route.params.page;
    this.$store.dispatch("addCrumb", {
      page: "Javs",
      show: "Recently Added Videos",
      route: routePage
    });
  },
  methods: {
    nextClick() {
      var newPage = Number(this.page) + 1;
      this.$router.push({ path: "/idols/" + newPage + "/" + this.idol._id });
    },
    prevClick() {
      var newPage = Number(this.page) - 1;
      this.$router.push({ path: "/idols/" + newPage + "/" + this.idol._id });
    },
    pullPage(indexPage) {
      var newPage = Number(this.page) - Number(indexPage);
      this.$router.push({ path: "/idols/" + newPage + "/" + this.idol._id });
    },
    pushPage(indexPage) {
      var newPage = Number(this.page) + Number(indexPage);
      this.$router.push({ path: "/idols/" + newPage + "/" + this.idol._id });
    }
  }
};
</script>
