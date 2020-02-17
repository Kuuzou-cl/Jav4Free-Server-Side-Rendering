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
          <nuxt-link :to="'/dashboard/editJavs/'" class="btn simple-button disabled">View Javs</nuxt-link>
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
          <nuxt-link :to="'/dashboard/uploadFile/'" class="btn simple-button">Upload File</nuxt-link>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="card dashboard-card text-center">
            <div class="card-header">Javs Count</div>
            <div class="card-body">
              <h5 class="card-title">{{javs.length}}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="card dashboard-card text-center">
            <div class="card-header">Categories Count</div>
            <div class="card-body">
              <h5 class="card-title">{{categories.length}}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="card dashboard-card text-center">
            <div class="card-header">Idols Count</div>
            <div class="card-body">
              <h5 class="card-title">{{idols.length}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <input type="text" v-model="search" placeholder="Search by code..." />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="tableFixHead">
            <table class="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col" class="t-header">Code</th>
                  <th scope="col" class="t-header">Video</th>
                  <th scope="col" class="t-header">Hidden</th>
                  <th scope="col" class="t-header">Categories</th>
                  <th scope="col" class="t-header">Idols</th>
                  <th scope="col" class="t-header"></th>
                  <th scope="col" class="t-header"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="jav in filterJavs" :key="jav._id">
                  <th>{{jav.code}}</th>
                  <td>{{jav.url}}</td>
                  <td>{{jav.hidden}}</td>
                  <td>{{jav.categories.length}}</td>
                  <td>{{jav.idols.length}}</td>
                  <td>
                    <nuxt-link :to="'/dashboard/editJavs/'+jav._id" class="btn simple-button">Edit</nuxt-link>
                  </td>
                  <td>
                    <button @click="deleteJav(jav._id)" class="btn simple-button">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
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
      search: "",
      javs: null,
      filteredJavs: []
    };
  },
  async asyncData() {
    let javs = await axios.get("https://jav.souzou.dev/jav4free/javs/");
    let categories = await axios.get(
      "https://jav.souzou.dev/jav4free/categories/"
    );
    let idols = await axios.get("https://jav.souzou.dev/jav4free/idols/");
    return {
      javs: javs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols
    };
  },
  methods: {
    async deleteJav(_id) {
      let message = await axios.delete(
        "https://jav.souzou.dev/jav4free/javs/" + _id
      );
      this.$router.push({ path: "/dashboard" });
    },
    
  },
  computed: {
    filterJavs() {
      this.filteredJavs = [];
      this.javs.forEach(jav => {
        if (jav.code.toLowerCase().includes(this.search.toLowerCase())) {
          this.filteredJavs.push(jav);
        }
      });
      return this.filteredJavs;
    }
  }
};
</script>

<style lang="scss">
</style>