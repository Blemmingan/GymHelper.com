<template>
  <v-container>
    <div class="title-container">
      <h1 class="title">Mis Ejercicios</h1>
      <v-btn @click="addExercise()" color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <v-row>
      <v-col v-for="exercise in exercises" :key="exercise.name" cols="12" sm="6" md="4">
        <v-card>
          <!-- Image -->
          <v-img :src="getImageUrl(exercise)" height="200"></v-img>

          <!-- Title -->
          <v-card-title>{{ exercise.name }}</v-card-title>

          <!-- Text Content -->
          <v-card-text>
            {{ exercise.detail }}
            {{ exercise.type }}
          </v-card-text>

          <!-- Pencil Icon for Editing -->
          <v-card-actions>
            <v-icon @click="editExercise(exercise)">mdi-pencil</v-icon>
            <v-icon @click="deleteExercise(exercise)">mdi-delete</v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useExerciseStore } from '@/stores/ExerciseStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const exerciseStore = useExerciseStore()
const exercises = ref(exerciseStore.getAll())

function getImageUrl(exercise){
    return exerciseStore.getImage(exercise.id).url
}

function addExercise(){
    router.push("createExercise")
}

function deleteExercise(exercise){
    exerciseStore.remove(exercise.id)
    const image = exerciseStore.getImage(exercise.id)
    exerciseStore.removeImage(exercise.id, image.id)
}

function editExercise(exercise){
    router.push({ name: 'edit', params: { exercise } })
}

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

</style>