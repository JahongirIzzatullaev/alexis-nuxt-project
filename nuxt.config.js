export default {
    generate: {
        fallback: true
    },
    router: { base: '/alexis/' },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Alexis',
        titleTemplate: '%s || Alexis',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/style.scss'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        {
            src: "~/plugins/aos", 
            ssr: false
        },
        { 
            src: '~/plugins/vue-backtotop.js', 
            ssr: false
        },
        { 
            src: '~/plugins/vue-masonry', 
            ssr: false 
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
    ],

    styleResources: {
        scss: [
            '~/assets/scss/common/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        extend (config, ctx) {
            if (ctx.isDev && ctx.isClient) {
              config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /([node_modules, static])/,
                    options: {
                        fix: false
                    }
              });
            }
        }
    },
}
