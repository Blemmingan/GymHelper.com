<template>
    <div class="container">
        <v-icon icon="$vuetify" class="avatar"></v-icon>
        <h1>NOMBRE DE USUARIO</h1>
        <h2>EMAIL DE USUARIO</h2>
        
        <v-container>
        <v-row
        align="center"
        no-gutters
        style="height: 150px;"
        >
        <v-col>
            <p>Tienes N rutinas.</p>
        </v-col>
        <v-col>
            <v-btn>Cambiar Clave</v-btn>
        </v-col>
        <v-col>
            <p>Tu puntaje promedio es n,m</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
        <v-row>
            <v-col>
                <p>Tu rutina mejor puntuada: </p>
            </v-col>
           <generic-routine-card/>
        </v-row>
        
    </v-container>
            
        
    </div>
    <div class="container"> 
        <v-btn class="mt-2 bg-secondary text-black">ELIMINAR CUENTA</v-btn>
    </div>

</template>

<script setup>
import GenericRoutineCard from './GenericRoutineCard.vue';
</script>

<style scoped>
    .container{
        text-align: center;
        margin-top: 100px;
    }
    .avatar{
        size: 100px;
        border-radius: 10px;
    }

 
</style>