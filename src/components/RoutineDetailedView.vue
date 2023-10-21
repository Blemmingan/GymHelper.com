<template>
    <h1>Rutina NOMBRE</h1>
    <v-row>
        <v-col cols="4">
            <h2>Ciclo Calentamiento</h2>
            <ExMiniCard/>
        </v-col>
        <v-col cols="4">
            <h2>Ciclos de Ejercicio</h2>
            <ExMiniCard/>
        </v-col>
        <v-col cols="4">
            <h2>Ciclo de Enfriamiento.</h2>
            <ExMiniCard/>
        </v-col>
    </v-row>
</template>

<script setup>
import ExMiniCard from './ExMiniCard.vue';
</script>