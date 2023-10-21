// Composables

import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ValidateEmail from '@/views/ValidateEmail.vue'
import ResendEmail from '@/views/ResendEmail.vue'

import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'
import ExcerciseCard from '@/components/ExcerciseCard.vue'
import ProfileView from '@/components/ProfileView.vue'
import UserHome from '@/components/UserHome.vue'
import RoutineWarmup from '@/components/RoutineWarmup.vue'
import AddExcercise from '@/components/AddExcercise.vue'
import RoutineCore from '@/components/RoutineCore.vue'
import RoutineCooldown from '@/components/RoutineCooldown.vue'
import NameRoutineField from '@/components/NameRoutineField.vue'
import DoingWarmup from '@/components/DoingWarmup.vue'
import DoingCoreCycles from '@/components/DoingCoreCycles.vue'
import DoingCooldownCycle from '@/components/DoingCooldownCycle.vue'
import RateRoutine from '@/components/RateRoutine.vue'
const routes = [

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/validate',
    name: 'Validate',
    component: ValidateEmail
  },
  {
    path: '/resend',
    name: 'Resend',
    component: ResendEmail
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/createExcercise',
    component: ExcerciseCard
  },

  {
    path: '/profile',
    component: ProfileView
  },

  {
    path: '/home',
    component: UserHome
  },

  {
    path: '/warmup',
    component: RoutineWarmup
  },

  {
    path: '/core',
    component: RoutineCore
  },

  {
    path: '/cooldown',
    component: RoutineCooldown
  },

  {
    path: '/excercise',
    component: AddExcercise
  },

  {
    path: '/nameRoutine',
    component: NameRoutineField
  },

  {
    path: '/runRoutineWarmup',
    component: DoingWarmup
  },

  {
    path: '/routineCore',
    component: DoingCoreCycles
  },

  {
    path: '/routineCooldown',
    component: DoingCooldownCycle
  },

  {
    path: '/rate',
    component: RateRoutine
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
