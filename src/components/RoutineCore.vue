<template>
    <div>
        <h1>Seleccione ejercicios para los ciclos.</h1>
        <h2>Al finalizar un ciclo, cree otro con el boton NUEVO CICLO.</h2>
        <v-row align="start" no-gutters>
            <excercise-search-bar></excercise-search-bar>
            <popular-excercises-mini-card></popular-excercises-mini-card>
        </v-row>
    </div>
    <div>
        <v-btn>Volver</v-btn>
        <v-btn>Nuevo Ciclo</v-btn>
        <v-btn>Ir a enfriamiento</v-btn>
    </div>
</template>

<script setup>
    import ExcerciseSearchBar from './ExcerciseSearchBar.vue';
import PopularExcercisesMiniCard from './PopularExcercisesMiniCard.vue'
</script>