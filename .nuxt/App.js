import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\css\\init.css'

import '..\\assets\\css\\codeStyle.css'

import _7c6a36a0 from '..\\layouts\\layout.vue'
import _40930270 from '..\\layouts\\music-layout.vue'
import _6f6c098b from './layouts/default.vue'

const layouts = { "_layout": _7c6a36a0,"_music-layout": _40930270,"_default": _6f6c098b }

export default {
  head: {"title":"ZeroBinbin","meta":[{"charset":"utf-8"},{"http-equiv":"cleartype","content":"on"},{"http-equiv":"Cache-Control"},{"name":"viewport","content":"width=device-width, initial-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"ZeroBinbin，一个web前端工程师的个人博客,很多事情不是因为有希望才去坚持,而是坚持了才有希望"},{"hid":"keywords","name":"keywords","content":"ZeroBinbin,前端开发，个人博客，blog"},{"name":"author","content":"370215230@qq.com"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"src":"https:\u002F\u002Flib.sinaapp.com\u002Fjs\u002Fjquery\u002F3.1.0\u002Fjquery-3.1.0.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fhighlight.js\u002F9.18.1\u002Fhighlight.min.js"},{"src":"\u002Flive2d.js"}],"style":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
