module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ZeroBinbin',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'Cache-Control' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'ZeroBinbin，一个web前端工程师的个人博客,很多事情不是因为有希望才去坚持,而是坚持了才有希望' },
      { hid: 'keywords', name: 'keywords', content: 'ZeroBinbin,前端开发，个人博客，blog' },
      { name: 'author', content: '370215230@qq.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://lib.sinaapp.com/js/jquery/3.1.0/jquery-3.1.0.min.js' },
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
  }
}
