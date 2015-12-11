import { set } from 'vue'
import * as types from './types'

export default {
  [types.RECEIVE_SLIDER] (state, data) {
    state.sliders = data
  }
}
