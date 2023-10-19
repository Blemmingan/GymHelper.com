import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { RoutineApi } from '@/api/routine'
import { ReviewApi } from '@/api/review'
import { CategoryApi} from '@/api/category'

export const useRoutineStore = defineStore('routine', () => { 
  //  estado
  const routines = ref([])

  //  getters
  const findIndex = computed((routine) => {
      return routines.value.findIndex(item => item.id === routine.id)
  })
  
  //  actions
  function push(routine) {
    routines.value.push(routine);
  }

  function replace(index, routine) {
    routines.value[index] = routine;
  }

  function splice(index) {
    routines.value.splice(index, 1);  
  }

  function replaceAll(routines) {
    routines.value = routines;
  }

  async function create(routine) {
    const result = await RoutineApi.addRoutine(routine);
    if (!findIndex(result))
        push(result);
    return result;
  }

  async function modify(routine) {
    const result = await RoutineApi.modifyRoutine(routine);
    const index = findIndex(result);
    if (index >= 0)
        replace(index, result);
    return result;
  }

  async function remove(routine) {
    await RoutineApi.removeRoutine(routine.id);
    const index = findIndex(routine);
    if (index >= 0)
        splice(index);
  }

  async function get(routine) {
    const index = findIndex(routine);
    if (index >= 0)
        return routines.value[index];

    const result = await RoutineApi.getRoutine();
    push(result);
    return result;
  }

  async function getAll(controller) {
    const result = await RoutineApi.getAllRoutines(controller);
    return result;
  }

  async function getAllRoutineCycles(routineId){
    return await RoutineApi.getAllRoutineCycles(routineId)
  }

  async function addRoutineCycle(routineId, routineCycle){
    await RoutineApi.addRoutineCycle(routineId, routineCycle)
  }

  async function getRoutineCycle(routineId, cycleId){
    return await RoutineApi.getRoutineCycle(routineId, cycleId)
  }

  async function modifyRoutineCycle(routineId, cycleId, routineCycle){
    await RoutineApi.modifyRoutineCycle(routineId, cycleId, routineCycle)
  }

  async function removeRoutineCycle(routineId, cycleId){
    await RoutineApi.removeRoutineCycle(routineId, cycleId)
  }

  async function getAllCycleExercises(cycleId){
    return await RoutineApi.getAllCycleExercises(cycleId)
  }

  async function getCycleExercise(cycleId, exerciseId){
    return await RoutineApi.getCycleExercise(cycleId, exerciseId)
  }

  async function addCycleExercise(cycleId, exerciseId, cycleExercise){
    await RoutineApi.addCycleExercise(cycleId, exerciseId, cycleExercise)
  }

  async function modifyCycleExercise(cycleId, exerciseId, cycleExercise){
    await RoutineApi.modifyCycleExercise(cycleId, exerciseId, cycleExercise)
  }

  async function removeCycleExercise(cycleId, exerciseId){
    await RoutineApi.removeCycleExercise(cycleId, exerciseId)
  }
  
  async function getRoutineReviews(routineId){
    return await ReviewApi.getRoutineReviews(routineId)
  }

  async function addRoutineReview(routineId, review){
    await ReviewApi.addRoutineReview(routineId, review)
  }

  async function getAllCategories(){
    return await CategoryApi.getAllCategories()
  }

  async function addCategory(category){
    await CategoryApi.addCategory(category)
  }

  async function retrieveCategory(categoryId){
    return await CategoryApi.retrieveCategory(categoryId)
  }

  async function modifyCategory(categoryId, category){
    await CategoryApi.modifyCategory(categoryId, category)
  }

  async function removeCategory(categoryId){
    await CategoryApi.removeCategory(categoryId)
  }


  return {
    findIndex,
    create,
    modify,
    remove,
    get,
    getAll,
    getAllRoutineCycles,
    addRoutineCycle,
    getRoutineCycle,
    modifyRoutineCycle,
    removeRoutineCycle,
    getAllCycleExercises,
    getCycleExercise,
    addCycleExercise,
    modifyCycleExercise,
    removeCycleExercise,
    getRoutineReviews,
    addRoutineReview,
    getAllCategories,
    addCategory,
    retrieveCategory,
    modifyCategory,
    removeCategory
   }
})
