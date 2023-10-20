import {Api} from '@/api/api.js'

export {CategoryApi, Category}

class CategoryApi{
    static getUrl(slug){
        return `${Api.baseUrl}/categories${slug ? `/${slug}`:''}`
    }

    static async getAll(){
        return await Api.get(CategoryApi.getUrl(), false)
    }

    static async post(category){
        return await Api.post(CategoryApi.getUrl(), true, category)
    }

    static async get(categoryId){
        return await Api.get(CategoryApi.getUrl(categoryId), true)
    }

    static async put(categoryId, category){
        return await Api.put(CategoryApi.getUrl(categoryId), true, category)
    }

    static async delete(categoryId){
        return await Api.delete(CategoryApi.getUrl(categoryId), true)
    }
}

class Category{
    constructor(name, detail){
        this.name = name
        this.detail = detail
    }
}