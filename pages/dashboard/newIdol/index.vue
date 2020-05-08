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
          <nuxt-link :to="'/dashboard/newIdol/'" class="btn simple-button disabled">
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
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div class="row">
            <label class="title-white">Preview Image</label>
          </div>
          <div class="row">
            <img
              id="inputJav06"
              :src="'https://javdata.sfo2.digitaloceanspaces.com/idols/' +
          this.idolUrl +
          '.jpg'"
            />
          </div>
          <div class="row">
            <label for="inputJav07" class="title-white">Hidden</label>
            <input type="checkbox" v-model="hidden" />
          </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
          <div class="row">
            <label for="inputCat01" class="title-white">Idol Name</label>
            <input
              v-model="idolName"
              class="form-control custom-input"
              id="inputCat01"
              placeholder="Enter new category"
            />
          </div>
          <div class="row">
            <label for="inputJav02" class="title-white">Idol Name index</label>
            <input
              v-model="idolUrl"
              class="form-control custom-input"
              id="inputJav02"
              placeholder="Enter new code"
            />
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <button class="btn category-title" @click="postIdol()">Add Idol</button>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
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
    return {
      idolName: "",
      idolUrl: "",
      hidden: false
    };
  },
  async asyncData() {
    var convert = require("xml-js");
    var options = { compact: false, ignoreComment: true, spaces: 3 };

    let idols = await axios
      .get("https://jav.souzou.dev/jav4free/idols/")
      .catch(e => {
        console.log(e);
      });
    let spaceDataIdols = await axios
      .get("https://sfo2.digitaloceanspaces.com/javdata?prefix=idols/")
      .catch(e => {
        console.log(e);
      });
    var resultIdols = JSON.parse(
      convert.xml2json(spaceDataIdols.data, options)
    );
    return {
      idols: idols.data.idols,
      resultIdols: resultIdols
    };
  },
  methods: {
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
    },
    async postIdol() {
      var obj = {
        name: this.idolName,
        imageUrl:
          "https://javdata.sfo2.cdn.digitaloceanspaces.com/idols/" +
          this.idolUrl +
          ".jpg",
        hidden: this.hidden
      };
      let response = await axios
        .post("https://jav.souzou.dev/jav4free/idols/newIdol/", obj)
        .catch(e => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard" });
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