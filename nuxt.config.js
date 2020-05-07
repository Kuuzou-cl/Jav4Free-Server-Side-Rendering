const webpack = require('webpack')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jav4Free | Japanese Adult Videos for Free | Streaming Service',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: "juicyads-site-verification", content: "c23a8ba63c9c4356619c93eb2953dfaf" },
      { name: "trafficjunky-site-verification", content: "v0u01vat0" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://javdata.sfo2.cdn.digitaloceanspaces.com/favi-j4.webp' },
    ],
    script: [
      { src: "http://js.juicyads.com/jam_min.js", type: "text/javascript", defer: true },
      {
        src: "window.onload=check_mobile(22598,246527)",
        type: "text/javascript", defer: true
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#E8175D' },
  /*
  ** Global CSS
  */
  css: [
    'plyr/dist/plyr.css',
    'bootstrap/dist/css/bootstrap.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/bootstrap.js',
    '~/plugins/vue-plyr'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-71938715-4'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-lazy-load', {
      directiveOnly: true,
      observerConfig: {
        threshold: 0.3
      }

    }],
    '@nuxtjs/device',
    /* 
    instance.$device.isDesktop
    instance.$device.isMobile
    instance.$device.isTablet
    instance.$device.isMobileOrTablet
    instance.$device.isDesktopOrTablet
    instance.$device.isIos
    instance.$device.isWindows
    instance.$device.isMacOS 
    */
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, ctx) {
    }
  }
}
