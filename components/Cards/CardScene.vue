<template>
  <div class="card bg-dark card-scene">
    <div class="card-scene-media">
      <nuxt-link :to="'/scenes/scene/' + dataJav._id" tag="a">
        <img :src="dataJav.imageIndexUrl" v-lazy-load />
        <video
          class="video-jav"
          @mouseleave="restart()"
          @mouseover="start()"
          preload="auto"
          loop
        >
          <source :src="dataJav.imageUrl" type="video/mp4" />
        </video>
      </nuxt-link>
    </div>
    <div class="box-code">
      <b class="post">{{ dataJav.duration }}</b>
    </div>
    <div class="box-content">
      <h3 class="title">
        <nuxt-link :to="'/scenes/scene/' + dataJav._id" tag="a">{{ getCode(dataJav.code) + " - " + getName(dataJav.name) }}</nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardScene",
  props: {
    dataJav: Object,
  },
  methods: {
    getName: function (_name) {
      let newName;
      if (_name.length > 55) {
        newName = _name.slice(0, 55) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
    getCode: function (_name) {
      return _name.slice(0,_name.length -3)
    },
    restart: function () {
      $(".video-jav").on("mouseout", function (event) {
        this.load();
      });
    },
    start: function () {
      $(".video-jav").on("mouseover", function (event) {
        this.play();
      });
    },
  },
};
</script>

<style lang="scss">
.card-scene {
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 0;
  a {
    color: #000 !important;
  }
  cursor: pointer;
  img {
    z-index: 3;
  }
  video {
    display: none;
  }
  margin-top: 4%;
  margin-bottom: 4%;
}

.card-scene:hover {
  a {
    color: #da0000 !important;
  }
}

.card-scene-media:hover,
.card-scene-media:active,
.card-scene-media:focus {
  img {
    display: none;
  }
  video {
    display: block;
    z-index: 1;
    background-color: #fff;
  }
}

.card-scene .box-code {
  top: 0%;
  color: #f8faff;
  text-align: right;
  width: 20%;
  padding-right: 3%;
  position: absolute;
  right: 0%;
  z-index: 4;
  background: rgba(0, 0, 0, 0.40);
}

.card-scene .post {
  .box-code {
    display: flex;
    justify-content: flex-end;
    align-items: right;
  }
  .box-time {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  text-transform: uppercase;
  text-align: center !important;
  font-size: 11px;
  letter-spacing: 1.5px;
}

.card-scene .title {
  font-size: 13px;
  margin: 0;
  font-weight: 260 !important;
}

.card-scene .box-content {
  width: 100%;
  padding: 5px 10px;
  color: #f8faff;
  background-color: #fff;
  text-align: justify;
  z-index: 1;
}

.card-scene .title-mobile {
  font-size: 13px;
}

.card-scene .box-content-mobile {
  width: 100%;
  padding: 1% 0%;
  color: #f8faff;
  background-color: #fff;
  text-align: center;
}


@media screen and (min-width: 1280px) and (max-width: 1600px) {
  .card-scene .title {
    font-size: 12px;
  }

  .card-scene .box-content {
    padding: 5px 5px;
  }

  .card-scene .box-code {
    width: 28%;
  }
  
  .card-scene .box-code .post{
    font-size: 10px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1279px) {
  .card-scene .post {
    font-size: 11px;
  }

  .card-scene .title {
    font-size: 10px;
  }

  .card-scene .box-content {
    padding: 5px 2px;
  }
}

@media screen and (min-width: 800px) and (max-width: 991px) {
  .card-scene .box-time {
    height: 15%;
  }

  .card-scene .post {
    font-size: 11px;
  }

  .card-scene .title {
    font-size: 8px;
  }

  .card-scene .box-content {
    padding: 5px 2px;
  }
}

@media screen and (min-width: 621px) and (max-width: 799px) {
  .card-scene .box-time {
    height: 15%;
  }

  .card-scene .post {
    font-size: 9px !important;
  }

  .card-scene .title {
    font-size: 8px;
  }

  .card-scene .box-content {
    padding: 5px 2px;
  }
}

@media screen and (min-width: 380px) and (max-width: 620px) {
  .card-scene .box-time {
    height: 15%;
  }

  .card-scene .post {
    font-size: 12px !important;
  }

  .card-scene .title {
    font-size: 10px;
  }

  .card-scene .box-content {
    padding: 5px 2px;
  }
}
</style>