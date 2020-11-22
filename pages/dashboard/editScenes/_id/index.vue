<template>
  <div id="wrapper">
    <SidebarAdmin
      v-bind:scenes="scenes"
      v-bind:videos="javs"
      v-bind:idols="idols"
      v-bind:categories="categories"
    />
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <div class="row">
            <div class="title-admin">
              <h2>Edit {{ this.scene.code }} details</h2>
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
                    <img id="inputJav06" :src="scene.imageIndexUrl" />
                    <div class="row need-space">
                      <label for="inputJav03">Hidden</label>
                      <input
                        type="checkbox"
                        class="input-admin"
                        id="inputJav03"
                        v-model="scene.hidden"
                      />
                    </div>
                    <div class="row">
                      <label for="inputJav07">Categories</label>
                    </div>
                    <div class="row">
                      <p
                        class="tag"
                        v-for="category in categoriesJav"
                        :key="category._id"
                      >
                        {{ category.name }}
                      </p>
                    </div>
                    <div class="row">
                      <label for="inputJav07">Idols</label>
                    </div>
                    <div class="row">
                      <p class="tag" v-for="idol in idolsJav" :key="idol._id">
                        {{ idol.name }}
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <div v-if="jav != null" class="row">
                      <label for="inputJav01">Jav Code</label>
                      <input
                        v-model="jav.code"
                        class="input-admin"
                        id="inputJav00"
                        placeholder="Jav Code"
                        disabled
                      />
                    </div>
                    <div class="row">
                      <label for="inputJav01">Scene Title</label>
                      <input
                        v-model="scene.name"
                        class="input-admin"
                        id="inputJav01"
                        placeholder="Enter new title"
                      />
                    </div>
                    <div class="row">
                      <label for="inputJav02">Scene Code</label>
                      <input
                        v-model="scene.code"
                        class="input-admin"
                        id="inputJav02"
                        placeholder="Enter new code"
                      />
                    </div>
                    <div class="row">
                      <label for="inputJav03">Scene Duration</label>
                      <input
                        v-model="scene.duration"
                        class="input-admin"
                        id="inputJav03"
                        placeholder="Enter video duration"
                      />
                    </div>
                    <div class="row">
                      <label for="inputJav04">Preview url</label>
                      <input
                        v-model="scene.imageUrl"
                        class="input-admin"
                        id="inputJav04"
                        placeholder="Enter new preview url"
                      />
                    </div>
                    <div class="row">
                      <label for="inputJav05">Image url</label>
                      <input
                        v-model="scene.imageIndexUrl"
                        class="input-admin"
                        id="inputJav05"
                        placeholder="Enter new image url"
                      />
                    </div>
                    <div class="row">
                      <label for="inputJav06">Video url</label>
                      <input
                        v-model="scene.url"
                        class="input-admin"
                        id="inputJav06"
                        placeholder="Enter new video url"
                      />
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
                <button
                  class="btn category-admin"
                  @click="viewCategoriesContainer()"
                >
                  View Categories
                </button>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
                <button
                  class="btn category-admin"
                  @click="viewIdolsContainer()"
                >
                  View Idols
                </button>
              </div>
            </div>
          </div>
          <div class="need-space"></div>
          <div v-if="this.viewCategories" class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                <input
                  type="text"
                  class="input-admin"
                  v-model="searchCategories"
                  placeholder="Filter categories here ..."
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
                  >
                    {{ category.name }}
                  </button>
                  <button
                    v-else
                    @click="addCategory(category._id)"
                    class="active btn category-button"
                  >
                    {{ category.name }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="this.viewIdols" class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                <input
                  type="text"
                  class="input-admin"
                  v-model="searchIdols"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div class="row justify-content-center">
              <div v-for="idol in filterIdols" :key="idol._id">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <button
                    v-if="checkIdol(idol._id)"
                    @click="addIdol(idol._id)"
                    class="btn category-button"
                  >
                    {{ idol.name }}
                  </button>
                  <button
                    v-else
                    @click="addIdol(idol._id)"
                    class="active btn category-button"
                  >
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
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
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
      scene: null,
      categoriesJav: null,
      idolsJav: null,
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
    let scenes = await axios
      .get("https://jav.souzou.dev/jav4free/scenes/")
      .catch((e) => {
        console.log(e);
      });
    let scene = await axios
      .get("https://jav.souzou.dev/jav4free/scenes/" + id)
      .catch((e) => {
        console.log(e);
      });
    let javs = await axios
      .get("https://jav.souzou.dev/jav4free/javs/")
      .catch((e) => {
        console.log(e);
      });
    let categories = await axios
      .get("https://jav.souzou.dev/jav4free/categories/")
      .catch((e) => {
        console.log(e);
      });
    let idols = await axios
      .get("https://jav.souzou.dev/jav4free/idols/")
      .catch((e) => {
        console.log(e);
      });
    return {
      scenes: scenes.data.scenes,
      scene: scene.data.scene,
      javs: javs.data.javs,
      categoriesJav: scene.data.categories,
      jav: scene.data.jav,
      idolsJav: scene.data.idols,
      categories: categories.data.categories,
      idols: idols.data.idols,
    };
  },
  methods: {
    checkCategory: function (_id) {
      const exist = this.scene.categories.find((category) => category === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    checkIdol: function (_id) {
      const exist = this.scene.idols.find((idol) => idol === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    addCategory: function (_id) {
      const exist = this.scene.categories.find((category) => category === _id);
      if (exist) {
        for (var i = 0; i < this.scene.categories.length; i++) {
          if (this.scene.categories[i] === _id) {
            this.scene.categories.splice(i, 1);
            this.searchCategories = "";
            i--;
          }
        }
      } else {
        this.scene.categories.push(_id);
        this.searchCategories = "";
      }
    },
    addIdol: function (_id) {
      const exist = this.scene.idols.find((idol) => idol === _id);
      if (exist) {
        for (var i = 0; i < this.scene.idols.length; i++) {
          if (this.scene.idols[i] === _id) {
            this.scene.idols.splice(i, 1);
            this.searchIdols = "";
            i--;
          }
        }
      } else {
        this.scene.idols.push(_id);
        this.searchIdols = "";
      }
    },
    async updateJav() {
      let obj = {
        name: this.scene.name,
        code: this.scene.code,
        jav: "",
        url: this.scene.url,
        duration: this.scene.duration,
        imageUrl: this.scene.imageUrl,
        imageIndexUrl: this.scene.imageIndexUrl,
        hidden: this.scene.hidden,
        categories: this.scene.categories,
        idols: this.scene.idols,
      };
      let response = await axios
        .patch(
          "https://jav.souzou.dev/jav4free/scenes/" + this.scene._id,
          obj,
          {
            headers: {
              "x-access-token": this.$store.state.token,
            },
          }
        )
        .catch((e) => {
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

<style lang="scss">
</style>