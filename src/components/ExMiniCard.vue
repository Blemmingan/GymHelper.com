<template>
    <v-card  v-if="exercises.length>0" v-for="exercise in exercises">
        <v-card-text>
            <h2>Ejercicio {{ exercise.order }}: {{ exercise.exercise.name }}</h2>
            <h3>Descripción: {{ exercise.exercise.detail }}</h3>
            <h3>Tipo: {{ toSpanish(exercise.exercise.type) }}</h3>
            <h3>Duración: {{ exercise.duration }}</h3>
            <h3 v-if="exercise.exercise.type==='exercise'">Repeticiones: {{ exercise.repetitions }}</h3>
        </v-card-text>          
    </v-card>
    <v-text-field v-else>
        <h3>La rutina no especifica ejercicios</h3>
    </v-text-field>
</template>

<script setup>

import { useRoutineStore } from '@/stores/RoutineStore';
import {ref, computed, defineProps} from 'vue'

const routineStore = useRoutineStore()

const {id} = defineProps(['id'])

const exercises = ref(await getExercises())

function toSpanish(type){
    if (type==='exercise'){
        return 'Ejercicio'
    } else if (type==='rest'){
        return 'Descanso'
    }
}

async function getExercises(){
    const result = await routineStore.getAllCycleExercises(id)
    return result.content.sort(function(a,b){return a.order-b.order})
}
</script>