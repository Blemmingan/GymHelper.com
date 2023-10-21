<template>
<v-main>
    <v-card elevation="10" class="formBox">
        <h1 class="mb-2">¡Ya casi!</h1>
        <p>Para poder ingresar a GymHelper debes ingresar el código que enviamos a su correo.</p>
        <v-divider></v-divider>
        <v-form validate-on="input" v-model="validForm">
            <v-text-field v-model="code" :rules="codeRules" label="Código de verificación"></v-text-field>
        </v-form>
        <v-card-actions class="d-flex justify-center text-center">
        <v-btn 
            :disabled="!validForm"
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
    </v-card>
</v-main>
</template>

<script setup>
import { ref } from 'vue';
import {useUserStore} from '@/stores/UserStore'

const userStore = useUserStore()

const code = ref(null)
const validForm = ref(false)

const codeRules = [
    value => !!value || "Ingrese el código de verificación"
]

async function submit(){
    try{
    await userStore.verifyEmail(code.value)
    } catch (e) {
        //TODO
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