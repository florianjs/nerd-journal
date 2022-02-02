export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Your website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        content: 'Website description',
        name: 'description',
      },
      {
        hid: 'og:title',
        content: 'Website title',
        property: 'og:title',
      },
      {
        hid: 'og:description',
        content: 'Website description.',
        property: 'og:description',
      },
      {
        hid: 'og:url',
        content: 'https://yoururl.com/',
        property: 'og:url',
      },
      {
        hid: 'og:image',
        content: 'https://yoururl.com/images/ogbanner/default.jpg',
        property: 'og:image',
      },
      {
        hid: 'twitter:card',
        content: 'summary_large_image',
        property: 'twitter:card',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    BASE_URL: 'https://yoururl.com',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', '@/assets/css/content.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: '@/assets/css/prism.css',
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8', '@nuxt/image', '@nuxtjs/google-fonts'],

  googleFonts: {
    display: 'swap',
    families: {
      Merriweather: {
        wght: [300, 400, 700, 900],
        ital: [300, 400, 700, 900],
      },
      Roboto: {
        wght: [100, 200, 300, 400, 500, 600, 700, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 900],
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', '@nuxtjs/robots'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
