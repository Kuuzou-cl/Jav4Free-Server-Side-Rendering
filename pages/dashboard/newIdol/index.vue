<template>
  <div class="container-fluid">
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/newJav/'" class="btn simple-button">
            New Jav
            <font-awesome-icon :icon="['fas', 'plus']" />
          </nuxt-link>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/newCategory/'" class="btn simple-button">
            New Category
            <font-awesome-icon :icon="['fas', 'plus']" />
          </nuxt-link>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/newIdol/'" class="btn simple-button">
            New Idol
            <font-awesome-icon :icon="['fas', 'plus']" />
          </nuxt-link>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/editJavs/'" class="btn simple-button">
            View Javs
          </nuxt-link>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/editCategories/'" class="btn simple-button">
            View Categories
          </nuxt-link>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/editIdols/'" class="btn simple-button">
            View Idols
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div class="row">
            <label class="title-white">Preview Image</label>
          </div>
          <div class="row">
            <img
              id="inputJav06"
              :src="'https://javdata.sfo2.digitaloceanspaces.com/idols/' +
          this.idolUrl +
          '.jpg'"
            />
          </div>
          <div class="row">
            <label for="inputJav07" class="title-white">Hidden</label>
            <input type="checkbox" v-model="hidden" />
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <div class="row">
            <label for="inputCat01" class="title-white">Idol Name</label>
            <input
              v-model="idolName"
              class="form-control custom-input"
              id="inputCat01"
              placeholder="Enter new category"
            />
          </div>
          <div class="row">
            <label for="inputJav02" class="title-white">Idol Name index</label>
            <input
              v-model="idolUrl"
              class="form-control custom-input"
              id="inputJav02"
              placeholder="Enter new code"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <button class="btn category-title" @click="postIdol()">Add Idol</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  middleware: "auth",
  name: "Dashboard",
  data() {
    return {
      idolName: "",
      idolUrl: "",
      hidden: false
    };
  },
  methods: {
    async postIdol() {
      var obj = {
        name: this.idolName,
        imageUrl:
          "https://javdata.sfo2.cdn.digitaloceanspaces.com/idols/" +
          this.idolUrl +
          ".jpg",
        hidden: this.hidden
      };
      let response = await axios.post(
        "https://jav.souzou.dev/jav4free/idols/newIdol/",
        obj
      );
      this.$router.push({ path: "/dashboard" });
    }
  }
};
</script>

<style lang="scss">
</style>