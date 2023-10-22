<template>
    <div class="container">
        <h1>Puntua la Rutina</h1>
        <v-rating
        v-model="rating"
        color="orange-lighten-1"
        active-color="blue"
        ></v-rating>
        <div>
            <v-btn @click="returnHome()">Enviar</v-btn>
        </div>
    </div>
    
</template>

<script setup>
    import {ref} from 'vue'
    import {useRouter} from 'vue-router'
    const router = useRouter()
    
    var rating = ref(0)
    function returnHome(){
        if(rating.value != 0){
            router.push('/')
        }
    }
</script>

<style scoped>
 .container{
        text-align: center;
        align-items: center;
        width: 30%;
        border: 3px solid green;
        background-color: whitesmoke;
        margin-left: 35%;
        padding: 1%;
    }
</style>