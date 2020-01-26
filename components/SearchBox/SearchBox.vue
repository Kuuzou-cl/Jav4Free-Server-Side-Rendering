<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div id="cover">
          <form v-on:submit.prevent>
            <div class="tb">
              <div class="td">
                <input
                  v-model="query"
                  name="query"
                  type="text"
                  placeholder="Search for Code, Category, or JAV Idol ..."
                />
              </div>
              <div class="td" id="s-cover">
                <button class="searchButton" @click="search" type="button">
                  <font-awesome-icon :icon="['fas', 'search']" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
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
@import "./SearchBox.scss";
</style>