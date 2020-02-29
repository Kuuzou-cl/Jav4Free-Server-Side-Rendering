<template>
  <footer class="pt-4 footer">
    <div class="copyright py-3">
      <p>
        © 2019 Copyright:
        <nuxt-link to="/" tag="a">JAV4Free.tv</nuxt-link>
        <nuxt-link v-if="!$store.state.authUser" to="/login">
          <font-awesome-icon :icon="['fas', 'arrow-alt-circle-up']" />
        </nuxt-link>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
@import "./footer.scss";
</style>