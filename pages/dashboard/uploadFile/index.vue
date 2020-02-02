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
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <h6 class="title-white text-left">Upload Javs</h6>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <button class="btn btn-more float-right" v-on:click="submitJavs()">
            Upload to Javs Folder
            <font-awesome-icon :icon="['fas', 'upload']" />
          </button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card card-upload">
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="custom-file mb-3">
                  <input
                    class="custom-file-input"
                    type="file"
                    id="javs"
                    ref="javs"
                    multiple
                    v-on:change="handleFilesUploadJavs()"
                  />
                  <label class="custom-file-label" for="javs">Choose only video files</label>
                </div>
              </div>
              <div class="row justify-content-center">
                <div v-for="(file, key) in javs" :key="key" class="card text-center card-file">
                  <div class="card-body card-file-body">
                    <font-awesome-icon :icon="['fas', 'file-video']" />
                    <h6 class="card-title">{{ file.name }}</h6>
                  </div>
                  <div
                    class="card-footer text-muted card-file-footer"
                    v-on:click="removeFileJavs( key )"
                  >
                    <span>
                      Remove File
                      <font-awesome-icon :icon="['fas', 'minus-circle']" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="need-space"></div>
              <div v-if="this.viewLoadingJavs" class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                  role="progressbar"
                  :aria-valuenow="loadingJavs"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{'width': `${loadingJavs}%`}"
                >{{ loadingJavs }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <h6 class="title-white text-left">Upload Covers</h6>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <button class="btn btn-more float-right" v-on:click="submitCovers()">
            Upload to Covers Folder
            <font-awesome-icon :icon="['fas', 'upload']" />
          </button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card card-upload">
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="custom-file mb-3">
                  <input
                    class="custom-file-input"
                    type="file"
                    id="covers"
                    ref="covers"
                    multiple
                    v-on:change="handleFilesUploadCovers()"
                  />
                  <label class="custom-file-label" for="covers">Choose only covers files</label>
                </div>
              </div>
              <div class="row justify-content-center">
                <div v-for="(file, key) in covers" :key="key" class="card text-center card-file">
                  <div class="card-body card-file-body">
                    <font-awesome-icon :icon="['fas', 'images']" />
                    <h6 class="card-title">{{ file.name }}</h6>
                  </div>
                  <div
                    class="card-footer text-muted card-file-footer"
                    v-on:click="removeFileCovers( key )"
                  >
                    <span>
                      Remove File
                      <font-awesome-icon :icon="['fas', 'minus-circle']" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="need-space"></div>
              <div v-if="this.viewLoadingCovers" class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                  role="progressbar"
                  :aria-valuenow="loadingCovers"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{'width': `${loadingCovers}%`}"
                >{{ loadingCovers }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
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
    async submitJavs() {
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
        })
        .catch(function(e) {
          console.log(e);
        });
      this.javs = [];
      this.loadingJavs = 0;
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
          console.log("uploaded files");
        })
        .catch(function(e) {
          console.log(e);
        });
      this.covers = [];
      this.loadingCovers = 0;
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
    }
  }
};
</script>

<style lang="scss">
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

.bg-jav4free {
  background-color: #e8175d;
}
</style>