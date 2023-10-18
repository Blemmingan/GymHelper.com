<template>
     <v-col>
                <v-card class="card">
                    <v-row>
                        <v-col>
                            <v-card-item>
                                 <div>
                                     <div class="card-text">
                                       <p>Tiempo Aprox</p>
                                      </div>
                                      <div class="card-text">
                                         <p>NOMBRE</p>
                                      </div>
                                       <div class="card-text">
                                          <p>Descripcion</p>
                                       </div>
                                   </div>
                            </v-card-item>
                        </v-col>
                        <v-col class="buttonCol">
                            <v-container class="buttonCont">
                            <v-btn class="goButton">¡A ENTRENAR!</v-btn>
                            </v-container>
                        </v-col>
                    </v-row>
                    
                        
                </v-card>
            </v-col>
</template>

<style scoped>
    
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