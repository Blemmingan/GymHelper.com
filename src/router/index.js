// Composables

import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ValidateEmail from '@/views/ValidateEmail.vue'
import ResendEmail from '@/views/ResendEmail.vue'

import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'
import ExcerciseCard from '@/components/CreateExcerciseCard.vue'
import UserHome from '@/components/UserHome.vue'
import RoutineWarmup from '@/components/RoutineWarmup.vue'
import AddExcercise from '@/components/AddExcerciseToRoutine.vue'
import RoutineCore from '@/components/RoutineCore.vue'
import RoutineCooldown from '@/components/RoutineCooldown.vue'
import NameRoutineField from '@/components/NameRoutineField.vue'
import DoingWarmup from '@/components/DoingWarmup.vue'
import DoingCoreCycles from '@/components/DoingCoreCycles.vue'
import DoingCooldownCycle from '@/components/DoingCooldownCycle.vue'
import RateRoutine from '@/components/RateRoutine.vue'
import RoutineDetailedView from '@/components/RoutineDetailedView.vue'
import { useUserStore } from '@/stores/UserStore'
import MyExercises from '@/components/MyExercises.vue'
import editExercise from '@/components/editExercise.vue'
import MyRoutines from '@/views/MyRoutines.vue'

import UserProfile from '@/views/UserProfile.vue'

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
    name: 'createExercise',
    component: ExcerciseCard,
    meta: {requiresAuth: true}
  },

  {
    path: '/profile',
    component: UserProfile,
    name: 'profile',
    meta: {requiresAuth: true}
  },

  {
    path: '/home',
    component: UserHome,
    meta: {requiresAuth: true}
  },

  {
    path: '/warmup',
    component: RoutineWarmup,
    meta: {requiresAuth: true}
  },

  {
    path: '/core',
    component: RoutineCore,
    meta: {requiresAuth: true}
  },

  {
    path: '/cooldown',
    component: RoutineCooldown,
    meta: {requiresAuth: true}
  },

  {
    path: '/excercise',
    component: AddExcercise,
    meta: {requiresAuth: true}
  },

  {
    path: '/nameRoutine',
    component: NameRoutineField,
    meta: {requiresAuth: true}
  },

  {
    path: '/runRoutineWarmup',
    component: DoingWarmup,
    meta: {requiresAuth: true}
  },

  {
    path: '/routineCore',
    component: DoingCoreCycles,
    meta: {requiresAuth: true}
  },

  {
    path: '/routineCooldown',
    component: DoingCooldownCycle,
    meta: {requiresAuth: true}
  },

  {
    path: '/rate',
    component: RateRoutine,
    meta: {requiresAuth: true}
  },

  {
    path: '/myExercises',
    name: 'myExercises',
    component: MyExercises,
    meta: {requiresAuth: true}
  },
  {
    path: '/myRoutines',
    name: 'myRoutines',
    component: MyRoutines,
    meta: {requiresAuth: true}
  },
  {
    path: '/viewRoutine',
    component: RoutineDetailedView,
    meta: {requiresAuth: true}
  },

  {
    path: '/editExercise',
    name: 'editExercise',
    component: editExercise,
    meta: {requiresAuth: true}
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


router.beforeEach((to, from, next) => {

  const userStore = useUserStore()
  if (to.matched.some(route => route.meta.requiresAuth)){
    if (userStore.isLoggedIn){
      next()
    } else {
      next({name: "Login"})
    }
  } else {
    next()
  }
})

export default router
