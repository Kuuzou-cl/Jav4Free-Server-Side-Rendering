<template>
  <nav role="navbar navigation" class="navbar-expand-lg" v-bind:class="{ 'show': show }">
    <button class="navbar-toggler custom-toggler" type="button" @click.stop="toggleNavbar">
      <font-awesome-icon :icon="['fas', 'bars']" class="menu-toggle" />
    </button>
    <div v-show="showNav" class="navbar-collapse main-navbar">
      <ul class="mobile-list">
        <li>
          <nuxt-link :to="'/'" class="heart" type="button">
            <img src="https://javdata.sfo2.cdn.digitaloceanspaces.com/favi-j4.png" />
          </nuxt-link>
        </li>
        <li>
          <div class="search-navbar mx-auto">
            <input
              @keyup.enter="search"
              v-model="query"
              name="query"
              type="text"
              class="form-control"
              placeholder="Search by code, idol or keyword ..."
            />
            <font-awesome-icon
              :icon="['fas', 'search']"
              @click="search"
              class="icon-search-navbar"
            />
          </div>
        </li>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/javs/1'">
            <font-awesome-icon :icon="['fab', 'youtube']" class="icon-sidebar" />
            <div class="title-sidebar">Javs</div>
          </nuxt-link>
        </li>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/categories'">
            <font-awesome-icon :icon="['fas', 'layer-group']" class="icon-sidebar" />
            <div class="title-sidebar">Categories</div>
          </nuxt-link>
        </li>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/idols/1'">
            <font-awesome-icon :icon="['fas', 'venus']" class="icon-sidebar" />
            <div class="title-sidebar">Idols</div>
          </nuxt-link>
        </li>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/favorites/1'">
            <font-awesome-icon :icon="['fas', 'heart']" class="icon-sidebar" />
            <div class="title-sidebar">Favorites</div>
          </nuxt-link>
        </li>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/history/1'">
            <font-awesome-icon :icon="['fas', 'history']" class="icon-sidebar" />
            <div class="title-sidebar">History</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarMobile",
  data() {
    return {
      query: "",
      show: false,
      showNav: false
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
      (this.showSecondary = !this.showSecondary),
        (this.showNav = !this.showNav);
    }
  }
};
</script>

<style lang="scss">
@import "./navbarMobile.scss";
</style>