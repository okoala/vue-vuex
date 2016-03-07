import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import { configRouter } from './route'
import App from './views/App.vue'
import dTap from './util/directives/tap'
require('es6-promise').polyfill()

import './styles/css/global.scss'

Vue.config.debug = true

// install router
Vue.use(VueRouter)

Vue.directive('tap', dTap)

// 路由相关
// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

App.store = store
// boostrap the app
router.start(Vue.extend(App), '#root')

// just for debugging
window.router = router
