<template>
  <div class="card bg-dark box22">
    <div class="box22-media">
      <nuxt-link :to="'/javs/jav/'+dataJav.code" tag="a">
        <img :src="dataJav.image"  />
      </nuxt-link>
    </div>
    <div class="box-content">
      <h3 class="title">
        <nuxt-link :to="'/javs/jav/'+dataJav.code" tag="a">{{dataJav.code + " - " + getName(dataJav.title)}}</nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardJav2",
  props: {
    dataJav: Object
  },
  methods: {
    getName: function(_name) {
      let newName;
      if (_name.length > 65) {
        newName = _name.slice(0, 65) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
  }
};
</script>

<style lang="scss">
@import "./CardJav02.scss";
</style>