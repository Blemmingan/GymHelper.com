import {Api} from '@/api/api.js'
import {RoutineApi} from '@/api/routine.js'

export {RoutineCycleApi, RoutineCycle}

class RoutineCycleApi{
    static getUrl(routineId, slug){
        return `${RoutineApi.getUrl(routineId)}/cycles${slug ? `/${slug}`:''}`
    }

    static async getAll(routineId){
        return await Api.get(RoutineCycleApi.getUrl(routineId), false)
    }

    static async post(routineId, routineCycle){
        return await Api.post(RoutineCycleApi.getUrl(routineId), true, routineCycle)
    }

    static async get(routineId, cycleId){
        return await Api.get(RoutineCycleApi.getUrl(routineId, cycleId), true)
    }

    static async put(routineId, cycleId, routineCycle){
        return await Api.put(RoutineCycleApi.getUrl(routineId, cycleId), true, routineCycle)
    }

    static async delete(routineId, cycleId){
        return await Api.delete(RoutineCycleApi.getUrl(routineId, cycleId), true)
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