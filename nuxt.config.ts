// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [// needed
  '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', "@nuxt/image"],

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