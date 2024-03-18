import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import TodoPage from '@/pages/TodoPage.vue'
import TodoEdit from '@/pages/TodoEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoPage,
      children: [
        {
          path: ':id',
          name: 'todo-detail',
          component: TodoEdit
        }
      ]
    }
  ]
})

export default router
