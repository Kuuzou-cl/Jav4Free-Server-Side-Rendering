<template>
  <div class="container-fluid content">
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
          <nuxt-link :to="'/dashboard/editJavs/'" class="btn simple-button">View Javs</nuxt-link>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/editCategories/'" class="btn simple-button">View Categories</nuxt-link>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <nuxt-link :to="'/dashboard/editIdols/'" class="btn simple-button">View Idols</nuxt-link>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <nuxt-link :to="'/dashboard/uploadFile/'" class="btn simple-button disabled">Upload File</nuxt-link>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="padding-right:0px;">
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
                      <h6>Drop only video here.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="padding-left:0px;">
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
                      <h6>Drop only idol's images here.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" style="padding-right: 0px;">
          <div class="custom-file mb-3">
            <input
              class="custom-file-input"
              type="file"
              id="covers"
              ref="covers"
              multiple
              v-on:change="handleFilesUploadCovers()"
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
                      <h6>Drop only covers here.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
          style="padding-right: 0px; padding-left:0px;"
        >
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
                      <font-awesome-icon :icon="['fas', 'closed-captioning']" class="icon-upload" />
                    </div>
                    <br />
                    <div class="row justify-content-center">
                      <h6>Drop only vtts files here.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" style="padding-left: 0px;">
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
                      <h6>Drop only sprites here.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">{{this.progress}}</div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <button class="btn btn-more float-right" v-on:click="submitFiles()">
            Upload All Files
            <font-awesome-icon :icon="['fas', 'upload']" />
          </button>
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
                <th class="text-center" scope="col">File Name</th>
                <th class="text-center" scope="col">Size</th>
                <th class="text-center" scope="col">Destination</th>
                <th class="text-center" scope="col">Status</th>
                <th class="text-center" scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(file, key) in javs" :key="key">
                <td class="text-center">{{file[0].name}}</td>
                <td class="text-center">{{Math.round(file[0].size / 10240)}} MB</td>
                <td class="text-center">{{file[2]}}</td>
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
              <tr v-for="(file, key) in idols" :key="key">
                <td class="text-center">{{file[0].name}}</td>
                <td class="text-center">{{Math.round(file[0].size / 10240)}} MB</td>
                <td class="text-center">{{file[2]}}</td>
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
              <tr v-for="(file, key) in covers" :key="key">
                <td class="text-center">{{file[0].name}}</td>
                <td class="text-center">{{Math.round(file[0].size / 10240)}} MB</td>
                <td class="text-center">{{file[2]}}</td>
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
                  <span v-on:click="removeFileCovers( key )">
                    Remove
                    <font-awesome-icon :icon="['fas', 'minus-circle']" />
                  </span>
                </td>
              </tr>
              <tr v-for="(file, key) in vtts" :key="key">
                <td class="text-center">{{file[0].name}}</td>
                <td class="text-center">{{Math.round(file[0].size / 10240)}} MB</td>
                <td class="text-center">{{file[2]}}</td>
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
              <tr v-for="(file, key) in sprites" :key="key">
                <td class="text-center">{{file[0].name}}</td>
                <td class="text-center">{{Math.round(file[0].size / 10240)}} MB</td>
                <td class="text-center">{{file[2]}}</td>
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
</template>

<script>
import axios from "axios";
export default {
  middleware: "auth",
  name: "uploadFile",
  data() {
    return {
      javs: [],
      covers: [],
      idols: [],
      vtts: [],
      sprites: [],
      progress: 0
    };
  },
  methods: {
    async submitFiles() {
      this.submitJavs();
      this.submitIdols();
      this.submitCovers();
      this.submitVtts();
      this.submitSprites();
    },
    submitJavs() {
      this.javs.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upJav", formData, {
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.javs.splice(index, 1);
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
    submitCovers() {
      this.covers.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upCover", formData, {
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.covers.splice(index, 1);
          });
      });
    },
    handleFilesUploadCovers() {
      let uploadedFiles = this.$refs.covers.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let cover = [uploadedFiles[i], 0, "/Covers"];
        this.covers.push(cover);
      }
    },
    removeFileCovers(key) {
      this.covers.splice(key, 1);
    },
    submitIdols() {
      this.idols.forEach((file, index) => {
        let formData = new FormData();
        formData.append("file", file[0], file[0].name);
        axios
          .post("https://jav.souzou.dev/jav4free/uploads/upIdol", formData, {
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.idols.splice(index, 1);
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
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.vtts.splice(index, 1);
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
            onUploadProgress: uploadEvent => {
              file[1] = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              );
              this.progress = file[1];
            }
          })
          .then(response => {
            this.vtts.splice(index, 1);
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
    }
  }
};
</script>

<style lang="scss">
</style>