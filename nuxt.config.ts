import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/reset.css', '~/assets/css/main.css', '~/assets/css/fonts.css', '~/assets/css/icons.css',],

})