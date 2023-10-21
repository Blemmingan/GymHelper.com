<template>
    <h1>Seleccione ejercicios para la entrada en calor.</h1>
    <v-row align="start" no-gutters class="container">
        <excercise-search-bar></excercise-search-bar>
        <popular-excercises-mini-card></popular-excercises-mini-card>
        
    </v-row>
    <div>
        <v-btn @click="goBack">
            Volver
        </v-btn>
        <v-btn @click="next">
            Finalizar entrada en calor.
        </v-btn>
    </div>
</template>

<script setup>
import ExcerciseSearchBar from './ExcerciseSearchBar.vue';
import PopularExcercisesMiniCard from './PopularExcercisesMiniCard.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
function next(){
    router.push('/core')
}
function goBack(){
    router.push(-1)
}
</script>

<style scoped>
.container{
    text-align: center;
    align-items: center;
    
}
</style>