import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useAlertStore = defineStore('alert', ()=>{
    const notification = ref({show: false ,timeout: 5000, message: null})

    function sendNotification(message, timeout){
        notification.value.message = message
        notification.value.show = !!message
        if (timeout){
            notification.value.timeout = timeout
        } else {
            notification.value.timeout = 5000
        }
    }

    function getNotification(){
        return notification.value
    }

    return{
        getNotification,
        sendNotification
    }
})