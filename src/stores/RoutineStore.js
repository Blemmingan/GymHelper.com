import { defineStore } from "pinia"
import {UserApi} from '@/api/user.js'
import {RoutineApi} from '@/api/routine.js'
import {RoutineCycleApi} from '@/api/routineCycle.js'
import { CycleExerciseApi } from "@/api/cycleExercise.js"
import { FavouriteApi } from "@/api/favourite.js"
import { ReviewApi } from "@/api/review.js"


export const useRoutineStore = defineStore('routine', ()=>{

    async function getAll(){
        return await RoutineApi.getAll()
    }

    async function getCurrentUserRoutines(page = '?page=0'){
        return await UserApi.getRoutines(page)
    }

    async function getUserRoutines(userId){
        return await UserApi.getUserRoutines(userId)
    }

    async function get(id){
        return await RoutineApi.get(id)
    }

    async function add(routine){
        return await RoutineApi.post(routine)
    }

    async function modify(routine){
        return await RoutineApi.put(routine)
    }

    async function remove(routineId){
        await RoutineApi.delete(routineId)
    }

    async function getAllCycles(routineId){
        return await RoutineCycleApi.getAll(routineId)
    }

    async function getCycle(routineId, cycleId){
        return await RoutineCycleApi.get(routineId, cycleId)
    }

    async function addCycle(routineId, routineCycle){
        return await RoutineCycleApi.post(routineId, routineCycle)
    }
    
    async function modifyCycle(routineId, cycleId, routineCycle){
        return await RoutineCycleApi.put(routineId, cycleId, routineCycle)
    }

    async function removeCycle(routineId, cycleId){
        await RoutineCycleApi.delete(routineId, cycleId)
    }

    async function getAllCycleExercises(cycleId){
        return await CycleExerciseApi.getAll(cycleId)
    }

    async function getCycleExercise(cycleId, exerciseId){
        return await CycleExerciseApi.get(cycleId, exerciseId)
    }

    async function addCycleExercise(cycleId, exerciseId, cycleExercise){
        return await CycleExerciseApi.post(cycleId,exerciseId,cycleExercise)
    }

    async function modifyCycleExercise(cycleId, exerciseId, cycleExercise){
        return await CycleExerciseApi.put(cycleId, exerciseId, cycleExercise)
    }

    async function removeCycleExercise(cycleId, exerciseId){
        await CycleExerciseApi.delete(cycleId, exerciseId)
    }

    async function getUserFavouriteRoutines(){
        return await FavouriteApi.getAll()
    }

    async function addAsFavourite(routineId){
        return await FavouriteApi.post(routineId)
    }

    async function removeAsFavourite(routineId){
        return await FavouriteApi.delete(routineId)
    }

    async function getRoutineReviews(routineId){
        return await ReviewApi.getAll()
    }

    async function addRoutineReview(routineId, review){
        return await ReviewApi.post(routineId, review)
    }


    return {
        getAll,
        getCurrentUserRoutines,
        getUserRoutines,
        get,
        add,
        modify,
        remove,

        getAllCycles,
        getCycle,
        addCycle,
        modifyCycle,
        removeCycle,

        getAllCycleExercises,
        getCycleExercise,
        addCycleExercise,
        modifyCycleExercise,
        removeCycleExercise,

        getUserFavouriteRoutines,
        addAsFavourite,
        removeAsFavourite,

        getRoutineReviews,
        addRoutineReview
    }
})