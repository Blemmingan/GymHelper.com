<template>
    <div>
        <v-sheet elevation="10" class="formBox" height="70%">
            <h1 class="title">Modificar un ejercicio</h1>
            <v-form class="form" validate-on="input" v-model="validForm">         
                    <div>
                        <v-text-field
                        v-model="newExcerciseName"
                        :rules="ExNameRules"
                        label="Nombre"
                        
                        />
                    </div>
                    
                    <div>
                        <v-text-field
                        v-model="newExcerciseDescription"
                        :rules="ExDescriptionRules"
                        label="Descripcion"
                            />
                    </div> 
                    
                    <div>
                        <v-radio-group
                        v-model="newExcerciseType"
                        label="Tipo"
                            >
                            <v-radio label="ejercicio" value="exercise"></v-radio>
                            <v-radio label="descanso" value="rest"></v-radio>
                        </v-radio-group>
                    </div> 
                <v-btn @click="cancel()" class="mt-2 bg-secondary text-black" :disabled="loading">Cancelar</v-btn>    
                <v-btn @click="saveExercise()" class="mt-2 bg-secondary text-black" :disabled="!validForm || loading" :loading="loading">Guardar Cambios</v-btn>
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

const {id} = defineProps(['id'])

const exerciseStore = useExerciseStore()
const exercise = ref(await exerciseStore.get(id))


const alertStore = useAlertStore()
const router = useRouter()

const newExcerciseName = ref(exercise.value.name)
const newExcerciseDescription = ref(exercise.value.detail)
const newExcerciseType = ref(exercise.value.type)

const validForm = ref(false)
const loading = ref(false)

const ExNameRules = [
    value => Boolean(value) || 'Debe ingresar un nombre de ejercicio',
    value => value.length <= 50 || 'El nombre del ejercicio no puede superar los 100 carácteres'
]   

const ExDescriptionRules = [
        value => Boolean(value) || 'Debe ingresar una descripcion.',
        value => value.length <= 200 || 'La descripción no puede superar los 200 carácteres',
]

function cancel(){
    router.go(-1)
}


async function saveExercise(){
    loading.value = true
    try{
        await exerciseStore.modify(id, new Exercise(newExcerciseName.value, newExcerciseDescription.value, newExcerciseType.value)) 
        router.push('/myExercises/0')
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