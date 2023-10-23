<template>
  <v-container class="container">
    <div class="title-container">
      <h1 class="title">Mis Ejercicios</h1>
      <v-btn @click="addExercise()" color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <v-row v-if="items.length != 0">
      <v-col  v-for="exercise in items" :key="exercise.id" cols="12" sm="6" md="4">
        <v-card>
          <!-- Image -->
          
          <!-- <v-img :src="getImageUrl(exercise)" height="200"></v-img> -->

          <!-- Title -->
          <v-card-title>{{ `${exercise.name}` }}</v-card-title>

          <!-- Text Content -->
          <v-card-text>
            {{ `${exercise.details}` }}
            {{ `${exercise.type}` }}
          </v-card-text>

          <!-- Pencil Icon for Editing -->
          <v-card-actions>
            <v-icon @click="editExercise(exercise)">mdi-pencil</v-icon>
            <v-icon @click="deleteExercise(exercise)">mdi-delete</v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else class="error-msg">
      <p>Parece que no tienes ningun ejercicio. Clickea el + para crear uno.</p>
    </v-row> 
  </v-container>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useExerciseStore } from '@/stores/ExerciseStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const exerciseStore = useExerciseStore()
var items = ref()
exerciseStore.getAll()
items = exerciseStore.items
console.log(items)

function getImageUrl(exercise){
    return exerciseStore.getImage(exercise.id).url
}

function addExercise(){
    router.push("./createExcercise")
}

function deleteExercise(exercise){
    exerciseStore.remove(exercise.id)
    const image = exerciseStore.getImage(exercise.id)
    exerciseStore.removeImage(exercise.id, image.id)
}

function editExercise(exercise){
    router.push({ name: 'edit', params: { exercise } })
}

// onBeforeMount(() => {
//     items = exerciseStore.getAll()
// })

</script>

<style scoped>
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.container{
  border: 3px solid green;
  border-radius: 25px;
  background-color: whitesmoke;
}
.error-msg{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
}

</style>