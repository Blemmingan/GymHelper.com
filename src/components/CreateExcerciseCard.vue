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
                        <v-radio-group
                         v-model="choice"
                         inline 
                         required>
                            <v-radio
                              label="Tiempo"
                              value="Tiempo"
                              v-model="timeChosen"
                              @click="chooseTime()"
                            ></v-radio>
                             <v-radio
                              label="Repeticiones"
                              value="Repeticiones"
                              v-model="repsChosen"
                              @click="chooseReps()"
                             ></v-radio>
                         </v-radio-group>
                    </div>
                    <div>
                        <v-text-field v-if="timeChosen && !repsChosen" label="Minutos..."></v-text-field>
                        <v-text-field v-else-if="repsChosen && !timeChosen" label="Repeticiones..."></v-text-field>
                        <v-text-field v-else label="Seleccione una modalidad" disabled=""></v-text-field>
                    </div>
                <v-btn type="submit" class="mt-2 bg-secondary text-black">Crear</v-btn>
        </v-form>
        </v-sheet>

        
    </div>
</template>

<script setup>
import { ref } from 'vue';

const excerciseName = ref('')
const excerciseDescription = ref('')
const choice = ref(false)
const timeChosen = ref(false)
const repsChosen = ref(false)

const ExNameRules = [
    value => Boolean(value) || 'Debe ingresar un nombre de ejercicio',
    value => value.length <= 50 || 'El nombre de ejercicio no puede superar los 50 carácteres'
]       
const ExDescriptionRules = [
        value => Boolean(value) || 'Debe ingresar una descripcion.',
        value => value.length <= 50 || 'La descripción no puede superar los 50 caracteres',
        value => value.length >= 2 || 'La descripción debe superar los 2 caracteres'
]

function chooseTime(){
   timeChosen.value = true
   repsChosen.value = false
    
}

function chooseReps(){
    timeChosen.value = false
    repsChosen.value = true
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