<template>
   <v-container>
      <v-row
        align="start"
        no-gutters>
        <v-col>
        <v-sheet>
            <h1>TUS RUTINAS</h1>
            <v-card prepend-icon="mdi-home">
                    <v-card-item>
                     <div>
                      <div class="text-overline mb-1">
                        Tiempo Aprox
                    </div>
                    <div class="text-h6 mb-1">
                        NOMBRE
                     </div>
                     <div class="text-caption">Description</div>
                     </div>
                     
                     </v-card-item>
                </v-card>
                <v-card prepend-icon="mdi-home">
                    <v-card-item>
                     <div>
                      <div class="text-overline mb-1">
                        Tiempo Aprox
                    </div>
                    <div class="text-h6 mb-1">
                        NOMBRE
                     </div>
                     <div class="text-caption">Description</div>
                     </div>
                     
                     </v-card-item>
                </v-card>
          </v-sheet>
        </v-col>
        <v-col>
            <v-btn icon="mdi-plus" @click="goToWarmup()"></v-btn>
        </v-col>
        <v-col>
            <v-sheet>
            <h1>RUTINAS POPULARES</h1>
            <v-card prepend-icon="mdi-home">
                    <v-card-item>
                     <div>
                      <div class="text-overline mb-1">
                        Tiempo Aprox
                    </div>
                    <div class="text-h6 mb-1">
                        NOMBRE
                     </div>
                     <div class="text-caption">Description</div>
                     </div>
                     
                     </v-card-item>
                </v-card>
                <v-card prepend-icon="mdi-home">
                    <v-card-item>
                     <div>
                      <div class="text-overline mb-1">
                        Tiempo Aprox
                    </div>
                    <div class="text-h6 mb-1">
                        NOMBRE
                     </div>
                     <div class="text-caption">Description</div>
                     </div>
                     
                     </v-card-item>
                </v-card>
                <img src="src\assets\logo.png" alt="logo">
            </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import router from '@/router';

    function goToWarmup(){
        router.push('/warmup')
    }
</script>
