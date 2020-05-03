<template>
  <div class="card bg-dark box2">
    <div class="loading-box"></div>
    <nuxt-link :to="'/javs/jav/'+dataJav._id" tag="a">
      <img :src="dataJav.imageIndexUrl" v-lazy-load />
      <video autoplay loop v-lazy-load>
      <source :src="dataJav.imageUrl" type="video/mp4" />
    </video>
    </nuxt-link>
    <div class="box-time">
      <b class="post">{{dataJav.duration}}:00</b>
    </div>
    <div class="box-code">
      <b class="post">{{dataJav.code}}</b>
    </div>
    <div class="box-content">
      <h3 class="title">
        <nuxt-link :to="'/javs/jav/'+dataJav._id" tag="a">{{getName(dataJav.name)}}</nuxt-link>
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
      if (_name.length > 48) {
        newName = _name.slice(0, 48) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
    addToFavorites: function(_id) {
      this.$store.dispatch("addToFavorites", { javId: _id });
    }
  }
};
</script>

<style lang="scss">
@import "./CardJav00.scss";
</style>