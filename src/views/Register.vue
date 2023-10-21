<template>
    <v-main>
            <v-card elevation="10" class="formBox">
                <h1 class="mb-2">Registrarse en GymHelper</h1>
                <v-divider></v-divider>
                <v-form validate-on="input" v-model="validForm">
                    <v-text-field v-model="email" :rules="emailRules" label="Correo electrónico"></v-text-field>
                    <v-text-field v-model="username" :rules="usernameRules" label="Nombre de usuario"></v-text-field>
                    <v-text-field 
                        v-model="password" 
                        :rules="passwordRules" 
                        :append-inner-icon="hidePassword? 'mdi-eye':'mdi-eye-off'"
                        @click:append-inner="hidePassword=!hidePassword"
                        :type="hidePassword?'password':'text'"
                        label="Contraseña">
                    </v-text-field>
                    <v-text-field 
                        v-model="confirmPassword" 
                        :rules="confirmPasswordRules" 
                        :append-inner-icon="hideConfirmPassword? 'mdi-eye':'mdi-eye-off'"
                        @click:append-inner="hideConfirmPassword=!hideConfirmPassword"
                        :type="hideConfirmPassword?'password':'text'"
                        label="Confirmar contraseña">
                    </v-text-field>
                    
                </v-form>
                <v-card-actions class="d-flex justify-center">
                    <v-btn 
                        :disabled="!validForm || processing"
                        :loading="processing"
                        @click="submit()"
                        type="submit" 
                        block 
                        class="mt-2 bg-secondary text-black">
                    Crear cuenta
                    </v-btn>
                </v-card-actions>
                <v-card-text class="d-flex flex-column justify-center text-center">
                    <div>¿Ya tienes cuenta? <RouterLink to="/login">Inicia sesión</RouterLink></div>
                    <div>¿Quieres validar una cuenta? <RouterLink to="/validate">Ingresa el código</RouterLink></div>
                </v-card-text>
            </v-card>
    </v-main>
</template>

<script setup>
import { RegistrationData } from '@/api/user';
import { useAlertStore } from '@/stores/AlertStore';
import { useUserStore } from '@/stores/UserStore'
import {ref} from 'vue'
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const alertStore = useAlertStore()
const router = useRouter()

const password = ref(null)
const confirmPassword = ref(null)
const email = ref(null)
const username = ref(null)
const validForm = ref(false)
const processing = ref(false)

const emailRules = [
    value => !!value || 'Debe ingresar un correo electrónico',
    value => value.length <= 100 || 'La dirección de correo electrónico no puede superar los 100 carácteres',
    value => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value) || 'Ingrese una dirección de correo electrónico válida'
]

const usernameRules = [
    value => !!value || 'Debe ingresar un nombre de usuario',
    value => value.length <= 50 || 'El nombre de usuario no puede superar los 50 carácteres'
]

const passwordRules = [
    value => !!value || 'Debe ingresar una contraseña',
    value => value.length <= 50 || 'La contraseña no puede superar los 50 carácteres',
    
] 

const confirmPasswordRules = [
    () => password.value === confirmPassword.value || 'Las contraseñas no coinciden',
]

const hidePassword = ref(true)
const hideConfirmPassword = ref(true)




async function submit(){
    processing.value = true
    const registrationData = new RegistrationData(username.value, password.value, email.value)
    try {
        await userStore.register(registrationData)
        router.push('/validate')
    } catch (e) {
        if (e.code===1){
            alertStore.sendNotification("Los datos introducidos son invalidos. Intentelo de nuevo")
        } else if (e.code==2){
            if (e.details[0].includes('email')){
                alertStore.sendNotification('Ya existe una cuenta asociada al email ingresado. Intentelo de nuevo')
            } else {
                alertStore.sendNotification('Ya existe una cuenta con el nombre de usuario ingresado. Intentelo de nuevo')
            }
    
        } else {
            alertStore.sendNotification("Ha ocurrido un error con los servidores. Intentelo de nuevo mas tarde")
        }
    } finally{
        processing.value = false
    }
    
}


//para registrarse solo se pide email, username y password. Los otros datos se editan despues en el perfil
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
        border: 3px solid green;
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