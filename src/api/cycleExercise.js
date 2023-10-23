import {Api} from '@/api/api.js'


export {CycleExerciseApi, CycleExercise}


class CycleExerciseApi{
    static getUrl(cycleId, slug){
        return `${Api.baseUrl}/cycles/${cycleId}/exercises${slug ? `/${slug}`:''}`
    }

    static async getAll(cycleId){
        return await Api.get(CycleExerciseApi.getUrl(cycleId), false)
    }

    static async get(cycleId, exerciseId){
        return await Api.get(CycleExerciseApi.getUrl(cycleId, exerciseId), true)
    }

    static async post(cycleId, exerciseId, cycleExercise){
        return await Api.post(CycleExerciseApi.getUrl(cycleId, exerciseId), true, cycleExercise)
    }

    static async put(cycleId, exerciseId, cycleExercise){
        return await Api.put(CycleExerciseApi.getUrl(cycleId,exerciseId), true, cycleExercise)
    }

    static async delete(cycleId, exerciseId){
        return await Api.delete(CycleExerciseApi.getUrl(cycleId, exerciseId), true)
    }
}


class CycleExercise{
    constructor(order, duration, repetitions){
        this.order = order
        this.duration = duration
        this.repetitions = repetitions
    }
}