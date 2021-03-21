<template>
  <div>
    <div v-if="$device.isDesktop" class="container-fluid no-margin no-padding">
      <Popunder />
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h4>Newest AV Added</h4>
          </div>
        </div>
      </div>
      <div class="container-fluid no-margin no-padding">
        <div class="row width-fix no-margin">
          <div
            v-for="jav in javsDesktop"
            :key="jav._id"
            class="col-lg-3 col-md-3 col-sm-3 col-xs-3 no-padding"
          >
            <CardJavPoster v-bind:dataJav="jav" />
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h4>Newest AV Scenes</h4>
              </div>
            </div>
            
            <div class="row">
              <div
                v-for="scene in scenes"
                :key="scene._id"
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
              >
                <CardScene v-bind:dataJav="scene" />
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <nuxt-link :to="'/scenes/1'" class="btn btn-more">
                  watch more AV scenes
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h4>Featured AV Idols</h4>
              </div>
            </div>
            <div class="row">
              <div
                v-for="idol in idols"
                :key="idol._id"
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3 no-padding"
              >
                <CardIdol
                  v-if="idol != null"
                  v-bind:dataId="idol._id"
                  v-bind:dataName="idol.name"
                  v-bind:dataUrl="idol.imageUrl"
                ></CardIdol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
    </div>
    <div v-if="$device.isMobile" class="container-fluid">
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <nuxt-link
              :to="'/categories/1/' + category1._id"
              class="btn btn-more"
            >
              Recommended Videos from "{{ category1.name }}"
              <font-awesome-icon :icon="['fas', 'plus']" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="row">
        <div
          v-for="jav in javsCategory1"
          :key="jav._id"
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <CardJavMobile v-bind:dataJav="jav" />
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <nuxt-link :to="'/javs/1'" class="btn btn-more">
              Recently Added Videos
              <font-awesome-icon :icon="['fas', 'plus']" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="row">
        <div
          v-for="jav in javs"
          :key="jav._id"
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <CardJavMobile v-bind:dataJav="jav" />
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardScene from "../components/Cards/CardScene";
import CardJavMobile from "../components/Cards/CardJav00Mobile";
import CardIdol from "../components/Cards/CardIdol00";
import CardIdolMobile from "../components/Cards/CardIdol00Mobile";
import Popunder from "~/components/ExoclickAds/Popunder.vue";
import CardJavPoster from "~/components/Cards/CardJavPoster.vue";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    Crumbs,
    CardScene,
    CardIdol,
    CardJavMobile,
    CardIdolMobile,
    Popunder,
    CardJavPoster,
  },
  head() {
    return {
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, watch every japanese adult video in HD and Free, Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.",
        },
      ],
    };
  },
  async asyncData({ store }) {
    const scenes = await axios
      .get("https://jav.souzou.dev/jav4free/scenes/getLatestScenes")
      .catch((e) => {
        console.log(e);
      });
    const javsMobile = await axios
      .get("https://jav.souzou.dev/jav4free/javs/", {
        headers: {
          quantity: 8,
        },
      })
      .catch((e) => {
        console.log(e);
      });
    const javsDesktop = await axios
      .get("https://jav.souzou.dev/jav4free/javs/", {
        headers: {
          quantity: 4,
        },
      })
      .catch((e) => {
        console.log(e);
      });
    const idols = await axios
      .get("https://jav.souzou.dev/jav4free/idols/getRandomIdols")
      .catch((e) => {
        console.log(e);
      });
    return {
      javsDesktop: javsDesktop.data.javs,
      scenes: scenes.data.scenes,
      javsMobile: javsMobile.data.javs,
      idols: idols.data.idols,
    };
  },
  beforeCreate() {
    this.$store.dispatch("addCrumb", { page: "Home", route: "" });
  },
  methods: {},
};
</script>

<style>
</style>