<template>
    <div class="excerciseCard">
        <div class="excerciseImage">
            <img :src='props.image' alt="aLogo">
        </div>
        <div class="excerciseDetails">
            <span class="excerciseName"> 
                {{ name }}
            </span>
        </div>
        <v-btn class="addButton" @click="confirm()">Agregar</v-btn>
        <p>Cantidad total: {{ totalNum }}</p>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const props = defineProps(['image', 'name'])
    const confirmMsg = "Agregado correctamente!"
    const failMsg = "Hay demasiados ejercicios en tu rutina..."
    const limit = ref(10)
    const totalNum = ref(0)
    function confirm(){
        if(totalNum.value < limit.value){
            alert(confirmMsg)
            totalNum.value++;
        }
        else{
            alert(failMsg)
        }
    }
</script>
<!--el color dicta que se use el primario!-->
<style scoped>
    .excerciseName{
        color: rgb(var(--v-theme-primary)); 
       /* background-color: rgb(var(--v-theme-secondary));*/
       background-color: white;
    }
    .addButton{
        color: blue;
        
    }
    .excerciseCard{
        border: 2px solid green;
        border-radius: 20px;
        text-align: center;
        width: 300px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        
    }
</style>