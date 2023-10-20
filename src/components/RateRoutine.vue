<template>
    <h1>Puntua la Rutina</h1>
    <v-rating
      v-model="rating"
      color="orange-lighten-1"
      active-color="blue"
    ></v-rating>
    <div>
        <v-btn @click="returnHome()">Enviar</v-btn>

    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {useRouter} from 'vue-router'
    const router = useRouter()
    
    var rating = ref(0)
    function returnHome(){
       router.push("/")
    }
</script>