import Vue from 'vue'
import Vuex from 'vuex'
import * as state from './states'
import * as actions from './actions'
import mutations from './mutations'
import middlewares from './middlewares'

export const STORAGE_KEY = 'vuex'

export default new Vuex.Store({
  state,
  actions,
  mutations,
  middlewares
})
