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
  </div>
  </template>
  

  <script setup>
import { ref, computed} from 'vue'
import { useExerciseStore } from '@/stores/ExerciseStore'
import { useRouter } from 'vue-router'
import { Exercise } from '@/api/exercise.js'
import GenericExerciseCard from '@/components/GenericExerciseCard.vue'
import { useAlertStore } from '@/stores/AlertStore'


const alertStore = useAlertStore()

const router = useRouter()
const exerciseStore = useExerciseStore()

const exercises = ref(await getExercises())
const reload = ref(false)


const onDelete = (id) =>{
  const index = exercises.value.findIndex(e => e.id==id)
  if (index>=0){
    exercises.value.splice(index, 1)
  }
}

async function getExercises(){
    const result = await exerciseStore.getAll()
    return result.content
}



function addExercise(){
    router.push("./createExcercise")
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