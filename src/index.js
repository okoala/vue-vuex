import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './views/app.vue'
import { configRouter } from './route'

import './styles/css/global.scss'

Vue.config.debug = true

Vue.use(Vuex)

// install router
Vue.use(VueRouter)

// Javascript
Vue.use(VueResource)

Vue.http.options.emulateJSON = true

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})
// configure router
configRouter(router)

// boostrap the app
router.start(Vue.extend(App), '#root')
// just for debugging
window.router = router
