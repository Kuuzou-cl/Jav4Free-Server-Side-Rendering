<template>
  <div class="card bg-dark box22">
    <div class="box22-media">
      <nuxt-link :to="'/javs/jav/'+dataJav._id" tag="a">
        <img :src="dataJav.imageUrl" v-lazy-load />
      </nuxt-link>
    </div>
    <div class="box-content">
      <h3 class="title">
        <nuxt-link :to="'/scenes/scene/'+dataJav._id" tag="a">{{getName(dataJav.name)}}</nuxt-link>
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