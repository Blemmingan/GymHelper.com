<template>
    <div class="container">
        <h1>Seleccione ejercicios para la entrada en calor.</h1>
        <v-row no-gutters class="cards">
            <excercise-search-bar></excercise-search-bar>
            <popular-excercises-mini-card></popular-excercises-mini-card>
        </v-row>
        <v-row class="buttonsCont">
            <v-col cols="2">
                <v-btn @click="goBack">
                Volver
                </v-btn>
            </v-col>
            <v-col cols="5"></v-col>
            <v-col cols="5">
                <v-btn @click="next">
                Finalizar entrada en calor.
                </v-btn>
            </v-col>
        </v-row>   
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
    background-color: whitesmoke;
    border: 3px solid green;
    border-radius: 25px;
    width: 50%;
    margin-left: 25%;
    padding: 1%;
}
.cards{
    margin-left: 25%;
    margin-top: 1%;
    margin-bottom: 1%;
}
</style>