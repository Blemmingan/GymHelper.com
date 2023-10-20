import {Api} from '@/api/api.js'

export {FavouriteApi}

class FavouriteApi{
    static getUrl(slug){
        return `${Api.baseUrl}/favourites${slug ? `/${slug}`: ''}`
    }

    static async getAll(){
        return await Api.get(FavouriteApi.getUrl(), true)
    }

    static async post(routineId){
        return await Api.post(FavouriteApi.getUrl(routineId), true, routineId)
    }

    static async delete(routineId){
        return await Api.delete(FavouriteApi.getUrl(routineId), true)
    }

}