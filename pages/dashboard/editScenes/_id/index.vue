<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>Edit {{ this.scene.code }} details</h2>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      {{this.scene}}
      <div class="need-space"></div>
      {{this.categoriesScene}}
      <div class="need-space"></div>
      {{this.idolsScene}}
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="container container-admin">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <img :src="scene.staticImage" />
                  <div class="row need-space">
                    <label for="inputJav03">Hidden</label>
                    <input type="checkbox" class="input-admin" id="inputJav03" v-model="scene.hide" />
                  </div>
                  <div class="row">
                    <label for="inputJav07">Categories</label>
                  </div>
                  <div class="row">
                    <p class="tag" v-for="category in categoriesScene" :key="category.id">
                      {{ category.name }}
                    </p>
                  </div>
                  <div class="row">
                    <label for="inputJav07">Idols</label>
                  </div>
                  <div class="row">
                    <p class="tag" v-for="idol in idolsScene" :key="idol.id">
                      {{ idol.name }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                  <div v-if="jav != null" class="row">
                    <label for="inputJav01">Jav Code</label>
                    <input v-model="jav.code" class="input-admin" id="inputJav00" placeholder="Jav Code" disabled />
                  </div>
                  <div class="row">
                    <label for="inputJav01">Scene Title</label>
                    <input v-model="scene.title" class="input-admin" id="inputJav01" placeholder="Enter new title" />
                  </div>
                  <div class="row">
                    <label for="inputJav02">Scene Code</label>
                    <input v-model="scene.code" class="input-admin" id="inputJav02" placeholder="Enter new code" />
                  </div>
                  <div class="row">
                    <label for="inputJav03">Scene Duration</label>
                    <input v-model="scene.duration" class="input-admin" id="inputJav03"
                      placeholder="Enter video duration" />
                  </div>
                  <div class="row">
                    <label for="inputJav04">Preview url</label>
                    <input v-model="scene.previewImage" class="input-admin" id="inputJav04"
                      placeholder="Enter new preview url" />
                  </div>
                  <div class="row">
                    <label for="inputJav05">Image url</label>
                    <input v-model="scene.staticImage" class="input-admin" id="inputJav05"
                      placeholder="Enter new image url" />
                  </div>
                  <div class="row">
                    <label for="inputJav06">Video url</label>
                    <input v-model="scene.video" class="input-admin" id="inputJav06" placeholder="Enter new video url" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
              <button class="btn category-admin" @click="viewCategoriesContainer()">
                View Categories
              </button>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
              <button class="btn category-admin" @click="viewIdolsContainer()">
                View Idols
              </button>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div v-if="this.viewCategories" class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
              <input type="text" class="input-admin" v-model="searchCategories"
                placeholder="Filter categories here ..." />
            </div>
          </div>
          <div class="row justify-content-center">
            <div v-for="category in filterCategories" :key="category.id">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <button v-if="checkCategory(category.id)" @click="addCategory(category)"
                  class="btn category-button">
                  {{ category.name }}
                </button>
                <button v-else @click="addCategory(category)" class="active btn category-button">
                  {{ category.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.viewIdols" class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
              <input type="text" class="input-admin" v-model="searchIdols" placeholder="Search..." />
            </div>
          </div>
          <div class="row justify-content-center">
            <div v-for="idol in filterIdols" :key="idol.id">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <button v-if="checkIdol(idol.id)" @click="addIdol(idol)" class="btn category-button">
                  {{ idol.name }}
                </button>
                <button v-else @click="addIdol(idol)" class="active btn category-button">
                  {{ idol.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row justify-content-center">
            <button class="btn category-admin" @click="updateJav()">
              Update Video
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SidebarAdmin from "~/components/SidebarAdmin/SidebarAdmin.vue";
export default {
  layout: "admin",
  name: "editJav",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      jav: null,
      categories: null,
      idols: null,
      viewCategories: false,
      viewIdols: false,
      searchCategories: "",
      searchIdols: "",
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    let scene = await axios.get("https://jav.souzou.dev/scenes/sceneId?id=" + id);
    let categories = await axios.get("https://jav.souzou.dev/categories/");
    let idols = await axios.get("https://jav.souzou.dev/idols/getAll");
    return {
      scene: scene.data.data.Scene,
      categoriesScene: scene.data.data.Categories,
      idolsScene: scene.data.data.Idols,
      categories: categories.data.data.Categories,
      idols: idols.data.data.Idols
    };
  },
  methods: {
    checkCategory: function (_id) {
      const exist = this.categoriesScene.find((category) => category.id === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    checkIdol: function (_id) {
      const exist = this.idolsScene.find((idol) => idol.id === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    addCategory: function (objectCategory) {
      const exist = this.categoriesScene.find((category) => category.id === objectCategory.id);
      if (exist) {
        for (var i = 0; i < this.categoriesScene.length; i++) {
          if (this.categoriesScene[i].id === objectCategory.id) {
            this.categoriesScene.splice(i, 1);
            this.searchCategories = "";
            i--;
          }
        }
      } else {
        this.categoriesScene.push(objectCategory);
        this.searchCategories = "";
      }
    },
    addIdol: function (objectIdol) {
      const exist = this.idolsScene.find((idol) => idol.id === objectIdol.id);
      if (exist) {
        for (var i = 0; i < this.idolsScene.length; i++) {
          if (this.idolsScene[i].id === objectIdol.id) {
            this.idolsScene.splice(i, 1);
            this.searchIdols = "";
            i--;
          }
        }
      } else {
        this.idolsScene.push(objectIdol);
        this.searchIdols = "";
      }
    },
    async updateJav() {
      let obj = {
        id: this.scene.id,
        title: this.scene.title,
        code: this.scene.code,
        video: this.scene.video,
        duration: this.scene.duration,
        hide: this.scene.hide,
        previewImage: this.scene.previewImage,
        staticImage: this.scene.staticImage,
        vtt: "https://jav4free-s3-data.s3.us-east-1.amazonaws.com/vtts/" + this.scene.code + "_thumbs.vtt",
        video480p: "https://jav4free-s3-data.s3.us-east-1.amazonaws.com/scenes_480/" + this.scene.code + "_1.mp4",
        categories: this.categoriesScene,
        idols: this.idolsScene
      };
      let response = await axios
        .patch(
          "https://jav.souzou.dev/scenes/updateScene",
          obj,
          {
            headers: {
              'authorization': 'Bearer ' + this.$store.state.token
            },
          }
        )
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard/editScenes" });
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
    },
  },
  computed: {
    filterCategories() {
      this.filteredCategories = [];
      this.categories.forEach((category) => {
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
      this.idols.forEach((idol) => {
        if (idol.name.toLowerCase().includes(this.searchIdols.toLowerCase())) {
          this.filteredIdols.push(idol);
        }
      });
      return this.filteredIdols;
    },
  },
};
</script>