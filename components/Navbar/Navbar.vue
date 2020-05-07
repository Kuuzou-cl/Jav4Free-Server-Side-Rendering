<template>
  <nav role="navbar navigation" class="navbar-expand-sm">
    <div class="container">
      <div class="navbar-collapse main-navbar">
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
          <nuxt-link to="/dashboard" tag="div" class="signin" v-if="$store.state.authUser">
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
    }
  }
};
</script>

<style lang="scss">
@import "./navbar.scss";
</style>