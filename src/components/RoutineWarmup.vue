<template>
    <h1>Seleccione ejercicios para la entrada en calor.</h1>
    <v-row align="start" no-gutters>
        <excercise-search-bar></excercise-search-bar>
        <popular-excercises-mini-card></popular-excercises-mini-card>
        
    </v-row>
    <div>
        <v-btn>
            Volver
        </v-btn>
        <v-btn>
            Finalizar entrada en calor.
        </v-btn>
    </div>
</template>

<script setup>
import ExcerciseSearchBar from './ExcerciseSearchBar.vue';
import PopularExcercisesMiniCard from './PopularExcercisesMiniCard.vue'
</script>