import {Api} from '@/api/api.js'

export {ExerciseApi, Exercise, ExerciseVisual}

class ExerciseApi{
    static getUrl(slug){
        return `${Api.baseUrl}/exercises${slug ? `/${slug}`:''}`
    }

    //Exercises

    static async getAllExercises(){
        return await Api.get(ExerciseApi.getUrl(), true)
    }

    static async addExercise(exercise){
        return await Api.post(ExerciseApi.getUrl(), true, exercise)
    }

    static async getExercise(exerciseId){
        return await Api.get(ExerciseApi.getUrl(exerciseId), true)
    }

    static async modifyExercise(exerciseId, exercise){
        return await Api.put(ExerciseApi.getUrl(exerciseId), true, exercise)
    }

    static async deleteExercise(exerciseId){
        return await Api.delete(ExerciseApi.getUrl(exerciseId), true)
    }

    //Exercises Images

    static getImagesUrl(exerciseId, slug){
        return `${ExerciseApi.getUrl(exerciseId)}/images${slug ? `/${slug}`:''}`
    }

    static async getAllExerciseImages(exerciseId){
        return await Api.get(ExerciseApi.getImagesUrl(exerciseId), true)
    }

    static async addExerciseImage(exerciseId, exerciseImage){
        return await Api.add(ExerciseApi.getImagesUrl(exerciseId), true, exerciseImage)
    }

    static async getExerciseImage(exerciseId, imageId){
        return await Api.get(ExerciseApi.getImagesUrl(exerciseId, imageId), true)
    }

    static async modifyExerciseImage(exerciseId, imageId, exerciseImage){
        return await Api.put(ExerciseApi.getImagesUrl(exerciseId, imageId), true, exerciseImage)
    }
    
    static async deleteExerciseImage(exerciseId, imageId){
        return await Api.delete(ExerciseApi.getImagesUrl(exerciseId, imageId), true)
    }

    //Exercises Videos

    static getVideosUrl(exerciseId, slug){
        return `${ExerciseApi.getUrl(exerciseId)}/videos${slug ? `/${slug}`:''}`
    }

    static async getAllExerciseVideos(exerciseId){
        return await Api.get(ExerciseApi.getVideosUrl(exerciseId), true)
    }

    static async addExerciseVideo(exerciseId, exerciseVideo){
        return await Api.add(ExerciseApi.getVideosUrl(exerciseId), true, exerciseVideo)
    }

    static async getExerciseVideo(exerciseId, videoId){
        return await Api.get(ExerciseApi.getVideosUrl(exerciseId, videoId), true)
    }

    static async modifyExerciseVideo(exerciseId, videoId, exerciseVideo){
        return await Api.put(ExerciseApi.getVideosUrl(exerciseId, videoId), true, exerciseVideo)
    }
    
    static async deleteExerciseVideo(exerciseId, videoId){
        return await Api.delete(ExerciseApi.getVideosUrl(exerciseId, videoId), true)
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

class ExerciseVisual{
    constructor(number, url){
        this.number = number
        this.url = url
    }
}
