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
          <nuxt-link :to="'/dashboard/editCategories/'" class="btn simple-button disabled">
            View Categories
          </nuxt-link>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/editIdols/'" class="btn simple-button">
            View Idols
          </nuxt-link>
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
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Code</th>
                <th scope="col">Javs</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in categories" :key="category._id">
                <th scope="row">{{category.name}}</th>
                <td>{{category._id}}</td>
                <td>{{getLength(category._id)}}</td>
                <td>
                  <nuxt-link :to="'/dashboard/editCategories/'+category._id" class="btn simple-button">Edit</nuxt-link>
                </td>
                <td>
                  <button @click="deleteCat(category._id)" class="btn simple-button">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
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
      categoriesLength: [],
    };
  },
  async asyncData() {
    let javs = await axios.get("https://jav.souzou.dev/jav4free/javs/");
    let categories = await axios.get(
      "https://jav.souzou.dev/jav4free/categories/"
    );
    let idols = await axios.get("https://jav.souzou.dev/jav4free/idols/");
    let categoriesLength = [];
    categories.data.categories.forEach(async element => {
      let data = await axios.get("https://jav.souzou.dev/jav4free/categories/countJavs/"+ element._id);
      let categoryData =  { categoryId: element._id, categoryLength: data.data.length };
      categoriesLength.push(categoryData);
    });
    return {
      javs: javs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols,
      categoriesLength: categoriesLength,
    };
  },
  methods: {
    async deleteCat(_id){
     let message = await axios.delete("https://jav.souzou.dev/jav4free/categories/"+_id)
     this.$router.push({ path: "/dashboard" });
    },
    getLength(_id){
      let length = 0;
      this.categoriesLength.forEach(element => {
        if (element.categoryId == _id) {
          length = element.categoryLength;
        }
      });
      return length;
    }
  }
};
</script>

<style lang="scss">
</style>