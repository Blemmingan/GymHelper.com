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
        <v-btn  @click="dialogue = true" class="mt-2 bg-accent text-black">
                    <v-icon>mdi-delete</v-icon>
                    Borrar</v-btn>
        <v-dialog elevation="20" v-model="dialogue" persistent>
          <v-card title="¿Seguro?" class="infoBox">
            <v-card-text>
              Esta acción no se puede revertir!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mt-2 bg-secondary text-black"
                text="Cancelar"
                @click="dialogue = false"
              ></v-btn>
              <v-btn class="mt-2 bg-accent text-black"
                text="Borrar"
                @click="deleteExercise()"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-card-actions>
</div>

</template>

<script setup>
import { useAlertStore } from '@/stores/AlertStore';
import { useExerciseStore } from '@/stores/ExerciseStore';
import {defineProps, ref, defineEmits} from 'vue'
import { useRouter } from 'vue-router';



const {exercise} = defineProps(['exercise'])
const emit = defineEmits(['delete'])

const alertStore = useAlertStore()
const exerciseStore = useExerciseStore()
const router = useRouter()

const dialogue = ref(false)

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



    .infoBox{
        border: 3px solid #4CAF50;
        background-color: whitesmoke;
        
        
        display: block;
        margin-left: auto;
        margin-right: auto ;
    }

</style>