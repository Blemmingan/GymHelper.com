<template>
    <h2>Introduzca el Nombre de la Rutina</h2>
    <v-sheet>
        <v-text-field
        v-model="routineName"
        :rules="routineNameRules"
        :counter="20"
        label="Rutina Rutinera..."
        required 
    />
    </v-sheet>
    <v-btn>Crear</v-btn>
</template>

<script setup>
</script>