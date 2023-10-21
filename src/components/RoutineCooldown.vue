<template>
    <div>
        <h1>Seleccione ejercicios para el ciclo de enfriamiento.</h1>
        <v-row align="start" no-gutters>
            <excercise-search-bar></excercise-search-bar>
            <popular-excercises-mini-card></popular-excercises-mini-card>
        </v-row>
    </div>
    <div>
        <v-btn @click="goBack">Volver</v-btn>
        <v-btn @click="next">Finalizar Rutina</v-btn>
        
    </div>
</template>

<script setup>
     import ExcerciseSearchBar from './ExcerciseSearchBar.vue';
import PopularExcercisesMiniCard from './PopularExcercisesMiniCard.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
function next(){
    router.push('/nameRoutine')
}
function goBack(){
    router.push(-1)
}
</script>