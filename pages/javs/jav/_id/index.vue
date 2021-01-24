<template>
  <div>
    <div v-if="$device.isDesktop" class="container-fluid">
      <div class="need-space"></div>
      <div class="container content-jav">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <img :src="jav.imageUrl" />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                  <div class="row">
                    <p class="info">Jav Title : {{ jav.name }}</p>
                  </div>
                  <div class="row">
                    <p class="info">Jav Code : {{ jav.code }}</p>
                  </div>
                  <div class="row">
                    <p class="info">Categories</p>
                  </div>
                  <div class="row">
                    <p
                      class="info-secondary"
                      v-for="category in categories"
                      :key="category._id"
                    >
                      {{ category.name }}
                    </p>
                  </div>
                  <div class="row">
                    <p class="info">Idols</p>
                  </div>
                  <div class="row">
                    <p
                      class="info-secondary"
                      v-for="idol in idols"
                      :key="idol._id"
                    >
                      {{ idol.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row">
          <div
            v-for="scene in scenes"
            :key="scene._id"
            class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
          >
            <CardJav v-bind:dataJav="scene" />
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="row justify-content-center recommended-title">
              <h3>Recommended videos</h3>
            </div>
            <div class="container-recommended">
              <div class="row">
                <div
                  v-for="jav in relatedJavs"
                  :key="jav._id"
                  class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
                >
                  <CardJav02 v-bind:dataJav="jav" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile" class="container-fluid">
      <div class="need-space"></div>
      <div class="container-fluid content-jav">
        <div class="row justify-content-center">
          <MobileAdBanner />
        </div>
        <div class="row">
          <div class="container-jav">
            <FluidPlayer v-bind:jav="jav" />
            <div class="jav-title-mobile">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p class="title">{{ getName(jav.name) }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="btn btn-options" @click="addToFavorites(jav._id)">
                    <font-awesome-icon
                      :icon="['fas', 'heart']"
                      v-if="!checkFavorite"
                      class="favorite-icon"
                    />
                    <font-awesome-icon
                      :icon="['fas', 'heart']"
                      v-if="checkFavorite"
                      class="favorite-icon-active"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="jav-extra">
              <span>Code: {{ jav.code }}</span>
            </div>
            <div class="jav-extra">
              <span>
                Categories:
                <nuxt-link
                  v-for="category in categories"
                  :key="category._id"
                  :to="'/categories/1/' + category._id"
                  tag="a"
                  class="links"
                  >{{ category.name }},</nuxt-link
                >
              </span>
            </div>
            <div class="jav-extra">
              <span>
                Idols:
                <nuxt-link
                  v-for="idol in idols"
                  :key="idol._id"
                  :to="'/idols/1/' + idol._id"
                  tag="a"
                  class="links"
                  >{{ idol.name }},</nuxt-link
                >
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="container-recommended-mobile">
            <div class="row">
              <div
                v-for="jav in relatedJavs"
                :key="jav._id"
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              >
                <CardJavMobile v-bind:dataJav="jav" />
              </div>
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
import CardJav02 from "~/components/Cards/CardJav02";
import CardJavMobile from "~/components/Cards/CardJav01Mobile";
import VideoSlider from "~/components/ExoclickAds/VideoSlider.vue";
import DesktopAdBanner from "~/components/ExoclickAds/DesktopAdBanner.vue";
import DesktopSideAdBanner from "~/components/ExoclickAds/DesktopSideAdBanner.vue";
import MobileAdBanner from "~/components/ExoclickAds/MobileAdBanner.vue";
import FluidPlayer from "~/components/FluidPlayer/FluidPlayer.vue";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  name: "JAV",
  components: {
    Crumbs,
    CardJav,
    CardJav02,
    CardJavMobile,
    VideoSlider,
    FluidPlayer,
    DesktopAdBanner,
    DesktopSideAdBanner,
    MobileAdBanner,
  },
  data() {
    return {};
  },
  head() {
    return {
      title: this.titleJ + " | Jav4Free | " + this.detailJ,
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, watch " +
            this.titleJ +
            " , " +
            this.detailJ +
            " , Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.",
        },
      ],
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    if (id == null || id == "") {
      id = "";
    }
    let jav = await axios
      .get("https://jav.souzou.dev/jav4free/javs/" + id)
      .catch((e) => {
        console.log(e);
      });
    let related = await axios
      .get("https://jav.souzou.dev/jav4free/javs/getRelatedJavs/" + id)
      .catch((e) => {
        console.log(e);
      });
    return {
      titleJ: jav.data.jav.code,
      detailJ: jav.data.jav.name,
      jav: jav.data.jav,
      categories: jav.data.categories,
      scenes: jav.data.scenes,
      idols: jav.data.idols,
      relatedJavs: related.data.relatedJavs,
    };
  },
  beforeCreate() {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
</style>