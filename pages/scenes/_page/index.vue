<template>
  <div class="container-fluid no-margin no-padding">
    <div class="container-fluid">
      <div class="row row-title">
        <div class="col-lg-12 text-center">
          <h4>Recently Added Videos</h4>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div
            v-for="jav in videos"
            :key="jav.id"
            class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
          >
            <CardScene v-bind:dataJav="jav" />
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
      <div class="need-space"></div>
      <div v-if="$device.isMobile" class="need-space"></div>
      <div v-if="$device.isMobile" class="need-space"></div>
      <div v-if="$device.isMobile" class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CardScene from "~/components/Cards/CardScene.vue";

export default {
  name: "RecentJavs",
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardScene,
  },
  data() {
    return {
      prevPages: null,
      nextPages: null,
    };
  },
  head() {
    return {
      title: "All Videos | Jav4Free | Japanese Adult Videos for Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Uploads every day, free streaming videos, Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.",
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
      let videos = await axios.get("https://jav.souzou.dev/scenes?page="+page+"&order=desc");
      return {
        videos: videos.data.data.Scenes,
        page: videos.data.data.page,
        nextPage: videos.data.data.nextPage,
        lastPage: videos.data.data.lastPage,
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
      this.$router.push({ path: "/scenes/" + newPage });
    },
    prevClick() {
      var newPage = Number(this.page) - 1;
      this.$router.push({ path: "/scenes/" + newPage });
    },
    pullPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({ path: "/scenes/" + newPage });
    },
    pushPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({ path: "/scenes/" + newPage });
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
    actualNextPagesMobile() {
      this.nextPages = [];
      for (
        let index = Number(this.page) + 1;
        index < Number(this.lastPage);
        index++
      ) {
        this.nextPages.push(index);
      }
      if (this.nextPages.length > 2) {
        return this.nextPages.slice(0, 2);
      } else {
        return this.nextPages;
      }
    },
  },
};
</script>