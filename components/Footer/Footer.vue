<template>
  <footer class="pt-4 footer">
    <div class="copyright py-3">
      <p>
        © 2022 Copyright:
        <nuxt-link to="/" tag="a">JAV4Free.watch</nuxt-link>
        <nuxt-link :to="'/login'" v-if="!$store.state.token">
          <font-awesome-icon
            :icon="['fas', 'sign-in-alt']"
            class="icon-sidebar"
          />
        </nuxt-link>
        <font-awesome-icon
          :icon="['fas', 'sign-out-alt']"
          class="icon-sidebar"
          v-if="$store.state.token"
          @click="logout()"
        />
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
        this.$router.push({ path: "/" });
      } catch (e) {}
    },
  },
};
</script>

<style lang="scss">
@import "./footer.scss";
</style>