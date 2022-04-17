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
        <div
          v-for="jav in javs"
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
          <div class="row row-title">
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
        <div v-if="$device.isDesktop" class="col-lg-5">
          <div class="row row-title">
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
    <div v-if="$device.isMobile" class="need-space"></div>
    <div v-if="$device.isMobile" class="need-space"></div>
    <div class="need-space"></div>
  </div>
</template>

<script>
import axios from "axios";

import CardJavPoster from "~/components/Cards/CardJavPoster.vue";
import CardScene from "~/components/Cards/CardScene";
import CardIdol from "~/components/Cards/CardIdol00";

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
  async asyncData({ error, $errorHandler }) {
    try {
      const scenes = await axios.get(
        "https://jav.souzou.dev/jav4free/scenes/getLatestScenes"
      );
      const javs = await axios.get(
        "https://jav.souzou.dev/jav4free/javs/",
        {
          headers: {
            quantity: 4,
            empty: "false",
          },
        }
      );
      const idols = await axios.get(
        "https://jav.souzou.dev/jav4free/idols/getRandomIdols"
      );
      return {
        javs: javs.data.javs,
        scenes: scenes.data.scenes,
        idols: idols.data.idols,
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