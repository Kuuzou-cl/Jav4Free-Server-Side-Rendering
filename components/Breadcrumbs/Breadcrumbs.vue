<template>
  <div class="crumbs">
    <div class="container">
      <div class="row crumbs-content">
        <nuxt-link
          v-for="(page, id) in this.$store.state.breadCrumbs"
          :key="id"
          :to="'/' + page.route"
        >{{page.show}}/</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs"
};
</script>

<style lang="scss">
@import "./Breadcrumbs.scss";
</style>