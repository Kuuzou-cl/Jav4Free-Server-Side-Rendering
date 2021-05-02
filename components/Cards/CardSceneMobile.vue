<template>
  <div @contextmenu.prevent class="card bg-dark box2">
    <div class="loading-box"></div>
    <div class="box2-media">
      <nuxt-link :to="'/scenes/scene/'+dataJav._id" tag="a">
        <img :src="dataJav.imageIndexUrl" v-lazy-load />
        <video class="video-jav" @mouseleave="restart()" @mouseover="start()" preload="auto">
          <source :src="dataJav.imageUrl" type="video/mp4" />
        </video>
      </nuxt-link>
    </div>
    <div class="box-content-mobile">
      <h3 class="title-mobile">
        <nuxt-link :to="'/scenes/scene/'+dataJav._id" tag="a">{{getName(dataJav.name)}}</nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSceneMobile",
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
.box2{
    position:relative;
    overflow:hidden;
    border: 0;
    border-radius: 0;
    a{
        color: #eeeeee !important;
    }
    cursor: pointer;
    img{
        z-index:3;
    }
    video{
        display: none;
    }
    margin-top: 4%;
    margin-bottom: 4%;
}

.box2:hover{
    a{
        color: #ffd800 !important;
    }
}

.box2-media:hover, .box2-media:active, .box2-media:focus{
    a{
        color: #ffd800 !important;
    }
    img{
        display: none;
    }
    video{
        display: block;
        z-index:1;
        background-color: #000000;
    }
}

.loading-box{
    position: absolute;
    z-index:1;
    border-top: 2px solid #ffd800;
    width:0;
    transition: width 0.5s ease-in-out;
}

.box2 .box-code{
    top:0%; 
    color:#f8faff; 
    text-align: right;
    width:20%;
    padding-right: 4%;
    position:absolute;
    right:0%;
    z-index:4;
}

.box2 .post{
    .box-code{
        display:flex;justify-content:flex-end;align-items:right;
    }
    .box-time{
        display:flex;justify-content:flex-end;align-items:center;
    }
    text-transform:uppercase;
    text-align:center !important;
    font-size:11px;
    letter-spacing: 1.5px;
}

.box2 .title{
    font-size:13px;
    margin:0; 
    font-weight: 260 !important;}

.box2 .box-content{
    width:100%;
    padding:5px 10px;
    color:#f8faff;
    background-color: #000000;
    text-align: justify;
    z-index:1;
}

.box2 .title-mobile{
    font-size:13px;
}

.box2 .box-content-mobile{
    width:100%;
    padding:1% 0%;
    color:#f8faff;
    background-color: #000000;
    text-align: center;
}

@media screen and (min-width: 1440px) and (max-width: 1919px) {

}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
            
    .box2 .title{font-size:12px;}

    .box2 .box-content{padding:5px 5px;}
}

@media screen and (min-width: 992px) and (max-width: 1279px) {

    .box2 .post{font-size:11px;}
    
    .box2 .title{font-size:10px;}

    .box2 .box-content{padding:5px 2px;}
}

@media screen and (min-width: 800px) and (max-width: 991px) {
    .box2 .box-time{
        height: 15%;
    }
        
    .box2 .post{font-size:11px;}
    
    .box2 .title{font-size:8px;}

    .box2 .box-content{padding:5px 2px;}
}

@media screen and (min-width: 621px) and (max-width: 799px) {
    .box2 .box-time{
        height: 15%;
    }

    .box2 .post{font-size:9px !important;}

    .box2 .title{font-size:8px;}

    .box2 .box-content{padding:5px 2px;}
}

@media screen and (min-width: 380px) and (max-width: 620px) {
    .box2 .box-time{
        height: 15%;
    }
    
    .box2 .post{font-size:12px !important;}

    .box2 .title{font-size:10px;}

    .box2 .box-content{padding:5px 2px;}
}
</style>