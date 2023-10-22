<template>
    <v-main>
        <v-card elevation="10" class="formBox">
            <v-btn @click="router.push('/validate')" icon="mdi-arrow-left" class="ma-2 d-flex justify-left" color="secondary"/>
            <h1 class="mb-2">Reenviar código</h1>
            <p>Ingrese el correo con el que se registró. Le reenviaremos el código de verificación.</p>
            <v-divider></v-divider>
            <v-form validate-on="input" v-model="validForm">
                <v-text-field v-model="email" :rules="emailRules" label="Correo electrónico"></v-text-field>
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
        </v-card>
    </v-main>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {ref, computed} from 'vue'
import { useUserStore } from '@/stores/UserStore';
import { useAlertStore } from '@/stores/AlertStore';

const router = useRouter()
const userStore = useUserStore()
const alertStore = useAlertStore()


const email = ref(null)
const validForm = ref(false)
const processing = ref(false)

const emailRules = [
    value => !!value || 'Debe ingresar un correo electrónico',
    value => value.length <= 100 || 'La dirección de correo electrónico no puede superar los 100 carácteres',
    value => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value) || 'Ingrese una dirección de correo electrónico válida'
]

async function submit(){
    processing.value = true
    try {
        await userStore.resendVerificationEmail(email.value)
        router.push('/validate')
    } catch(e){
        if (e.code==3){
            alertStore.sendNotification("No se intentó crear una cuenta con esta dirección de correo. Intentelo de nuevo")
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