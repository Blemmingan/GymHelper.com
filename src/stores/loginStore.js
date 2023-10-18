import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => { 
  //  estado
  const loggedIn = ref(false)

  //  getters
  
  
  //  actions
  function logIn() {
    loggedIn = true
  }
  

 
  return { loggedIn, logIn }
})
