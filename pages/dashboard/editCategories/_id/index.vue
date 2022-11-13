<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>Overview</h2>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="container container-admin">
              <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="row">
                    <label for="inputJav04">Category Name</label>
                    <input v-model="category.name" class="input-admin" id="inputJav04"
                      placeholder="Enter new category name" />
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <button class="btn category-admin" @click="updateCategory()">Update Category</button>
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
  name: "editCategory",
  components: {
    SidebarAdmin
  },
  data() {
    return {
      category: null
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    let category = await axios.get("https://jav.souzou.dev/categories/getCategory?id=" + id);
    return {
      category: category.data.data.Category
    };
  },
  methods: {
    async updateCategory() {
      let obj = {
        id: this.category.id,
        name: this.category.name
      };
      let response = await axios
        .patch(
          "https://jav.souzou.dev/categories/updateCategory",
          obj,
          {
            headers: {
              'authorization': 'Bearer ' + this.$store.state.token
            }
          }
        )
        .catch(e => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard/editCategories" });
    }
  }
};
</script>