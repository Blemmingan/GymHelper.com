import {Api} from '@api/api.js'

export {RoutineApi, Routine, RoutineCycle, CycleExercise}

class RoutineApi{
    static getUrl(slug){
        return `${Api.baseUrl}/routines${slug ? `/${slug}`:''}`
    }

    //Routines

    static async getAllRoutines(){
        return await Api.get(RoutineApi.getUrl(), false)
    }

    static async addRoutine(routine){
        return await Api.post(RoutineApi.getUrl(), true, routine)
    }

    static async getRoutine(routineId){
        return await Api.get(RoutineApi.getUrl(routineId), true)
    }

    static async modifyRoutine(routineId, routine){
        return await Api.put(RoutineApi.getUrl(routineId), true, routine)
    }

    static async removeRoutine(routineId){
        return await Api.delete(RoutineApi.getUrl(routineId), true)
    }

    //Routines Cycles

    static getCyclesUrl(routineId, slug){
        return `${RoutineApi.getUrl(routineId)}/cycles${slug ? `/${slug}`:''}`
    }


    static async getAllRoutineCycles(routineId){
        return await Api.get(RoutineApi.getCyclesUrl(routineId), false)
    }

    static async addRoutineCycle(routineId, routineCycle){
        return await Api.post(RoutineApi.getCyclesUrl(routineId), true, routineCycle)
    }

    static async getRoutineCycle(routineId, cycleId){
        return await Api.get(RoutineApi.getCyclesUrl(routineId, cycleId), true)
    }

    static async modifyRoutineCycle(routineId, cycleId, routineCycle){
        return await Api.put(RoutineApi.getCyclesUrl(routineId, cycleId), true, routineCycle)
    }

    static async removeRoutineCycle(routineId, cycleId){
        return await Api.delete(RoutineApi.getCyclesUrl(routineId, cycleId), true)
    }

    //Cycles Exercises

    static getExercisesUrl(cycleId, slug){
        return `${Api.baseUrl}/cycles/${cycleId}/exercises${slug ? `/${slug}`:''}`
    }

    static async getAllCycleExercises(cycleId){
        return await Api.get(RoutineApi.getExercisesUrl(cycleId), false)
    }

    static async getCycleExercise(cycleId, exerciseId){
        return await Api.get(RoutineApi.getExercisesUrl(cycleId, exerciseId), true)
    }

    static async addCycleExercise(cycleId, exerciseId, cycleExercise){
        return await Api.post(RoutineApi.getExercisesUrl(cycleId, exerciseId), true, cycleExercise)
    }

    static async modifyCycleExercise(cycleId, exerciseId, cycleExercise){
        return await Api.put(RoutineApi.getExercisesUrl(cycleId,exerciseId), true, cycleExercise)
    }

    static async removeCycleExercise(cycleId, exerciseId){
        return await Api.delete(RoutineApi.getExercisesUrl(cycleId, exerciseId), true)
    }
}

class Routine{
    constructor(name, detail, isPublic, difficulty, category, metadata){
        this.name = name
        this.detail = detail
        this.isPublic = isPublic
        this.difficulty = difficulty
        this.category = category
        this.metadata = metadata
    }
}

class RoutineCycle{
    constructor(name, detail, type, order, repetitions, metadata){
        this.name = name
        this.detail = detail
        this.type = type
        this.order = order
        this.repetitions = repetitions
        this.metadata = metadata
    }
}

class CycleExercise{
    constructor(order, duration, repetitions){
        this.order = order
        this.duration = duration
        this.repetitions = repetitions
    }
}