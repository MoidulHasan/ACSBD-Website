import { fileURLToPath } from "url";

export default defineNuxtConfig({
  srcDir: "src/",

  alias: {
    public: fileURLToPath(new URL("./public/", import.meta.url)),
    constants: fileURLToPath(new URL("./src/constants", import.meta.url)),
  },

  dir: {
    public: "../public/",
  },

  devtools: { enabled: true },

  modules: ["@nuxt/image", "@nuxtjs/eslint-module"],

  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeflex/primeflex.css",
    "primeicons/primeicons.css",
    "~/assets/styles/main.css",
  ],

  build: {
    transpile: ["primevue"],
  },

  app: {
    head: {
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/fabicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/fabicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/fabicon/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/images/fabicon/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/images/fabicon/safari-pinned-tab.svg",
          color: "#5bbad5",
        },

        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
  },

  runtimeConfig: {
    apiUrl: "",
    public: {
      baseURL: "",
    },
  },

  ssr: true,
});
