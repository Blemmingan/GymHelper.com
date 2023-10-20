import {Api} from '@/api/api.js'
import { ExerciseApi } from '@/api/exercise.js'

export {ExerciseVideoApi, ExerciseVideo}

class ExerciseVideoApi{
    static getUrl(exerciseId, slug){
        return `${ExerciseApi.getUrl(exerciseId)}/videos${slug ? `/${slug}`:''}`
    }

    static async getAll(exerciseId){
        return await Api.get(ExerciseVideoApi.getUrl(exerciseId), true)
    }

    static async post(exerciseId, exerciseVideo){
        return await Api.post(ExerciseVideoApi.getUrl(exerciseId), true, exerciseVideo)
    }

    static async get(exerciseId, videoId){
        return await Api.get(ExerciseVideoApi.getUrl(exerciseId, videoId), true)
    }

    static async put(exerciseId, videoId, exerciseVideo){
        return await Api.put(ExerciseVideoApi.getUrl(exerciseId, videoId), true, exerciseVideo)
    }
    
    static async delete(exerciseId, videoId){
        return await Api.delete(ExerciseVideoApi.getUrl(exerciseId, videoId), true)
    }
}

class ExerciseVideo{
    constructor(number, url){
        this.number = number
        this.url = url
    }
}