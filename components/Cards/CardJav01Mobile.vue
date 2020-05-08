<template>
  <div class="card bg-dark box21">
    <div class="loading-box"></div>
    <div class="box21-media">
      <nuxt-link :to="'/javs/jav/'+dataJav._id" tag="a">
        <img :src="dataJav.imageIndexUrl" v-lazy-load />
        <video class="video-jav" @mouseleave="restart()" @mouseenter="start()" loop v-lazy-load>
          <source :src="dataJav.imageUrl" type="video/mp4" />
        </video>
      </nuxt-link>
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
  props: {
    dataJav: Object
  },
  methods: {
    getName: function(_name) {
      let newName;
      if (_name.length > 38) {
        newName = _name.slice(0, 38) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
    restart: function() {
      $(".video-jav").on("mouseout", function(event) {
        this.load();
      });
    },
    start: function() {
      $(".video-jav").on("mouseenter", function(event) {
        this.start();
      });
    }
  }
};
</script>

<style lang="scss">
@import "./CardJav01.scss";
</style>