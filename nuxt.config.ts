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
  app: {
    baseURL: "/",
    buildAssetsDir: "assets",
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "images/bikeChaiye.jpg" },
      ],
    },
  },
});
