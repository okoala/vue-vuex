import api from '../api'
import * as types from './types'

export const getSlider = ({ dispatch }) => {
  api.getSlider(data => {
    dispatch(types.RECEIVE_SLIDER, data)
  })
}
