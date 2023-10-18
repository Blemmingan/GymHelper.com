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
           <generic-ex></generic-ex>
        </v-row>
        
    </v-container>
            
        
    </div>
    

</template>

<script setup>
import GenericEx from './GenericEx.vue';
</script>

<style scoped>
    .container{
        text-align: center;
    }
    .avatar{
        size: 100px;
        border-radius: 10px;
    }
    .card-text{
        text-align: left;
    }
    .buttonCont{
        text-align: right;
        
        
    }
    .goButton{
        max-height: max-content;
    }
    .card{
        border: 3px solid green;
        border-radius: 25px;
    }
    .buttonCol{
        align-items: right;
    }
</style>