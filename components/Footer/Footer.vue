<template>
  <footer class="pt-4 footer">
    <div class="container details-footer">
      <div class="row justify-content-center">
        <div class="col-md-7 col-sm-7 col-xs-7">
          <h6 class="text-uppercase">DMCA</h6>
          <p>To file a copyright infringement notification with JAV4Free, you will need to send a written notification to contact@jav4free.com that includes substantially the information required by and stated in Section 512(c)(3) of the Digital Millennium Copyright Act.</p>
          <p>We apologize for any kind of misuse of our service and promise to do our best to find and terminate abusive files.</p>
        </div>
        <div class="col-md-1 col-sm-1 col-xs-1"></div>
        <div class="col-md-4 col-sm-4 col-xs-4">
          <h6 class="text-uppercase">JAV 4 Free</h6>
          <p>All performers on this site are over 18 years old.</p>
        </div>
      </div>
    </div>
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