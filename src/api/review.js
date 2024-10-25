import {Api} from '@/api/api.js'

export {ReviewApi, Review}

class ReviewApi{
    static getUrl(slug){
        return `${Api.baseUrl}/reviews${slug ? `/${slug}`:''}`
    }

    static async getAll(routineId){
        return await Api.get(ReviewApi.getUrl(routineId), false)
    }

    static async post(routineId, review){
        return await Api.post(ReviewApi.getUrl(routineId), true, review)
    }
}

class Review{
    constructor(score, review){
        this.score = score
        this.review = review
    }
}