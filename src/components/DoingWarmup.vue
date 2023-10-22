<template>
    <div class="container">
        <h1 class="title">Ciclo de calentamiento.</h1>
        <ExInRoutine></ExInRoutine> <!--Por cada ejercicio en el ciclo...-->
        <div class="ButtonsContainer">
            <v-row class="ButtonsContainer">
                <v-col cols="2">
                    <v-btn @click="abort" class="abortButton">ABORTAR</v-btn>
                </v-col>
                <v-col cols="8"></v-col>
                <v-col cols="2">
                    <v-btn @click="next" class="nextButton">Siguiente</v-btn>
                </v-col>
            </v-row>
            
            
        </div>
    </div>
    
</template>

<script setup>
    import ExInRoutine from './ExInRoutine.vue'
    import { useRouter } from 'vue-router';
     const router = useRouter()
     function next(){
        router.push('/routineCore')
     }
     function abort(){
        router.push('/home')
     }
</script>

<style scoped>
    .container{
        text-align: center;
        align-items: center;
        width: 50%;
        border: 3px solid green;
        background-color: whitesmoke;
        margin-left: 25%;
    }
    .ButtonsContainer{
        text-align: left;
        margin: 5px;
    }
    .abortButton{
        color: white;
        background-color: red;
    }
    .nextButton{
       color: white;
       background-color: green;
    }

</style>