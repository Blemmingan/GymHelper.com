import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import { CategoryApi } from '@/api/category'

export const useCategoryStore = defineStore('category', ()=>{

    const items = ref([])

    function findIndex(id){
        return items.value.findIndex(item => item.id === id)
    }


    async function getAll(){
        const result = await CategoryApi.getAll()
        return result
    }

    async function get(categoryId){
        const index = findIndex(categoryId)
        if (index >=0){
            return items.value[index]
        }
        const result = await CategoryApi.get(categoryId)
        items.value.push(index)
        return result
    }

    async function add(category){
        const result = await CategoryApi.post(category)
        if (!findIndex(result.id)){
            items.value.push(result)
        }
        return result
    }

    async function remove(categoryId){
        await CategoryApi.delete(categoryId)
        const index = findIndex(categoryId)
        if (index>=0){
            items.value.splice(index, 1)
        }
    }

    async function modify(categoryId, category){
        const result = await CategoryApi.put(categoryId, category)
        const index = findIndex(categoryId)
        if (index>=0){
            items.value[index] = result
        }
        return result
    }

    return {
        getAll,
        get,
        add,
        remove,
        modify

    }
})