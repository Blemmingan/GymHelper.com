<template>
    <div>
        <v-icon icon="$vuetify"></v-icon>
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
        <v-row
        align="center"
        no-gutters
        style="height: 150px;">
            <v-col>
                <p>Tu rutina mejor puntuada: </p>
            </v-col>
            <v-col>
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
            </v-col>
        </v-row>
        
    </v-container>
            
        
    </div>
    

</template>

<script setup></script>