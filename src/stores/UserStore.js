import { defineStore } from "pinia"
import {ref, computed} from 'vue'
import {UserApi, EmailData} from '@/api/user.js'
import {Api} from '@/api/api.js'

const SECURITY_TOKEN_KEY = 'security-token'


export const useUserStore = defineStore('security', ()=>{
    const token = ref(null)
    const user = ref(null)
    const email = ref(null)

    const isLoggedIn = computed(() => {
        return token.value
    })

    function initialize(){
        const localToken = localStorage.getItem(SECURITY_TOKEN_KEY)
        if (localToken){
            setToken(localToken)
        }
    }

    function setToken(newToken){
        token.value = newToken
        Api.token = newToken
    }

    function updateToken(token, rememberMe){
        if (rememberMe){
            localStorage.setItem(SECURITY_TOKEN_KEY, token)
        }
        setToken(token)
    }

    async function login(credentials, rememberMe){
        const result = await UserApi.login(credentials)
        updateToken(result.token, rememberMe)
    }

    async function logout(){
        await UserApi.logout()
        localStorage.removeItem(SECURITY_TOKEN_KEY)
        setToken(null)
    }

    async function register(registrationData){
        email.value = registrationData.email
        await UserApi.register(registrationData)
    }

    async function resendVerificationEmail(used_email){
        await UserApi.resendVerificationEmail(used_email)
    }

    async function verifyEmail(code){
        if (email.value){
            await UserApi.verifyEmail(new EmailData(email.value, code))
        }
    }
    
    async function getCurrentUser(){
        if (user.value){
            return user.value
        }
        const result = await UserApi.get()
        user.value = result
        return result
    }

    async function modifyCurrentUserData(userData){
        const result = await UserApi.put(userData)
        user.value = result
    }

    async function removeCurrentUser(){
        await UserApi.delete()
        localStorage.removeItem(SECURITY_TOKEN_KEY)
        setToken(null)
    }


    return {
        isLoggedIn, 
        initialize, 
        login, 
        logout, 
        register, 
        resendVerificationEmail, 
        verifyEmail,
        getCurrentUser,
        modifyCurrentUserData,
        removeCurrentUser
    }
})

