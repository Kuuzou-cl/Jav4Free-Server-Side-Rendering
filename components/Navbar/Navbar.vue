<template>
  <nav role="navbar navigation" class="navbar-expand-lg" v-bind:class="{ 'show': show }">
    <div class="container">
      <button class="navbar-toggler custom-toggler" type="button" @click.stop="toggleNavbar()">
        <font-awesome-icon :icon="['fas', 'bars']" class="menu-toggle" />
      </button>
      <div v-show="showNav" class="navbar-collapse main-navbar">
        <nuxt-link :to="'/'" class="heart" tag="li" type="button">
          <img src="https://javdata.sfo2.cdn.digitaloceanspaces.com/favi-j4.png" />
        </nuxt-link>
        <div class="search-navbar mx-auto">
          <input
            @keyup.enter="search"
            v-model="query"
            name="query"
            type="text"
            class="form-control"
            placeholder="Search by code, idol or keyword ..."
          />
          <font-awesome-icon :icon="['fas', 'search']" @click="search" class="icon-search-navbar" />
        </div>
        <div class="log-navbar">
          <nuxt-link to="/login" tag="div" class="signin" v-if="!$store.state.authUser">
            Sign In
            <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="icon-navbar" />
          </nuxt-link>
          <nuxt-link to="/login" tag="div" class="signup" v-if="!$store.state.authUser">
            Sign Up
            <font-awesome-icon :icon="['fas', 'user-plus']" class="icon-navbar" />
          </nuxt-link>
          <nuxt-link to="/login" tag="div" class="signin" v-if="$store.state.authUser">
            {{$store.state.authUser}}
            <font-awesome-icon :icon="['fas', 'user-astronaut']" class="icon-navbar" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      show: false,
      showNav: false,
      query: ""
    };
  },
  methods: {
    search() {
      if (this.query) {
        var formatedQuery = this.query.replace(" ", "&");
        this.$router.replace("/search/1/" + formatedQuery);
        this.query = "";
      }
    },
    toggleNavbar() {
      this.show = !this.show;
      this.showNav = !this.showNav;
    }
  }
};
</script>

<style lang="scss">
@import "./navbar.scss";
</style>