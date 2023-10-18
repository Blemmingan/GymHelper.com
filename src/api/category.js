import {Api} from '@/api/api.js'

export {CategoryApi, Category}

class CategoryApi{
    static getUrl(slug){
        return `${Api.baseUrl}/categories${slug ? `/${slug}`:''}`
    }

    static async getAllCategories(){
        return await Api.get(CategoryApi.getUrl(), false)
    }

    static async addCategory(category){
        return await Api.post(CategoryApi.getUrl(), true, category)
    }

    static async retrieveCategory(categoryId){
        return await Api.get(CategoryApi.getUrl(categoryId), true)
    }

    static async modifyCategory(categoryId, category){
        return await Api.put(CategoryApi.getUrl(categoryId), true, category)
    }

    static async removeCategory(categoryId){
        return await Api.delete(CategoryApi.getUrl(categoryId))
    }
}

class Category{
    constructor(name, detail){
        this.name = name
        this.detail = detail
    }
}