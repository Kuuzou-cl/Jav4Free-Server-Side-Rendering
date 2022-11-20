<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>Add new JAV</h2>
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
                    <label for="inputJav01">JAV Title</label>
                    <input v-model="newJavTitle" class="input-admin" id="inputJav01"
                      placeholder="Enter video title, no characters limit" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div class="form-row">
                    <label for="inputJav02">JAV Code</label>
                    <input v-model="newJavCode" class="input-admin" id="inputJav02"
                      placeholder="Enter video code, example 'ABC-000'" />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div class="form-row">
                    <label for="inputJav03">Hidden Status</label>
                    <input type="checkbox" class="input-admin" id="inputJav03" v-model="newJavHide" />
                  </div>
                </div>
              </div>
            </div>
            <div class="need-space"></div>
            <div class="container">
              <div class="row justify-content-center">
                <button class="btn category-admin" @click="postJav()">
                  Add Video
                </button>
              </div>
              {{newJavCategories}}
              {{newJavIdols}}
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
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
            <div v-if="this.viewCategories" class="container-fluid">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <input class="input-admin" type="text" v-model="searchCategories"
                    placeholder="Filter categories here ..." />
                </div>
              </div>
              <div class="row justify-content-center">
                <div v-for="category in filterCategories" :key="category._id">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button v-if="checkCategory(category.id)" @click="addCategory(category.id)"
                      class="btn category-button">
                      {{ category.name }}
                    </button>
                    <button v-else @click="addCategory(category.id)" class="active btn category-button">
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
                    <button v-if="checkIdol(idol.id)" @click="addIdol(idol.id)" class="btn category-button">
                      {{ idol.name }}
                    </button>
                    <button v-else @click="addIdol(idol.id)" class="active btn category-button">
                      {{ idol.name }}
                    </button>
                  </div>
                </div>
              </div>
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
      newJavTitle: "",
      newJavCode: "",
      newJavHide: false,
      newJavCategories: [],
      newJavIdols: [],
      viewCategories: false,
      viewIdols: false,
      searchCategories: "",
      searchIdols: "",
      filteredCategories: [],
      filteredIdols: [],
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
    addCategory: function (_id) {
      const exist = this.newJavCategories.find((category) => category === _id);
      if (exist) {
        for (var i = 0; i < this.newJavCategories.length; i++) {
          if (this.newJavCategories[i] === _id) {
            this.newJavCategories.splice(i, 1);
            this.searchCategories = "";
            i--;
          }
        }
      } else {
        this.newJavCategories.push(_id);
        this.searchCategories = "";
      }
    },
    checkCategory: function (_id) {
      const exist = this.newJavCategories.find((category) => category === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    addIdol: function (_id) {
      const exist = this.newJavIdols.find((idol) => idol === _id);
      if (exist) {
        for (var i = 0; i < this.newJavIdols.length; i++) {
          if (this.newJavIdols[i] === _id) {
            this.newJavIdols.splice(i, 1);
            i--;
            this.searchIdols = "";
          }
        }
      } else {
        this.newJavIdols.push(_id);
        this.searchIdols = "";
      }
    },
    checkIdol: function (_id) {
      const exist = this.newJavIdols.find((idol) => idol === _id);
      if (exist) {
        return false;
      } else {
        return true;
      }
    },
    async postJav() {
      var obj = {
        title: this.newJavTitle,
        code: this.newJavCode,
        image:
          "https://jav4free-s3-data.s3.us-east-1.amazonaws.com/javs/" +
          this.newJavCode +
          ".jpg",
        hide: this.newJavHide,
        categories: this.newJavCategories,
        idols: this.newJavIdols,
      };
      let response = await axios.post("https://jav.souzou.dev/javs/newjav", obj, {
        headers: {
          'authorization': 'Bearer ' + this.$store.state.token
        }
      });
      this.$router.push({ path: "/dashboard/editJavs" });
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
    }
  }
};
</script>