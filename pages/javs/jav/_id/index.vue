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
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <div class="container-jav">
            <vue-plyr class="jav-player0" :options="playerOptions">
              <video preload="metadata" controls :poster="jav.imageIndexUrl">
                <source :src="jav.url" type="video/mp4" />
              </video>
            </vue-plyr>
            <div class="jav-title">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p class="title">{{jav.name}}</p>
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
      playerOptions: {
        previewThumbnails: {
          enabled: true,
          src: ""
        }
      }
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
    let jav = await axios.get("https://jav.souzou.dev/jav4free/javs/" + id);
    let related = await axios.get(
      "https://jav.souzou.dev/jav4free/javs/getRelatedJavs/" + id
    );
    let playerOptions = {
      previewThumbnails: {
        enabled: true,
        src:
          "https://javdata.sfo2.cdn.digitaloceanspaces.com/vtts/" +
          jav.data.jav.code +
          "_thumbs.vtt"
      }
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