<template>
    <h1>Ciclo de Enfiramiento</h1>
    <ExInRoutine></ExInRoutine> <!--Por cada ejercicio en el ciclo...-->
    <div>
        <v-btn @click="abort">ABORTAR</v-btn>
        <v-btn @click="next">Finalizar</v-btn>
    </div>
</template>


<script setup>
    import ExInRoutine from './ExInRoutine.vue'
    import { useRouter } from 'vue-router';
     const router = useRouter()
     function next(){
        router.push('/rate')
     }
     function abort(){
        router.push('/home')
     }
</script>

<style scoped>
    
</style>