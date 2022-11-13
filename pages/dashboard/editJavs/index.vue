<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <div class="row">
            <div class="title-admin">
              <h2>List of Published Videos</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <input class="input-admin" type="text" v-model="search" placeholder="Search by code..." />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
              <div class="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                  {{ this.entries }} of {{ this.javs.length }}
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" @click="changeEntries(15)">10</a>
                  <a class="dropdown-item" @click="changeEntries(25)">25</a>
                  <a class="dropdown-item" @click="changeEntries(50)">50</a>
                  <a class="dropdown-item" @click="changeEntries(filteredJavs.length)">All</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <table id="example" class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Jav Code</th>
                    <th>Show</th>
                    <th>Scenes</th>
                    <th>Categories</th>
                    <th>Idols</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="jav in filterJavs" :key="jav._id">
                    <th>{{ jav.code }}</th>
                    <td>{{ jav.hide }}</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>
                      <nuxt-link :to="'/dashboard/editJavs/' + jav.id" class="btn button-admin">Edit</nuxt-link>
                    </td>
                    <td>
                      <button @click="deleteJav(jav._id)" class="btn button-admin">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Jav Code</th>
                    <th>Show</th>
                    <th>Scenes</th>
                    <th>Categories</th>
                    <th>Idols</th>
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
  name: "editJavs",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      search: "",
      filteredJavs: [],
      entries: 5,
    };
  },
  async asyncData() {
    let javs = await axios
      .get("https://jav.souzou.dev/javs/getAll")
      .catch((e) => {
        console.log(e);
      });
    return {
      javs: javs.data.data.Javs
    };
  },
  methods: {
    async deleteJav(_id) {
      let message = await axios
        .delete("https://jav.souzou.dev/jav4free/javs/" + _id, {
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
    filterJavs() {
      this.filteredJavs = [];
      this.javs.forEach((jav) => {
        if (jav.code.toLowerCase().includes(this.search.toLowerCase())) {
          this.filteredJavs.push(jav);
        }
      });
      return this.filteredJavs.slice(0, this.entries);
    },
  }
};
</script>