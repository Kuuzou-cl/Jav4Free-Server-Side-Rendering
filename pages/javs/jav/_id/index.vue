<template>
  <div class="container-fluid">
    <Crumbs />
    <div class="need-space"></div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
          <div class="container-jav">
            <vue-plyr class="jav-player0" :options="playerOptions">
              <video preload="metadata" controls :poster="jav.imageIndexUrl">
                <source :src="jav.url" type="video/mp4" />
              </video>
            </vue-plyr>
            <div class="jav-title">
              <span>
                <b>{{jav.name}}</b>
              </span>
            </div>
            <div class="jav-extra">
              <span>
                <b>Categories:</b>
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
                <b>Idols:</b>
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
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <h3>ADS</h3>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
          <div class="container-recommended">
            <div class="row justify-content-center">
              <h6 class="title-white text-left">Recommended JAV's</h6>
            </div>
            <div class="row">
              <div
                v-for="jav in relatedJavs"
                :key="jav._id"
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
              >
                <CardJav v-bind:dataJav="jav" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <h3>ADS</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardJav from "~/components/Cards/CardJav01";

export default {
  name: "JAV",
  components: {
    Crumbs,
    CardJav
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
  async asyncData({ params }) {
    let id = params.id;
    if (id == null || id == "") {
      this.$router.push({ path: "/" });
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
  }
};
</script>

<style lang="scss">
</style>