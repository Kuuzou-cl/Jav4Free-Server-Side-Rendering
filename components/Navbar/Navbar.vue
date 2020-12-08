<template>
  <nav role="navbar navigation" class="navbar-expand-sm">
    <div class="navbar-collapse">
      <nuxt-link :to="'/'" class="heart" tag="div" type="button">
        <img src="" />
      </nuxt-link>
      <div class="search-navbar">
        <div class="row width-fix">
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
      <div class="log-navbar">
        <ul class="navbar-nav mr-auto nav-pills">
          <nuxt-link to="/scenes/1" tag="button" class="btn navbar-button">
            <div
              @mouseover="handleHoverB1(true)"
              @mouseleave="handleHoverB1(false)"
            >
              {{ textButton1 }}
            </div>
          </nuxt-link>

          <nuxt-link to="/javs/1" tag="button" class="btn navbar-button">
            <div
              @mouseover="handleHoverB2(true)"
              @mouseleave="handleHoverB2(false)"
            >
              {{ textButton2 }}
            </div>
          </nuxt-link>
          <nuxt-link to="/idols/1" tag="button" class="btn navbar-button">
            <div
              @mouseover="handleHoverB3(true)"
              @mouseleave="handleHoverB3(false)"
            >
              {{ textButton3 }}
            </div>
          </nuxt-link>
          <nuxt-link to="/categories" tag="button" class="btn navbar-button">
            <div
              @mouseover="handleHoverB4(true)"
              @mouseleave="handleHoverB4(false)"
            >
              {{ textButton4 }}
            </div>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {
      hoverB1: false,
      hoverB2: false,
      hoverB3: false,
      hoverB4: false,
      query: "",
    };
  },
  computed: {
    textButton1() {
      return this.hoverB1 === true ? "ビデオ" : "Scenes";
    },
    textButton2() {
      return this.hoverB2 === true ? "ビデオコード" : "Video Codes";
    },
    textButton3() {
      return this.hoverB3 === true ? "ポルノスター" : "Porn Stars";
    },
    textButton4() {
      return this.hoverB4 === true ? "カテゴリ" : "Categories";
    },
  },
  methods: {
    handleHoverB1(s) {
      this.hoverB1 = s;
    },
    handleHoverB2(s) {
      this.hoverB2 = s;
    },
    handleHoverB3(s) {
      this.hoverB3 = s;
    },
    handleHoverB4(s) {
      this.hoverB4 = s;
    },
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