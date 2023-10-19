import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { UserApi } from "@/api/user";
import { Api } from "@/api/api";

const SECURITY_TOKEN_KEY = "security-token";

export const useUserStore = defineStore('user', () => { 
  //  estado
  const token = ref(null)
  const user = ref(null)
  const email = ref(null)

  //  getters
  const isLoggedIn = computed(() => {
    return token.value
  })
  
  //  actions
  function initialize() {
    const token = localStorage.getItem(SECURITY_TOKEN_KEY);
    if (token)
        setToken(token);
  }

  function setUser(newUser) {
    user = newUser
  }
  
  function setToken(newToken) {
    token = newToken
    Api.token = newToken
  }

  function updateToken(token, rememberMe) {
    if (rememberMe)
        localStorage.setItem(SECURITY_TOKEN_KEY, token)
    setToken(token)
  }

  function removeToken() {
    localStorage.removeItem(SECURITY_TOKEN_KEY)
    setToken(null)
  }

  async function login(credentials, rememberMe) {
    const result = await UserApi.login(credentials)
    updateToken(result.token, rememberMe)
  }

  async function logout() {
    await UserApi.logout()
    removeToken()
  }

  async function getCurrentUser() {
    if (user)
        return user

    const result = await UserApi.retrieveCurrentUser()
    setUser(result)
  }

  async function register(registrationData){
    await UserApi.register(registrationData)
  }

  async function verify_email(code){
    if (email.value){
      await UserApi.verify_email(new EmailData(email.value, code))
    }
  }

  async function resendVerificationEmail(){
    if (email.value){
      await UserApi.resendVerificationEmail(email)
    }
  }

  async function changeUserData(userData){
    const result = await UserApi.modifyUserData(userData)
    setUser(result)
  }

  async function deleteUser(){
    await UserApi.removeCurrentUser()
  }

  async function getUserRoutines(){
    return await UserApi.getCurrentUserRoutines()
  }


  return {
    isLoggedIn,
    initialize,
    login,
    logout,
    getCurrentUser,
    register,
    verify_email,
    resendVerificationEmail,
    changeUserData,
    deleteUser,
    getUserRoutines
  }
})
