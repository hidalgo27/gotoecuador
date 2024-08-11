// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      script: [ { src: 'https://cdn.wetravel.com/widgets/embed_checkout.js' } ],
      link: [
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/manifest.json' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },

  modules: [// needed
  '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', "@nuxt/image", "@nuxtjs/google-fonts", 'floating-vue/nuxt'],

  googleFonts: {
    families: {
      Poppins: true,  // Puedes especificar los pesos de las fuentes que necesites
    }
  },

  piniaPersistedstate: {
    storage: 'localStorage'
  },
  css: [
      '~/assets/css/main.css',
    '~/assets/css/page.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['vue3-carousel']
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '' || "https://api.gotoecuador.com/api",
      // apiBaseTest: process.env.API_BASE_TEST || "https://app.gotolatam.travel/api",
      apiBaseTest: ''
      // apiBase: process.env.API_BASE_TEST || "http://localhost:8080/api",
    }
  },
})