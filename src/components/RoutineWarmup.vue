<template>
    <h1>Seleccione ejercicios para la entrada en calor.</h1>
    <v-row align="start" no-gutters>
        <v-sheet>
            <v-col>
            <input type="text" v-model="input" placeholder="Busca uno de tus ejercicios..." />
            <v-card>
                <v-card-item>
                    <p>Nombre Ej.</p>
                </v-card-item>
                <v-card-item>
                    <p>Nombre Ej.</p>
                </v-card-item>
            </v-card>
        </v-col>
        </v-sheet>
        <v-sheet>
            <v-col>
                <h2>Ejercicios populares...</h2>
                <v-card>
                <v-card-item>
                    <p>Nombre Ej.</p>
                </v-card-item>
                <v-card-item>
                    <p>Nombre Ej.</p>
                </v-card-item>
            </v-card>
            </v-col>
        </v-sheet>
        
    </v-row>
    <div>
        <v-btn>
            Volver
        </v-btn>
        <v-btn>
            Finalizar entrada en calor.
        </v-btn>
    </div>
</template>

<script setup>
</script>