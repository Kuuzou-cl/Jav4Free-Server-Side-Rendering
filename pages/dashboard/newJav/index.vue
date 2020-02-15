<template>
  <div class="container-fluid">
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/newJav/'" class="btn simple-button disabled">
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
          <nuxt-link :to="'/dashboard/editJavs/'" class="btn simple-button">View Javs</nuxt-link>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/editCategories/'" class="btn simple-button">View Categories</nuxt-link>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/editIdols/'" class="btn simple-button">View Idols</nuxt-link>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <nuxt-link :to="'/dashboard/uploadFile/'" class="btn simple-button">
            Upload File
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
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
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
                <button
                  class="btn category-title"
                  @click="viewCategoriesContainer()"
                >View Categories</button>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
                <button class="btn category-title" @click="viewIdolsContainer()">View Idols</button>
              </div>
            </div>
          </div>
          <div class="need-space"></div>
          <div v-if="this.viewCategories" class="container-fluid">
            <div class="row justify-content-center">
              <div v-for="category in categories" :key="category._id">
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
          <div class="need-space"></div>
          <div v-if="this.viewIdols" class="container-fluid">
            <div class="row justify-content-center">
              <div v-for="idol in idols" :key="idol._id">
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
              <button class="btn category-title" @click="postJav()">Add Video</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <table class="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col">Pending Javs ({{this.spaceCheck(result, javs).length}})</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(jav, key) in this.spaceCheck(result, javs)" :key="key">
                <th>{{jav}}</th>
              </tr>
            </tbody>
          </table>
        </div>
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
      hidden: false,
      javCategories: [],
      javIdols: [],
      viewCategories: false,
      viewIdols: false
    };
  },
  async asyncData() {
    var convert = require("xml-js");
    var options = { compact: false, ignoreComment: true, spaces: 3 };

    let allJavs = await axios.get("https://jav.souzou.dev/jav4free/javs/");
    let categories = await axios.get(
      "https://jav.souzou.dev/jav4free/categories/"
    );
    let idols = await axios.get("https://jav.souzou.dev/jav4free/idols/");
    let spaceData = await axios.get(
      "https://sfo2.digitaloceanspaces.com/javdata?prefix=javs/"
    );
    var result = JSON.parse(convert.xml2json(spaceData.data, options));
    return {
      javs: allJavs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols,
      result: result
    };
  },
  methods: {
    spaceCheck(space, javs) {
      let spaceData = [];

      space.elements[0].elements.forEach(element => {
        if (element.name === "Contents") {
          element.elements.forEach(obj => {
            if (obj.name === "Key") {
              let javNameData = obj.elements[0].text.split("/");
              if (javNameData[1]) {
                let javName = javNameData[1].split(".");
                spaceData.push(javName[0]);
              }
            }
          });
        }
      });

      let pending = [];

      spaceData.forEach(r => {
        if (!javs.some(item => item.code === r)) {
          pending.push(r);
        }
      });

      return pending;
    },
    addCategory: function(_id) {
      const exist = this.javCategories.find(category => category === _id);
      if (exist) {
        for (var i = 0; i < this.javCategories.length; i++) {
          if (this.javCategories[i] === _id) {
            this.javCategories.splice(i, 1);
            i--;
          }
        }
      } else {
        this.javCategories.push(_id);
      }
    },
    checkCategory: function(_id) {
      const exist = this.javCategories.find(category => category === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    addIdol: function(_id) {
      const exist = this.javIdols.find(idol => idol === _id);
      if (exist) {
        for (var i = 0; i < this.javIdols.length; i++) {
          if (this.javIdols[i] === _id) {
            this.javIdols.splice(i, 1);
            i--;
          }
        }
      } else {
        this.javIdols.push(_id);
      }
    },
    checkIdol: function(_id) {
      const exist = this.javIdols.find(idol => idol === _id);
      if (exist) {
        return false;
      } else {
        return true;
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