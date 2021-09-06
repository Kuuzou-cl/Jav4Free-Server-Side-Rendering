<template>
  <div>
    <div v-if="$device.isDesktop" class="container-fluid">
      <div class="need-space"></div>
      <div class="container content-jav">
        <div class="row">
          <div data-nat="3624"></div>
        </div>
        <div class="row">
          <div class="col-lg-9">
            <div class="container-jav">
              <FluidPlayer v-bind:jav="scene" />
              <div class="jav-title">
                <div class="row justify-content-center">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p class="title">
                      {{ scene.code + " " + getName(scene.name) }}
                    </p>
                  </div>
                </div>
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
            <div class="jav-more">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <nuxt-link
                    :to="'/javs/jav/' + jav._id"
                    tag="img"
                    :src="jav.imageUrl"
                  >
                  </nuxt-link>
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
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-center">
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row">
          <div data-nat="3625"></div>
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
    </div>
    <div v-if="$device.isMobile" class="container-fluid">
      <div class="need-space"></div>
      <div class="container-fluid content-jav">
        <div class="row justify-content-center">
          <MobileAdBanner />
        </div>
        <div class="row">
          <div class="container-jav">
            <FluidPlayer v-bind:jav="scene" />
            <div class="jav-title-mobile">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p class="title">
                    {{ scene.code + " " + getName(scene.name) }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
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
            <div class="row justify-content-center">
              <MobileAdBanner />
            </div>
            <div class="row">
              <div
                v-for="scene in related"
                :key="scene._id"
                class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
              >
                <CardSceneMobile v-bind:dataJav="scene" />
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
import MobileAdBanner from "~/components/ExoclickAds/MobileAdBanner.vue";
import FluidPlayer from "~/components/FluidPlayer/FluidPlayer.vue";
import CardSceneMobile from "~/components/Cards/CardSceneMobile";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  name: "JAV",
  components: {
    CardJav,
    CardJavMobile,
    CardSceneMobile,
    FluidPlayer,
    MobileAdBanner
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
    let related = await axios
      .get("https://jav.souzou.dev/jav4free/scenes/getRelatedScenes/" + id)
      .catch((e) => {
        console.log(e);
      });
    return {
      SceneTitle: scene.data.scene.name,
      SceneCode: scene.data.jav.code,
      scene: scene.data.scene,
      categories: scene.data.categories,
      idols: scene.data.idols,
      jav: scene.data.jav,
      related: related.data.relatedScenes,
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

<style lang="scss">
</style>