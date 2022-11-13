<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
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
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <input class="input-admin" type="text" v-model="search" placeholder="Search by code..." />
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
            <input v-model="video720pState" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">720p</label>
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
            <input v-model="video480pState" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">480p</label>
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
            <input v-model="previewState" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Preview</label>
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
            <input v-model="staticState" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Static</label>
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
            <input v-model="vttState" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Vtt</label>
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
            <input v-model="spriteState" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Sprite</label>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <table id="example" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Hide</th>
                  <th>Duration</th>
                  <th>720p</th>
                  <th>480p</th>
                  <th>Preview</th>
                  <th>Static</th>
                  <th>Vtt</th>
                  <th>Sprite</th>
                  <th>Edit</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="scene in filterScenes" :key="scene.id">
                  <th>{{ scene.code }}</th>
                  <td>{{ scene.hide }}</td>
                  <td>{{ scene.duration }}</td>
                  <td>
                    <font-awesome-icon v-if="scene.video720p" :icon="['fas', 'file-video']" class="icon-green" />
                    <font-awesome-icon v-else :icon="['fas', 'file-video']" class="icon-red" />
                  </td>
                  <td>
                    <font-awesome-icon v-if="scene.video480p" :icon="['fas', 'file-video']" class="icon-green" />
                    <font-awesome-icon v-else :icon="['fas', 'file-video']" class="icon-red" />
                  </td>
                  <td>
                    <font-awesome-icon v-if="scene.videoPreview" :icon="['fas', 'eye']" class="icon-green" />
                    <font-awesome-icon v-else :icon="['fas', 'eye']" class="icon-red" />
                  </td>
                  <td>
                    <font-awesome-icon v-if="scene.videoStatic" :icon="['fas', 'image']" class="icon-green" />
                    <font-awesome-icon v-else :icon="['fas', 'image']" class="icon-red" />
                  </td>
                  <td>
                    <font-awesome-icon v-if="scene.videoVtt" :icon="['fas', 'closed-captioning']" class="icon-green" />
                    <font-awesome-icon v-else :icon="['fas', 'closed-captioning']" class="icon-red" />
                  </td>
                  <td>
                    <font-awesome-icon v-if="scene.videoSprite" :icon="['fas', 'images']" class="icon-green" />
                    <font-awesome-icon v-else :icon="['fas', 'images']" class="icon-red" />
                  </td>
                  <td>
                    <nuxt-link :to="'/dashboard/editScenes/' + scene.id" class="btn button-admin">Edit</nuxt-link>
                  </td>
                  <td>
                    <button @click="deleteJav(scene._id)" class="btn button-admin">
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
      filteredScenes: [],
      video720pState: true,
      video480pState: true,
      previewState: true,
      staticState: true,
      vttState: true,
      spriteState: true,
    };
  },
  async asyncData() {
    let scenes = await axios.get("https://jav.souzou.dev/aws/getAll");
    return {
      scenes: scenes.data.data
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
    }
  },
  computed: {
    filterScenes() {
      this.filteredScenes = [];
      this.scenes.forEach((scene) => {
        if (scene.code.toLowerCase().includes(this.search.toLowerCase())) {
          if (scene.video720p == this.video720pState) {
            if (scene.video480p == this.video480pState) {
              if (scene.videoPreview == this.previewState) {
                if (scene.videoStatic == this.staticState) {
                  if (scene.videoVtt == this.vttState) {
                    if (scene.videoSprite == this.spriteState) {
                      this.filteredScenes.push(scene);
                    }
                  }
                }
              }
            }
          }
        }
      });
      return this.filteredScenes;
    },
  }
};
</script>