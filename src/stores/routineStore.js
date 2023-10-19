import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { RoutineApi } from '@/api/routine'

export const useroutineStore = defineStore('routine', () => { 
  //  estado
  const items = ref([])

  //  getters
  const findIndex = computed((routine) => {
      return items.value.findIndex(item => item.id === routine.id)
  })
  
  //  actions
  function push(routine) {
    items.value.push(routine);
  }

  function replace(index, routine) {
    items.value[index] = routine;
  }

  function splice(index) {
    items.value.splice(index, 1);  
  }

  function replaceAll(routines) {
    items.value = routines;
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
        return items.value[index];

    const result = await RoutineApi.getRoutine();
    push(result);
    return result;
  }

  async function getAll(controller) {
    const result = await RoutineApi.getAllRoutines(controller);
    return result;
  }
  


  return {
    findIndex,
    create,
    modify,
    remove,
    get,
    getAll
   }
})
