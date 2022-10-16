<template>
  <div class="container-fluid no-margin no-padding">
    <div v-if="$device.isMobile" class="need-space"></div>
    <div class="container content-jav">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <img :src="jav.image" />
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <div class="row">
                  <p class="info">Jav Title : {{ jav.title }}</p>
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
                    :key="category.id"
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
                    :key="idol.id"
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
      <div class="row justify-content-center recommended-title">
        <h3>Scenes from this JAV</h3>
      </div>
      <div class="row">
        <div
          v-for="scene in scenes"
          :key="scene.id"
          class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
        >
          <CardJav v-bind:dataJav="scene" />
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
    </div>
    <div v-if="$device.isMobile" class="need-space"></div>
    <div v-if="$device.isMobile" class="need-space"></div>
    <div v-if="$device.isMobile" class="need-space"></div>
  </div>
</template>

<script>
import axios from "axios";

import CardJav from "~/components/Cards/CardScene.vue";
import CardJav02 from "~/components/Cards/CardJav02.vue";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  name: "JAV",
  components: {
    CardJav,
    CardJav02
  },
  data() {
    return {};
  },
  head() {
    return {
      title: this.jav.code + " | Jav4Free | " + this.jav.title,
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, watch " +
            this.jav.code +
            " , " +
            this.jav.title +
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
    let jav = await axios.get("https://jav.souzou.dev/javs/jav?code=" + id);
    return {
      jav: jav.data.data.Jav[0],
      categories: jav.data.data.Categories,
      scenes: jav.data.data.Scenes,
      idols: jav.data.data.Idols
    };
  }
};
</script>