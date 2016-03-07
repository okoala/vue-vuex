import { set } from 'vue'
import types from '../mutation-types'

import STORAGE_KEY from '../../constants'

const state = {
  todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}


const mutations = {
  [types.ADD_TODO] (state, text) {
    state.todos.push({
      text: text,
      done: false
    })
  },

  [types.DELETE_TODO] (state, todo) {
    state.todos.$remove(todo)
  },

  [types.TOGGLE_TODO] (state, todo) {
    todo.done = !todo.done
  },

  [types.EDIT_TODO] (state, todo, text) {
    todo.text = text
  },

  [types.TOGGLE_ALL] (state, done) {
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },

  [types.CLEAR_COMPLETED] (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  }
}

export default {state, mutations}
