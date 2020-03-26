import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _41f23dd2 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _1ee64b80 = () => interopDefault(import('..\\pages\\allarticle.vue' /* webpackChunkName: "pages_allarticle" */))
const _21d005c5 = () => interopDefault(import('..\\pages\\hero.vue' /* webpackChunkName: "pages_hero" */))
const _ade6072c = () => interopDefault(import('..\\pages\\music.vue' /* webpackChunkName: "pages_music" */))
const _1afd4eb6 = () => interopDefault(import('..\\pages\\oldIndex.vue' /* webpackChunkName: "pages_oldIndex" */))
const _5661e81e = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages_project" */))
const _5544e1d0 = () => interopDefault(import('..\\pages\\page\\_id.vue' /* webpackChunkName: "pages_page__id" */))
const _61aa1897 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _41f23dd2,
      name: "about"
    }, {
      path: "/allarticle",
      component: _1ee64b80,
      name: "allarticle"
    }, {
      path: "/hero",
      component: _21d005c5,
      name: "hero"
    }, {
      path: "/music",
      component: _ade6072c,
      name: "music"
    }, {
      path: "/oldIndex",
      component: _1afd4eb6,
      name: "oldIndex"
    }, {
      path: "/project",
      component: _5661e81e,
      name: "project"
    }, {
      path: "/page/:id?",
      component: _5544e1d0,
      name: "page-id"
    }, {
      path: "/",
      component: _61aa1897,
      name: "index"
    }],

    fallback: false
  })
}
