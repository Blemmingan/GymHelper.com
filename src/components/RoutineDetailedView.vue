<template>
    <div class="container">
        <h1>Rutina NOMBRE</h1>
        <v-row class="rowCont">
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
    <v-row>
        <v-col>
            <v-btn @click="back">
                Volver
            </v-btn>
        </v-col>
        <v-col></v-col>
        <v-col>
            <v-btn class="deleteButton">Borrar</v-btn>
        </v-col>
    </v-row>
    
    </div>
    
</template>

<script setup>
import ExMiniCard from './ExMiniCard.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
function back(){
    router.push('/');
}
</script>

<style scoped>
    .container{
        background-color: whitesmoke;
        border: 3px solid green;
        border-radius: 25px;
        text-align: center;
        padding: 1%;
    }
    .rowCont{
        margin-bottom: 1%;
    }
    .deleteButton{
        color: white;
        background-color: red;
    }
</style>