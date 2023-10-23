<template>
<div>
    <v-card-item>
        <div>
            <div class="card-text">
                    <h2>{{exercise.name}}</h2>
                     <p>Descripción: {{exercise.detail}}</p>
                     <p>Tipo: {{toSpanish(exercise.type)}}</p>
           </div>
         </div>
    </v-card-item>

    <v-card-actions >
        <v-btn class="mt-2 bg-secondary text-black" @click="goToEdit()"><v-icon>mdi-pencil</v-icon>Editar</v-btn>
        <v-btn class="mt-2 bg-accent text-black" @click="deleteExercise()"><v-icon>mdi-delete</v-icon>Borrar</v-btn>
    </v-card-actions>
</div>

</template>

<script setup>
import { useAlertStore } from '@/stores/AlertStore';
import { useExerciseStore } from '@/stores/ExerciseStore';
import {defineProps, defineEmits} from 'vue'
import { useRouter } from 'vue-router';



const {exercise} = defineProps(['exercise'])
const emit = defineEmits(['delete'])

const alertStore = useAlertStore()
const exerciseStore = useExerciseStore()
const router = useRouter()

async function deleteExercise(){
    try{
        await exerciseStore.remove(exercise.id)
        emit('delete', exercise.id)
    } catch(e){
        alertStore.sendNotification("Ha ocurrido un error borrando el ejericio. Intente de nuevo más tarde")
    }
}

function goToEdit(){
    router.push({name:'editExercise', params:{id : exercise.id}})
}

function toSpanish(type){
    if (type==='exercise'){
        return 'Ejercicio'
    } else if (type==='rest'){
        return 'Descanso'
    }
}
</script>

<style scoped>
    
    .card-text{
        text-align: left;
    }

    div{
        min-width: 500px;
        min-height: 90px;
    }


</style>