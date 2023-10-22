<template>
    <v-main>
                <v-card elevation="10" class="formBox">
                    <h1 class="mb-2">Iniciar sesión en GymHelper</h1>
                    <v-divider></v-divider>
                    <v-form validate-on="input" v-model="validForm" >
                        <v-text-field v-model="username" :rules="usernameRules" label="Nombre de usuario"></v-text-field>
                        <v-text-field 
                            v-model="password" 
                            :rules="passwordRules" 
                            :append-inner-icon="hidePassword? 'mdi-eye':'mdi-eye-off'"
                            @click:append-inner="hidePassword=!hidePassword"
                            :type="hidePassword?'password':'text'"
                            label="Contraseña">
                        </v-text-field>
                        <v-checkbox v-model="rememberMe" class="d-flex justify-left" label="Recordarme"/>
                    </v-form>
                    <v-card-actions class="d-flex justify-center text-center">
                        <v-btn 
                            :disabled="!validForm || processing"
                            :loading="processing"
                            @click="submit()"
                            type="submit" 
                            block 
                            class="mt-2 bg-secondary text-black">
                            
                        Ingresar
                        </v-btn>
                    </v-card-actions>
                    <v-card-text class="d-flex flex-column justify-center text-center">
                        ¿No tienes cuenta? <RouterLink to="/register">Regístrate</RouterLink>
                    </v-card-text>
                </v-card>
</v-main>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { Credentials } from '@/api/user';
import { useRoute, useRouter } from 'vue-router';
import { useAlertStore } from '@/stores/AlertStore';
import { useBackgroundStore } from '@/stores/BackgroundStore';


const userStore = useUserStore()
const alertStore = useAlertStore()
const backgroundStore = useBackgroundStore()

const router = useRouter()
const route = useRoute()

const username = ref(null)
const password = ref(null)
const rememberMe = ref(false)
const hidePassword = ref(true)
const validForm = ref(false)
const processing = ref(false)

const usernameRules = [
    value => Boolean(value) || 'Debe ingresar un nombre de usuario',
    value => value.length <= 50 || 'El nombre de usuario no puede superar los 50 carácteres'
]

const passwordRules = [
    value => Boolean(value) || 'Debe ingresar una contraseña',
    value => value.length <= 50 || 'La contraseña no puede superar los 50 carácteres'
] 



async function submit(){
    processing.value = true
    const credentials = new Credentials(username.value, password.value)
    try{
        await userStore.login(credentials, rememberMe.value)
        backgroundStore.setBackground(null)
        const redirectURL = route.query.redirect || '/'
        router.push(redirectURL)

    } catch (e){
        if (e.code==4){
            alertStore.sendNotification("Usuario o contraseña incorrectos. Intentelo de nuevo")
        } else {
            alertStore.sendNotification("Ha ocurrido un error con los servidores. Intentelo de nuevo mas tarde")
        }

    } finally {
        processing.value = false
    }
    
}
</script>

<style scoped>
    div{
        margin: 20px;
        align-items: center;
        text-align: center;
    }
    .mt-2{
        width: 50%;
        text-align: center;
        background-color: whitesmoke;

    }
    .formBox{
        border: 3px solid #4CAF50;
        border-radius: 25px;
        background-color: whitesmoke;
        margin-top: auto;
        margin-bottom: auto;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 40%;
    }

</style>