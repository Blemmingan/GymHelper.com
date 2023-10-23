<template>
   <v-container class="container">
      <v-row
        align="start"
        no-gutters>
        <v-col cols="5">
        <h1 class="sheet">TUS RUTINAS</h1>
        <v-sheet class="sheet" v-if="myRoutines.length>0">
              <span v-for="routine in myRoutines" :key="routine.id">
              <GenericRoutineCard :routine="routine" noDelete="true"/>
              </span>
        </v-sheet>
        <v-sheet v-else class="d-flex flex-column justify-center text-center">
        <h3>Aún no has creado ninguna rutina. Cuando las crees, apareceran aqui</h3>
        </v-sheet>
          <span class="d-flex justify-center text-center">
            <v-btn class="mt-2 bg-secondary text-black" @click="router.push('/myRoutines')">Ver Todas</v-btn> 
          </span>
        <v-sheet class="sheet">
            <div class="containerEx">
              <h1>TUS EJERCICIOS</h1>
              <v-btn @click="goToMyExc">VER</v-btn>  
            </div>
        </v-sheet>
          <v-row>

          </v-row>
        </v-col>
        <v-col>
        </v-col>
        <v-col cols="6">
            <v-sheet class="sheet">
            <h1>RUTINAS POPULARES</h1>
            <img src="src\assets\logo.png" alt="logo">
            </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import {useRouter} from 'vue-router';
import GenericRoutineCard from './GenericRoutineCard.vue';
import { useRoutineStore } from '@/stores/RoutineStore';
import {ref} from 'vue'

  const router = useRouter()
  const routineStore = useRoutineStore()
  const myRoutines = ref(await getMyRoutines())

  async function getMyRoutines(){
    const result = await routineStore.getCurrentUserRoutines()
    if (result.content.length <= 5){
        return result.content
    }
    return result.content.splice(5)
  }


    function goToWarmup(){
        router.push('/warmup')
    }
    function goToMyExc(){
      router.push('./MyExercises')
    }
</script>

<style scoped>
  .container{
    margin-top: 25px;

  }
  .sheet{
    text-align: center;

  }
  .containerEx{
    margin-top: 10%;
  }
</style>
