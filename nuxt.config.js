import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { 
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      { 
        rel: 'shop_app_mobile_icon',
        type: 'image/png',
        href: 'https://master.d9w8yguxptjkw.amplifyapp.com' + 'shop_app_mobile_icon.png'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** PWA config 
  */
  manifest: {
    name: 'nuxt-app',
    lang: 'ja',
    short_name: 'nuxt',
    title: 'nuxt-appです',
    'og:title': 'nuxt-appです',
    description: 'nuxt-appです',
    'og:description': 'nuxt-appです',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  /*
  ** PWA use development
  */

  /*
  **  workbox: {
  **    dev: false
  **  },
  */

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#81B29A",
          secondary: "#F4F1DE",
          tertiary: "#3D405B",
          accent: "#F4F1DE",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
