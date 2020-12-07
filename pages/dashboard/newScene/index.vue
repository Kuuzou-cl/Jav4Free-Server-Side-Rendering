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
              <h2>Add new Scene</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
              <div class="container container-admin">
                <div class="row justify-content-center">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-row">
                      <label for="inputJav01">Scene Title</label>
                      <input
                        v-model="javName"
                        class="input-admin"
                        id="inputJav01"
                        placeholder="Enter video title, no characters limit"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div class="form-row">
                      <label for="inputJav02">Scene Code</label>
                      <input
                        v-model="javCode"
                        class="input-admin"
                        id="inputJav02"
                        placeholder="Enter video code, example 'ABC-000'"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div class="form-row">
                      <label for="inputJav03">Scene Duration</label>
                      <input
                        v-model="javDuration"
                        class="input-admin"
                        id="inputJav03"
                        placeholder="Enter duration in minutes"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    <div class="form-row">
                      <label for="inputJav03">Hidden</label>
                      <input
                        type="checkbox"
                        class="input-admin"
                        id="inputJav03"
                        v-model="hidden"
                      />
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
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <input
                      class="input-admin"
                      type="text"
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
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <input
                      class="input-admin"
                      type="text"
                      v-model="searchIdols"
                      placeholder="Filter idols here ..."
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
                  <button class="btn category-admin" @click="postJav()">
                    Add Scene
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div class="row justify-content-center">
                <button
                  class="btn btn-warning"
                  type="button"
                  data-toggle="modal"
                  data-target="#modalPending"
                >
                  Pending Videos
                </button>
                <div
                  class="modal fade"
                  id="modalPending"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="modalPendingLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="modalPendingLabel">
                          Pending Videos
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="tableFixHead">
                              <table class="table table-hover text-center">
                                <tbody>
                                  <tr
                                    v-for="(jav, key) in spaceCheck"
                                    :key="key"
                                  >
                                    <th>{{ jav }}</th>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <button
                  class="btn btn-warning"
                  type="button"
                  data-toggle="modal"
                  data-target="#modalDB"
                >
                  Database
                </button>
                <div
                  class="modal fade"
                  id="modalDB"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="modalDBLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="modalDBLabel">
                          Videos Database
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="tableFixHead">
                              <table class="table table-hover text-center">
                                <tbody>
                                  <tr v-for="(jav, key) in javs" :key="key">
                                    <th>{{ jav.code }}</th>
                                    <th>
                                      <button
                                        class="btn btn-warning"
                                        @click="loadDataVideo(jav._id)"
                                      >
                                        Load Data
                                      </button>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  name: "NewJav",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      javName: "",
      javCode: "",
      javDuration: "",
      hidden: true,
      javCategories: [],
      javIdols: [],
      viewCategories: false,
      viewIdols: false,
      searchCategories: "",
      searchIdols: "",
      categories: null,
      idols: null,
      filteredCategories: [],
      filteredIdols: [],
    };
  },
  async asyncData() {
    var convert = require("xml-js");
    var options = { compact: false, ignoreComment: true, spaces: 3 };

    let scenes = await axios
      .get("https://jav.souzou.dev/jav4free/scenes/")
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
    let spaceData = await axios
      .get(
        "https://sfo2.digitaloceanspaces.com/javdata?prefix=scenes&max-keys=10000"
      )
      .catch((e) => {
        console.log(e);
      });
    var result = JSON.parse(convert.xml2json(spaceData.data, options));
    return {
      scenes: scenes.data.scenes,
      javs: javs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols,
      result: result,
    };
  },
  methods: {
    async loadDataVideo(_id) {
      let jav = await axios
        .get("https://jav.souzou.dev/jav4free/javs/" + _id)
        .catch((e) => {
          console.log(e);
        });
      let javData = jav.data.jav;
      this.javName = javData.name;
      this.javCode = javData.code;
      this.javDuration = javData.duration;
      this.javCategories = javData.categories;
      this.javIdols = javData.idols;
    },
    addCategory: function (_id) {
      const exist = this.javCategories.find((category) => category === _id);
      if (exist) {
        for (var i = 0; i < this.javCategories.length; i++) {
          if (this.javCategories[i] === _id) {
            this.javCategories.splice(i, 1);
            this.searchCategories = "";
            i--;
          }
        }
      } else {
        this.javCategories.push(_id);
        this.searchCategories = "";
      }
    },
    checkCategory: function (_id) {
      const exist = this.javCategories.find((category) => category === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    addIdol: function (_id) {
      const exist = this.javIdols.find((idol) => idol === _id);
      if (exist) {
        for (var i = 0; i < this.javIdols.length; i++) {
          if (this.javIdols[i] === _id) {
            this.javIdols.splice(i, 1);
            i--;
            this.searchIdols = "";
          }
        }
      } else {
        this.javIdols.push(_id);
        this.searchIdols = "";
      }
    },
    checkIdol: function (_id) {
      const exist = this.javIdols.find((idol) => idol === _id);
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
        url: "https://javdata.sfo2.digitaloceanspaces.com/scenes/" + this.javCode + ".mp4",
        duration: this.javDuration,
        imageUrl:
          "https://javdata.sfo2.digitaloceanspaces.com/scenes/preview/" + this.javCode + ".mp4",
        imageIndexUrl:
          "https://javdata.sfo2.digitaloceanspaces.com/scenes/static/" +
          this.javCode +
          "-static.jpg",
        hidden: this.hidden,
        categories: this.javCategories,
        idols: this.javIdols,
      };
      let response = await axios
        .post("https://jav.souzou.dev/jav4free/scenes/newScene/", obj, {
          headers: {
            "x-access-token": this.$store.state.token,
          },
        })
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
    spaceCheck() {
      let spaceData = [];

      this.result.elements[0].elements.forEach((element) => {
        if (element.name === "Contents") {
          element.elements.forEach((obj) => {
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

      spaceData.forEach((r) => {
        if (!this.javs.some((item) => item.code === r) && r !="preview" && r !="static") {
          pending.push(r);
        }
      });

      return pending;
    },
  },
};
</script>

<style lang="scss">
</style>