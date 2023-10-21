<template>
<div>
    <v-app-bar color="primary" app>
            
            <v-btn icon="mdi-weight-lifter"></v-btn>
          
            <v-app-bar-title class="logo" @click="router.push('/')">GymHelper.com</v-app-bar-title> 
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
                        <v-btn v-bind="props">logged </v-btn> <!--Aca quiero que salga el username + su foto de perfil-->
                    </template>
                    <v-btn>Perfil</v-btn>
                    <v-btn>Mis rutinas</v-btn>
                    <v-btn>Mis ejercicios</v-btn>
                    <v-divider thickness="1px"></v-divider>
                    <v-btn @click="logout()">Cerrar Sesión</v-btn>
                </v-menu>
                
            </div>
    </v-app-bar>
</div>
</template>

<script setup>
    import { useUserStore } from '@/stores/UserStore'
    import {useRouter} from 'vue-router'

    const userStore = useUserStore()
    const router = useRouter()

    
    async function logout(){
        await userStore.logout()
    }
</script>

<style scoped>
    .logo {
        cursor: pointer;
    }

    .right-section {
        margin-right: 10px;
    }

</style>