<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>Add new Idol</h2>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <div class="container container-admin">
              <div class="row justify-content-center">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <div class="form-row">
                    <img id="inputJav06" :src="
                      'https://d27vxor1f495av.cloudfront.net/idols/' +
                      this.idolUrl +
                      '.jpg'
                    " />
                  </div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                  <div class="form-row">
                    <label class="title-input-admin" for="inputCat01">Idol Name</label>
                    <input v-model="name" class="input-admin" id="inputCat01" placeholder="Enter idol's name" />
                  </div>
                </div>
              </div>
            </div>
            <div class="need-space">
              {{ this.idolUrl }}
              {{ this.idolName }}
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <button class="btn btn-success" @click="postIdol()">
                  Add Idol
                </button>
              </div>
            </div>
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
  name: "NewIdol",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      name: "",
      idolName: "",
      idolUrl: "",
      hidden: false,
    };
  },
  async asyncData() {
    return {
    };
  },
  methods: {
    async postIdol() {
      var obj = {
        name: this.idolName,
        image:
          "https://d27vxor1f495av.cloudfront.net/idols/" +
          this.idolName.toLowerCase().replace(" ", "-") +
          ".jpg",
        hide: this.hidden,
      };
      let response = await axios
        .post("https://jav.souzou.dev/idols/newIdol", obj, {
          headers: {
            'authorization': 'Bearer ' + this.$store.state.token
          }
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard/editIdols" });
    },
  },
  watch: {
    name(val) {
      this.idolUrl = "";
      this.idolName = "";
      this.idolUrl = val.toLowerCase().replace(" ", "-");
      var splitStr = val.toLowerCase().split(" ");
      for (var i = 0; i < splitStr.length; i++) {
        if (this.idolName.length > 0) {
          this.idolName = this.idolName + " " + splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        } else {
          this.idolName = this.idolName + splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

      }
    },
  },
};
</script>