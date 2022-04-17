<template>
  <div class="container-fluid no-margin no-padding">
    <div v-if="$device.isMobile" class="need-space"></div>
    <div class="container content-jav">
      <div class="row">
        <div class="col-lg-9">
          <div class="container-jav">
            <video id="javId" ref="javId2">
              <source :src="this.scene.url" type="video/mp4" />
            </video>
            <div class="jav-title">
              <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p class="title">
                    {{ scene.code + " " + getName(scene.name) }}
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

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  name: "JAV",
  components: {
    CardJav,
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
  data() {
    return {
      player: null,
    };
  },
  async asyncData({ params, error, $errorHandler }) {
    try {
      let scene = await axios.get(
        "https://jav.souzou.dev/jav4free/scenes/" + params.id
      );
      let related = await axios.get(
        "https://jav.souzou.dev/jav4free/scenes/getRelatedScenes/" + params.id
      );
      return {
        SceneTitle: scene.data.scene.name,
        SceneCode: scene.data.jav.code,
        scene: scene.data.scene,
        categories: scene.data.categories,
        idols: scene.data.idols,
        jav: scene.data.jav,
        related: related.data.relatedScenes,
      };
    } catch (errors) {
      const errorResponse = $errorHandler.setAndParse(errors);
      error({
        statusCode: errorResponse.status,
        message: errorResponse.message,
      });
    }
  },
  mounted() {
    const interval = setInterval(() => {
      if (this.$refs.javId2) {
        clearInterval(interval);
        this.player = fluidPlayer("javId", {
          layoutControls: {
            layout: "default",
            fillToContainer: true,
            primaryColor: "#da0000",
            posterImage: this.scene.imageIndexUrl,
            timelinePreview: {
              file:
                "https://javdata.sfo2.digitaloceanspaces.com/vtts/" +
                this.scene.code +
                "_thumbs.vtt",
              type: "VTT",
            },
            allowTheatre: false,
          },
          vastOptions: {
            allowVPAID: true,
            adList: [
              {
                roll: "preRoll",
                vastTag: "https://vast.yomeno.xyz/vast?spot_id=3971",
              },
              {
                roll: "onPauseRoll",
                vastTag: "https://vast.yomeno.xyz/vast?spot_id=20325",
                vAlign: "middle",
              },
            ],
          },
          onBeforeXMLHttpRequest: (request) => {
            request.withCredentials = false;
          },
        });
      }
    }, 50);
  },
  destroyed() {
    if (!this.player) {
      return;
    }
    this.player.destroy();
  },
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
};
</script>