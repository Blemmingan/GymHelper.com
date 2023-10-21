<template>
    <h1>Ciclos de ejercitacion.</h1>
    <ExInRoutine></ExInRoutine>
    <div>
        <v-btn @click="abort">ABORTAR</v-btn>
        <v-btn @click="next">Siguiente ciclo</v-btn>
    </div>
</template>

<script setup>
     import ExInRoutine from './ExInRoutine.vue'
     import { useRouter } from 'vue-router';
     const router = useRouter()
     function next(){
        router.push('/routineCooldown')
     }
     function abort(){
        router.push('/home')
     }
</script>