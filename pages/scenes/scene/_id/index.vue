<template>
  <div class="container-fluid no-margin no-padding">
    <div v-if="$device.isMobile" class="need-space"></div>
    <div class="container content-jav">
      <div class="row">
        <div class="col-lg-9">
          <div class="container-jav">
            <FluidPlayer v-bind:jav="this.scene" />
            <div class="jav-title">
              <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p class="title">
                    {{
                      scene.code +
                      " " +
                      getName(scene.name) +
                      " - Views: " +
                      scene.views
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 text-center">
          <div class="row">
            <div class="col-lg-12">
              <nuxt-link
                :to="'/javs/jav/' + jav._id"
                tag="img"
                :src="jav.imageUrl"
              >
              </nuxt-link>
            </div>
          </div>
          <div class="jav-extra">
            <span>
              JAV Code:
              <nuxt-link :to="'/javs/jav/' + jav._id" tag="a" class="links">{{
                jav.code
              }}</nuxt-link>
            </span>
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
          <div class="need-space"></div>
          <div class="row">
            <div class="col-lg-12">
              <div data-nat="3625"></div>
            </div>
          </div>
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
                v-for="scene in related"
                :key="scene._id"
                class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
              >
                <CardJav v-bind:dataJav="scene" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile" class="need-space"></div>
    <div v-if="$device.isMobile" class="need-space"></div>
    <div v-if="$device.isMobile" class="need-space"></div>
    <div v-if="$device.isMobile" class="need-space"></div>
  </div>
</template>

<script>
import axios from "axios";

import CardJav from "~/components/Cards/CardJav01";
import FluidPlayer from "~/components/FluidPlayer/FluidPlayer.vue";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  name: "JAV",
  components: {
    CardJav,
    FluidPlayer,
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
        console.log("error scene");
      });
    let responseView = await axios
      .get("https://jav.souzou.dev/jav4free/scenes/view/" + id)
      .catch((e) => {
        console.log(e);
      });
    let related = await axios
      .get("https://jav.souzou.dev/jav4free/scenes/getRelatedScenes/" + id)
      .catch((e) => {
        console.log("error related");
      });
    return {
      SceneTitle: scene.data.scene.name,
      SceneCode: scene.data.jav.code,
      scene: scene.data.scene,
      categories: scene.data.categories,
      idols: scene.data.idols,
      jav: scene.data.jav,
      related: related.data.relatedScenes,
      view: responseView.data.scene.view,
    };
  },
  beforeCreate() {},
  methods: {
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