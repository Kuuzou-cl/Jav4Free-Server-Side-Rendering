<template>
  <div>
    <div v-if="$device.isDesktop">
      <div class="container-fluid">
        <div class="container">
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6 class="title-black text-left">Email Us</h6>
              <p>
                If you are interested in including your advertisement in any of
                JAV4FREE.watch's available spaces, please contact us at
                contact@jav4free.watch
              </p>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6 class="title-black text-left">
                Report Abusive or Illegal Content
              </h6>
              <p>
                Please report any content that youthink es inappropiate at
                contact@jav4free.watch
              </p>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6 class="title-black text-left">
                DMCA Reporting Claims of Copyright Infringement
              </h6>
              <p>
                If you believe any material accessible on JAV4FREE infringes
                your copyright, you may submit a copyright infringement
                notification. These requests should only be submitted by the
                copyright owner or an agent authorized to act on the owner's
                behalf at contact@jav4free.watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile">
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="need-space"></div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h6 class="title-black text-left">Email Us</h6>
            <p>
              If you are interested in including your advertisement in any of
              JAV4FREE.watch's available spaces, please contact us at
              contact@jav4free.watch
            </p>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h6 class="title-black text-left">
              Report Abusive or Illegal Content
            </h6>
            <p>
              Please report any content that youthink es inappropiate at
              contact@jav4free.watch
            </p>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h6 class="title-black text-left">
              DMCA Reporting Claims of Copyright Infringement
            </h6>
            <p>
              If you believe any material accessible on JAV4FREE infringes your
              copyright, you may submit a copyright infringement notification.
              These requests should only be submitted by the copyright owner or
              an agent authorized to act on the owner's behalf at
              contact@jav4free.watch.
            </p>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="need-space"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {},
  head() {
    return {
      title: "Contact Us | Jav4Free | Japanese Adult Videos for Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Here you can watch free adult porn videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.",
        },
      ],
    };
  },
};
</script>