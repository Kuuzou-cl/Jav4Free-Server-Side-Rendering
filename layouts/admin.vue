<template>
  <div class="container-fluid fluid-full body-admin">
    <div>
      <script type="text/javascript" src="~/components/PopUnder/popUnder.js">
      </script>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  middleware: "auth"
};
</script>

<style lang="scss">
@import "../assets/base-style-admin.scss";
</style>
