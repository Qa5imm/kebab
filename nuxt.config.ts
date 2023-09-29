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
      title: "Bike Chaiye",
      meta: [
        {
          name: "description",
          content:
            "Welcome to Bike Chahiye, your go-to motorbike rental service located at LUMS! 🏍️ We offer a thrilling and convenient way to explore the campus and beyond",
        },
        {
          name: "keywords",
          content:
            "Bike, Rent, Chaiye, bikeChaiye, chatnbot, first, service, startup, renting, bike renting",
        },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "images/bikeChaiye.jpg" },
      ],
    },
  },
});
