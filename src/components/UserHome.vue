<template>
   <v-container>
      <v-row
        align="start"
        no-gutters>
        <v-col>
        <v-sheet>
            <h1>TUS RUTINAS</h1>
            <generic-routine-card/>
            <generic-routine-card/>
          </v-sheet>
        </v-col>
        <v-col>
            <v-btn icon="mdi-plus" @click="goToWarmup()"></v-btn>
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
    function goToWarmup(){
        router.push('/warmup')
    }
</script>
