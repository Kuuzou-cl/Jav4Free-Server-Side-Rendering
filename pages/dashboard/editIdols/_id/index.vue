<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="container-fluid">
        <div class="row">
          <div class="title-admin">
            <h2>Overview</h2>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="container container-admin">
              <div class="row justify-content-center">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <img :src="idol.image" />
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                  <div class="row">
                    <label class="title-input-admin" for="inputJav04">Idol Name</label>
                    <input v-model="idol.name" class="input-admin" id="inputJav04" placeholder="Enter new idol name" />
                  </div>
                  <div class="row">
                    <label class="title-input-admin" for="inputJav04">Idol Image Url</label>
                    <input v-model="idol.image" class="input-admin" id="inputJav04"
                      placeholder="Enter new image url" />
                  </div>
                  <div class="row justify-content-center">
                    <button class="btn btn-success" @click="updateIdol()">Update Idol</button>
                  </div>
                </div>
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
  name: "editIdol",
  components: {
    SidebarAdmin
  },
  data() {
    return {
      idol: null
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    let idol = await axios
      .get("https://jav.souzou.dev/idols/getIdol?id=" + id)
      .catch(e => {
        console.log(e);
      });
    return {
      idol: idol.data.data.Idol
    };
  },
  methods: {
    async updateIdol() {
      let obj = {
        id: this.idol.id,
        name: this.idol.name,
        image: this.idol.image
      };
      let response = await axios
        .patch("https://jav.souzou.dev/idols/updateIdol", obj, {
          headers: {
            'authorization': 'Bearer ' + this.$store.state.token
          }
        })
        .catch(e => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard/editIdols" });
    }
  }
};
</script>