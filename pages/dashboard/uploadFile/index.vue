<template>
  <div id="wrapper">
    <SidebarAdmin
      v-bind:scenes="scenesData"
      v-bind:videos="javsData"
      v-bind:idols="idolsData"
      v-bind:categories="categoriesData"
    />
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <div class="row">
            <div class="title-admin">
              <h2>Upload files</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-1">
              <div class="custom-file">
                <input
                  class="custom-file-input"
                  type="file"
                  id="javs"
                  ref="javs"
                  multiple
                  v-on:change="handleFilesUploadJavs()"
                />
                <label class="custom-file-label" for="javs">
                  <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div class="col-12 mx-auto">
                        <div class="row justify-content-center">
                          <font-awesome-icon :icon="['fas', 'file-video']" class="icon-upload" />
                        </div>
                        <br />
                        <div class="row justify-content-center">
                          <h6>Jav</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-1">
              <div class="custom-file mb-3">
                <input
                  class="custom-file-input"
                  type="file"
                  id="covers"
                  ref="covers"
                  multiple
                  v-on:change="handleFilesUploadScenes()"
                />
                <label class="custom-file-label" for="covers">
                  <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div class="col-12 mx-auto">
                        <div class="row justify-content-center">
                          <font-awesome-icon :icon="['fas', 'photo-video']" class="icon-upload" />
                        </div>
                        <br />
                        <div class="row justify-content-center">
                          <h6>Scenes</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-1">
              <div class="custom-file mb-3">
                <input
                  class="custom-file-input"
                  type="file"
                  id="idols"
                  ref="idols"
                  multiple
                  v-on:change="handleFilesUploadIdols()"
                />
                <label class="custom-file-label" for="covers">
                  <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div class="col-12 mx-auto">
                        <div class="row justify-content-center">
                          <font-awesome-icon :icon="['fas', 'female']" class="icon-upload" />
                        </div>
                        <br />
                        <div class="row justify-content-center">
                          <h6>Idols</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-1">
              <div class="custom-file mb-3">
                <input
                  class="custom-file-input"
                  type="file"
                  id="statics"
                  ref="statics"
                  multiple
                  v-on:change="handleFilesUploadStatic()"
                />
                <label class="custom-file-label" for="statics">
                  <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div class="col-12 mx-auto">
                        <div class="row justify-content-center">
                          <font-awesome-icon :icon="['fas', 'photo-video']" class="icon-upload" />
                        </div>
                        <br />
                        <div class="row justify-content-center">
                          <h6>Statics</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-1">
              <div class="custom-file mb-3">
                <input
                  class="custom-file-input"
                  type="file"
                  id="previews"
                  ref="previews"
                  multiple
                  v-on:change="handleFilesUploadPreview()"
                />
                <label class="custom-file-label" for="previews">
                  <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div class="col-12 mx-auto">
                        <div class="row justify-content-center">
                          <font-awesome-icon :icon="['fas', 'photo-video']" class="icon-upload" />
                        </div>
                        <br />
                        <div class="row justify-content-center">
                          <h6>Previews</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-1">
              <div class="custom-file mb-3">
                <input
                  class="custom-file-input"
                  type="file"
                  id="vtts"
                  ref="vtts"
                  multiple
                  v-on:change="handleFilesUploadVtts()"
                />
                <label class="custom-file-label" for="covers">
                  <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div class="col-12 mx-auto">
                        <div class="row justify-content-center">
                          <font-awesome-icon
                            :icon="['fas', 'closed-captioning']"
                            class="icon-upload"
                          />
                        </div>
                        <br />
                        <div class="row justify-content-center">
                          <h6>Vtts</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-1">
              <div class="custom-file mb-3">
                <input
                  class="custom-file-input"
                  type="file"
                  id="sprites"
                  ref="sprites"
                  multiple
                  v-on:change="handleFilesUploadSprites()"
                />
                <label class="custom-file-label" for="covers">
                  <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div class="col-12 mx-auto">
                        <div class="row justify-content-center">
                          <font-awesome-icon :icon="['fas', 'images']" class="icon-upload" />
                        </div>
                        <br />
                        <div class="row justify-content-center">
                          <h6>Sprites</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">{{this.progress}}</div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
              <button class="btn btn-upload-admin" v-on:click="clearFiles()">
                Clear All Files
                <font-awesome-icon :icon="['fas', 'eraser']" />
              </button>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
              <button class="btn btn-upload-admin" v-on:click="submitFiles()">
                Upload All Files
                <font-awesome-icon :icon="['fas', 'upload']" />
              </button>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="container container-admin">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul class="nav nav-tabs">
                  <li class="nav-item" @click="changeJavTab">
                    <a class="nav-link" :class="javTab">Videos</a>
                  </li>
                  <li class="nav-item" @click="changeSceneTab">
                    <a class="nav-link" :class="sceneTab">Scenes</a>
                  </li>
                  <li class="nav-item" @click="changeIdolTab">
                    <a class="nav-link" :class="idolTab">Idols</a>
                  </li>
                  <li class="nav-item" @click="changeStaticTab">
                    <a class="nav-link" :class="staticTab">Static</a>
                  </li>
                  <li class="nav-item" @click="changePreviewTab">
                    <a class="nav-link" :class="previewTab">Preview</a>
                  </li>
                  <li class="nav-item" @click="changeVttTab">
                    <a class="nav-link" :class="vttTab">Vtts</a>
                  </li>
                  <li class="nav-item" @click="changeSpriteTab">
                    <a class="nav-link" :class="spriteTab">Sprites</a>
                  </li>
                </ul>
                <table class="table table-hover" v-if="this.javTab == 'active'">
                  <tbody>
                    <tr v-for="(file, key) in javs" :key="key">
                      <td class="text-center">{{file[0].name}}</td>
                      <td class="text-center">{{formatBytes(file[0].size)}}</td>
                      <td class="text-center">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                          role="progressbar"
                          :aria-valuenow="file[1]"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{'width': `${(100)}%`}"
                        >{{file[1]}}%</div>
                      </td>
                      <td class="text-center">
                        <span v-on:click="removeFileJavs( key )">
                          Remove
                          <font-awesome-icon :icon="['fas', 'minus-circle']" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-hover" v-if="this.idolTab == 'active'">
                  <tbody>
                    <tr v-for="(file, key) in idols" :key="key">
                      <td class="text-center">{{file[0].name}}</td>
                      <td class="text-center">{{formatBytes(file[0].size)}}</td>
                      <td class="text-center">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                          role="progressbar"
                          :aria-valuenow="file[1]"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{'width': `${(100)}%`}"
                        >{{file[1]}}%</div>
                      </td>
                      <td class="text-center">
                        <span v-on:click="removeFileIdols( key )">
                          Remove
                          <font-awesome-icon :icon="['fas', 'minus-circle']" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-hover" v-if="this.sceneTab == 'active'">
                  <tbody>
                    <tr v-for="(file, key) in scenes" :key="key">
                      <td class="text-center">{{file[0].name}}</td>
                      <td class="text-center">{{formatBytes(file[0].size)}}</td>
                      <td class="text-center">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                          role="progressbar"
                          :aria-valuenow="file[1]"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{'width': `${(100)}%`}"
                        >{{file[1]}}%</div>
                      </td>
                      <td class="text-center">
                        <span v-on:click="removeFileScenes( key )">
                          Remove
                          <font-awesome-icon :icon="['fas', 'minus-circle']" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-hover" v-if="this.staticTab == 'active'">
                  <tbody>
                    <tr v-for="(file, key) in statics" :key="key">
                      <td class="text-center">{{file[0].name}}</td>
                      <td class="text-center">{{formatBytes(file[0].size)}}</td>
                      <td class="text-center">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                          role="progressbar"
                          :aria-valuenow="file[1]"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{'width': `${(100)}%`}"
                        >{{file[1]}}%</div>
                      </td>
                      <td class="text-center">
                        <span v-on:click="removeFileStatic( key )">
                          Remove
                          <font-awesome-icon :icon="['fas', 'minus-circle']" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-hover" v-if="this.previewTab == 'active'">
                  <tbody>
                    <tr v-for="(file, key) in previews" :key="key">
                      <td class="text-center">{{file[0].name}}</td>
                      <td class="text-center">{{formatBytes(file[0].size)}}</td>
                      <td class="text-center">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                          role="progressbar"
                          :aria-valuenow="file[1]"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{'width': `${(100)}%`}"
                        >{{file[1]}}%</div>
                      </td>
                      <td class="text-center">
                        <span v-on:click="removeFilePreview( key )">
                          Remove
                          <font-awesome-icon :icon="['fas', 'minus-circle']" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-hover" v-if="this.vttTab == 'active'">
                  <tbody>
                    <tr v-for="(file, key) in vtts" :key="key">
                      <td class="text-center">{{file[0].name}}</td>
                      <td class="text-center">{{formatBytes(file[0].size)}}</td>
                      <td class="text-center">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                          role="progressbar"
                          :aria-valuenow="file[1]"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{'width': `${(100)}%`}"
                        >{{file[1]}}%</div>
                      </td>
                      <td class="text-center">
                        <span v-on:click="removeFileVtts( key )">
                          Remove
                          <font-awesome-icon :icon="['fas', 'minus-circle']" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-hover" v-if="this.spriteTab == 'active'">
                  <tbody>
                    <tr v-for="(file, key) in sprites" :key="key">
                      <td class="text-center">{{file[0].name}}</td>
                      <td class="text-center">{{formatBytes(file[0].size)}}</td>
                      <td class="text-center">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                          role="progressbar"
                          :aria-valuenow="file[1]"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{'width': `${(100)}%`}"
                        >{{file[1]}}%</div>
                      </td>
                      <td class="text-center">
                        <span v-on:click="removeFileSprites( key )">
                          Remove
                          <font-awesome-icon :icon="['fas', 'minus-circle']" />
                        </span>
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
  name: "uploadFile",
  components: {
    SidebarAdmin
  },
  data() {
    return {
      javs: [],
      scenes: [],
      statics: [],
      previews: [],
      idols: [],
      vtts: [],
      sprites: [],
      progress: 0,
      javTab: "active",
      idolTab: "",
      sceneTab: "",
      staticTab: "",
      previewTab: "",
      vttTab: "",
      spriteTab: "",
      isUploading: false
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
      .catch(e => {
        console.log(e);
      });
    let categories = await axios
      .get("https://jav.souzou.dev/jav4free/categories/")
      .catch(e => {
        console.log(e);
      });
    let idols = await axios
      .get("https://jav.souzou.dev/jav4free/idols/")
      .catch(e => {
        console.log(e);
      });
    return {
      scenesData: scenes.data.scenes,
      javsData: javs.data.javs,
      categoriesData: categories.data.categories,
      idolsData: idols.data.idols
    };
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
  },

  beforeDestroy() {
    window.removeEventListener("beforeunload", this.preventNav);
  },
  beforeRouteLeave(to, from, next) {
    if (this.uploading) {
      if (!window.confirm("Leave without finish uploads?")) {
        return;
      }
    }
    next();
  },
  computed: {
    uploading() {
      if (
        this.javs.length > 0 ||
        this.scenes.length > 0 ||
        this.statics.length > 0 ||
        this.idols.length > 0 ||
        this.previews.length > 0 ||
        this.vtts.length > 0 ||
        this.sprites.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    preventNav(event) {
      if (!this.uploading) return;
      event.preventDefault();
      event.returnValue = "";
    },
    formatBytes(a, b = 2) {
      if (0 === a) return "0 Bytes";
      const c = 0 > b ? 0 : b,
        d = Math.floor(Math.log(a) / Math.log(1024));
      return (
        parseFloat((a / Math.pow(1024, d)).toFixed(c)) +
        " " +
        ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]
      );
    },
    clearFiles() {
      this.javs = [];
      this.scenes = [];
      this.statics = [];
      this.previews = [];
      this.idols = [];
      this.vtts = [];
      this.sprites = [];
    },
    changeJavTab() {
      if (this.javTab != "active") {
        this.javTab = "active";
        this.idolTab = "";
        this.sceneTab = "";
        this.staticTab = "";
        this.previewTab = "";
        this.vttTab = "";
        this.spriteTab = "";
      }
    },
    changeIdolTab() {
      if (this.idolTab != "active") {
        this.javTab = "";
        this.idolTab = "active";
        this.sceneTab = "";
        this.staticTab = "";
        this.previewTab = "";
        this.vttTab = "";
        this.spriteTab = "";
      }
    },
    changeSceneTab() {
      if (this.sceneTab != "active") {
        this.javTab = "";
        this.idolTab = "";
        this.sceneTab = "active";
        this.staticTab = "";
        this.previewTab = "";
        this.vttTab = "";
        this.spriteTab = "";
      }
    },
    changeStaticTab() {
      if (this.staticTab != "active") {
        this.javTab = "";
        this.idolTab = "";
        this.sceneTab = "";
        this.staticTab = "active";
        this.previewTab = "";
        this.vttTab = "";
        this.spriteTab = "";
      }
    },
    changePreviewTab() {
      if (this.previewTab != "active") {
        this.javTab = "";
        this.idolTab = "";
        this.sceneTab = "";
        this.staticTab = "";
        this.previewTab = "active";
        this.vttTab = "";
        this.spriteTab = "";
      }
    },
    changeVttTab() {
      if (this.vttTab != "active") {
        this.javTab = "";
        this.idolTab = "";
        this.sceneTab = "";
        this.staticTab = "";
        this.previewTab = "";
        this.vttTab = "active";
        this.spriteTab = "";
      }
    },
    changeSpriteTab() {
      if (this.spriteTab != "active") {
        this.javTab = "";
        this.idolTab = "";
        this.sceneTab = "";
        this.staticTab = "";
        this.previewTab = "";
        this.vttTab = "";
        this.spriteTab = "active";
      }
    },
    submitFiles() {
      this.submitJavs();
      this.submitIdols();
      this.submitScenes();
      this.submitStatic();
      this.submitPreview();
      this.submitVtts();
      this.submitSprites();
    },
    submitJavs() {
      this.javs.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upJav", formData, {
            headers: {
              "x-access-token": this.$store.state.token
            },
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.javs.forEach((jav, index2) => {
              if (jav[0].name == file[0].name) {
                this.javs.splice(index2, 1);
              }
            });
          });
      });
    },
    handleFilesUploadJavs() {
      let uploadedFiles = this.$refs.javs.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let jav = [uploadedFiles[i], 0, "/Javs"];
        this.javs.push(jav);
      }
    },
    removeFileJavs(key) {
      this.javs.splice(key, 1);
    },
    submitScenes() {
      this.scenes.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upScene", formData, {
            headers: {
              "x-access-token": this.$store.state.token
            },
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.scenes.forEach((scene, index2) => {
              if (scene[0].name == file[0].name) {
                this.scenes.splice(index2, 1);
              }
            });
          });
      });
    },
    handleFilesUploadScenes() {
      let uploadedFiles = this.$refs.covers.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let scene = [uploadedFiles[i], 0, "/Scenes"];
        this.scenes.push(scene);
      }
    },
    removeFileScenes(key) {
      this.scenes.splice(key, 1);
    },
    submitIdols() {
      this.idols.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upIdol", formData, {
            headers: {
              "x-access-token": this.$store.state.token
            },
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.idols.forEach((idol, index2) => {
              if (idol[0].name == file[0].name) {
                this.idols.splice(index2, 1);
              }
            });
          });
      });
    },
    handleFilesUploadIdols() {
      let uploadedFiles = this.$refs.idols.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let idol = [uploadedFiles[i], 0, "/Idols"];
        this.idols.push(idol);
      }
    },
    removeFileIdols(key) {
      this.idols.splice(key, 1);
    },
    submitVtts() {
      this.vtts.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upVtt", formData, {
            headers: {
              "x-access-token": this.$store.state.token
            },
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.vtts.forEach((vtt, index2) => {
              if (vtt[0].name == file[0].name) {
                this.vtts.splice(index2, 1);
              }
            });
          });
      });
    },
    handleFilesUploadVtts() {
      let uploadedFiles = this.$refs.vtts.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let vtt = [uploadedFiles[i], 0, "/Vtts"];
        this.vtts.push(vtt);
      }
    },
    removeFileVtts(key) {
      this.vtts.splice(key, 1);
    },
    submitSprites() {
      this.sprites.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upSprite", formData, {
            headers: {
              "x-access-token": this.$store.state.token
            },
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.sprites.forEach((sprite, index2) => {
              if (sprite[0].name == file[0].name) {
                this.sprites.splice(index2, 1);
              }
            });
          });
      });
    },
    handleFilesUploadSprites() {
      let uploadedFiles = this.$refs.sprites.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let sprite = [uploadedFiles[i], 0, "/Sprites"];
        this.sprites.push(sprite);
      }
    },
    removeFileSprites(key) {
      this.sprites.splice(key, 1);
    },
    submitStatic() {
      this.statics.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upStatic", formData, {
            headers: {
              "x-access-token": this.$store.state.token
            },
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.statics.forEach((staticP, index2) => {
              if (staticP[0].name == file[0].name) {
                this.statics.splice(index2, 1);
              }
            });
          });
      });
    },
    handleFilesUploadStatic() {
      let uploadedFiles = this.$refs.statics.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let staticP = [uploadedFiles[i], 0, "/Static"];
        this.statics.push(staticP);
      }
    },
    removeFileStatic(key) {
      this.statics.splice(key, 1);
    },
    submitPreview() {
      this.previews.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upPreview", formData, {
            headers: {
              "x-access-token": this.$store.state.token
            },
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.previews.forEach((preview, index2) => {
              if (preview[0].name == file[0].name) {
                this.previews.splice(index2, 1);
              }
            });
          });
      });
    },
    handleFilesUploadPreview() {
      let uploadedFiles = this.$refs.previews.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let preview = [uploadedFiles[i], 0, "/Previews"];
        this.previews.push(preview);
      }
    },
    removeFilePreview(key) {
      this.previews.splice(key, 1);
    },
  }
};
</script>

<style lang="scss">
</style>