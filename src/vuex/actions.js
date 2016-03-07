import api from '../api'
import types from './mutation-types'

export const getSlider = ({ dispatch }) => {
  api.getSlider(data => {
    dispatch(types.RECEIVE_SLIDER, data)
  })
}

export const addTodo = makeAction(types.ADD_TODO)
export const deleteTodo = makeAction(types.DELETE_TODO)
export const toggleTodo = makeAction(types.TOGGLE_TODO)
export const editTodo = makeAction(types.EDIT_TODO)
export const toggleAll = makeAction(types.TOGGLE_ALL)
export const clearCompleted = makeAction(types.CLEAR_COMPLETED)

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
