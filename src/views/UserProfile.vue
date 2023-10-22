<template>
    <v-card elevation="10" class="infoBox">
        <v-card-actions v-if="!editing" class="d-flex justify-right">
            <v-spacer></v-spacer>
            <v-btn class="mt-2 bg-secondary text-black" @click="editing=!editing" :disabled="disableButtons">
                <v-icon>mdi-pencil</v-icon>
                Editar Perfil
            </v-btn>
        </v-card-actions>
        <v-card-item class="d-flex justify-center text-center" >
        <v-avatar size="100">
            <v-img alt="Foto de perfil" contain="true" class="avatar" :src="getProfilePicture()">
            </v-img>
        </v-avatar>
        </v-card-item>
        <v-card-text class="d-flex justify-center text-center" >
            <div>
                <h1><strong>{{user.username}}</strong></h1>
                <h2><strong>{{user.email}}</strong></h2>
            </div>
        </v-card-text>
        <v-divider></v-divider>
        <span v-if="!editing">
        <v-card-text>
          <h2><strong>Información del usuario:</strong></h2>
          <h3><strong>Nombre: </strong> {{ user.firstName || "No especificado" }}</h3>
          <h3><strong>Apellido: </strong>{{ user.lastName  || "No especificado"}}</h3>
          <h3><strong>Género: </strong>{{ user.gender  || "No especificado"}}</h3>
          <h3><strong>Cumpleaños: </strong>{{ getBirthdate().toLocaleDateString('en-GB')  || "No especificado"}}</h3>
          <h3><strong>Telefono: </strong>{{ user.phone  || "No especificado"}}</h3>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions   >
        <v-row class="d-flex justify-center text-center">
        
        <v-btn class="mt-2 bg-secondary text-black" :disabled="disableButtons" @click="logout()" :loading="logoutLoading">Cerrar Sesión</v-btn>
        <v-btn class="mt-2 bg-accent text-black" :disabled="disableButtons" :loading="deleteLoading" @click="deleteAccount()">
            <v-icon>mdi-delete</v-icon>
            Eliminar cuenta
        </v-btn>
        </v-row>
        </v-card-actions>
        </span>
        <span v-else>
        <v-card-actions>
            <v-form>
                <h2>Editar información del usuario</h2>
                <v-text-field v-model="newFirstName" label="Nombre"></v-text-field>
                <v-text-field v-model="newLastName" label="Apellido"></v-text-field>
                <v-text-field v-model="newGender" label="Género"></v-text-field>
                <v-text-field v-model="newBirthdate" label="Cumpleaños" type="date"></v-text-field>
                <v-text-field v-model="newPhone" label="Telefono"></v-text-field>
                <v-text-field v-model="newAvatarUrl" label="Avatar"></v-text-field>
                <v-file-input v-model="newAvatar" label="Avatar" accept="image/*"  prepend-icon="" append-inner-icon="mdi-camera"/>
            </v-form>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions>
            <v-row class="d-flex justify-center text-center">
                <v-btn class="mt-2 bg-secondary text-black" :disabled="disableButtons" @click="endProfileUpdate()">
                    Cancelar
                </v-btn>
                <v-btn class="mt-2 bg-secondary text-black" :disabled="disableButtons" :loading="editLoading" @click="updateProfile()">
                    Guardar cambios
                </v-btn>
            </v-row>
        </v-card-actions>
        </span>
    </v-card>
    
 
</template>


<script setup>
import { UserData } from '@/api/user';
import { useAlertStore } from '@/stores/AlertStore';
import { useBackgroundStore } from '@/stores/BackgroundStore';
import { useUserStore } from '@/stores/UserStore';
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const alertStore = useAlertStore()
const backgroundStore = useBackgroundStore()

const user = ref(await userStore.getCurrentUser())

const newFirstName = ref(user.value.firstName)
const newLastName = ref(user.value.lastName)
const newGender = ref(user.value.gender)
const newBirthdate = ref(null)
const newPhone = ref(user.value.phone)
const newAvatar = ref(null)
const newAvatarUrl = ref(null)

const editing = ref(false)

const logoutLoading = ref(false)
const editLoading = ref(false)
const deleteLoading = ref(false)
const uploadingPicture = ref(false)


const disableButtons = computed(()=>{
    return logoutLoading.value || editLoading.value || deleteLoading.value || uploadingPicture.value
})

function getProfilePicture(){
    return (user.value.avatarUrl)? user.value.avatarUrl : toImageUrl('../../defaultAvatar.jpg')
}


function getBirthdate(){
    if (user.value.birthdate){
        return new Date(user.value.birthdate)
    }
    return new Date(null)
}

function endProfileUpdate(){
    editing.value = false
    newFirstName.value = user.value.firstName
    newLastName.value = user.value.lastName
    newGender.value = user.value.gender
    newBirthdate.value = null
    newPhone.value = user.value.phone
    newAvatarUrl = null
}

async function updateProfile(){
    editLoading.value = true
    try{
        if(newBirthdate.value){
            newBirthdate.value = new Date(newBirthdate.value.replace(/-/,'/')).getTime()
        } else {
            newBirthdate.value = user.value.birthdate
        }
        if (!newAvatarUrl.value){
            newAvatarUrl.value = user.value.avatarUrl
        }
        await userStore.modifyCurrentUserData(new UserData( newFirstName.value,
                                                            newLastName.value,
                                                            newGender.value,
                                                            newBirthdate.value,
                                                            newPhone.value,
                                                            newAvatarUrl.value
                                                            ))
        user.value = await userStore.getCurrentUser()
        endProfileUpdate()
    } catch (e){
        if (e.code){

        }
    } finally{
        editLoading.value = false
    }
}

async function logout(){
        logoutLoading.value = true 
        try{
            await userStore.logout()
            backgroundStore.setBackground('../../background.jpg')
            router.push('/')
        } catch(e){
            alertStore.sendNotification("Ha ocurrido un error con los servidores. Intentelo de nuevo mas tarde")
        } finally{
            logoutLoading.value = false
        }
        
    }

async function deleteAccount(){
    //Agregar un mensaje de confirmación
    deleteLoading.value = true
    try {
        await userStore.removeCurrentUser()
        router.push("/")
    } catch(e){
        alertStore.sendNotification("Ha ocurrido un error con los servidores. Intentelo de nuevo mas tarde")
    } finally{
        deleteLoading.value = false
    }
}


function toImageUrl(path){
    return new URL(path, import.meta.url).href
}


</script>

<style scoped>

.infoBox{
        border: 3px solid #4CAF50;
        background-color: whitesmoke;
        
        
        display: block;
        margin-left: auto;
        margin-right: auto ;
    }
</style>