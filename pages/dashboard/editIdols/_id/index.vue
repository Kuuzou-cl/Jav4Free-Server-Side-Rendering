<template>
  <div class="container-fluid content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <img :src="idol.imageUrl" />
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <div class="row">
            <label for="inputJav04" class="title-white">Idol Name</label>
            <input
              v-model="idol.name"
              class="form-control custom-input"
              id="inputJav04"
              placeholder="Enter new image url"
            />
          </div>
          <div class="row">
            <label for="inputJav04" class="title-white">Idol Image Url</label>
            <input
              v-model="idol.imageUrl"
              class="form-control custom-input"
              id="inputJav04"
              placeholder="Enter new image url"
            />
          </div>
          <div class="row">
            <label for="inputJav07" class="title-white">Hidden</label>
            <input type="checkbox" v-model="idol.hidden" />
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <button class="btn category-title" @click="updateIdol()">Update Idol</button>
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
      idol: null
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    let idol = await axios
      .get("https://jav.souzou.dev/jav4free/idols/" + id)
      .catch(e => {
        console.log(e);
      });
    return {
      idol: idol.data.idol
    };
  },
  methods: {
    async updateIdol() {
      let obj = {
        name: this.idol.name,
        imageUrl: this.idol.imageUrl,
        hidden: this.idol.hidden
      };
      let response = await axios
        .patch("https://jav.souzou.dev/jav4free/idols/" + this.idol._id, obj)
        .catch(e => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard" });
    }
  }
};
</script>

<style lang="scss">
</style>