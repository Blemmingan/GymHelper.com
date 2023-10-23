<template>
    <div :key="key">
        <div class="title-container">
        <h1 class="title">Rutinas Publicas</h1>
        <v-btn @click="addRoutine()" color="primary">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        </div>
        <v-divider></v-divider>
            <div v-if="routines.length>0" v-for="routine in routines" :key="routine.id">
                <GenericRoutineCard :routine="routine"  noDelete="true"></GenericRoutineCard>
            </div>
            <div v-else>
                <v-card-text class="d-flex flex-column justify-center text-center">
                        <h3>No hay rutinas publicas disponibles</h3>
                </v-card-text>
            </div>
        <v-card-actions class="d-flex justify-center text-center">
        <v-btn v-if="page>0" @click="lastPage()" class="mt-2 bg-secondary text-black">
            Anterior 
        </v-btn>
        <v-btn v-if="!routinesData.isLastPage" @click="nextPage()" class="mt-2 bg-secondary text-black">
            Siguiente 
        </v-btn>
        </v-card-actions>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
import { ref, computed} from 'vue'
import { useRoutineStore } from '@/stores/RoutineStore'
import { useAlertStore } from '@/stores/AlertStore';
import GenericRoutineCard from '@/components/GenericRoutineCard.vue';

const {page} = defineProps(['page'])

const router = useRouter()
const routineStore = useRoutineStore()
const alertStore = useAlertStore()
const key = ref(parseInt(page))

const routinesData = ref(await routineStore.getAll(`?page=${page}`))

const routines = computed(()=>{
    return routinesData.value.content
})


function addRoutine(){
    alertStore.sendNotification("No implementado!")
}

function nextPage(){
    router.push({name: 'explore', params: {page : key.value+1}})
    
}

function lastPage(){
    router.push({name: 'explore', params: {page : key.value-1}})
}
</script>

<style scoped>

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}



    .card-text{
        text-align: left;
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