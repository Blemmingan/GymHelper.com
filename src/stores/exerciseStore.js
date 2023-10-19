import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ExerciseApi } from '@/api/exercise'

export const useExerciseStore = defineStore('exercise', () => { 
  //  estado
  const exercises = ref([])

  //  getters
  const findIndex = computed((exercise) => {
      return exercises.value.findIndex(item => item.id === exercise.id)
  })
  
  //  actions
  function push(exercise) {
    exercises.value.push(exercise);
  }

  function replace(index, exercise) {
    exercises.value[index] = exercise;
  }

  function splice(index) {
    exercises.value.splice(index, 1);  
  }

  function replaceAll(exercises) {
    exercises.value = exercises;
  }

  async function create(exercise) {
    const result = await ExerciseApi.addExercise(exercise);
    if (!findIndex(result))
        push(result);
    return result;
  }

  async function modify(exercise) {
    const result = await ExerciseApi.modifyExercise(exercise);
    const index = findIndex(result);
    if (index >= 0)
        replace(index, result);
    return result;
  }

  async function remove(exercise) {
    await ExerciseApi.deleteExercise(exercise.id);
    const index = findIndex(exercise);
    if (index >= 0)
        splice(index);
  }

  async function get(exercise) {
    const index = findIndex(exercise);
    if (index >= 0)
        return exercises.value[index];

    const result = await ExerciseApi.getExercise();
    push(result);
    return result;
  }

  async function getAll(controller) {
    const result = await ExerciseApi.getAllExercises(controller);
    return result;
  }

  async function getAllExerciseImages(exerciseId){
    return await ExerciseApi.getAllExerciseImages(exerciseId)
  }

  async function addExerciseImage(exerciseId, exerciseImage){
    await ExerciseApi.addExerciseImage(exerciseId, exerciseImage)
  }

  async function getExerciseImage(exerciseId, imageId){
    return await ExerciseApi.getExerciseImage(exerciseId, imageId)
  }

  async function modifyExerciseImage(exerciseId, imageId, exerciseImage){
    await ExerciseApi.modifyExerciseImage(exerciseId, imageId, exerciseImage)
  }

  async function deleteExerciseImage(exerciseId, imageId){
    await ExerciseApi.deleteExerciseImage(exerciseId, imageId)
  }

  async function getAllExerciseVideos(exerciseId){
    return await ExerciseApi.getAllExerciseVideos(exerciseId)
  }

  async function addExerciseVideo(exerciseId, exerciseVideo){
    await ExerciseApi.addExerciseVideo(exerciseId, exerciseVideo)
  }

  async function getExerciseVideo(exerciseId, videoId){
    return await ExerciseApi.getExerciseVideo(exerciseId, videoId)
  }

  async function modifyExerciseVideo(exerciseId, videoId, exerciseVideo){
    await ExerciseApi.modifyExercise(exerciseId, videoId, exerciseVideo)
  }

  async function deleteExerciseVideo(exerciseId, videoId){
    await ExerciseApi.deleteExerciseVideo(exerciseId, videoId)
  }
  

  return {
      findIndex,
      create,
      modify,
      remove,
      get,
      getAll,
      getAllExerciseImages,
      addExerciseImage,
      getExerciseImage,
      modifyExerciseImage,
      deleteExerciseImage,
      getAllExerciseVideos,
      addExerciseVideo,
      getExerciseVideo,
      modifyExerciseVideo,
      deleteExerciseVideo
   }
})
