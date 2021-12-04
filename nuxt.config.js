const webpack = require('webpack')
module.exports = {
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
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
      },
      {
        name: 'juicyads-site-verification',
        content: 'c23a8ba63c9c4356619c93eb2953dfaf'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://javdata.sfo2.digitaloceanspaces.com/j4f-favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap' }
    ],
    script: [
      {
        src: 'https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js'
      }
      /**,
      {
        src: "https://js.wpadmngr.com/static/adManager.js", 'data-admpid': "7833", body: true
      } */
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffd800' },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/bootstrap.js',
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
    '@nuxtjs/i18n',
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
  i18n: {
    baseUrl: 'https://jav4free.watch',
    lazy:true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es.json'
      }
    ],
    langDir: '~/locales/',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      fallbackLocale: 'en',
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
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
