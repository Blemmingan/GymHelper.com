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

    static async verify_email(emailData){
        return await Api.post(UserApi.getUrl('verify_email'), false, emailData)   
    }

    static async login(credentials){
        return await Api.post(UserApi.getUrl('login'), false, credentials)
    }

    static async logout(){
        return await Api.post(UserApi.getUrl('logout'), true)
    }

    static async retrieveCurrentUser(){
        return await Api.get(UserApi.gerUrl('current'), true)
    }

    static async modifyUserData(userData){
        return await Api.put(UserApi.getUrl('current'), true, userData)
    }

    static async removeCurrentUser(){
        return await Api.delete(UserApi.getUrl('current'), true)
    }

    static async getCurrentUserRoutines(){
        return await Api.get(UserApi.getUrl('current/routines'), true)
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
    constructor(username, password, firstName, lastName, gender, birthdate, email, phone, avatarUrl, metadata){
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.birthdate = birthdate
        this.email = email
        this.phone = phone
        this.avatarUrl = avatarUrl
        this.metadata = metadata
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