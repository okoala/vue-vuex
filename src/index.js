import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App.vue'
import { configRouter } from './route'
import store from './store'

import './styles/css/global.scss'

Vue.config.debug = true

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
