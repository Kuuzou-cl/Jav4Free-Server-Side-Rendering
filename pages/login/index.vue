<template>
  <div>
    <div v-if="$device.isDesktop" class="container-fluid">
      <div class="need-space"></div>
      <div class="row">
        <div class="col-lg-12">
          <div class="modal-dialog" role="document">
            <div class="modal-content user_card">
              <div class="modal-header">
                <div class="row justify-content-center">
                  <img
                    src="https://javdata.sfo2.cdn.digitaloceanspaces.com/favi-j4.webp"
                    width="25%"
                    height="25%"
                  />
                </div>
              </div>
              <div class="modal-body">
                <div class="row justify-content-center">
                  <p v-if="loginError" class="error">{{ loginError }}</p>
                </div>
                <div class="form-row justify-content-center">
                  <input
                    v-model="email"
                    class="custom-input-login"
                    placeholder="Email"
                  />
                </div>
                <div class="form-row justify-content-center">
                  <input
                    type="password"
                    v-model="password"
                    class="custom-input-login"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-more"
                  @click="login"
                  data-dismiss="modal"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile" class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {},
  head() {
    return {
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, watch every japanese adult video in HD and Free, Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.",
        },
      ],
    };
  },
  data() {
    return {
      loginError: null,
      email: "",
      password: "",
    };
  },
  async asyncData({ store, redirect }) {
    if (store.state.token) {
      redirect("/dashboard");
    }
    return {};
  },
  methods: {
    async login() {
      try {
        await this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password,
          })
          .catch((e) => {
            console.log(e);
          });
        this.email = "";
        this.password = "";
        this.loginError = null;
        this.$router.push({ path: "/dashboard" });
      } catch (e) {
        this.loginError = e.message;
      }
    },
  },
};
</script>

<style>
</style>