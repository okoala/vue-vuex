import Vue from 'vue'
import Vuex from 'vuex'
import * as state from './states'
import * as actions from './actions'
import mutations from './mutations'
import middlewares from './middlewares'

const strict = process.env.NODE_ENV !== 'production'

export const STORAGE_KEY = 'vuex'
export default new Vuex.Store({
  strict,

  state,
  actions,
  mutations,
  middlewares
})
