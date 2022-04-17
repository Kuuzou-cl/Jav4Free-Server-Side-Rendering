<template>
  <div class="container-fluid no-margin no-padding">
    <div class="container-fluid">
      <div class="row row-title">
        <div class="col-lg-12 text-center">
          <h4>{{ idol.name }} | JAV Idol</h4>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-2">
            <CardIdol
              v-bind:dataId="idol._id"
              v-bind:dataName="idol.name"
              v-bind:dataUrl="idol.imageUrl"
            />
          </div>
          <div class="col-lg-10">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CardIdol from "../../../../components/Cards/CardIdol00";
import CardJav from "~/components/Cards/CardScene";

export default {
  name: "idol",
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardIdol,
    CardJav,
  },
  data() {
    return {
      prevPages: null,
      nextPages: null,
    };
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
            ", find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.",
        },
      ],
    };
  },
  async asyncData({ params, error, $errorHandler }) {
    let page = params.page;
    if (
      page == null ||
      page == "" ||
      page == "undefined" ||
      page == undefined
    ) {
      page = "1";
    }
    let idolId = params.id;

    try {
      const idol = await axios.get(
        "https://jav.souzou.dev/jav4free/idols/" + idolId
      );
      const javs = await axios.get(
        "https://jav.souzou.dev/jav4free/scenes/getSceneByIdol/" +
          page +
          "/" +
          idolId
      );
      return {
        titleI: idol.data.idol.name,
        idol: idol.data.idol,
        javs: javs.data.scenes,
        page: page,
        nextPage: javs.data.nextPage,
        lastPage: javs.data.lastPage,
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
      this.$router.push({ path: "/idols/" + newPage + "/" + this.idol._id });
    },
    prevClick() {
      var newPage = Number(this.page) - 1;
      this.$router.push({ path: "/idols/" + newPage + "/" + this.idol._id });
    },
    pullPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({ path: "/idols/" + newPage + "/" + this.idol._id });
    },
    pushPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({ path: "/idols/" + newPage + "/" + this.idol._id });
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