import {Api} from '@/api/api.js'

export {ExerciseApi, Exercise}

class ExerciseApi{
    static getUrl(slug, params){
        return `${Api.baseUrl}/exercises${params? '':'/'}${slug ? `${slug}`:''}`
    }

    static async getAll(params){
        return await Api.get(ExerciseApi.getUrl(params, true), true)
    }

    static async post(exercise){
        return await Api.post(ExerciseApi.getUrl(), true, exercise)
    }

    static async get(exerciseId){
        return await Api.get(ExerciseApi.getUrl(exerciseId), true)
    }

    static async put(exerciseId, exercise){
        return await Api.put(ExerciseApi.getUrl(exerciseId), true, exercise)
    }

    static async delete(exerciseId){
        return await Api.delete(ExerciseApi.getUrl(exerciseId), true)
    }
}

class Exercise{
    constructor(name, detail, type, metadata){
        this.name = name
        this.detail = detail
        this.type = type
        this.metadata = metadata
    }
}

