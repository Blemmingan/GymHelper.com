<template>
<div>
    <v-app-bar color="primary" app>
            <v-app-bar-title class="logo" @click="router.push('/')">
                <v-icon>mdi-weight-lifter</v-icon>GymHelper.com
            </v-app-bar-title> 
            <v-tabs v-if="userStore.isLoggedIn">
                <v-spacer></v-spacer>
                <v-tab to="/">Home</v-tab>
                <v-tab>Mis rutinas</v-tab>
                <v-tab>Otro tab</v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
            <div class='right-section' v-if="!userStore.isLoggedIn">
                <v-btn @click="router.push('login')">Iniciar Sesión</v-btn>
                <v-btn @click="router.push('register')" variant="tonal" class="bg-accent text-white" rounded>Registrarse</v-btn>
            </div>
            <div class='right-section' v-else>
                <v-menu transition="slide-y-transition">
                    <template v-slot:activator="{props}">
                        <v-btn v-bind="props">
                            <div class="user">
                                {{user.username}}
                            </div> 
                            <v-avatar class="user">
                                <v-img alt="profile-picture" :src="getProfilePicture()"></v-img>
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="router.push('/profile')">Mi perfil</v-list-item>
                        <v-list-item @click="router.push('/myroutines')">Mis rutinas</v-list-item>
                        <v-list-item @click="router.push('/myexercises')">Mis ejercicios</v-list-item>
                        <v-divider ></v-divider>  
                        <v-list-item @click="logout()" :disabled="logoutLoading" :loading="logoutLoading">Cerrar Sesión</v-list-item>     
                    </v-list>
                    
                </v-menu>
                
            </div>
    </v-app-bar>
</div>
</template>

<script setup>
    import { useAlertStore } from '@/stores/AlertStore';
    import { useUserStore } from '@/stores/UserStore'
    import {useRouter} from 'vue-router'
    import {ref} from 'vue'

    const userStore = useUserStore()
    const alertStore = useAlertStore()
    const router = useRouter()

    const user = await userStore.getCurrentUser()
    
    const logoutLoading = ref(false)
    
    async function logout(){
        logoutLoading.value = true 
        try{
            await userStore.logout()
            router.push('/')
        } catch(e){
            alertStore.sendNotification("Ha ocurrido un error con los servidores. Intentelo de nuevo mas tarde")
        } finally{
            logoutLoading.value = false
        }
        
    }

    function getProfilePicture(){
        if (user.avatarUrl){
           return user.avatarUrl
        }
        return toImageUrl('../../defaultAvatar.jpg')
    }

    function toImageUrl(path){
    return new URL(path, import.meta.url).href
    }


</script>

<style scoped>
    .logo {
        cursor: pointer;
        font-weight: bold;
    }
    .user {
        margin-right: 10px
    }
</style>