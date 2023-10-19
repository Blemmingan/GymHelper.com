import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ExerciseApi } from '@/api/exercise'

export const useExerciseStore = defineStore('exercise', () => { 
  //  estado
  const items = ref([])

  //  getters
  const findIndex = computed((exercise) => {
      return items.value.findIndex(item => item.id === exercise.id)
  })
  
  //  actions
  function push(exercise) {
    items.value.push(exercise);
  }

  function replace(index, exercise) {
    items.value[index] = exercise;
  }

  function splice(index) {
    items.value.splice(index, 1);  
  }

  function replaceAll(exercises) {
    items.value = exercises;
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

  async function delete(exercise) {
    await ExerciseApi.deleteExercise(exercise.id);
    const index = findIndex(exercise);
    if (index >= 0)
        splice(index);
  }

  async function get(exercise) {
    const index = findIndex(exercise);
    if (index >= 0)
        return items.value[index];

    const result = await ExerciseApi.getExercise();
    push(result);
    return result;
  }

  async function getAll(controller) {
    const result = await ExerciseApi.getAllExercises(controller);
    return result;
  }
  

  return {
      findIndex,
      create,
      modify,
      delete,
      get,
      getAll
   }
})
