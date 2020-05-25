<template>
  <div class="container-fluid content">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="row">
            <label for="inputJav06" class="title-white">Jav Image Preview</label>
          </div>
          <div class="row">
            <img id="inputJav06" :src="jav.imageIndexUrl" />
          </div>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
        <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
          <div class="row">
            <label for="inputJav01" class="title-white">Jav Title</label>
            <input
              v-model="jav.name"
              class="form-control custom-input"
              id="inputJav01"
              placeholder="Enter new title"
            />
          </div>
          <div class="row">
            <label for="inputJav02" class="title-white">Jav Code</label>
            <input
              v-model="jav.code"
              class="form-control custom-input"
              id="inputJav02"
              placeholder="Enter new code"
            />
          </div>
          <div class="row">
            <label for="inputJav03" class="title-white">Jav Video Duration</label>
            <input
              v-model="jav.duration"
              class="form-control custom-input"
              id="inputJav03"
              placeholder="Enter video duration"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="row">
            <label for="inputJav04" class="title-white">Image url</label>
            <input
              v-model="jav.imageUrl"
              class="form-control custom-input"
              id="inputJav04"
              placeholder="Enter new image url"
            />
          </div>
          <div class="row">
            <label for="inputJav05" class="title-white">Image Index url</label>
            <input
              v-model="jav.imageIndexUrl"
              class="form-control custom-input"
              id="inputJav05"
              placeholder="Enter new image index url"
            />
          </div>
          <div class="row">
            <label for="inputJav06" class="title-white">Video url</label>
            <input
              v-model="jav.url"
              class="form-control custom-input"
              id="inputJav06"
              placeholder="Enter new video url"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <div class="row">
            <label for="inputJav07" class="title-white">Categories</label>
          </div>
          <div class="row">
            <p class="tag" v-for="category in categoriesJav" :key="category._id">{{category.name}}</p>
          </div>
          <div class="row">
            <label for="inputJav07" class="title-white">Idols</label>
          </div>
          <div class="row">
            <p class="tag" v-for="idol in idolsJav" :key="idol._id">{{idol.name}}</p>
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <div class="row">
            <label for="inputJav07" class="title-white">Hidden</label>
            <input type="checkbox" v-model="jav.hidden" />
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="containter">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
          <button class="btn category-title" @click="viewCategoriesContainer()">View Categories</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
          <button class="btn category-title" @click="viewIdolsContainer()">View Idols</button>
        </div>
      </div>
    </div>
    <div v-if="this.viewCategories" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <input
            type="text"
            class="custom-input"
            v-model="searchCategories"
            placeholder="Search..."
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="category in filterCategories" :key="category._id">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <button
              v-if="checkCategory(category._id)"
              @click="addCategory(category._id)"
              class="btn category-button"
            >{{ category.name }}</button>
            <button
              v-else
              @click="addCategory(category._id)"
              class="active btn category-button"
            >{{ category.name }}</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.viewIdols" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <input type="text" class="custom-input" v-model="searchIdols" placeholder="Search..." />
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="idol in filterIdols" :key="idol._id">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <button
              v-if="checkIdol(idol._id)"
              @click="addIdol(idol._id)"
              class="btn category-button"
            >{{ idol.name }}</button>
            <button
              v-else
              @click="addIdol(idol._id)"
              class="active btn category-button"
            >{{ idol.name }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <button class="btn category-title" @click="updateJav()">Update Video</button>
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
      jav: null,
      categoriesJav: null,
      idolsJav: null,
      categories: null,
      idols: null,
      viewCategories: false,
      viewIdols: false,
      searchCategories: "",
      searchIdols: ""
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    let jav = await axios
      .get("https://jav.souzou.dev/jav4free/javs/" + id)
      .catch(e => {
        console.log(e);
      });
    let categories = await axios
      .get("https://jav.souzou.dev/jav4free/categories/")
      .catch(e => {
        console.log(e);
      });
    let idols = await axios
      .get("https://jav.souzou.dev/jav4free/idols/")
      .catch(e => {
        console.log(e);
      });
    return {
      jav: jav.data.jav,
      categoriesJav: jav.data.categories,
      idolsJav: jav.data.idols,
      categories: categories.data.categories,
      idols: idols.data.idols
    };
  },
  methods: {
    checkCategory: function(_id) {
      const exist = this.jav.categories.find(category => category === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    checkIdol: function(_id) {
      const exist = this.jav.idols.find(idol => idol === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    addCategory: function(_id) {
      const exist = this.jav.categories.find(category => category === _id);
      if (exist) {
        for (var i = 0; i < this.jav.categories.length; i++) {
          if (this.jav.categories[i] === _id) {
            this.jav.categories.splice(i, 1);
            this.searchCategories ="";
            i--;
          }
        }
      } else {
        this.jav.categories.push(_id);
        this.searchCategories ="";
      }
    },
    addIdol: function(_id) {
      const exist = this.jav.idols.find(idol => idol === _id);
      if (exist) {
        for (var i = 0; i < this.jav.idols.length; i++) {
          if (this.jav.idols[i] === _id) {
            this.jav.idols.splice(i, 1);
            this.searchIdols ="";
            i--;
          }
        }
      } else {
        this.jav.idols.push(_id);
        this.searchIdols ="";
      }
    },
    async updateJav() {
      let obj = {
        name: this.jav.name,
        code: this.jav.code,
        url: this.jav.url,
        duration: this.jav.duration,
        imageUrl: this.jav.imageUrl,
        imageIndexUrl: this.jav.imageIndexUrl,
        hidden: this.jav.hidden,
        categories: this.jav.categories,
        idols: this.jav.idols
      };
      let response = await axios
        .patch("https://jav.souzou.dev/jav4free/javs/" + this.jav._id, obj)
        .catch(e => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard" });
    },
    viewCategoriesContainer() {
      if (this.viewCategories) {
        this.viewCategories = false;
      } else {
        this.viewCategories = true;
        this.viewIdols = false;
      }
    },
    viewIdolsContainer() {
      if (this.viewIdols) {
        this.viewIdols = false;
      } else {
        this.viewIdols = true;
        this.viewCategories = false;
      }
    }
  },
  computed: {
    filterCategories() {
      this.filteredCategories = [];
      this.categories.forEach(category => {
        if (
          category.name
            .toLowerCase()
            .includes(this.searchCategories.toLowerCase())
        ) {
          this.filteredCategories.push(category);
        }
      });
      return this.filteredCategories;
    },
    filterIdols() {
      this.filteredIdols = [];
      this.idols.forEach(idol => {
        if (idol.name.toLowerCase().includes(this.searchIdols.toLowerCase())) {
          this.filteredIdols.push(idol);
        }
      });
      return this.filteredIdols;
    }
  }
};
</script>

<style lang="scss">
</style>