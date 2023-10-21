<template>
    <div class="container">
        <h2>Introduzca el Nombre de la Rutina</h2>
    <v-sheet class="mx-auto">
        <v-form validate-on="submit">
            <v-text-field
            v-model="routineName"
            :rules="routineNameRules"
            label="Rutina Rutinera..."
            required 
            />
            <v-btn class="mt-2 bg-secondary text-black" block type="submit">Crear</v-btn>
        </v-form>
        
        
    </v-sheet>
    
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
const routineName = ref('')
const routineNameRules = [
    value => Boolean(value) || 'Debe ingresar un nombre de rutina',
    value => value.length <= 50 || 'El nombre de la rutina no puede superar los 50 carácteres',
    value => value.length >= 3 || 'El nombre de la rutina debe tener mas de 2 caracteres'
] 
</script>

<style scoped>
.container{
        border: 3px solid green;
        border-radius: 25px;
        background-color: whitesmoke;
        
        margin-bottom: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        padding: 50px;
    }
.mx-auto{
    background-color: whitesmoke;
}
</style>