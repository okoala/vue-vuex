import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './views/App.vue'
import { configRouter } from './route'
import dTap from './util/directives/tap'

import './styles/css/global.scss'

Vue.config.debug = true
// install router
Vue.use(VueRouter)

Vue.directive('tap', dTap)

// 路由相关
// create router
const router = new VueRouter({
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})
// configure router
configRouter(router)
// boostrap the app
router.start(Vue.extend(App), '#root')
// just for debugging
window.router = router
