<template>
    <div class="container">
        <h1>NOMBRE EJERCICIO</h1>
        <div>
            Descripcion
        </div>
        <v-sheet class="field">
            <v-text-field
            v-model="times"
            :rules="timeRules"
            label="Cantidad/Minutos"
            required 
        />
        </v-sheet>
        <div>
            <v-row>
                <v-col>
                    <v-btn>
                        Volver
                    </v-btn>
                </v-col>
                <v-col></v-col>
                <v-col>
                    <v-btn>
                        Agregar
                    </v-btn>
                </v-col>
            </v-row>
            
            
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
const times = ref()
const timeRules = [
    value => Boolean(value) || 'Debe ingresar un valor',
    value => value.length <= 3 || 'Sobreexigirte es muy peligroso...'
]
</script>

<style scoped>
.container{
    text-align: center;
    background-color: whitesmoke;
    border: 3px solid green;
    border-radius: 25px;
    width: 50%;
    margin-left: 25%;
}

.field{
    margin-top: 1%;
    margin-bottom: 1%;
    background-color: whitesmoke;
}
</style>