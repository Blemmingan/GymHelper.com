<template>
    <div>
        <v-sheet elevation="10" class="formBox" height="70%">
            <h1 class="title">Crear un nuevo ejercicio</h1>
            <v-form class="form" validate-on="input" v-model="validForm">         
                    <div>
                        <v-text-field
                        v-model="excerciseName"
                        :rules="ExNameRules"
                        label="Nombre"
                        required
                        />
                    </div>
                    
                    <div>
                        <v-text-field
                        v-model="excerciseDescription"
                        :rules="ExDescriptionRules"
                        label="Descripcion"
                        required
                            />
                    </div> 
                    
                    <div>
                        <v-radio-group
                        v-model="excerciseType"
                        label="Tipo"
                        :rules = "radioRules"
                        required
                            >
                            <v-radio label="Ejercicio" value="exercise" v-model="exValue"></v-radio>
                            <v-radio label="Descanso" value="rest" v-model="restValue"></v-radio>
                        </v-radio-group>
                    </div> 
                <v-card-actions class="d-flex justify-center">
                <v-btn @click="cancel()" class="mt-2 bg-secondary text-black" :disabled="loading">Cancelar</v-btn>    
                <v-btn @click="saveExercise()" class="mt-2 bg-secondary text-black" :disabled="!validForm || loading" :loading="loading">Crear</v-btn>
                </v-card-actions>
        </v-form>
        </v-sheet>

        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useExerciseStore } from '@/stores/ExerciseStore';
import { Exercise } from '@/api/exercise';
import {useRouter} from 'vue-router'
import { useAlertStore } from '@/stores/AlertStore';

const alertStore = useAlertStore()
const router = useRouter()
const excerciseName = ref('')
const excerciseDescription = ref('')
const excerciseType = ref('')
const exerciseStore = useExerciseStore()
const validForm = ref(false)
const loading = ref(false)
const restValue = ref(false)
const exValue = ref(false)

const radioRules = [
    value => Boolean(value) || 'Debe ingresar uno.'
]

const ExNameRules = [
    value => Boolean(value) || 'Debe ingresar un nombre de ejercicio',
    value => value.length <= 50 || 'El nombre del ejercicio no puede superar los 100 carácteres'
]   

const ExDescriptionRules = [
        value => Boolean(value) || 'Debe ingresar una descripcion.',
        value => value.length <= 200 || 'La descripción no puede superar los 200 carácteres',
]


async function saveExercise(){
    loading.value = true
    try{
        await exerciseStore.add(new Exercise(excerciseName.value, excerciseDescription.value, excerciseType.value)) 
        router.go(-1)
    } catch (e){
        if (e.code===2){
            alertStore.sendNotification('Ya creó un ejercicio con ese nombre previamente. Intente con otro')
        } else{
            alertStore.sendNotification('Ha ocurrido un error con los servidores. Intente de nuevo más tarde')
        }
    } finally{
        loading.value = false
    }
    
}

function cancel(){
    router.go(-1)
}

</script>

<style scoped>
    .title{
        text-align: center;
        margin: 10px;
    }
    div{
        align-items: center;
        text-align: center;
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
        overflow-y: scroll;
    }
    .form{
        margin: 10px;
        align-items: center;
    }
    .mt-2{
        width: 50%;
        text-align: center;
        background-color: whitesmoke;
        
    }
</style>