<template>
<v-main>
    <v-card elevation="10" class="formBox" height="60%">
        <span v-if="!done">

            <h1 class="mb-2">¡Ya casi!</h1>
            <p>Para poder ingresar a GymHelper debes ingresar el código que enviamos a su correo.</p>
        </span>
        <span v-else>
            <h1 class="mb-2">¡Listo!</h1>
            <p>Tu cuenta ha sido creada con exito. Inicia sesión para comenzar a usar GymHelper</p>
        </span>
        <v-divider></v-divider>
        <span v-if="!done">
        <v-form validate-on="input" v-model="validForm">
            <v-text-field v-if="!userStore.email" v-model="email" :rules="emailRules" label="Correo electrónico"></v-text-field>
            <v-text-field v-model="code" :rules="codeRules" label="Código de verificación" @keypress="isAlphaNumerical($event)"></v-text-field>
        </v-form>
        <v-card-actions class="d-flex justify-center text-center">
        <v-btn 
            :disabled="!validForm || processing"
            :loading="processing"
            @click="submit()"
            type="submit" 
            block 
            class="mt-2 bg-secondary text-black">      
            Enviar
        </v-btn>
        </v-card-actions>
        <v-card-text class="d-flex flex-column justify-center text-center">
            ¿No recibiste el código? <routerLink to="/resend">Reenviar</routerLink>
        </v-card-text>
        </span>
        <span v-else>
        <v-card-actions>
        <v-btn 
            to="/login"
            block 
            class="mt-2 bg-secondary text-black">      
            Iniciar Sesión
        </v-btn>
        </v-card-actions>
        </span>
    </v-card>
</v-main>
</template>

<script setup>
import { ref, computed } from 'vue';
import {useUserStore} from '@/stores/UserStore'
import router from '@/router';
import { useAlertStore } from '@/stores/AlertStore';

const userStore = useUserStore()
const alertStore = useAlertStore()

const code = ref(null)
const validForm = ref(false)
const verified = ref(false)
const processing = ref(false)
const email = ref(null)


const done = computed(()=>{
    return verified.value
})

const emailRules = [
    value => !!value || 'Debe ingresar un correo electrónico',
    value => value.length <= 100 || 'La dirección de correo electrónico no puede superar los 100 carácteres',
    value => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value) || 'Ingrese una dirección de correo electrónico válida'
]

const codeRules = [
    value => !!value || "Ingrese el código de verificación",
    value => value.length == 6 || "El código debe ser de 6 carácteres" 
]

function isAlphaNumerical(e){
    const char = String.fromCharCode(e.keyCode)
    if( /^[A-Za-z0-9]/.test(char)) return true
    else e.preventDefault()
}

async function submit(){
    processing.value = true
    try{
        if(userStore.email){
            await userStore.verifyEmail(code.value)
        } else {
            await userStore.verifyEmail(code.value, email.value)
        }
    verified.value = true
    } catch (e) {
        if (e.code==8){
            alertStore.sendNotification('El codigo ingresado es incorrecto. Intentelo de nuevo')
        } else {
            alertStore.sendNotification("Ha ocurrido un error con los servidores. Intentelo de nuevo mas tarde")
        }
    } finally{
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
        overflow-y: scroll;
    }

</style>