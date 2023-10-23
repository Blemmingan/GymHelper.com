<template>
   <v-container class="dataBox">
      <v-row
        align="start"
        no-gutters
        >
        <v-col cols="5" >
        <h1 class="sheet">Tus Rutinas</h1>
        <v-sheet class="sheet" v-if="myRoutines.length>0">
              <span v-for="routine in myRoutines" :key="routine.id">
              <GenericRoutineCard :routine="routine" noDelete="true"/>
              </span>
        </v-sheet>
        <v-sheet v-else class="d-flex flex-column justify-center text-center">
        <h3 class="text">Aún no has creado ninguna rutina. Cuando las crees, apareceran aqui</h3>
        </v-sheet>
          <span class="d-flex justify-center text-center">
            <v-btn class="mt-2 bg-secondary text-black" @click="router.push('/myRoutines')">Ver Todas</v-btn> 
          </span>
        </v-col>
        <v-col>
        </v-col>
        <v-col cols="6" >
          <v-sheet class="sheet">
            <div class="containerEx">
              <h1>Tus Ejercicios</h1>
              <span v-if="exercises.length > 0" v-for="exercise in exercises">
                  <v-container >
                            <v-card class="card-text">
                              <v-card-title>{{ exercise.name }}</v-card-title>
                                <v-card-text>
                                  {{ exercise.detail }}
                                </v-card-text>
                            </v-card>
                          </v-container>
              </span>
              <p v-else>No tienes ningún ejercicio. Clickea el botón de abajo para crear uno.</p>
              
              <v-btn @click="goToMyExc" class="mt-2 bg-secondary text-black">VER TODOS</v-btn>  
            </div>
        </v-sheet>
            <v-sheet class="otherCol">
            
            </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    
</template>

<script setup>
import {useRouter} from 'vue-router';
import GenericRoutineCard from './GenericRoutineCard.vue';
import { useRoutineStore } from '@/stores/RoutineStore';
import {ref, computed} from 'vue'
import { useExerciseStore } from '@/stores/ExerciseStore';

  const router = useRouter()
  const routineStore = useRoutineStore() 
  const exerciseStore = useExerciseStore()
  const myRoutines = ref(await getMyRoutines())
  const exercises = ref(await getMyExercises())




  async function getMyRoutines(){
    const result = await routineStore.getCurrentUserRoutines()
    if (result.content.length <= 2){
        return result.content
    }
    return result.content.slice(0,5)
  }

  async function getMyExercises(){
    const result = await exerciseStore.getAll()
    if (result.content.length <=7){
      return result.content
    }  
    return result.content.slice(0,7)
  }


    function goToWarmup(){
        router.push('/warmup')
    }
    function goToMyExc(){
      router.push('./MyExercises')
    }
</script>

<style scoped>
  .otherCol{
    background-color: whitesmoke;
    text-align: center;
    margin-top: 10%;
  }
  .sheet{
    text-align: center;
    background-color: whitesmoke;
  }
  .containerEx{
    background-color: whitesmoke;
  }

  .dataBox{
    margin-top: 25px;
    background-color: whitesmoke;
    border: 3px solid #4CAF50;
    border-radius: 25px;
  }
  .text{
    background-color: whitesmoke;
  }

  .card-text{
    border: 3px solid #4CAF50;
    border-radius: 25px;
    background-color: whitesmoke;
  }
</style>
