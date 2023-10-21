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
        <v-btn @click="goBack">Volver</v-btn>
        <v-btn>Nuevo Ciclo</v-btn>
        <v-btn @click="next">Ir a enfriamiento</v-btn>
    </div>
</template>

<script setup>
    import ExcerciseSearchBar from './ExcerciseSearchBar.vue';
import PopularExcercisesMiniCard from './PopularExcercisesMiniCard.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
function next(){
    router.push('/cooldown')
}
function goBack(){
    router.push(-1)
}
</script>