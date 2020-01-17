<template>
  <div id="Home" class="container-fluid">
    <Crumbs v-if="!this.$store.state.breadCrumbs" />
    <div v-if="$device.isDesktopOrTablet" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <h6>
            <nuxt-link
              :to="'/categories/1/'+category1._id"
              tag="a"
              class="title-white text-left"
            >Recommended Category - {{category1.name}} JAV's</nuxt-link>
          </h6>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <nuxt-link :to="'/categories/1/'+category1._id" class="btn btn-more float-right">
            watch more
            <font-awesome-icon :icon="['fas', 'plus']" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div v-if="$device.isDesktopOrTablet" class="container">
      <div class="row">
        <div
          v-for="jav in javsCategory1"
          :key="jav._id"
          class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
        >
          <CardJav v-bind:dataJav="jav" />
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <h6>
            <nuxt-link :to="'/javs/1'" tag="a" class="title-white text-left">Recently Added Videos</nuxt-link>
          </h6>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <nuxt-link :to="'/javs/1'" class="btn btn-more float-right">
            watch more
            <font-awesome-icon :icon="['fas', 'plus']" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div v-if="$device.isMobile" class="container">
      <div class="row">
        <div v-for="jav in javsMobile" :key="jav._id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <CardJav v-bind:dataJav="jav" />
        </div>
      </div>
    </div>
    <div v-if="$device.isDesktopOrTablet" class="container">
      <div class="row">
        <div v-for="jav in javs" :key="jav._id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <CardJav v-bind:dataJav="jav" />
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <h6>
            <nuxt-link :to="'/idols/1'" tag="a" class="title-white text-left">Featured Jav Idols</nuxt-link>
          </h6>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <nuxt-link :to="'/idols/1'" class="btn btn-more float-right">
            watch more
            <font-awesome-icon :icon="['fas', 'plus']" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div v-for="(idol,index) in idols" :key="index" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <CardIdol
            v-if="idol != null"
            v-bind:dataId="idol._id"
            v-bind:dataName="idol.name"
            v-bind:dataUrl="idol.imageUrl"
          ></CardIdol>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardJav from "../components/Cards/CardJav00";
import CardIdol from "../components/Cards/CardIdol00";

export default {
  components: {
    Crumbs,
    CardJav,
    CardIdol
  },
  async asyncData() {
    const cat1 = await axios.get(
      "https://jav.souzou.dev/jav4free/categories/getRandomCategory"
    );
    const javs = await axios.get(
      "https://jav.souzou.dev/jav4free/javs/getLatestJavs"
    );
    const javsMobile = await axios.get(
      "https://jav.souzou.dev/jav4free/javs/",
      {
        headers: {
          quantity: 8
        }
      }
    );
    const idols = await axios.get(
      "https://jav.souzou.dev/jav4free/idols/getRandomIdols"
    );
    return {
      category1: cat1.data.category,
      javsCategory1: cat1.data.javs,
      javs: javs.data.javs,
      javsMobile: javs.data.javsMobile,
      idols: idols.data.idols
    };
  },
  beforeCreate() {
    this.$store.dispatch("addCrumb", { page: "Home", route: "" });
  }
};
</script>

<style>
</style>