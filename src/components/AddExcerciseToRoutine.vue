<template>
    <h1>NOMBRE EJERCICIO</h1>
    <div>
        <img src="src\assets\logo.png" alt="exLogo">
    </div>
    <div>
        Descripcion
    </div>
    <div>
        Recomendamos N reps/N minutos.
    </div>
    <v-sheet>
        <v-text-field
        v-model="times"
        :rules="timeRules"
        :counter="3"
        label="Cantidad..."
        required 
    />
    </v-sheet>
    <div>
        <v-btn>
            Volver
        </v-btn>
        <v-btn>
            Agregar al calentamiento.
        </v-btn>
    </div>
</template>

<script setup>
</script>