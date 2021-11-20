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
        primaryColor: "#da0000",
        posterImage: this.jav.imageIndexUrl,
        timelinePreview: {
          file:
            "https://javdata.sfo2.digitaloceanspaces.com/vtts/" +
            this.jav.code +
            "_thumbs.vtt",
          type: "VTT",
        },
        allowTheatre: false,
      },
      vastOptions: {
        allowVPAID: true,
        adList: [
          {
            roll: "preRoll",
            vastTag:
              "https://vast.yomeno.xyz/vast?spot_id=3971"
          },
          {
            roll: "onPauseRoll",
            vastTag: "https://vast.yomeno.xyz/vast?spot_id=20325",
            vAlign: "middle"
          }
        ],
      },
      onBeforeXMLHttpRequest: (request) => {
        request.withCredentials = false;
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