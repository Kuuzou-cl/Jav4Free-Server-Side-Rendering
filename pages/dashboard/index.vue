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
          <nuxt-link :to="'/dashboard/uploadFile/'" class="btn simple-button">Upload File</nuxt-link>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="card dashboard-card text-center">
            <div class="card-header">Javs Count</div>
            <div class="card-body">
              <h5 class="card-title">{{javs.length}}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="card dashboard-card text-center">
            <div class="card-header">Categories Count</div>
            <div class="card-body">
              <h5 class="card-title">{{categories.length}}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="card dashboard-card text-center">
            <div class="card-header">Idols Count</div>
            <div class="card-body">
              <h5 class="card-title">{{idols.length}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="need-space"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="tableFixHead">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col" class="t-header">Code</th>
                  <th scope="col" class="t-header">Hidden</th>
                  <th scope="col" class="t-header">Categories</th>
                  <th scope="col" class="t-header">Idols</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="jav in javs" :key="jav._id">
                  <th scope="row">{{jav.code}}</th>
                  <td>{{jav.hidden}}</td>
                  <td>{{jav.categories.length}}</td>
                  <td>{{jav.idols.length}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <table class="table table-hover text-center">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="t-header"
                >Pending Javs ({{this.spaceCheck(result, javs).length}})</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(jav, key) in this.spaceCheck(result, javs)" :key="key">
                <th>{{jav}}</th>
              </tr>
            </tbody>
          </table>
          <br />
          <div class="tableFixHead">
            <table class="table table-hover text-center">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="t-header"
                  >Pending Idols ({{this.spaceCheckIdols(resultIdols, idols).length}})</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(idol, key) in this.spaceCheckIdols(resultIdols, idols)" :key="key">
                  <th>{{idol}}</th>
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

export default {
  middleware: "auth",
  name: "Dashboard",
  data() {
    return {};
  },
  async asyncData() {
    var convert = require("xml-js");
    var options = { compact: false, ignoreComment: true, spaces: 3 };

    let javs = await axios.get("https://jav.souzou.dev/jav4free/javs/");
    let categories = await axios.get(
      "https://jav.souzou.dev/jav4free/categories/"
    );
    let idols = await axios.get("https://jav.souzou.dev/jav4free/idols/");
    let spaceDataJavs = await axios.get(
      "https://sfo2.digitaloceanspaces.com/javdata?prefix=javs/"
    );
    var result = JSON.parse(convert.xml2json(spaceDataJavs.data, options));
    let spaceDataIdols = await axios.get(
      "https://sfo2.digitaloceanspaces.com/javdata?prefix=idols/"
    );
    var resultIdols = JSON.parse(
      convert.xml2json(spaceDataIdols.data, options)
    );
    return {
      javs: javs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols,
      result: result,
      resultIdols: resultIdols
    };
  },
  methods: {
    spaceCheck(space, javs) {
      let spaceData = [];
      space.elements[0].elements.forEach(element => {
        if (element.name === "Contents") {
          element.elements.forEach(obj => {
            if (obj.name === "Key") {
              let javNameData = obj.elements[0].text.split("/");
              if (javNameData[1]) {
                let javName = javNameData[1].split(".");
                spaceData.push(javName[0]);
              }
            }
          });
        }
      });

      let pending = [];

      spaceData.forEach(r => {
        if (!javs.some(item => item.code === r)) {
          pending.push(r);
        }
      });

      return pending;
    },
    spaceCheckIdols(space, idols) {
      let spaceData = [];
      space.elements[0].elements.forEach(element => {
        if (element.name === "Contents") {
          element.elements.forEach(obj => {
            if (obj.name === "Key") {
              let javNameData = obj.elements[0].text.split("/");
              if (javNameData[1]) {
                let javName = javNameData[1].split(".");
                let name = javName[0].replace("-", " ");
                spaceData.push(name);
              }
            }
          });
        }
      });

      let pending = [];

      spaceData.forEach(r => {
        if (!idols.some(item => item.name.toLowerCase() === r)) {
          pending.push(r);
        }
      });

      return pending;
    }
  }
};
</script>

<style lang="scss">
.tableFixHead {
  overflow-y: auto;
  height: 680px;
}
.tableFixHead thead th {
  position: sticky;
  top: 0;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.t-header {
  background-color: #e8175d;
}
</style>