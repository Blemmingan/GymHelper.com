<template>
    <v-card elevation="10" class="infoBox">
        <v-card-actions>
            <v-form>
                <h2>Editar ejercicio</h2>
                <v-text-field v-model="newName" label="Nombre">{{ route.params.exercise.name }}</v-text-field>
                <v-text-field v-model="newDetail" label="Apellido">{{ route.params.exercise.detail }}</v-text-field>
                <v-text-field v-model="newType" label="Género">{{ route.params.exercise.type }}</v-text-field>
            </v-form>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions>
            <v-row class="d-flex justify-center text-center">
                <v-btn class="mt-2 bg-secondary text-black" @click="endExerciseUpdate()">
                    Cancelar
                </v-btn>
                <v-btn class="mt-2 bg-secondary text-black" @click="updateExercise()">
                    Guardar cambios
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
    
 
</template>


<script setup>
import {ref} from 'vue';
import { useRoute } from 'vue-router'
import { useExerciseStore } from '@/stores/ExerciseStore';
import { Exercise } from '@/api/exercise.js'


const route = useRoute()
const exerciseStore = useExerciseStore()

const newName = ref(route.params.exercise.name)
const newDetail = ref(route.params.exercise.detail)
const newType = ref(route.params.exercise.type)

const user = ref('')


function endExerciseUpdate(){
    newName.value = route.params.exercise.name
    newDetail.value = route.params.exercise.detail
    newType.value = route.params.exercise.type
}

async function updateExercise(){
    await exerciseStore.modify(route.params.exercise.id, new Exercise( newName.value,
                                                            newDetail.value,
                                                            newType.value,
                                                            ))
    user.value = await userStore.getCurrentUser()
    endExerciseUpdate()
}

</script>

<style scoped>

.infoBox{
        border: 3px solid #4CAF50;
        border-radius: 25px;
        background-color: whitesmoke;
        
        
        display: block;
        margin-left: auto;
        margin-right: auto ;
        

    }
</style>