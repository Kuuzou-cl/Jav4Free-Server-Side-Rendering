<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>List of Published Idols</h2>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            <input class="input-admin" type="text" v-model="search" placeholder="Search by name..." />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <table id="example" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="idol in idols" :key="idol.id">
                  <th>{{ idol.name }}</th>
                  <td>{{ idol.image }}</td>
                  <td>
                    <nuxt-link :to="'/dashboard/editIdols/' + idol.id" class="btn button-admin">Edit</nuxt-link>
                  </td>
                  <td>
                    <button @click="deleteIdol(idol._id)" class="btn button-admin">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
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
  name: "editIdols",
  components: {
    SidebarAdmin,
  },
  data() {
    return { search: "" };
  },
  async asyncData() {
    let idols = await axios.get("https://jav.souzou.dev/idols/getAll");
    return {
      idols: idols.data.data.Idols
    };
  },
  methods: {
    async deleteIdol(_id) {
      let message = await axios
        .delete("https://jav.souzou.dev/jav4free/idols/" + _id, {
          headers: {
            "x-access-token": this.$store.state.token,
          },
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard" });
    },
    async deleteIdolsEmpty() {
      let message = await axios
        .delete("https://jav.souzou.dev/jav4free/idols/deleteIdolsEmpty", {
          headers: {
            "x-access-token": this.$store.state.token,
          },
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard" });
    },
  },
  computed: {
  },
};
</script>

<style lang="scss">
.red {
  color: #e8175d;
}
</style>