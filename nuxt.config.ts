// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Ecuador Travel Packages',
      // meta: [
      //   { name: 'description', content: 'My amazing site.' }
      // ],
      script: [ { src: 'https://cdn.wetravel.com/widgets/embed_checkout.js' } ],
      link: [
        { rel: 'apple-touch-icon', sizes: '48x48', href: '/favicon/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '192x192', href: '/favicon/android-chrome-192x192.png' },
        { rel: 'apple-touch-icon', sizes: '512x512', href: '/favicon/android-chrome-512x512.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },

  modules: [// needed
  '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', "@nuxt/image", "@nuxtjs/google-fonts", 'floating-vue/nuxt', '@nuxtjs/device', '@nuxt/scripts', '@samk-dev/nuxt-vcalendar'],

  scripts: {
    registry: {
      googleTagManager: {
        id: 'AW-382248808',
      }
    }
  },

  googleFonts: {
    families: {
      Montserrat: [400,700],  // Puedes especificar los pesos de las fuentes que necesites
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
    transpile: ['vue3-carousel','@pinia-plugin-persistedstate']
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "https://api.gotoecuador.com/api",
      apiInquire: process.env.useNuxtApp || "https://api.gotoecuador.com/api/store/inquire",
      // apiBaseTest: process.env.API_BASE_TEST || "https://app.gotolatam.travel/api",
      apiBaseTest: '',
      gtmContainerId: process.env.NUXT_PUBLIC_GTM_CONTAINER_ID || '',
      // apiBase: process.env.API_BASE_TEST || "http://localhost:8080/api",
    }
  },
})