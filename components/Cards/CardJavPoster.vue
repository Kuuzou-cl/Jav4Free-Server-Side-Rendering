<template>
  <nuxt-link :to="'/javs/jav/' + dataJav._id" class="profile-card-2">
    <img :src="dataJav.imageUrl" class="img img-responsive" />
    <div class="profile-name">{{ dataJav.code }}</div>
  </nuxt-link>
</template>

<script>
export default {
  name: "CardJavPoster",
  props: {
    dataJav: Object,
  },
  methods: {
    getName: function (_name) {
      let newName;
      if (_name.length > 45) {
        newName = _name.slice(0, 45) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1280px) and (max-width: 1600px) {
  .profile-card-2 .profile-name {
    font-size: 18px !important;
  }
}

.profile-card-2 {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  background-position: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.profile-card-2 img {
  transition: all linear 0.25s;
}

.profile-card-2 .profile-name {
  position: absolute;
  padding: 5px;
  left: 30px;
  bottom: 70px;
  font-size: 25px;
  color: #fff;
  background-color: #000000b1;
  border: 2px solid #fff;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all linear 0.25s;
}

.profile-card-2:hover img {
  filter: grayscale(100%);
}
</style>