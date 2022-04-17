<template>
  <div class="container-fluid no-margin no-padding">
    <div class="container-fluid">
      <div class="row row-title">
        <div class="col-lg-12 text-center">
          <h4>Category - {{ category.name }} | Latest Videos</h4>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div
            v-for="scene in scenes"
            :key="scene._id"
            class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
          >
            <CardJav v-bind:dataJav="scene" />
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 ol-md-12 col-sm-12 col-xs-12">
            <div class="pagination">
              <button
                v-if="page != 1"
                @click="prevClick()"
                type="button"
                class="btn paginate-prev"
              >
                Prev
              </button>
              <button
                v-if="$device.isDesktop"
                v-for="(prevPage, index) in previousPages"
                :key="index"
                type="button"
                class="btn paginate-index"
                @click="pullPage(Number(prevPage))"
              >
                {{ prevPage }}
              </button>
              <button disabled type="button" class="btn paginate-actual">
                {{ page }}
              </button>
              <button
                v-if="$device.isDesktop"
                v-for="(nextPage, index) in actualNextPages"
                :key="index"
                type="button"
                class="btn paginate-index"
                @click="pushPage(Number(nextPage))"
              >
                {{ nextPage }}
              </button>
              <button
                v-if="page < lastPage - 1 && $device.isDesktop"
                disabled
                type="button"
                class="btn paginate-index"
              >
                ...
              </button>
              <button
                v-if="page != lastPage && lastPage != 0 && $device.isDesktop"
                type="button"
                @click="pushPage(Number(lastPage))"
                class="btn paginate-index"
              >
                {{ Number(lastPage) }}
              </button>
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
      <div v-if="$device.isMobile" class="need-space"></div>
      <div v-if="$device.isMobile" class="need-space"></div>
      <div v-if="$device.isMobile" class="need-space"></div>
      <div v-if="$device.isMobile" class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CardJav from "~/components/Cards/CardScene";

export default {
  name: "category",
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: { CardJav },
  data() {
    return {
      prevPages: null,
      nextPages: null,
    };
  },
  head() {
    return {
      title: this.titleC + " Videos | Jav4Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Here you can watch" +
            this.titleC +
            " porn videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.",
        },
      ],
    };
  },
  async asyncData({ params, error, $errorHandler }) {
    try {
      let page = params.page;
      if (page == null || page == "") {
        page = "1";
      }
      let categoryId = params.id;
      let category = await axios.get(
        "https://jav.souzou.dev/jav4free/categories/" + categoryId
      );
      let scenes = await axios.get(
        "https://jav.souzou.dev/jav4free/scenes/getSceneByCategory/" +
          page +
          "/" +
          categoryId
      );
      return {
        titleC: category.data.category.name,
        category: category.data.category,
        scenes: scenes.data.scenes,
        page: page,
        nextPage: scenes.data.nextPage,
        lastPage: scenes.data.lastPage,
      };
    } catch (errors) {
      const errorResponse = $errorHandler.setAndParse(errors);
      error({
        statusCode: errorResponse.status,
        message: errorResponse.message,
      });
    }
  },
  methods: {
    nextClick() {
      var newPage = Number(this.page) + 1;
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id,
      });
    },
    prevClick() {
      var newPage = Number(this.page) - 1;
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id,
      });
    },
    pullPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id,
      });
    },
    pushPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id,
      });
    },
  },
  computed: {
    previousPages() {
      this.prevPages = [];
      for (let index = 1; index < Number(this.page); index++) {
        this.prevPages.push(index);
      }
      if (this.prevPages.length > 4) {
        return this.prevPages.slice(
          this.prevPages.length - 4,
          this.prevPages.length
        );
      } else {
        return this.prevPages;
      }
    },
    previousPagesMobile() {
      this.prevPages = [];
      for (let index = 1; index < Number(this.page); index++) {
        this.prevPages.push(index);
      }
      if (this.prevPages.length > 2) {
        return this.prevPages.slice(
          this.prevPages.length - 2,
          this.prevPages.length
        );
      } else {
        return this.prevPages;
      }
    },
    actualNextPages() {
      this.nextPages = [];
      for (
        let index = Number(this.page) + 1;
        index < Number(this.lastPage);
        index++
      ) {
        this.nextPages.push(index);
      }
      if (this.nextPages.length > 4) {
        return this.nextPages.slice(0, 4);
      } else {
        return this.nextPages;
      }
    },
    actualNextPages() {
      this.nextPages = [];
      for (
        let index = Number(this.page) + 1;
        index < Number(this.lastPage);
        index++
      ) {
        this.nextPages.push(index);
      }
      if (this.nextPages.length > 4) {
        return this.nextPages.slice(0, 4);
      } else {
        return this.nextPages;
      }
    },
  },
};
</script>