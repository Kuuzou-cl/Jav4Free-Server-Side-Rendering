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
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <form>
            <div class="form-row">
              <label for="inputJav01" class="title-white">Jav Title</label>
              <input
                v-model="javName"
                class="form-control custom-input"
                id="inputJav01"
                placeholder="Enter new title"
              />
            </div>
            <div class="form-row">
              <label for="inputJav02" class="title-white">Jav Code</label>
              <input
                v-model="javCode"
                class="form-control custom-input"
                id="inputJav02"
                placeholder="Enter new code"
              />
            </div>
            <div class="form-row">
              <label for="inputJav03" class="title-white">Jav Video Duration</label>
              <input
                v-model="javDuration"
                class="form-control custom-input"
                id="inputJav03"
                placeholder="Enter relative video url"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="containter">
      <div class="row justify-content-center">
        <button class="btn category-title" @click="viewCategoriesContainer()">View Categories</button>
      </div>
    </div>
    <div class="need-space"></div>
    <div v-if="this.viewCategories" class="container-fluid">
      <div class="row justify-content-center">
        <div v-for="category in categories" :key="category._id">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <button
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
              @click="addCategory(category._id)"
              class="btn category-button"
            >{{ category.name }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="containter">
      <div class="row justify-content-center">
        <button class="btn category-title" @click="viewIdolsContainer()">View Idols</button>
      </div>
    </div>
    <div class="need-space"></div>
    <div v-if="this.viewIdols" class="container-fluid">
      <div class="row justify-content-center">
        <div v-for="idol in idols" :key="idol._id">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <button
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
              @click="addIdol(idol._id)"
              class="btn category-button"
            >{{ idol.name }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <button class="btn category-title" @click="postJav()">Add Video</button>
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
      javName: "",
      javCode: "",
      javDuration: "",
      hidden: true,
      javCategories: [],
      javIdols: [],
      viewCategories: false,
      viewIdols: false
    };
  },
  async asyncData() {
    let categories = await axios.get(
      "https://jav.souzou.dev/jav4free/categories/"
    );
    let idols = await axios.get("https://jav.souzou.dev/jav4free/idols/");
    return {
      categories: categories.data.categories,
      idols: idols.data.idols
    };
  },
  methods: {
    addCategory: function(_id) {
      const exist = this.javCategories.find(category => category._id === _id);
      if (exist) {
        for (var i = 0; i < this.javCategories.length; i++) {
          if (this.javCategories[i]._id === _id) {
            this.javCategories.splice(i, 1);
            i--;
          }
        }
      } else {
        this.javCategories.push(_id);
      }
    },
    addIdol: function(_id) {
      const exist = this.javIdols.find(idol => idol._id === _id);
      if (exist) {
        for (var i = 0; i < this.javIdols.length; i++) {
          if (this.javIdols[i]._id === _id) {
            this.javIdols.splice(i, 1);
            i--;
          }
        }
      } else {
        this.javIdols.push(_id);
      }
    },
    async postJav() {
      var obj = {
        name: this.javName,
        code: this.javCode,
        url:
          "https://javdata.sfo2.cdn.digitaloceanspaces.com/javs/" +
          this.javCode +
          ".mp4",
        duration: this.javDuration,
        imageUrl:
          "https://javdata.sfo2.cdn.digitaloceanspaces.com/covers/" +
          this.javCode +
          ".mp4",
        imageIndexUrl:
          "https://javdata.sfo2.cdn.digitaloceanspaces.com/covers/" +
          this.javCode +
          "-static.jpg",
        hidden: this.hidden,
        categories: this.javCategories,
        idols: this.javIdols
      };
      let response = await axios.post(
        "https://jav.souzou.dev/jav4free/javs/newJav/",
        obj
      );
      this.$router.push({ path: "/dashboard" });
    },
    viewCategoriesContainer() {
      if (this.viewCategories) {
        this.viewCategories = false;
      } else {
        this.viewCategories = true;
      }
    },
    viewIdolsContainer() {
      if (this.viewIdols) {
        this.viewIdols = false;
      } else {
        this.viewIdols = true;
      }
    }
  }
};
</script>

<style lang="scss">
</style>