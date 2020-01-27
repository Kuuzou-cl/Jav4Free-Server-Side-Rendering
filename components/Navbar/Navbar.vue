<template>
  <nav role="navbar navigation" class="navbar-expand-lg" align="center">
    <button
      class="navbar-toggler custom-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click.stop="toggleNavbar()"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02" v-bind:class="{ 'show': show }">
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
            src="https://javdata.sfo2.cdn.digitaloceanspaces.com/favi-j4.png"
            width="45px"
            height="45px"
          />
        </nuxt-link>
        <li v-if="$store.state.authUser" @click="logout()" class="navbar-nav-link">
          <nuxt-link to="/">Logout</nuxt-link>
        </li>
        <li>
          <a href="#">Hentai</a>
        </li>
        <li>
          <a href="#">Animation 3D</a>
        </li>
        <li>
          <a href="#">LoL</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      show: true
    };
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch (e) {}
    },
    toggleNavbar() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
@import "./navbar.scss";
</style>