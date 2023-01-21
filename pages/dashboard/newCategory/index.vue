<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>Add new Category</h2>
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
                    <label class="title-input-admin" for="inputCat01">Category Title</label>
                    <input v-model="catName" class="input-admin" id="inputCat01"
                      placeholder="Enter new category title" />
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <button class="btn btn-success" @click="postCat()">
                  Add Category
                </button>
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
  name: "NewCategory",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      catName: "",
    };
  },
  async asyncData() {
    return {
    };
  },
  methods: {
    async postCat() {
      let response = await axios
        .post("https://jav.souzou.dev/categories/newCategory", { name: this.catName }, {
          headers: {
            'authorization': 'Bearer ' + this.$store.state.token
          }
        });
      this.$router.push({ path: "/dashboard/editCategories" });
    },
  },
};
</script>

<style lang="scss">

</style>