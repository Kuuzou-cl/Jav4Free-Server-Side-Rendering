<template>
  <div class="card bg-dark box21">
    <div class="box21-media">
      <nuxt-link :to="'/scenes/scene/'+dataJav._id" tag="a">
        <img :src="dataJav.imageIndexUrl" />
        <video class="video-jav" @mouseleave="restart()" @mouseover="start()" preload="auto" loop>
          <source :src="dataJav.imageUrl" type="video/mp4" />
        </video>
      </nuxt-link>
    </div>
    <div class="box-code">
      <b class="post">{{dataJav.duration}}</b>
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
      if (_name.length > 45) {
        newName = _name.slice(0, 45) + " ...";
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
      $(".video-jav").on("mouseover", function(event) {
        this.play();
      });
    }
  }
};
</script>

<style lang="scss">
@import "./CardJav01.scss";
</style>