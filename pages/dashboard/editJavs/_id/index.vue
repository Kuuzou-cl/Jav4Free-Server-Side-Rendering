<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>Edit {{ this.jav.code }} details</h2>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="container container-admin">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <img id="inputJav06" :src="jav.image" />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                  <div class="row">
                    <label for="inputJav01" class="title-input-admin">Jav Title</label>
                    <input v-model="jav.title" class="input-admin" id="inputJav01" placeholder="Enter new title" />
                  </div>
                  <div class="row">
                    <label for="inputJav02" class="title-input-admin">Jav Code</label>
                    <input v-model="jav.code" class="input-admin" id="inputJav02" placeholder="Enter new code" />
                  </div>
                  <div class="row">
                    <label for="inputJav04" class="title-input-admin">Jav Image url</label>
                    <input v-model="jav.image" class="input-admin" id="inputJav04" placeholder="Enter new image url" />
                  </div>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row">
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                  <div class="row">
                    <label for="inputJav07" class="title-input-admin">Scenes</label>
                  </div>
                  <div class="row">
                    <p class="tag" v-for="scene in scenesJav" :key="scene.id">
                      {{ scene.code }}
                    </p>
                  </div>
                  <div class="row">
                    <label for="inputJav07" class="title-input-admin">Categories</label>
                  </div>
                  <div class="row">
                    <p class="active btn btn-dark" v-for="category in categoriesJav" :key="category.id">
                      {{ category.name }}
                    </p>
                  </div>
                  <div class="row">
                    <label for="inputJav07" class="title-input-admin">Idols</label>
                  </div>
                  <div class="row">
                    <p class="active btn btn-dark" v-for="idol in idolsJav" :key="idol.id">
                      {{ idol.name }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <div class="row justify-content-center">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                      <label class="title-input-admin" for="inputJav03">Hidden</label>
                      <input type="checkbox" class="input-admin" id="inputJav03" v-model="jav.hide" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center">
              <button class="btn btn-warning btn-block" @click="viewScenesContainer()">
                View Scenes
              </button>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center">
              <button class="btn btn-warning btn-block" @click="viewCategoriesContainer()">
                View Categories
              </button>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center">
              <button class="btn btn-warning btn-block" @click="viewIdolsContainer()">
                View Idols
              </button>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div v-if="this.viewScenes" class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
              <input type="text" class="input-admin" v-model="searchScenes" placeholder="Search..." />
            </div>
          </div>
          <div class="row justify-content-center">
            <div v-for="scene in filterScenes" :key="scene.id">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <button v-if="checkScene(scene.id)" @click="addScene(scene)" class="btn btn-light btn-sm">
                  {{ scene.code }}
                </button>
                <button v-else @click="addScene(scene)" class="active btn btn-dark">
                  {{ scene.code }}
                </button>
              </div>
            </div>
          </div>
        </div>
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
                <button v-if="checkCategory(category.id)" @click="addCategory(category)" class="btn btn-light btn-sm">
                  {{ category.name }}
                </button>
                <button v-else @click="addCategory(category)" class="active btn btn-dark">
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
                <button v-if="checkIdol(idol.id)" @click="addIdol(idol)" class="btn btn-light btn-sm">
                  {{ idol.name }}
                </button>
                <button v-else @click="addIdol(idol)" class="active btn btn-dark">
                  {{ idol.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row justify-content-center">
            <button class="btn btn-success" @click="updateJav()">
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
      viewCategories: false,
      viewIdols: false,
      viewScenes: false,
      searchCategories: "",
      searchIdols: "",
      searchScenes: "",
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    let jav = await axios.get("https://jav.souzou.dev/javs/javId?id=" + id);
    let scenes = await axios.get("https://jav.souzou.dev/scenes/getAll");
    let categories = await axios.get("https://jav.souzou.dev/categories/");
    let idols = await axios.get("https://jav.souzou.dev/idols/getAll");
    return {
      jav: jav.data.data.Jav,
      scenesJav: jav.data.data.Scenes,
      categoriesJav: jav.data.data.Categories,
      idolsJav: jav.data.data.Idols,
      scenes: scenes.data.data.Scenes,
      categories: categories.data.data.Categories,
      idols: idols.data.data.Idols
    };
  },
  methods: {
    checkCategory: function (_id) {
      const exist = this.categoriesJav.find((category) => category.id === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    checkIdol: function (_id) {
      const exist = this.idolsJav.find((idol) => idol.id === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    checkScene: function (_id) {
      const exist = this.scenesJav.find((scene) => scene.id === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    addCategory: function (objectCategory) {
      const exist = this.categoriesJav.find((category) => category.id === objectCategory.id);
      if (exist) {
        for (var i = 0; i < this.categoriesJav.length; i++) {
          if (this.categoriesJav[i].id === objectCategory.id) {
            this.categoriesJav.splice(i, 1);
            this.searchCategories = "";
            i--;
          }
        }
      } else {
        this.categoriesJav.push(objectCategory);
        this.searchCategories = "";
      }
    },
    addIdol: function (objectIdol) {
      const exist = this.idolsJav.find((idol) => idol.id === objectIdol.id);
      if (exist) {
        for (var i = 0; i < this.idolsJav.length; i++) {
          if (this.idolsJav[i].id === objectIdol.id) {
            this.idolsJav.splice(i, 1);
            this.searchIdols = "";
            i--;
          }
        }
      } else {
        this.idolsJav.push(objectIdol);
        this.searchIdols = "";
      }
    },
    addScene: function (objectScene) {
      const exist = this.scenesJav.find((scene) => scene.id === objectScene.id);
      if (exist) {
        for (var i = 0; i < this.scenesJav.length; i++) {
          if (this.scenesJav[i].id === objectScene.id) {
            this.scenesJav.splice(i, 1);
            this.searchScenes = "";
            i--;
          }
        }
      } else {
        this.scenesJav.push(objectScene);
        this.searchIdols = "";
      }
    },
    async updateJav() {
      let obj = {
        id: this.jav.id,
        title: this.jav.title,
        code: this.jav.code,
        image: this.jav.image,
        hide: this.jav.hide,
        categories: this.categoriesJav,
        idols: this.idolsJav,
        scenes: this.scenesJav,
      };
      let response = await axios
        .patch("https://jav.souzou.dev/javs/updateJav", obj, {
          headers: {
            'authorization': 'Bearer ' + this.$store.state.token
          },
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard/editJavs" });
    },
    viewCategoriesContainer() {
      if (this.viewCategories) {
        this.viewCategories = false;
      } else {
        this.viewCategories = true;
        this.viewIdols = false;
        this.viewScenes = false;
      }
    },
    viewIdolsContainer() {
      if (this.viewIdols) {
        this.viewIdols = false;
      } else {
        this.viewIdols = true;
        this.viewCategories = false;
        this.viewScenes = false;
      }
    },
    viewScenesContainer() {
      if (this.viewScenes) {
        this.viewScenes = false;
      } else {
        this.viewScenes = true;
        this.viewCategories = false;
        this.viewIdols = false;
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
    filterScenes() {
      this.filteredScenes = [];
      this.scenes.forEach((scene) => {
        if (scene.code.toLowerCase().includes(this.searchScenes.toLowerCase())) {
          this.filteredScenes.push(scene);
        }
      });
      return this.filteredScenes;
    },
  },
};
</script>

<style lang="scss">

</style>