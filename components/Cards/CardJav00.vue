<template>
  <div class="card bg-dark box2">
    <a>
      <nuxt-link
        :to="'/javs/jav/'+dataJav._id"
        tag="img"
        class="static"
        :src="'https://javdata.sfo2.digitaloceanspaces.com/covers/'+ dataJav.code +'-static.jpg'"
      ></nuxt-link>
      <img :src="'https://javdata.sfo2.digitaloceanspaces.com/covers/'+ dataJav.code +'.gif'" />
    </a>
    <div v-if="titleType(dataJav.name)" class="box-time">
      <span class="post">
        <b>{{dataJav.duration}}:00</b>
      </span>
    </div>
    <div v-else class="box-time-v2">
      <span class="post">
        <b>{{dataJav.duration}}:00</b>
      </span>
    </div>
    <div v-if="titleType(dataJav.name)" class="box-code">
      <span class="post">
        <b>{{dataJav.code}}</b>
      </span>
    </div>
    <div v-else class="box-code-v2">
      <span class="post">
        <b>{{dataJav.code}}</b>
      </span>
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
      if (_name.length > 64) {
        newName = _name.slice(0, 64) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
    titleType: function(_name){
      if (_name.length > 31) {
        return true;
      }else{
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./CardJav00.scss";
</style>