const resolve = require('path').resolve
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Susanna Lepola',
    htmlAttrs: {
      lang: 'fi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  router: {
    linkExactActiveClass: 'is-active'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize the progress bar color
  */
  plugins: [
    { src: '~/plugins/lory', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const vueLoader = config.module.rules.find(
        ({loader}) => loader === 'vue-loader')
      const { options: {loaders} } = vueLoader || { options: {} }
      for (const loader of Object.values(loaders || {})) {
        changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
      }
      for (const rule of config.module.rules) {
        changeLoaderOptions(rule.use)
      }
    },
    babel: {
      plugins: ['lodash']
    },
    plugins: [
      new LodashModuleReplacementPlugin
    ],
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    vendor: [
      // 'lodash',
      'lory.js'
    ]
  }
}

function changeLoaderOptions(loaders) {
  for (const loader of loaders || []) {
    let options
    switch (loader.loader) {
    case 'sass-loader':
      options = {
        includePaths: [resolve(__dirname, 'assets/scss')],
        data: '@import "_variables";'
      }
      break
    }
    if (options) {
      Object.assign(loader.options, options)
    }
  }
}