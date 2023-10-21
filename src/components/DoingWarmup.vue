<template>
    <h1>Ciclo de calentamiento.</h1>
    <ExInRoutine></ExInRoutine> <!--Por cada ejercicio en el ciclo...-->
    <div>
        <v-btn @click="abort">ABORTAR</v-btn>
        <v-btn @click="next">Siguiente</v-btn>
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
    
</style>