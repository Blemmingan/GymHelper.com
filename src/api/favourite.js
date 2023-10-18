import {Api} from '@/api/api.js'

export {FavouriteApi}

class FavouriteApi{
    static getUrl(slug){
        return `${Api.baseUrl}/favourites${slug ? `/${slug}`: ''}`
    }

    static async getFavourites(){
        return await Api.get(FavouriteApi.getUrl(), true)
    }

    static async markAsFavourite(routineId){
        return await Api.post(FavouriteApi.getUrl(routineId))
    }

    static async unmarkAsFavourite(routineId){
        return await Api.post(FavouriteApi.getUrl(routineId))
    }

}