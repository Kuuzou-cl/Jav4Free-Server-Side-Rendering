const webpack = require('webpack')
module.exports = {
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  telemetry: false,
  head: {
    title: 'Jav4Free | Japanese Adult Videos for Free | Streaming Service',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://javdata.sfo2.digitaloceanspaces.com/j4f-favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700&display=swap' }
    ],
    script: [
      {
        src: 'https://cdn.fluidplayer.com/3.0.4/fluidplayer.min.js'
      },
      {
        src: "https://javdata.sfo2.cdn.digitaloceanspaces.com/scripts/adilla2.js", 'data-cfasync' : 'false' , body: true
      } 
    ]
  },
  loading: { color: '#ffd800' },
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
  plugins: [
    '~plugins/bootstrap.js',
    { src: '~/plugins/vue-touch2', ssr: false },
    { src: '~/plugins/error-handler.js' }
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-71938715-4'
    }]
  ],
  modules: [
    /*
    ['nuxt-lazy-load', {
      directiveOnly: false,
      observerConfig: {
        threshold: 0.1
      }

    }],*/
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
  axios: {
  },
  build: {
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
