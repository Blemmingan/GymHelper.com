<template>
    <v-col>
           <v-card class="card">
                   <v-row>
                       <v-col cols="9">
                           <v-card-item>
                                <div>
                                    <div class="card-text">
                                      <h2>{{ routine.name }}</h2>
                                      <p>{{ routine.detail }}</p>
                                     </div>
                                  </div>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                        <v-btn class="mt-2 bg-secondary text-black" @click="goToView()">Mas información</v-btn>
                                        <v-btn v-if="!noDelete" class="mt-2 bg-accent text-black" @click="deleteRoutine"><v-icon>mdi-delete</v-icon>Borrar</v-btn>
                                   </v-card-actions>
                           </v-card-item>
                       </v-col>
                       <v-col class="buttonCol" cols="3"  >
                           <v-btn class="goButton" icon="mdi-play" @click="startRoutine"></v-btn>
                       </v-col>
                       
                   </v-row>
                   
                       
               </v-card>
           </v-col>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {defineProps, defineEmits} from 'vue';
import { useAlertStore } from '@/stores/AlertStore';
import { useRoutineStore } from '@/stores/RoutineStore';

const {routine, noDelete} = defineProps(['routine', 'noDelete'])
const emit = defineEmits(['delete'])

const alertStore = useAlertStore()
const routineStore = useRoutineStore()
const router = useRouter()


async function goToView(){
    await router.push({name: 'routine', params: {id : routine.id}})
}
function startRoutine(){
    alertStore.sendNotification("No implementado!")
}

async function deleteRoutine(){
    try{
        await routineStore.remove(routine.id)
        emit('delete', routine.id)
    } catch(e){
        console.log(e)
        alertStore.sendNotification("Ha ocurrido un error borrando la rutina. Intente de nuevo más tarde")
    }
}
</script>

<style scoped>
    
    .card-text{
        text-align: left;
    }
    .goButton{
        height: 100%;
        width: 100%;
        border-radius: 25px;
        background-color: #4CAF50;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;        
    }
    .card{
        border: 3px solid #4CAF50;
        border-radius: 25px;
    }
    .buttonCol{
        margin: 0%;
        padding: 0%;
        border: 6px solid black;
    }
</style>