import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useBackgroundStore = defineStore('background', ()=>{
    const background=ref(null)

    function getBackground(){
        return background.value
    }

    function setBackground(image){
        background.value = image
    }

    return {
        setBackground,
        getBackground    
    }
})