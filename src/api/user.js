import {Api} from '@/api/api.js'

export {UserApi, Credentials, RegistrationData, EmailData, UserData}

class UserApi {
    static getUrl(slug){
        return `${Api.baseUrl}/users${slug ? `/${slug}`:''}`
    }

    static async register(registrationData){
        return await Api.post(UserApi.getUrl(), false, registrationData)
    }

    static async resendVerificationEmail(email){
        return await Api.post(UserApi.getUrl('resend_verification'), false, {email: email})
    }

    static async verifyEmail(emailData){
        return await Api.post(UserApi.getUrl('verify_email'), false, emailData)   
    }

    static async login(credentials){
        return await Api.post(UserApi.getUrl('login'), false, credentials)
    }

    static async logout(){
        return await Api.post(UserApi.getUrl('logout'), true)
    }

    static async get(){
        return await Api.get(UserApi.getUrl('current'), true)
    }

    static async put(userData){
        return await Api.put(UserApi.getUrl('current'), true, userData)
    }

    static async delete(){
        return await Api.delete(UserApi.getUrl('current'), true)
    }

    static async getRoutines(page){
        return await Api.get(UserApi.getUrl(`current/routines${page}`), true)
    }

    static async getUserRoutines(userId){
        return await Api.get(UserApi.getUrl(`${userId}/routines`), true)
    }
}

class Credentials {
    constructor(username, password){
        this.username = username
        this.password = password
    }
}

class RegistrationData {
    constructor(username, password, email){
        this.username = username
        this.password = password
        this.email = email
    }
}

class EmailData {
    constructor(email, code){
        this.email = email
        this.code = code
    }
}

class UserData{
    constructor(firstName, lastName, gender, birthdate, phone, avatarUrl, metadata){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.birthdate = birthdate
        this.phone = phone
        this.avatarUrl = avatarUrl
        this.metadata = metadata
    }
}
