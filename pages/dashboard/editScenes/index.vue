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
              <h2>List of Published Scenes</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                class="input-admin"
                type="text"
                v-model="search"
                placeholder="Search by code..."
              />
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
                    <tr v-for="scene in filterScenes" :key="scene._id">
                      <th>{{ scene.code }}</th>
                      <td>{{ scene.url }}</td>
                      <td>{{ scene.hidden }}</td>
                      <td>{{ scene.categories.length }}</td>
                      <td>{{ scene.idols.length }}</td>
                      <td>
                        <nuxt-link
                          :to="'/dashboard/editScenes/' + scene._id"
                          class="btn button-admin"
                          >Edit</nuxt-link
                        >
                      </td>
                      <td>
                        <button
                          @click="deleteJav(scene._id)"
                          class="btn button-admin"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  name: "editJavs",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      search: "",
      scenes: null,
      filteredScenes: [],
    };
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
    async deleteJav(_id) {
      let message = await axios
        .delete("https://jav.souzou.dev/jav4free/scenes/" + _id, {
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
    filterScenes() {
      this.filteredScenes = [];
      this.scenes.forEach((scene) => {
        if (scene.code.toLowerCase().includes(this.search.toLowerCase())) {
          this.filteredScenes.push(scene);
        }
      });
      return this.filteredScenes;
    },
  },
};
</script>

<style lang="scss">
</style>