<template>
  <v-container class="container">
    <div class="title-container">
      <h1 class="title">Mis Ejercicios</h1>
      <v-btn @click="addExercise()" color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <v-row v-if="excercises.length != 0">
      <v-container v-if="!editing">
        <v-col  v-for="exercise in excercises" :key="exercise.id" cols="12" sm="6" md="4">
        <v-card class="card-text">
          <!-- Image -->
          
          <!-- <v-img :src="getImageUrl(exercise)" height="200"></v-img> -->

          <!-- Title -->
          <v-card-title>{{ `${exercise.name}` }}</v-card-title>

          <!-- Text Content -->
          <v-card-text class="card-text">
            {{ `${exercise.detail}` }}
            {{ `${exercise.type}` }}
          </v-card-text>

          <!-- Pencil Icon for Editing -->
          <v-card-actions>
            <v-icon @click="editExercise(exercise)">mdi-pencil</v-icon>
            <v-icon @click="deleteExercise(exercise)">mdi-delete</v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
      </v-container>
      <v-container v-else>
        <v-card elevation="10" class="infoBox" width="50%">
        <v-card-actions>
            <v-form>
                <h2 class="title">Editar ejercicio</h2>
                <v-text-field v-model="newName" label="Nombre"></v-text-field>
                <v-text-field v-model="newDetail" label="Descripcion"></v-text-field>
                <v-text-field v-model="newType" label="Tipo"></v-text-field>
            </v-form>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions>
            <v-row class="d-flex justify-center text-center">
                <v-btn class="mt-2 bg-secondary text-black" @click="endExerciseUpdate()">
                    Cancelar
                </v-btn>
                <v-btn class="mt-2 bg-secondary text-black" @click="updateExercise()">
                    Guardar cambios
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
      </v-container>
    </v-row>
    
      

    
    <v-row v-else class="error-msg">
      <p>Parece que no tienes ningun ejercicio. Clickea el + para crear uno.</p>
    </v-row> 
  </v-container>
</template>

<script setup>
import { ref, onBeforeMount, computed} from 'vue'
import { useExerciseStore } from '@/stores/ExerciseStore'
import { useRouter } from 'vue-router'
import { Exercise } from '@/api/exercise.js'


const router = useRouter()
const exerciseStore = useExerciseStore()
const ExData = ref(await exerciseStore.getAll())
const excercises = computed(()=>{
    return ExData.value.content
})
var editing = ref(false)
const newName = ref()
const newDetail = ref()
const newType = ref()
var chosenId = ref(0)
const oldName = ref()
const oldDetail = ref()
const oldType = ref()
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
   // router.push({ name: 'editExercise', params: { exercise } })
   editing.value = !editing.value
    chosenId = exercise.id
}

function endExerciseUpdate(){
    newName.value = oldName.value
    newDetail.value = oldDetail.value
    newType.value = oldType.value
}

async function updateExercise(){
    await exerciseStore.modify(chosenId, new Exercise( newName.value,
                                                            newDetail.value,
                                                            newType.value,
                                                            ))
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
.card-text{
  overflow-x: scroll;
}
</style>