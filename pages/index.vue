<template>
  <div class="container-fluid no-margin no-padding">
    <div class="container-fluid">
      <div class="row row-title">
        <div class="col-lg-12 text-center">
          <h4>Newest AV Added</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid no-margin no-padding">
      <div class="row width-fix no-margin">
        <div v-for="jav in javs" :key="jav.id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3 no-padding">
          <CardJavPoster v-bind:dataJav="jav" />
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container-fluid">
      <div class="row row-title">
        <div class="col-lg-12 text-center">
          <h4>Most Viewed AV Scenes</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid no-margin no-padding">
      <div class="row width-fix no-margin">
        <div v-for="scene in mostViewed" :key="scene.id" class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <CardScene v-bind:dataJav="scene" />
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7">
          <div class="row row-title">
            <div class="col-lg-12 text-center">
              <h4>Newest AV Scenes</h4>
            </div>
          </div>
          <div class="row">
            <div v-for="scene in scenes" :key="scene.id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
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
        <div v-if="$device.isDesktopOrTablet" class="col-lg-5">
          <div class="row row-title">
            <div class="col-lg-12 text-center">
              <h4>Featured AV Idols</h4>
            </div>
          </div>
          <div class="row">
            <div v-for="idol in idols" :key="idol._id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3 no-padding">
              <CardIdol v-bind:dataId="idol.id" v-bind:dataName="idol.name" v-bind:dataUrl="idol.image"></CardIdol>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <script async type="text/javascript" src="https://a.realsrv.com/ad-provider.js"></script>
              <ins class="adsbyexoclick" data-zoneid="4445412"></ins>
              <script>
                (AdProvider = window.AdProvider || []).push({"serve": {}});
              </script>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile" class="need-space"></div>
    <div v-if="$device.isMobile" class="need-space"></div>
    <div class="need-space"></div>
  </div>
</template>

<script>
import axios from "axios";

import CardJavPoster from "~/components/Cards/CardJavPoster.vue";
import CardScene from "~/components/Cards/CardScene.vue";
import CardIdol from "~/components/Cards/CardIdol00.vue";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardJavPoster,
    CardScene,
    CardIdol,
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
  async asyncData({ error, $errorHandler, $device }) {
    try {
      let javs;
      let mostViewed;
      let idols;
      let scenes;
      if ($device.isMobile) {
        javs = await axios.get("https://jav.souzou.dev/javs/newest?limit=2");
        mostViewed = await axios.get("https://jav.souzou.dev/scenes/byviews?limit=3");
        idols = await axios.get("https://jav.souzou.dev/idols/featured?limit=1");
        scenes = await axios.get("https://jav.souzou.dev/scenes/scenes?limit=6&order=desc");
      }else{
        javs = await axios.get("https://jav.souzou.dev/javs/newest?limit=4");
        mostViewed = await axios.get("https://jav.souzou.dev/scenes/byviews?limit=6");
        idols = await axios.get("https://jav.souzou.dev/idols/featured?limit=4");
        scenes = await axios.get("https://jav.souzou.dev/scenes/scenes?limit=12&order=desc");
      }
      return {
        javs: javs.data.data.Javs,
        scenes: scenes.data.data.Scenes,
        idols: idols.data.data.Idols,
        mostViewed: mostViewed.data.data
      };
    } catch (errors) {
      const errorResponse = $errorHandler.setAndParse(errors);
      error({
        statusCode: errorResponse.status,
        message: errorResponse.message,
      });
    }
  },
};
</script>

<style lang="scss">
@import "~/assets/base-style.scss";
</style>