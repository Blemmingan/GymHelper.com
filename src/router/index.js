// Composables

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/LoginView.vue'
import RegisterView from '../components/RegisterView.vue'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'
import ExcerciseCard from '@/components/ExcerciseCard.vue'

const routes = [

  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/register',
    component: RegisterView
  },

  {
    path: '/',
    component: HomePage
  },
  {
    path: '/createExcercise',
    component: ExcerciseCard
  },

  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
