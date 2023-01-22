<template>
  <div class="container-fluid no-margin no-padding">
    <div v-if="$device.isMobile" class="need-space"></div>
    <div class="container content-jav">
      <div class="row">
        <div class="col-lg-9">
          <div class="container-jav">
            <video id="javId" ref="javId2">
              <source data-fluid-hd :src="this.scene.video" title='720p' type="video/mp4" />
              <source :src="'https://javdata.sfo2.digitaloceanspaces.com/scenes_480/'+this.scene.code+'_1.mp4'" title='480p' type="video/mp4" />
            </video>
            <div class="jav-title">
              <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p class="title">
                    {{ this.jav.code + " | " + getName(this.scene.title) }}
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
                :to="'/javs/jav/' + this.jav.code"
                tag="img"
                :src="this.jav.image"
              >
              </nuxt-link>
            </div>
          </div>
          <div class="jav-extra">
            <span>
              JAV Code:
              <nuxt-link :to="'/javs/jav/' + this.jav.code" tag="a" class="links">{{
                jav.code
              }}</nuxt-link>
            </span>
          </div>
          <div class="jav-extra">
            <span>
              Categories:
              <nuxt-link
                v-for="category in categories"
                :key="category.id"
                :to="'/categories/1/' + category.name"
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
                :key="idol.id"
                :to="'/idols/1/' + idol.name"
                tag="a"
                class="links"
                >{{ idol.name }},</nuxt-link
              >
            </span>
          </div>
          <div class="row need-space">
            <script async type="text/javascript" src="https://a.realsrv.com/ad-provider.js"></script> 
            <ins class="adsbyexoclick" data-zoneid="4451866"></ins> 
            <script>(AdProvider = window.AdProvider || []).push({"serve": {}});</script>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
    </div>
    <div v-if="$device.isMobile" class="need-space"></div>
    <div v-if="$device.isMobile" class="need-space"></div>
  </div>
</template>

<script>
import axios from "axios";

import CardJav from "~/components/Cards/CardJav01.vue";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  name: "JAV",
  components: {
    CardJav,
  },
  head() {
    return {
      title: this.scene.title + " | Jav4Free | " + this.jav.code,
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, watch " +
            this.scene.title +
            " , " +
            this.jav.code +
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
      let str = params.id.split('?');      
      let scene = await axios.get("https://jav.souzou.dev/scenes/scene?code="+ str[0]);
      let idView = scene.data.data.Scene[0].id;
      let view = await axios.get("https://jav.souzou.dev/scenes/newView?id="+ idView);
      return {
        scene: scene.data.data.Scene[0],
        categories: scene.data.data.Categories,
        idols: scene.data.data.Idols,
        jav: scene.data.data.Jav[0],
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
            fillToContainer: false,
            primaryColor: "#da0000",
            preload: true,
            posterImage: this.scene.staticImage,
            timelinePreview: {
              file: this.scene.vtt,
              type: "VTT",
            },
            allowTheatre: false,
            contextMenu: {
              controls:false
            }
          },
          vastOptions: {
            allowVPAID: true,
            adList: [
              {
                roll: "preRoll",
                vastTag: "https://vast.yomeno.xyz/vast?spot_id=3971",
              }
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