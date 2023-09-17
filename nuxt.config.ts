// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  runtimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
  app: {
    baseURL: '/kebab'
  },
});
