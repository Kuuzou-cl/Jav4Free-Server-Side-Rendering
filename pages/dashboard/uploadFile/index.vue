<template>
  <div class="container-fluid">
    <div class="need-space"></div>
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
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <div class="container h-100">
            <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 mx-auto">
                <div v-if="this.uploading" class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                    role="progressbar"
                    :aria-valuenow="(loadingSprites * 0.2) + (loadingVtts * 0.2) + (loadingCovers * 0.2) + (loadingIdols * 0.2) + (loadingJavs * 0.2)"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    :style="{'width': `${(loadingSprites * 0.2) + (loadingVtts * 0.2) + (loadingCovers * 0.2) + (loadingIdols * 0.2) + (loadingJavs * 0.2)}%`}"
                  >{{ (loadingSprites * 0.2) + (loadingVtts * 0.2) + (loadingCovers * 0.2) + (loadingIdols * 0.2) + (loadingJavs * 0.2) }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <th scope="col">File Name</th>
                <th scope="col">Size</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="3" class="text-center">Upload to Javs Folder</th>
              </tr>
              <tr v-for="(file, key) in javs" :key="key">
                <td scope="row">{{file.name}}</td>
                <td>{{Math.round(file.size / 10240)}} MB</td>
                <td>
                  <span v-on:click="removeFileJavs( key )">
                    Remove
                    <font-awesome-icon :icon="['fas', 'minus-circle']" />
                  </span>
                </td>
              </tr>
              <tr>
                <th colspan="3" class="text-center">Upload to Idols Folder</th>
              </tr>
              <tr v-for="(file, key) in idols" :key="key">
                <td scope="row">{{file.name}}</td>
                <td>{{Math.round(file.size / 10240)}} MB</td>
                <td>
                  <span v-on:click="removeFileIdols( key )">
                    Remove
                    <font-awesome-icon :icon="['fas', 'minus-circle']" />
                  </span>
                </td>
              </tr>
              <tr>
                <th colspan="3" class="text-center">Upload to Covers Folder</th>
              </tr>
              <tr v-for="(file, key) in covers" :key="key">
                <td scope="row">{{file.name}}</td>
                <td>{{Math.round(file.size / 10240)}} MB</td>
                <td>
                  <span v-on:click="removeFileCovers( key )">
                    Remove
                    <font-awesome-icon :icon="['fas', 'minus-circle']" />
                  </span>
                </td>
              </tr>
              <tr>
                <th colspan="3" class="text-center">Upload to Vtts Folder</th>
              </tr>
              <tr v-for="(file, key) in vtts" :key="key">
                <td scope="row">{{file.name}}</td>
                <td>{{Math.round(file.size / 10240)}} MB</td>
                <td>
                  <span v-on:click="removeFileVtts( key )">
                    Remove
                    <font-awesome-icon :icon="['fas', 'minus-circle']" />
                  </span>
                </td>
              </tr>
              <tr>
                <th colspan="3" class="text-center">Upload to Sprites Folder</th>
              </tr>
              <tr v-for="(file, key) in sprites" :key="key">
                <td scope="row">{{file.name}}</td>
                <td>{{Math.round(file.size / 10240)}} MB</td>
                <td>
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
      uploading: false,
      javs: [],
      loadingJavs: 0,
      viewLoadingJavs: false,
      covers: [],
      loadingCovers: 0,
      viewLoadingCovers: false,
      idols: [],
      loadingIdols: 0,
      viewLoadingIdols: false,
      vtts: [],
      loadingVtts: 0,
      viewLoadingVtts: false,
      sprites: [],
      loadingSprites: 0,
      viewLoadingSprites: false
    };
  },
  methods: {
    async submitFiles() {
      this.loadingJavs = 0;
      this.loadingCovers = 0;
      this.loadingIdols = 0;
      this.loadingVtts = 0;
      this.loadingSprites = 0;
      this.submitJavs();
      this.submitIdols();
      this.submitCovers();
      this.submitVtts();
      this.submitSprites();
    },
    async submitJavs() {
      this.uploading = true;
      this.viewLoadingJavs = true;
      let formData = new FormData();
      this.javs.forEach(file => {
        formData.append("file", file, file.name);
      });
      await axios
        .post("https://jav.souzou.dev/jav4free/uploads/upJav", formData, {
          onUploadProgress: uploadEvent => {
            this.loadingJavs = Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            );
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          }
        })
        .then(function() {
          console.log("uploaded files");
          this.loadingJavs = 100;
        })
        .catch(function(e) {
          console.log(e);
        });
      this.javs = [];

      this.viewLoadingJavs = false;
    },
    handleFilesUploadJavs() {
      let uploadedFiles = this.$refs.javs.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.javs.push(uploadedFiles[i]);
      }
    },
    removeFileJavs(key) {
      this.javs.splice(key, 1);
    },
    async submitCovers() {
      this.viewLoadingCovers = true;
      let formData = new FormData();
      this.covers.forEach(file => {
        formData.append("file", file, file.name);
      });
      await axios
        .post("https://jav.souzou.dev/jav4free/uploads/upCover", formData, {
          onUploadProgress: uploadEvent => {
            this.loadingCovers = Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            );
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          }
        })
        .then(function() {
          this.loadingCovers = 100;
          console.log("uploaded files");
        })
        .catch(function(e) {
          console.log(e);
        });
      this.covers = [];
      this.viewLoadingCovers = false;
    },
    handleFilesUploadCovers() {
      let uploadedFiles = this.$refs.covers.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.covers.push(uploadedFiles[i]);
      }
    },
    removeFileCovers(key) {
      this.covers.splice(key, 1);
    },
    async submitIdols() {
      this.viewLoadingIdols = true;
      let formData = new FormData();
      this.idols.forEach(file => {
        formData.append("file", file, file.name);
      });
      await axios
        .post("https://jav.souzou.dev/jav4free/uploads/upIdol", formData, {
          onUploadProgress: uploadEvent => {
            this.loadingIdols = Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            );
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          }
        })
        .then(function() {
          console.log("uploaded files");
          this.loadingIdols = 100;
        })
        .catch(function(e) {
          console.log(e);
        });
      this.idols = [];
      this.viewLoadingIdols = false;
    },
    handleFilesUploadIdols() {
      let uploadedFiles = this.$refs.idols.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.idols.push(uploadedFiles[i]);
      }
    },
    removeFileIdols(key) {
      this.idols.splice(key, 1);
    },
    async submitVtts() {
      this.viewLoadingVtts = true;
      let formData = new FormData();
      this.vtts.forEach(file => {
        formData.append("file", file, file.name);
      });
      await axios
        .post("https://jav.souzou.dev/jav4free/uploads/upVtt", formData, {
          onUploadProgress: uploadEvent => {
            this.loadingVtts = Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            );
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          }
        })
        .then(function() {
          console.log("uploaded files");
          this.loadingVtts = 100;
        })
        .catch(function(e) {
          console.log(e);
        });
      this.vtts = [];
      this.viewLoadingVtts = false;
    },
    handleFilesUploadVtts() {
      let uploadedFiles = this.$refs.vtts.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.vtts.push(uploadedFiles[i]);
      }
    },
    removeFileVtts(key) {
      this.vtts.splice(key, 1);
    },
    async submitSprites() {
      this.viewLoadingSprites = true;
      let formData = new FormData();
      this.sprites.forEach(file => {
        formData.append("file", file, file.name);
      });
      await axios
        .post("https://jav.souzou.dev/jav4free/uploads/upSprite", formData, {
          onUploadProgress: uploadEvent => {
            this.loadingSprites = Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            );
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          }
        })
        .then(function() {
          console.log("uploaded files");
          this.loadingSprites = 100;
        })
        .catch(function(e) {
          console.log(e);
        });
      this.sprites = [];
      this.uploading = false;
      this.viewLoadingSprites = false;
    },
    handleFilesUploadSprites() {
      let uploadedFiles = this.$refs.sprites.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.sprites.push(uploadedFiles[i]);
      }
    },
    removeFileSprites(key) {
      this.sprites.splice(key, 1);
    }
  }
};
</script>

<style lang="scss">
.icon-upload {
  font-size: 500%;
}

.card-upload {
  border-width: 0;
}

.card-file {
  margin: 1% 1% 1% 0%;
}

.card-file-body {
  padding-top: 10%;
  padding-bottom: 2%;
  cursor: pointer;
}

.card-file-footer {
  cursor: pointer;
}

.custom-file {
  width: 100%;
  min-height: 240px;
  height: 100%;
}

.custom-file-input {
  height: 100%;
  width: 100%;
}

.custom-file-label {
  height: 100%;
  width: 100%;
  border-radius: 0%;
}

.custom-file-input ~ .custom-file-label::after {
  display: none;
}

.bg-jav4free {
  background-color: #e8175d;
}
</style>