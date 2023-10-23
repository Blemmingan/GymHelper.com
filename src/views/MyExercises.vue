<template>
    <div class="title-container">
        <h1 class="title">Mis Ejercicios</h1>
        <v-btn @click="addExercise()" color="primary">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
    <v-divider class="divider"></v-divider>
    <div v-if="!reload">
    <div v-if="exercises.length>0" > 
      <v-row align="center" justify="center">
      <v-col
        v-for="exercise in exercises"
        :key="exercise.id"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-item>
            <GenericExerciseCard :exercise="exercise" @delete="onDelete"></GenericExerciseCard>
          </v-card-item>

        </v-card>
      </v-col>
    </v-row>

       
    </div>
    <div v-else>
        <v-card-text class="d-flex flex-column justify-center text-center">
            <h3>Todavia no tienes ejercicios propios. Cuando los crees, podras verlos aquí</h3>
        </v-card-text>
    </div>
      <v-card-actions class="d-flex justify-center text-center">
      <v-btn v-if="page>0" @click="lastPage()" class="mt-2 bg-secondary text-black">
            Anterior 
        </v-btn>
        <v-btn v-if="!exercisesData.isLastPage" @click="nextPage()" class="mt-2 bg-secondary text-black">
            Siguiente 
        </v-btn>
    </v-card-actions>
  </div>
  </template>
  

  <script setup>
import { ref, computed, defineProps} from 'vue'
import { useExerciseStore } from '@/stores/ExerciseStore'
import { useRouter } from 'vue-router'
import { Exercise } from '@/api/exercise.js'
import GenericExerciseCard from '@/components/GenericExerciseCard.vue'
import { useAlertStore } from '@/stores/AlertStore'

const {page} = defineProps(['page'])

const alertStore = useAlertStore()

const router = useRouter()
const exerciseStore = useExerciseStore()

const exercisesData = ref(await exerciseStore.getAll(`?page=${page}`))
const exercises = computed(()=> {return exercisesData.value.content})
const reload = ref(false)
const key = ref(parseInt(page))

function nextPage(){

    router.push({name: 'myExercises', params: {page : key.value+1}})
    
}

function lastPage(){
    router.push({name: 'myExercises', params: {page : key.value-1}})
    
}

const onDelete = (id) =>{
  const index = exercises.value.findIndex(e => e.id==id)
  if (index>=0){
    exercises.value.splice(index, 1)
  }
}





function addExercise(){
    router.push("/createExcercise")
}

</script>

<style scoped>


.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-weight: bold;
}

.mx-auto{
  border: 3px solid #4CAF50;
  border-radius: 25px;
  background-color: whitesmoke;
}
.error-msg{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
}

.divider{
  margin-bottom: 20px;
}

</style>