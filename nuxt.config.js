module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Naice',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'Cache-Control' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Naice, 前端, blog' },
      { hid: 'keywords', name: 'keywords', content: '前端开发，JavaScript, Node, Vue，nuxt' },
      { name: 'author', content: '370215230@qq.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'http://lib.sinaapp.com/js/jquery/3.1.0/jquery-3.1.0.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js' },
      { src: '/live2d.js' }
    ]
  },
  css: [
    '~assets/css/init.css',
    '~assets/css/codeStyle.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  cache: true
}
