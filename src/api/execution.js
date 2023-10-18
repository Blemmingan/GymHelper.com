import {Api} from '@/api/api.js'

export {ExecutionApi, Execution}

class ExecutionApi{
    static getUrl(slug){
        return `${Api.baseUrl}/executions${slug ? `/${slug}`:''}`
    }

    static async getRoutineExecutions(routineId){
        return await Api.get(ExecutionApi.getUrl(routineId), true)
    }

    static async addRoutineExecution(routineId, execution){
        return await Api.post(ExecutionApi.getUrl(routineId), true, execution)
    }
}

class Execution{
    constructor(duration, wasModified){
        this.duration = duration
        this.wasModified = wasModified
    }
}