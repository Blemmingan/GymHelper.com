<template>
     <v-col>
                <v-card class="card">
                    <v-row>
                        <v-col cols="7">
                            <v-card-item>
                                 <div>
                                     <div class="card-text">
                                       <p>Tiempo</p>
                                       <p>NOMBRE</p>
                                       <p>Desc</p>
                                      </div>
                                   </div>
                            </v-card-item>
                        </v-col>
                        <v-col class="buttonCol" cols="5"  >
                            <v-btn class="goButton" icon="mdi-play"></v-btn>
                        </v-col>
                    </v-row>
                    
                        
                </v-card>
            </v-col>
</template>

<style scoped>
    
    .card-text{
        text-align: left;
    }
    .goButton{
        height: 100%;
        width: 100%;
        border-radius: 25px;
        background-color: green;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;        
    }
    .card{
        border: 3px solid green;
        border-radius: 25px;
    }
    .buttonCol{
        margin: 0%;
        padding: 0%;
        border: 6px solid black;
    }
</style>