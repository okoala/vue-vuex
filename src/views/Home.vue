<template>
<div class="p-home">
  <slider class="banner" :items="banner"></slider>
  <section class="todoapp" style="margin-top: 150px;">
    <!-- header -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="tryAddTodo">
    </header>
    <!-- main section -->
    <section class="main" v-show="todos.length">
      <input class="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll(!allChecked)">
      <ul class="todo-list">
        <todo v-for="todo in filteredTodos" :todo="todo"></todo>
      </ul>
    </section>
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize 'item' }} left
      </span>
      <ul class="filters">
        <li v-for="(key, val) in filters">
          <a href="#/{{$key}}"
            :class="{ selected: visibility === key }"
            @click="visibility = key">
            {{ key | capitalize }}
          </a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
</div>
</template>

<script>
import Slider from '../components/Slider.vue'
import Todo from '../components/Todo.vue'

import {addTodo, toggleAll, clearCompleted} from '../vuex/actions'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  data () {
    return {
      banner: [
        {
          imageUrl: 'http://gw.alicdn.com/tps/i4/TB1bjzwLpXXXXXHXpXXdIns_XXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://gw.alicdn.com/simba/img/TB1o1KLLXXXXXc2XXXXSutbFXXX.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://gw.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://gw.alicdn.com/tps/i1/TB1eqPcLpXXXXXPaXXXdIns_XXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://img.alicdn.com/tps/TB1t4uJLpXXXXXsXXXXXXXXXXXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://img.alicdn.com/tps/TB1m06KLpXXXXbXXpXXXXXXXXXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://gw.alicdn.com/tps/i4/TB1WVPlLpXXXXasaXXXdIns_XXX-1125-352.jpg_q50.jpg'
        },
        {
          imageUrl: 'http://img.alicdn.com/tps/TB1u85QLpXXXXX4XXXXXXXXXXXX-1125-352.jpg_q50.jpg'
        }
      ],
      visibility: 'all',
      filters: filters
    }
  },

  components: { Slider, Todo },

  vuex: {
    getters: {
      todos: state => state.todo.todos
    },
    actions: {
      addTodo,
      toggleAll,
      clearCompleted
    }
  },

  computed: {
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    }
  },

  methods: {
    tryAddTodo (e) {
      var text = e.target.value
      if (text.trim()) {
        this.addTodo(text)
      }
      e.target.value = ''
    }
  }
}
</script>

<style src="todomvc-app-css/index.css"></style>
