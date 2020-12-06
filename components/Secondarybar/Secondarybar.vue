<template>
  <div class="secondarybar">
    <div class="container height-fix">
      <ul>
        <Login />
        <li class="navbar-nav-link">
          <nuxt-link :to="'/dashboard'" v-if="$store.state.token">
            <font-awesome-icon
              :icon="['fa', 'caret-square-down']"
              class="icon-sidebar"
            />
            <div class="title-sidebar">Dashboard</div>
          </nuxt-link>
        </li>
        <li class="navbar-nav-link" v-if="$store.state.token" @click="logout()">
          <nuxt-link :to="'/'" v-if="$store.state.token">
            <font-awesome-icon
              :icon="['fas', 'sign-out-alt']"
              class="icon-sidebar"
            />
            <div class="title-sidebar">Log Out</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Login from "~/components/LoginModal/Login.vue";
export default {
  components: {
    Login,
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
        this.$router.push({ path: "/" });
      } catch (e) {}
    },
  },
};
</script>

<style lang="scss">
@import "./secondarybar.scss";
</style>