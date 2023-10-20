import {Api} from '@api/api.js'

export {RoutineApi, Routine}

class RoutineApi{
    static getUrl(slug){
        return `${Api.baseUrl}/routines${slug ? `/${slug}`:''}`
    }

    static async getAll(){
        return await Api.get(RoutineApi.getUrl(), false)
    }

    static async post(routine){
        return await Api.post(RoutineApi.getUrl(), true, routine)
    }

    static async get(routineId){
        return await Api.get(RoutineApi.getUrl(routineId), true)
    }

    static async put(routineId, routine){
        return await Api.put(RoutineApi.getUrl(routineId), true, routine)
    }

    static async delete(routineId){
        return await Api.delete(RoutineApi.getUrl(routineId), true)
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


