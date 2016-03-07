import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import todo from './modules/todo'

Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    todo
  },
  strict,
  middlewares
})
