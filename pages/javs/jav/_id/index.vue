<template>
  <div class="container-fluid content">
    <!-- JuicyAds PopUnders v3 Start -->
    <script
      type="application/javascript"
      src="https://js.juicyads.com/jp.php?c=4474z233x256s2s2u2b4z2c4&u=http%3A%2F%2Fwww.juicyads.rocks"
    ></script>
    <!-- JuicyAds PopUnders v3 End -->
    <Crumbs />
    <div class="container content-jav">
      <div class="row">
        <div :class="resize">
          <div class="container-jav">
            <button class="resize-hidden" type="button" @click="resizeColumn" id="resizeButton">
              <svg class="icon">
                <use xlink:href="#plyr-pip" />
              </svg>
            </button>
            <vue-plyr :options="playerOptions">
              <video preload="metadata" controls :poster="jav.imageIndexUrl">
                <source :src="jav.url" type="video/mp4" />
              </video>
            </vue-plyr>
            <div class="jav-title">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p class="title">{{getName(jav.name)}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div class="jav-details">
                    <font-awesome-icon :icon="['fas', 'eye']" class="view-icon" />
                    <p>Views:200.000</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <div class="btn btn-options" @click="addToFavorites(jav._id)">
                    <p>{{messageFavorite}}</p>
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
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <div class="btn btn-options">
                    <p>Report a bug</p>
                    <font-awesome-icon :icon="['fas', 'bug']" class="bug-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div class="jav-extra">
              <span>Code: {{jav.code}}</span>
            </div>
            <div class="jav-extra">
              <span>Duration: {{jav.duration}} min</span>
            </div>
            <div class="jav-extra">
              <span>
                Categories:
                <nuxt-link
                  v-for="category in categories"
                  :key="category._id"
                  :to="'/categories/1/'+category._id"
                  tag="a"
                  class="links"
                >{{category.name}},</nuxt-link>
              </span>
            </div>
            <div class="jav-extra">
              <span>
                Idols:
                <nuxt-link
                  v-for="idol in idols"
                  :key="idol._id"
                  :to="'/idols/1/'+idol._id"
                  tag="a"
                  class="links"
                >{{idol.name}},</nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div v-if="$device.isDesktop" class="container-recommended">
            <div class="row row-fix">
              <div
                v-for="jav in relatedJavs"
                :key="jav._id"
                class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-fix"
              >
                <CardJav v-bind:dataJav="jav" />
              </div>
            </div>
          </div>
          <div v-if="$device.isMobileOrTablet" class="container-recommended">
            <div class="row">
              <div
                v-for="jav in relatedJavs"
                :key="jav._id"
                class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
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
import CardJav from "~/components/Cards/CardJav01";
import CardJavMobile from "~/components/Cards/CardJav01Mobile";

export default {
  name: "JAV",
  components: {
    Crumbs,
    CardJav,
    CardJavMobile
  },
  data() {
    return {
      resize: "col-lg-9 col-md-9 col-sm-9 col-xs-9"
    };
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
            " , Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    if (id == null || id == "") {
      id = "";
    }
    let jav = await axios
      .get("https://jav.souzou.dev/jav4free/javs/" + id)
      .catch(e => {
        console.log(e);
      });
    let related = await axios
      .get("https://jav.souzou.dev/jav4free/javs/getRelatedJavs/" + id)
      .catch(e => {
        console.log(e);
      });

    const controls = `
      <div class="plyr__controls">
        <button class="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-label="Play">
            <svg class="icon--pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-pause"></use>
            </svg>
            <svg class="icon--not-pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-play"></use>
            </svg>
            <span class="label--pressed plyr__sr-only">Pause</span>
            <span class="label--not-pressed plyr__sr-only">Play</span>
        </button>
        <div class="plyr__controls__item plyr__progress__container">
            <div class="plyr__progress">
              <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" autocomplete="off" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="9757.184" aria-valuenow="0" id="plyr-seek-2232" style="--value:0%;">
              <progress class="plyr__progress__buffer" min="0" max="100" value="0.164200377895918" role="progressbar" aria-hidden="true">% buffered</progress>
              <span class="plyr__tooltip" hidden="">00:00</span>
              <div class="plyr__preview-thumb">
                  <div class="plyr__preview-thumb__image-container">
                  </div>
                  <div class="plyr__preview-thumb__time-container">
                    <span>00:00</span>
                  </div>
              </div>
            </div>
        </div>
        <div class="plyr__controls__item plyr__time--current plyr__time" aria-label="Current time">2:42:37</div>
        <div class="plyr__controls__item plyr__volume">
            <button type="button" class="plyr__control plyr__control--pressed" data-plyr="mute">
              <svg class="icon--pressed" role="presentation" focusable="false">
                  <use xlink:href="#plyr-muted"></use>
              </svg>
              <svg class="icon--not-pressed" role="presentation" focusable="false">
                  <use xlink:href="#plyr-volume"></use
                    >
              </svg>
              <span class="label--pressed plyr__sr-only">Unmute</span><span class="label--not-pressed plyr__sr-only">Mute</span>
            </button>
            <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" id="plyr-volume-2232" style="--value:0%;" aria-valuetext="0.0%">
        </div>
        <button class="plyr__controls__item plyr__control" type="button" data-plyr="captions">
            <svg class="icon--pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-captions-on"></use>
            </svg>
            <svg class="icon--not-pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-captions-off"></use>
            </svg>
            <span class="label--pressed plyr__sr-only">Disable captions</span><span class="label--not-pressed plyr__sr-only">Enable captions</span>
        </button>
        <button class="plyr__controls__item plyr__control" type="button" onclick="document.getElementById('resizeButton').click()">
          <svg class="icon" role="presentation" focusable="false">
            <use xlink:href="#plyr-pip"></use>
          </svg>
        </button>
        <button class="plyr__controls__item plyr__control" type="button" data-plyr="fullscreen">
            <svg class="icon--pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-exit-fullscreen"></use>
            </svg>
            <svg class="icon--not-pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-enter-fullscreen"></use>
            </svg>
            <span class="label--pressed plyr__sr-only">Exit fullscreen</span><span class="label--not-pressed plyr__sr-only">Enter fullscreen</span>
        </button>
      </div>
    `;

    let playerOptions = {
      previewThumbnails: {
        enabled: true,
        src:
          "https://javdata.sfo2.cdn.digitaloceanspaces.com/vtts/" +
          jav.data.jav.code +
          "_thumbs.vtt"
      },
      disableContextMenu: true,
      fullscreen: {
        enabled: true,
        fallback: true,
        iosNative: true,
        container: null
      },
      controls: controls
    };
    return {
      titleJ: jav.data.jav.code,
      detailJ: jav.data.jav.name,
      jav: jav.data.jav,
      playerOptions: playerOptions,
      categories: jav.data.categories,
      idols: jav.data.idols,
      relatedJavs: related.data.relatedJavs,
      check: related.data.rr
    };
  },
  beforeCreate() {
    let routePage = "javs/jav/" + this.$route.params.id;
    this.$store.dispatch("addCrumb", {
      page: "Jav",
      show: this.$route.params.id,
      route: routePage
    });
    this.$store.dispatch("addToHistory", { javId: this.$route.params.id });
  },
  methods: {
    addToFavorites: function(_id) {
      this.$store.dispatch("addToFavorites", { javId: _id });
    },
    getName: function(_name) {
      let newName;
      if (_name.length > 180) {
        newName = _name.slice(0, 180) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
    resizeColumn: function() {
      if (this.resize == "col-lg-9 col-md-9 col-sm-9 col-xs-9") {
        this.resize = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
      } else {
        this.resize = "col-lg-9 col-md-9 col-sm-9 col-xs-9";
      }
    }
  },
  computed: {
    checkFavorite() {
      return this.$store.getters.checkFavorite(this.jav._id);
    },
    messageFavorite() {
      if (!this.$store.getters.checkFavorite(this.jav._id)) {
        return "Add to favorites";
      } else {
        return "Remove video";
      }
    }
  }
};
</script>

<style lang="scss">
.ad-desktop-300x250 {
  padding: 0% 2% 0% 2%;
}
@media all and (min-device-width: 1000px) and (max-device-width: 1200px) {
  .ad-desktop-300x250 {
    transform: scale(0.9);
  }
}
@media all and (min-device-width: 720px) and (max-device-width: 999px) {
  .ad-desktop-300x250 {
    margin-bottom: 0;
    transform: scale(0.7);
  }
}
</style>