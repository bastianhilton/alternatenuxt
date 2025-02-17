export default {
  target: 'static',
  server: {
    port: 8000
  },
  head: {
    title: 'AlternateCMS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },
      { rel: 'stylesheet', href: '/mdb/plugins/css/all.min.css' },
      { rel: 'stylesheet', href: '/mdb/css/mdb.min.css' },
      { rel: 'stylesheet', href: '/styles/styles.css' }
    ],
    css: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },
      { rel: 'stylesheet', href: '/mdb/plugins/css/all.min.css' },
      { rel: 'stylesheet', href: '/mdb/css/mdb.min.css' },
      { rel: 'stylesheet', href: '/mdb/plugins/css/wysiwyg.min.css' },
      { rel: 'stylesheet', href: '/styles/styles.css' },
      { rel: 'stylesheet', href: '/DataTables/datatables.css' }
    ],
    script: [
      { src: '/mdb/plugins/js/all.min.js', mode: 'client' },
      { src: '/mdb/js/mdb.min.js', mode: 'client' },
      { src: '/mdb/plugins/js/wysiwyg.min.js' },
      { src: '/DataTables/datatables.js', mode: 'client' },
    ]
  },

  css: [
  ],

  plugins: [
    { src: '~/plugins/main.js', ssr: false },
    { src: '~/plugins/apollo-error-handler.js', ssr: false },
    // { src: '~/plugins/extensions/email.js', ssr: false },
    { src: '~/plugins/upload.js', ssr: false },
    { src: '~/plugins/extensions/editor.js', mode: 'client' },
    // { src: '~/plugins/extensions/tables.js', ssr: false }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/moment'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/i18n',
    // '@nuxtjs/recaptcha',
    'nuxt-stripe-module',
    'nuxt-highcharts',
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql'
      }
    }
  },

  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  },

  highcharts: {
    /* module options */
  },

  router: {
    middleware: []
  },

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },

  axios: {
    baseURL: '/'
  },

  sentry: {
    dsn: 'https://b54ea5cfd2cc4c23b49c3d5c6fbbd351@o996770.ingest.sentry.io/6140531',
    config: {
    }
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {},

  /* recaptcha: {
          siteKey: process.env.RECAPTCHA_SITE_KEY,
          version: 3
        }

  serverMiddleware: [
    '~/server/index.js'
  ], */

  build: {
  }
}
