<template>
   <v-container class="container">
      <v-row
        align="start"
        no-gutters>
        <v-col>
        <v-sheet>
            <h1>TUS RUTINAS</h1>
            <generic-routine-card/>
            <generic-routine-card/>
            <h1>TUS EJERCICIOS</h1>
            <v-btn>Nuevo</v-btn>
            <ex-mini-card></ex-mini-card>
          </v-sheet>
        </v-col>
        <v-col>
            <v-btn icon="mdi-plus" @click="goToWarmup()"></v-btn>
            <v-btn icon="mdi-minus"></v-btn>
        </v-col>
        <v-col>
            <v-sheet>
            <h1>RUTINAS POPULARES</h1>
            <generic-routine-card/>
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
import ExMiniCard from './ExMiniCard.vue';
    function goToWarmup(){
        router.push('/warmup')
    }
</script>

<style scoped>
  .container{
    margin-top: 100px;
  }
</style>
