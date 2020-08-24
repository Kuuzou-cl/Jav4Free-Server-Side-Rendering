const webpack = require('webpack')
module.exports = {
  mode: 'universal',
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jav4Free | Japanese Adult Videos for Free | Streaming Service',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        name: 'exoclick-site-verification',
        content: '0922ef088413c0d106de848a80b5487f'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://javdata.sfo2.cdn.digitaloceanspaces.com/logo-short-01.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ],
    script: [
      {
        src: 'https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js'
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
    '~/plugins/vue-plyr',
    { src: '~/plugins/vue-touch2', ssr: false },
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
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, ctx) {
    }
  },
}
