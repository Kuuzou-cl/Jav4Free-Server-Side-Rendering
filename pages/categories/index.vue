<template>
  <div class="container-fluid no-margin no-padding">
    <div class="container-fluid">
      <div class="row row-title">
        <div class="col-lg-12 text-center">
          <h4>Categories</h4>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="row justify-content-center">
              <div v-for="category in categories" :key="category.id">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <nuxt-link :to="'/categories/1/' + category.name">
                    <button class="btn category-title">
                      {{ category.name }}
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="$device.isMobile" class="need-space"></div>
      <div v-if="$device.isMobile" class="need-space"></div>
      <div v-if="$device.isMobile" class="need-space"></div>
      <div v-if="$device.isMobile" class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {},
  head() {
    return {
      title: "Categories on Jav4Free | Japanese Adult Videos for Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Here you can watch free adult porn videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.",
        },
      ],
    };
  },
  async asyncData({error, $errorHandler}) {
    try {
      const categories = await axios.get("https://jav.souzou.dev/categories");
      return { categories: categories.data.data.Categories };
    } catch (errors) {
      const errorResponse = $errorHandler.setAndParse(errors);
      error({
        statusCode: errorResponse.status,
        message: errorResponse.message,
      });
    }
  },
};
</script>