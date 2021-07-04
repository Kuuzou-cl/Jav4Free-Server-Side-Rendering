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
              <h2>List of Published Idols</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
              <input
                class="input-admin"
                type="text"
                v-model="search"
                placeholder="Search by name..."
              />
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">
              <button @click="deleteIdolsEmpty()" class="btn btn-danger">Delete</button>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">
              <div class="dropdown">
                <button
                  type="button"
                  class="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  {{ this.entries }} of {{ this.idols.length }}
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" @click="changeEntries(15)">10</a>
                  <a class="dropdown-item" @click="changeEntries(25)">25</a>
                  <a class="dropdown-item" @click="changeEntries(50)">50</a>
                  <a
                    class="dropdown-item"
                    @click="changeEntries(filteredIdols.length)"
                    >All</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <table id="example" class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Javs</th>
                    <th>Scenes</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="idol in filterIdols" :key="idol._id">
                    <th v-if="idol.javsQ == '0'" class="red">
                      {{ idol.name }}
                    </th>
                    <th v-else>{{ idol.name }}</th>
                    <td>{{ idol.imageUrl }}</td>
                    <th v-if="idol.javsQ == '0'" class="red">
                      {{ idol.javsQ }}
                    </th>
                    <th v-else>{{ idol.javsQ }}</th>
                    <th>pending</th>
                    <td>
                      <nuxt-link
                        :to="'/dashboard/editIdols/' + idol._id"
                        class="btn button-admin"
                        >Edit</nuxt-link
                      >
                    </td>
                    <td>
                      <button
                        @click="deleteIdol(idol._id)"
                        class="btn button-admin"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Javs</th>
                    <th>Scenes</th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
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
  name: "editIdols",
  components: {
    SidebarAdmin,
  },
  data() {
    return { search: "", idols: null, filteredIdols: [], entries: 5 };
  },
  async asyncData() {
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
    return {
      scenes: scenes.data.scenes,
      javs: javs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols,
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
    changeEntries(_entries) {
      this.entries = _entries;
    },
  },
  computed: {
    filterIdols() {
      this.filteredIdols = [];
      this.idols.forEach((idol) => {
        if (idol.name.toLowerCase().includes(this.search.toLowerCase())) {
          this.filteredIdols.push(idol);
        }
      });

      return this.filteredIdols.slice(0, this.entries);
    },
  },
};
</script>

<style lang="scss">
.red {
  color: #e8175d;
}
</style>