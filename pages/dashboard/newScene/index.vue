<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>Add new Scene</h2>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="container container-admin">
              <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-row">
                    <label class="title-input-admin" for="inputJav01">Scene Title</label>
                    <input v-model="newSceneTitle" class="input-admin" id="inputJav01"
                      placeholder="Enter video title, no characters limit" />
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div class="form-row">
                    <label class="title-input-admin" for="inputJav02">Scene Code</label>
                    <input v-model="newSceneCode" class="input-admin" id="inputJav02"
                      placeholder="Enter video code, example 'ABC-000'" />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div class="form-row">
                    <label class="title-input-admin" for="inputJav03">Scene Duration</label>
                    <input v-model="newSceneDuration" class="input-admin" id="inputJav03"
                      placeholder="Enter duration in minutes" />
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="form-row">
                  <label class="title-input-admin" for="inputJav03">Hidden</label>
                  <input type="checkbox" class="input-admin" id="inputJav03" v-model="newSceneHide" />
                </div>
              </div>
            </div>
            <div class="need-space"></div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
                  <button class="btn btn-warning btn-block" @click="viewCategoriesContainer()">
                    View Categories
                  </button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
                  <button class="btn btn-warning btn-block" @click="viewIdolsContainer()">
                    View Idols
                  </button>
                </div>
              </div>
            </div>
            <div class="need-space"></div>
            <div v-if="this.viewCategories" class="container-fluid">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <input class="input-admin" type="text" v-model="searchCategories"
                    placeholder="Filter categories here ..." />
                </div>
              </div>
              <div class="row justify-content-center">
                <div v-for="category in filterCategories" :key="category.id">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button v-if="checkCategory(category.id)" @click="addCategory(category.id)"
                    class="btn btn-light btn-sm">
                      {{ category.name }}
                    </button>
                    <button v-else @click="addCategory(category.id)" class="active btn btn-dark">
                      {{ category.name }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="this.viewIdols" class="container-fluid">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <input class="input-admin" type="text" v-model="searchIdols" placeholder="Filter idols here ..." />
                </div>
              </div>
              <div class="row justify-content-center">
                <div v-for="idol in filterIdols" :key="idol._id">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button v-if="checkIdol(idol.id)" @click="addIdol(idol.id)" class="btn btn-light btn-sm">
                      {{ idol.name }}
                    </button>
                    <button v-else @click="addIdol(idol.id)" class="active btn btn-dark">
                      {{ idol.name }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="need-space"></div>
            <div class="container">
              <div class="row justify-content-center">
                <button class="btn btn-success" @click="postScene()">
                  Add Scene
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="row justify-content-center">
              <button class="btn btn-warning" @click="changeVideo">
                Reload Video
              </button>
              <video controls muted ref="video">
                <source :src="this.video" type="video/mp4" />
              </video>
            </div>
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
  name: "NewJav",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      newSceneTitle: "",
      newSceneCode: "",
      newSceneDuration: "",
      newSceneHide: true,
      newSceneCategories: [],
      newSceneIdols: [],

      viewCategories: false,
      viewIdols: false,
      searchCategories: "",
      searchIdols: "",

      idolPrev: [],
      actualIdol: 0,
      filteredCategories: [],
      filteredIdols: [],
      video: "",
    };
  },
  async asyncData() {
    let categories = await axios.get("https://jav.souzou.dev/categories/");
    let idols = await axios.get("https://jav.souzou.dev/idols/getAll");
    return {
      categories: categories.data.data.Categories,
      idols: idols.data.data.Idols
    };
  },
  methods: {
    changeIdol() {
      if (this.actualIdol == this.idolPrev.length - 1) {
        this.actualIdol = 0;
      } else {
        this.actualIdol++;
      }
    },
    changeVideo() {
      this.video =
        "https://d27vxor1f495av.cloudfront.net/scenes/" +
        this.newSceneCode +
        ".mp4";
      var vid = this.$refs.video;
      vid.load();
    },
    addCategory: function (_id) {
      const exist = this.newSceneCategories.find((category) => category === _id);
      if (exist) {
        for (var i = 0; i < this.newSceneCategories.length; i++) {
          if (this.newSceneCategories[i] === _id) {
            this.newSceneCategories.splice(i, 1);
            this.searchCategories = "";
            i--;
          }
        }
      } else {
        this.newSceneCategories.push(_id);
        this.searchCategories = "";
      }
    },
    checkCategory: function (_id) {
      const exist = this.newSceneCategories.find((category) => category === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    addIdol: function (_id) {
      const exist = this.newSceneIdols.find((idol) => idol === _id);
      if (exist) {
        for (var i = 0; i < this.newSceneIdols.length; i++) {
          if (this.newSceneIdols[i] === _id) {
            this.newSceneIdols.splice(i, 1);
            i--;
            this.searchIdols = "";
          }
        }
      } else {
        this.newSceneIdols.push(_id);
        this.searchIdols = "";
      }
    },
    checkIdol: function (_id) {
      const exist = this.newSceneIdols.find((idol) => idol === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    async postScene() {
      var obj = {
        title: this.newSceneTitle,
        code: this.newSceneCode,
        video:
          "https://d27vxor1f495av.cloudfront.net/scenes/" +
          this.newSceneCode +
          ".mp4",
        video480p:
          "https://d27vxor1f495av.cloudfront.net/scenes_480/" +
          this.newSceneCode +
          "_1.mp4",
        duration: this.newSceneDuration,
        hide: this.newSceneHide,
        previewImage:
          "https://d27vxor1f495av.cloudfront.net/scenes-preview/" +
          this.newSceneCode +
          ".mp4",
        staticImage:
          "https://d27vxor1f495av.cloudfront.net/scenes-static/" +
          this.newSceneCode +
          "-static.jpg",
        vtt:
          "https://d27vxor1f495av.cloudfront.net/vtts/" +
          this.newSceneCode +
          "_thumbs.vtt",
        categories: this.newSceneCategories,
        idols: this.newSceneIdols,
      };
      let response = await axios
        .post("https://jav.souzou.dev/scenes/newScene", obj, {
          headers: {
            'authorization': 'Bearer ' + this.$store.state.token
          },
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
    filterIdolPrev() {
      return this.idolPrev[this.actualIdol];
    }
  }
};
</script>