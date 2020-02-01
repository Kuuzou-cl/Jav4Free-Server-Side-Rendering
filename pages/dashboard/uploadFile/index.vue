<template>
  <div class="container">
    <div class="need-space"></div>
    <div class="row justify-content-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h5 class="title-white text-left">Upload Files</h5>
      </div>
    </div>
    <div class="need-space"></div>
    <div v-if="this.viewLoading" class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
        role="progressbar"
        :aria-valuenow="loading"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{'width': `${loading}%`}"
      >
      {{ loading }}%
      </div>
    </div>
    <div class="need-space"></div>
    <div class="row justify-content-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h6 class="title-white text-left">Upload Javs</h6>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-body">
            <div class="row justify-content-center">
              <div class="custom-file mb-3">
                <input
                  class="custom-file-input"
                  type="file"
                  id="files"
                  ref="files"
                  multiple
                  v-on:change="handleFilesUpload()"
                />
                <label class="custom-file-label" for="files">Choose files</label>
              </div>
            </div>
            <div class="row justify-content-center">
              <div v-for="(file, key) in files" :key="key" class="card text-center card-file">
                <div class="card-body card-file-body">
                  <font-awesome-icon :icon="['fas', 'file-video']" />
                  <h6 class="card-title">{{ file.name }}</h6>
                </div>
                <div class="card-footer text-muted card-file-footer" v-on:click="removeFile( key )">
                  <span>
                    Remove File
                    <font-awesome-icon :icon="['fas', 'minus-circle']" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="row justify-content-center">
      <button class="btn btn-more" v-on:click="submitFiles()">Submit</button>
    </div>
    <div>{{this.msg}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  middleware: "auth",
  name: "uploadFile",
  data() {
    return {
      files: [],
      loading: 0,
      viewLoading: false
    };
  },
  methods: {
    async submitFiles() {
      this.viewLoading = true;
      let formData = new FormData();
      this.files.forEach(file => {
        formData.append("file", file, file.name);
      });
      await axios
        .post("https://jav.souzou.dev/jav4free/uploads/upJav", formData, {
          onUploadProgress: uploadEvent => {
            this.loading = Math.round((uploadEvent.loaded / uploadEvent.total) * 100);
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
      this.files = [];
      this.loading = 0;
      this.viewLoading = false;
    },
    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }
    },
    removeFile(key) {
      this.files.splice(key, 1);
    }
  }
};
</script>

<style lang="scss">
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

.bg-jav4free{
  background-color: #E8175D;
}
</style>