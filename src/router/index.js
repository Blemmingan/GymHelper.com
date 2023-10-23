// Composables

import { createRouter, createWebHistory } from 'vue-router'
import {watch} from 'vue'
import { useUserStore } from '@/stores/UserStore'
import { useRoutineStore } from '@/stores/RoutineStore'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ValidateEmail from '@/views/ValidateEmail.vue'
import ResendEmail from '@/views/ResendEmail.vue'

import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'
import ExcerciseCard from '@/components/CreateExcerciseCard.vue'
import UserHome from '@/components/UserHome.vue'

import CommmunityRoutines from '@/views/CommunityRoutines.vue'

import RoutineDetailedView from '@/components/RoutineDetailedView.vue'
import EditExerciseCard from '@/components/EditExerciseCard.vue'

import MyExercises from '@/views/MyExercises.vue'

import MyRoutines from '@/views/MyRoutines.vue'

import UserProfile from '@/views/UserProfile.vue'
import { useExerciseStore } from '@/stores/ExerciseStore'

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
    path: '/myExercises/:page',
    name: 'myExercises',
    component: MyExercises,
    meta: {requiresAuth: true},
    props: true,
    beforeEnter: async (to, from) => {
      const exerciseStore = useExerciseStore()
      try {
        console.log(to.params.page)
        const query = `?page=${to.params.page}`
        const exist = await exerciseStore.getAll(query)
        if (exist.content.length==0 && exist.page>0){
          throw error
        }
      } catch(e){
        return {name : 'NotFound'}
      }
    }
  },
  {
    path: '/myRoutines/:page',
    name: 'myRoutines',
    component: MyRoutines,
    meta: {requiresAuth: true},
    props: true,
    beforeEnter: async (to, from) => {
      const routineStore = useRoutineStore()
      try {
      const query = `?page=${to.params.page}`
      const exist = await routineStore.getCurrentUserRoutines(query)
      if (exist.content.length==0 && exist.page>0){
        throw error
      }
      } catch (e){       
        return {name : 'NotFound'}
      }
    }

  },
  {
    path: '/routine/:id',
    name: 'routine',
    component: RoutineDetailedView,
    props: true,
    meta: {requiresAuth: true},
    beforeEnter: async (to, from) => {
      const routineStore = useRoutineStore()
      try{
      const exist = await routineStore.get(to.params.id)
      } catch (e){
        return {name : 'NotFound'}
      }
    }
  },

  {
    path: '/editExercise/:id',
    name: 'editExercise',
    component: EditExerciseCard,
    props: true,
    meta: {requiresAuth: true},
    beforeEnter: async (to, from) =>{
      const exerciseStore = useExerciseStore()
      try{
        const exist = await exerciseStore.get(to.params.id)
        console.log('a')
      } catch (e) {
        return {name : 'NotFound'}
      }
    }
  },

  {
    path: '/explore/:page',
    name: 'explore',
    component: CommmunityRoutines,
    props: true, 
    meta: {requiresAuth: true},
    beforeEnter: async (to, from) =>{
      const routineStore = useRoutineStore()
      try{
        const query = `?page=${to.params.page}`
        const exist  = await routineStore.getAll(query)
        if (exist.content.length==0 && exist.page>0){
          throw error
        }
      } catch (e){
        return {name: 'NotFound'}
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
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
