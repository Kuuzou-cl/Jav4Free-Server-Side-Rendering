<template>
  <div class="container-fluid no-margin no-padding">
    <div class="container-fluid">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{{dataTitle}}</strong> {{dataText}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataTitle: String,
    dataText: String,
  }
};
</script>
