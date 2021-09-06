<template>
  <nuxt-link @contextmenu.prevent :to="'/javs/jav/' + dataJav._id" tag="a" class="card bg-dark box2">
    <img :src="dataJav.imageUrl" v-lazy-load />
    <div class="box-code">
      <b class="post">{{ dataJav.code }}</b>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "CardJav2",
  props: {
    dataJav: Object,
  },
};
</script>

<style lang="scss">
.box2 {
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  img {
    z-index: 3;
  }
  margin-top: 4%;
  margin-bottom: 4%;
}

.box2 .box-code {
  top: 0%;
  color: #fff !important;
  text-shadow: 2px 0 0 #000000, -2px 0 0 #000000, 0 2px 0 #000000, 0 -2px 0 #000000, 1px 1px #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000;
  text-align: right;
  width: 100% !important;
  padding-right: 4%;
  position: absolute;
  right: 0%;
  z-index: 4;
}

.box2 .post {
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

.box2 .title {
  font-size: 13px;
  margin: 0;
  font-weight: 260 !important;
}

.box2 .box-content {
  width: 100%;
  padding: 5px 10px;
  color: #f8faff;
  background-color: #000000;
  text-align: justify;
  z-index: 1;
}

@media screen and (min-width: 1440px) and (max-width: 1919px) {
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .box2 .title {
    font-size: 12px;
  }

  .box2 .box-content {
    padding: 5px 5px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1279px) {
  .box2 .post {
    font-size: 11px;
  }

  .box2 .title {
    font-size: 10px;
  }

  .box2 .box-content {
    padding: 5px 2px;
  }
}

@media screen and (min-width: 800px) and (max-width: 991px) {
  .box2 .box-time {
    height: 15%;
  }

  .box2 .post {
    font-size: 11px;
  }

  .box2 .title {
    font-size: 8px;
  }

  .box2 .box-content {
    padding: 5px 2px;
  }
}

@media screen and (min-width: 621px) and (max-width: 799px) {
  .box2 .box-time {
    height: 15%;
  }

  .box2 .post {
    font-size: 9px !important;
  }

  .box2 .title {
    font-size: 8px;
  }

  .box2 .box-content {
    padding: 5px 2px;
  }
}

@media screen and (min-width: 380px) and (max-width: 620px) {
  .box2 .box-time {
    height: 15%;
  }

  .box2 .post {
    font-size: 12px !important;
  }

  .box2 .title {
    font-size: 10px;
  }

  .box2 .box-content {
    padding: 5px 2px;
  }
}
</style>