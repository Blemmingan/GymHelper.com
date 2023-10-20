import {Api} from '@/api/api.js'
import {ExerciseApi} from '@/api/exercise.js'

export {ExerciseImageApi, ExerciseImage}

class ExerciseImageApi{
    static getUrl(exerciseId, slug){
        return `${ExerciseApi.getUrl(exerciseId)}/images${slug ? `/${slug}`:''}`
    }

    static async getAll(exerciseId){
        return await Api.get(ExerciseImageApi.getUrl(exerciseId), true)
    }

    static async post(exerciseId, exerciseImage){
        return await Api.post(ExerciseImageApi.getUrl(exerciseId), true, exerciseImage)
    }

    static async get(exerciseId, imageId){
        return await Api.get(ExerciseImageApi.getUrl(exerciseId, imageId), true)
    }

    static async put(exerciseId, imageId, exerciseImage){
        return await Api.put(ExerciseImageApi.getUrl(exerciseId, imageId), true, exerciseImage)
    }
    
    static async delete(exerciseId, imageId){
        return await Api.delete(ExerciseImageApi.getUrl(exerciseId, imageId), true)
    }
}

class ExerciseImage{
    constructor(number, url){
        this.number = number
        this.url = url
    }
}