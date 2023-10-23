import { defineStore } from "pinia"
import {ref, computed} from 'vue'
import { ExerciseApi } from "@/api/exercise.js"
import { ExerciseImageApi } from "@/api/exerciseImage.js"
import { ExerciseVideoApi } from "@/api/exerciseVideo.js"


export const useExerciseStore = defineStore('exercise', ()=>{

    const items = ref([])

    function findIndex(id){
        return items.value.findIndex(item => item.id === id)
    }

    async function add(exercise){
        const result = await ExerciseApi.post(exercise)
        if (!findIndex(result.id)){
            items.value.push(result)
        }
        return result
    }

    async function modify(exerciseId, exercise){
        const result = await ExerciseApi.put(exerciseId, exercise)
        const index = findIndex(result.id)
        if (index>=0){
            items.value[index] = result
        }
        return result
    }

    async function remove(exerciseId){
        await ExerciseApi.delete(exerciseId)
        const index = findIndex(exerciseId)
        if (index>=0){
            items.value.splice(index, 1)
        }
    }

    async function getAll(){
        const result = await ExerciseApi.getAll()
        return result
    }

    async function get(exerciseId){
        const index = findIndex(exerciseId)
        if (index >=0){
            return items.value[index]
        }
        const result =  await ExerciseApi.get(exerciseId)
        items.value.push(result)
        return result
    }


    async function addImage(exerciseId, exerciseImage){
        return await ExerciseImageApi.post(exerciseId, exerciseImage)
    }

    async function modifyImage(exerciseId, imageId, exerciseImage){
        return await ExerciseImageApi.put(exerciseId, imageId, exerciseImage)
    }

    async function removeImage(exerciseId, imageId){
        await ExerciseImageApi.delete(exerciseId, imageId)
    }

    async function getAllImages(exerciseId){
        return await ExerciseImageApi.getAll(exerciseId)
    } 

    async function getImage(exerciseId, imageId){
        return await ExerciseImageApi.get(exerciseId, imageId)
    }



    async function addVideo(exerciseId, exerciseVideo){
        return await ExerciseVideoApi.post(exerciseId, exerciseVideo)
    }

    async function modifyVideo(exerciseId, videoId, exerciseVideo){
        return await ExerciseVideoApi.put(exerciseId, videoId, exerciseVideo)
    }

    async function removeVideo(exerciseId, videoId){
        await ExerciseVideoApi.delete(exerciseId, videoId)
    }

    async function getAllVideos(exerciseId){
        return await ExerciseVideoApi.getAll(exerciseId)
    }

    async function getVideo(exerciseId, videoId){
        return await ExerciseVideoApi.get(exerciseId, videoId)
    }

    return {
        add,
        modify,
        remove,
        getAll,
        get,

        addImage,
        modifyImage,
        removeImage,
        getAllImages,
        getImage,

        addVideo,
        modifyVideo,
        removeVideo,
        getAllVideos,
        getVideo
    }

})