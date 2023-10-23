<template>
   <v-container class="container">
      <v-row
        align="start"
        no-gutters>
        <v-col cols="5">
        <v-sheet class="sheet">
            <h1>TUS RUTINAS</h1>
           <!-- <generic-routine-card/>
            <generic-routine-card/>-->
            <div class="containerEx">
              <h1>TUS EJERCICIOS</h1>
              <v-btn @click="goToMyExc">VER</v-btn>  
            </div>
          </v-sheet>
        </v-col>
        <v-col>
            <v-btn icon="mdi-plus" @click="goToWarmup()"></v-btn>
        </v-col>
        <v-col cols="6">
            <v-sheet class="sheet">
            <h1>RUTINAS POPULARES</h1>
          <!---->  <generic-routine-card/>
            <generic-routine-card/>
            <img src="src\assets\logo.png" alt="logo">
            </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import router from '@/router';
import GenericRoutineCard from './GenericRoutineCard.vue';
    function goToWarmup(){
        router.push('/warmup')
    }
    function goToMyExc(){
      router.push('./MyExercises')
    }
</script>

<style scoped>
  .container{
    margin-top: 100px;
    border: 3px solid #4CAF50;
    border-radius: 25px;
    background-color: whitesmoke;
  }
  .sheet{
    text-align: center;
    background-color: whitesmoke;
  }
  .containerEx{
    margin-top: 10%;
  }
</style>
