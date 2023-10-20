<template>
    <v-card>
            <v-row>
            <v-col cols="11">
                <v-card-item>
                    <div class="card-text">
                        <p>Tiempo</p>
                        <p>NOMBRE</p>
                        <p>Desc</p>
                    </div>
                </v-card-item>
            </v-col>
            <v-col class="buttonCol" cols="1"  >
                <v-btn  @click="changeBackgroundColor = !changeBackgroundColor" 
                :style="{
                    backgroundColor: changeBackgroundColor ? 'green' : 'whitesmoke',
                }" :icon="iconPicker()" class="checkbutton" ></v-btn>
            </v-col>
            </v-row>
        </v-card>
</template>

<script setup>
    import {ref} from 'vue'
    var changeBackgroundColor = ref(false)
    function iconPicker(){
        if(changeBackgroundColor.value){
            return 'mdi-check'
        }
        else{
            return 'mdi-minus'
        }
    }
</script>

<style scoped>
    .checkbutton{
        height: 100%;
        width: 100%;
        border-radius: 25px;
        background-color: whitesmoke;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;  
        
    }
</style>