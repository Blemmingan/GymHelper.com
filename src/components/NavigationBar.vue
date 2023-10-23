<template>
<div>
    <v-app-bar color="primary" app>
            <v-app-bar-title class="logo" @click="router.push('/')">
                <v-icon>mdi-weight-lifter</v-icon>GymHelper.com
            </v-app-bar-title> 
            <v-tabs v-if="userStore.isLoggedIn">
                <v-spacer></v-spacer>
                <v-tab to="/">Inicio</v-tab>
                <v-tab to="/explore" @click=notImplementedError()>Explorar rutinas</v-tab>
                <v-tab to="/create" @click="notImplementedError()">Crear</v-tab>

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
                                <v-img alt="profile-picture" :src="profilePicture"></v-img> 
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="router.push('profile')">Mi perfil</v-list-item>
                        <v-list-item @click="router.push({name:'myExercises', params: {page: 0}})">Mis ejercicios</v-list-item>
                        <v-list-item @click="router.push({name: 'myRoutines', params: {page : 0}})">Mis rutinas</v-list-item>
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
    import { useBackgroundStore } from '@/stores/BackgroundStore';
    import {ref, onMounted} from 'vue'

    const userStore = useUserStore()
    const alertStore = useAlertStore()
    const backgroundStore = useBackgroundStore()
    const router = useRouter()
    const logoutLoading = ref(false)

    const user= ref(await userStore.getCurrentUser())
    const profilePicture = ref('');

    onMounted(async () => {
        profilePicture.value = await getProfilePicture();
    });
    
    async function logout(){
        logoutLoading.value = true 
        try{
            await userStore.logout()
            backgroundStore.setBackground('../../background.jpg')
            router.push('/')
        } catch(e){
            alertStore.sendNotification("Ha ocurrido un error con los servidores. Intentelo de nuevo mas tarde")
        } finally{
            logoutLoading.value = false
        }
        
    }

    async function getProfilePicture(){
        const user = await userStore.getCurrentUser()
        if (user.avatarUrl){
            return user.avatarUrl
        }
        return toImageUrl('../../defaultAvatar.jpg')
    }

    function toImageUrl(path){
    return new URL(path, import.meta.url).href
    }

    function notImplementedError(){
        alertStore.sendNotification('No implementado!')
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