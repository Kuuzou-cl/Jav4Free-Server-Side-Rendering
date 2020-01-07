<template>
  <nav role="navbar navigation" align="center">
    <div class="navbar-expand-lg">
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="navbar-nav-link">
            <nuxt-link :to="'/javs/1'">Javs</nuxt-link>
          </li>
          <li class="navbar-nav-link">
            <nuxt-link :to="'/categories'">Categories</nuxt-link>
          </li>
          <li class="navbar-nav-link">
            <nuxt-link :to="'/idols/1'">Idols</nuxt-link>
          </li>
          <li v-if="$store.state.authUser" class="navbar-nav-link">
            <nuxt-link :to="'/dashboard'">Dashboard</nuxt-link>
          </li>
          <nuxt-link :to="'/'" class="heart" tag="li" type="button">
            <img
              src="https://javdata.sfo2.digitaloceanspaces.com/favi-j4.png"
              width="45px"
              height="45px"
            />
          </nuxt-link>
          <li v-if="$store.state.authUser" @click="logout()" class="navbar-nav-link">
            <nuxt-link to="/">Logout</nuxt-link>
          </li>
          <li>
            <a href="#">Overwatch</a>
          </li>
          <li>
            <a href="#">Lol</a>
          </li>
          <li>
            <a href="#">Fornite</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch (e) {}
    }
  }
};
</script>

<style lang="scss">
@import "./navbar.scss";
</style>