<template>
  <div>
    <div v-if="$device.isDesktop" class="container-fluid">
      <div class="need-space"></div>
      <div class="container content-jav">
        <div class="row">
          <div class="col-lg-9 text-center"><DesktopAdBanner /></div>
        </div>
        <div class="row">
          <div class="col-lg-9">
            <div class="container-jav">
              <FluidPlayer v-bind:jav="scene" />
              <div class="jav-title">
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <p class="title">{{ getName(scene.name) }}</p>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <div class="btn btn-options">
                      <p>Report a bug</p>
                      <font-awesome-icon
                        :icon="['fas', 'bug']"
                        class="bug-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-center">
            <DesktopSideAdBanner />
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row justify-content-center">
          <VideoSlider />
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

import CardJav from "~/components/Cards/CardJav01";
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
    CardJav,
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
      title: this.SceneTitle + " | Jav4Free | " + this.SceneCode,
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, watch " +
            this.SceneTitle +
            " , " +
            this.SceneCode +
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
    let scene = await axios
      .get("https://jav.souzou.dev/jav4free/scenes/" + id)
      .catch((e) => {
        console.log(e);
      });

    return {
      SceneTitle: scene.data.scene.name,
      SceneCode: scene.data.jav.code,
      scene: scene.data.scene,
      categories: scene.data.categories,
      idols: scene.data.idols,
    };
  },
  beforeCreate() {},
  methods: {
    addToFavorites: function (_id) {
      this.$store.dispatch("addToFavorites", { javId: _id });
    },
    getName: function (_name) {
      let newName;
      if (_name.length > 180) {
        newName = _name.slice(0, 180) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss">
</style>