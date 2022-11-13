<template>
  <div class="container main">
    <div class="row justify-content-center">
      <div class="col-md-6 col-md-offset-3 text-center title">
        <h1>Want to Connect?</h1>
        <div class="bar"></div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6 col-md-offset-3 form">
        <h2>Login</h2>
        <input v-model="email" type="text" name='username' placeholder='username'>
        <br>
        <input v-model="password" type="password" name="password" id="password">
        <button class="btn btn-default login" @click="login">| login</button>
        <h4 v-if="loginError">{{ loginError }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
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

<style lang="scss">
@import "~/assets/login-page.scss";
</style>