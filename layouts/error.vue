<template>
  <div class="container-fluid no-margin no-padding">
    <div class="container-fluid">
      <div class="row row-title">
        <div class="col-lg-12 text-center">
          <h4 v-if="error.statusCode === 404">You are looking for a page that doesn't exist yet!</h4>
          <h4 v-else>You have found a dead end! - {{ error.statusCode }}</h4>
          <NuxtLink to="/">Go back Home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>
