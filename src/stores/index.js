import { defineStore } from 'pinia'

const getters = {
  activeTodos() {
    return this.todolist.filter((todo) => todo.status === 'active')
  },
  completedTodos() {
    return this.todolist.filter((todo) => todo.status === 'completed')
  },
  filteredTodos() {
    if (this.filter === 'active') {
      return this.activeTodos
    } else if (this.filter === 'completed') {
      return this.completedTodos
    }
    return this.todolist
  },
  getTodoById: (state) => (id) => {
    return state.todolist.find((todo) => todo.id === Number(id))
  },
}

const actions = {
  addTodo(todo) {
    this.todolist.push({
      id: Date.now(),
      ...todo,
      status: 'active',
      createdAt: new Date().toLocaleString(),
      lastModified: new Date().toLocaleString()
    })
    localStorage.setItem('todolist', JSON.stringify(this.todolist))
  },
  deleteTodo(id) {
    this.todolist = this.todolist.filter((todo) => todo.id !== id)
    localStorage.setItem('todolist', JSON.stringify(this.todolist))
  },
  updateTodo(updatedTodo) {
    const index = this.todolist.findIndex((todo) => todo.id === updatedTodo.id)
    this.todolist[index] = {
      ...updatedTodo,
      lastModified: new Date().toLocaleString()
    }
    localStorage.setItem('todolist', JSON.stringify(this.todolist))
  },
  selectFilter(filter) {
    this.filter = filter
  }
}

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todolist: JSON.parse(localStorage.getItem('todolist')) || [],
      isLoading: false,
      filter: 'all'
    }
  },
  getters,
  actions

  // getters: {
})
