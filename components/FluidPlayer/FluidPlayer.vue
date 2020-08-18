<template>
  <video ref="JavPlayer">
    <source :src="jav.url" type="video/mp4" />
  </video>
</template>

<script>
export default {
  name: "FluidPlayer",
  props: {
    jav: Object,
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.player = fluidPlayer(this.$refs.JavPlayer, {
      layoutControls: {
        layout: "default",
        fillToContainer: true,
        primaryColor: "#E8175D",
        posterImage: this.jav.imageIndexUrl,
        timelinePreview: {
          file:
            "https://javdata.sfo2.cdn.digitaloceanspaces.com/vtts/MBM-205_thumbs.vtt",
          type: "VTT",
        },
        allowTheatre: false,
      },
      vastOptions: {
        adList: [
          {
            roll: "preRoll",
            vastTag:
              "https://syndication.realsrv.com/splash.php?idzone=3966138",
          },
          {
            roll: "midRoll",
            vastTag:
              "https://syndication.realsrv.com/splash.php?idzone=3966138",
            timer: 600,
          },
          {
            roll: "postRoll",
            vastTag:
              "https://syndication.realsrv.com/splash.php?idzone=3966138",
          },
        ],
      },
    });
  },
  destroyed() {
    if (!this.player) {
      return;
    }
    this.player.destroy();
  },
};
</script>

<style scoped>
</style>