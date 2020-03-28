<template>
  <div class="container-fluid content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="row">
            <label for="inputJav04" class="title-white">Category Name</label>
            <input
              v-model="category.name"
              class="form-control custom-input"
              id="inputJav04"
              placeholder="Enter new image url"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <button class="btn category-title" @click="updateJav()">Update Category</button>
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
      category: null,
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    let category = await axios.get(
      "https://jav.souzou.dev/jav4free/categories/" + id
    );
    return {
      category: category.data.category,
    };
  },
  methods: {
    async updateJav() {
      let obj = {
        name: this.category.name,
      };
      let response = await axios.patch(
        "https://jav.souzou.dev/jav4free/categories/" + this.category._id,
        obj
      );
      this.$router.push({ path: "/dashboard" });
    },
  }
};
</script>

<style lang="scss">
</style>