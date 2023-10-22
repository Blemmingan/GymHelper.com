// Composables

import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ValidateEmail from '@/views/ValidateEmail.vue'
import ResendEmail from '@/views/ResendEmail.vue'

import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'
import ExcerciseCard from '@/components/CreateExcerciseCard.vue'
import ProfileView from '@/components/ProfileView.vue'
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
    component: ExcerciseCard
  },

  {
    path: '/profile',
    component: UserProfile,
    name: 'profile',
    meta: {requiresAuth: true}
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
    path: '/myExercises',
    name: 'myExercises',
    component: MyExercises
  },

  {
    path: '/viewRoutine',
    component: RoutineDetailedView
  },

  {
    path: '/editExercise',
    name: 'editExercise',
    component: editExercise
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
