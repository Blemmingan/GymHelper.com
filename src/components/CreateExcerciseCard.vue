<template>
    <div>
        <v-sheet width="600" class="mx-auto">
            <h1 class="title">Crear un nuevo ejercicio.</h1>
            <v-form class="form" validate-on="submit">         
                    <div>
                        <v-text-field
                        v-model="excerciseName"
                        :rules="ExNameRules"
                        label="Nombre: "
                        required 
                        
                        />
                    </div>
                    
                    <div>
                        <v-text-field
                        v-model="excerciseDescription"
                        :rules="ExDescriptionRules"
                        label="Descripcion: "
                        required
                            />
                    </div> 
                    
                    <div>
                        <v-text-field
                        v-model="excerciseType"
                        :rules="ExTypeRules"
                        label="Tipo: "
                        required
                            />
                    </div> 
                <v-btn @click="saveExercise()" class="mt-2 bg-secondary text-black">Crear</v-btn>
        </v-form>
        </v-sheet>

        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useExerciseStore } from '@/stores/ExerciseStore';
import { Exercise } from '@/api/exercise';

const excerciseName = ref('')
const excerciseDescription = ref('')
const excerciseType = ref('')
const exerciseStore = useExerciseStore()

const ExNameRules = [
    value => Boolean(value) || 'Debe ingresar un nombre de ejercicio',
    value => value.length <= 50 || 'El nombre de ejercicio no puede superar los 50 carácteres'
]   

const ExDescriptionRules = [
        value => Boolean(value) || 'Debe ingresar una descripcion.',
        value => value.length <= 50 || 'La descripción no puede superar los 50 caracteres',
        value => value.length >= 2 || 'La descripción debe superar los 2 caracteres'
]

const ExTypeRules = [
    value => Boolean(value) || 'Debe ingresar un nombre de ejercicio',
    value => value.length <= 50 || 'El nombre de ejercicio no puede superar los 50 carácteres'
]   

function saveExercise(){
    exerciseStore.add(new Exercise(
        excerciseName.value,
        excerciseDescription.value,
        excerciseType.value
    ))
}

</script>

<style scoped>
    .title{
        text-align: center;
        margin: 10px;
    }
    div{
        align-items: center;
        text-align: center;
    }
    .mx-auto{
        border: 3px solid green;
        border-radius: 25px;
        background-color: whitesmoke;
        margin-top: auto;
        margin-bottom: auto;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .form{
        margin: 10px;
        align-items: center;
    }
    .mt-2{
        width: 50%;
        text-align: center;
        background-color: whitesmoke;
        
    }
</style>