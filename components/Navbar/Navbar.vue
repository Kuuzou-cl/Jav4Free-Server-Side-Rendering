<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <nuxt-link :to="'/'" class="navbar-brand brand" tag="a" type="button">
      <img
        src="https://javdata.sfo2.digitaloceanspaces.com/j4f-logo-black2.png"
      />
    </nuxt-link>
    <button
      class="navbar-toggler"
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
      <div class="search-navbar ml-auto">
        <div class="row justify-content-right">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="input-group">
              <input
                @keyup.enter="search"
                v-model="query"
                name="query"
                type="text"
                class="form-control"
                placeholder="Search by code, name, category or keyword ..."
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <font-awesome-icon
                    :icon="['fas', 'search']"
                    @click="search"
                    class="icon-search-navbar"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="navbar-nav ml-auto">
          <nuxt-link to="/scenes/1" tag="button" class="btn navbar-button">
            Videos
          </nuxt-link>
          <nuxt-link to="/javs/1" tag="button" class="btn navbar-button">
            Movies
          </nuxt-link>
          <nuxt-link to="/idols/1" tag="button" class="btn navbar-button">
            Porn Idols
          </nuxt-link>
          <nuxt-link to="/categories" tag="button" class="btn navbar-button">
            Categories
          </nuxt-link>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      query: "",
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
  },
};
</script>

<style lang="scss">
@import "./navbar.scss";
</style>