<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>List of Published Categories</h2>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <input class="input-admin" type="text" v-model="search" placeholder="Search by name..." />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <table id="example" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>ID Code</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="category in categories" :key="category.id">
                  <th scope="row">{{ category.name }}</th>
                  <td>{{ category.id }}</td>
                  <td>
                    <nuxt-link :to="'/dashboard/editCategories/' + category.id" class="btn button-admin">Edit</nuxt-link>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
            </table>
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
  name: "editCategories",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      search: "",
      categories: null,
    };
  },
  async asyncData() {
    let categories = await axios.get("https://jav.souzou.dev/categories/");
    return {
      categories: categories.data.data.Categories
    };
  },
  methods: {
    async deleteCat(_id) {
      let message = await axios
        .delete("https://jav.souzou.dev/jav4free/categories/" + _id, {
          headers: {
            "x-access-token": this.$store.state.token,
          },
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard" });
    }
  },
  computed: {
  },
};
</script>

<style lang="scss">

</style>