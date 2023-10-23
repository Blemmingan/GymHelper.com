<template>
    <v-card elevation="10" class="infoBox">
        
        <v-card-item class="d-flex justify-center text-center" >
        <v-avatar size="100">
            <v-img alt="Foto de perfil" contain="true" class="avatar" :src="getProfilePicture()">
            </v-img>
        </v-avatar>
        </v-card-item>
        <v-card-text class="d-flex justify-center text-center" >
            <div>
                <h1 class="text"><strong>{{user.username}}</strong></h1>
                <h2><strong>{{user.email}}</strong></h2>
            </div>
        </v-card-text>
        <v-divider></v-divider>
        <span v-if="!editing" class="textBox">
        <v-card-text>
          <h2 class="text"><strong>Información del usuario:</strong></h2>
          <h3 class="text"><strong>Nombre: </strong> {{ user.firstName || "No especificado" }}</h3>
          <h3 class="text"><strong>Apellido: </strong>{{ user.lastName  || "No especificado"}}</h3>
          <h3 class="text"><strong>Género: </strong>{{ toSpanish(user.gender)  || "No especificado"}}</h3>
          <h3 class="text"><strong>Cumpleaños: </strong>{{ getBirthdate().toLocaleDateString('en-GB')  || "No especificado"}}</h3>
          <h3 class="text"><strong>Telefono: </strong>{{ user.phone  || "No especificado"}}</h3>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions   >
        <v-row class="d-flex justify-center text-center">
   
            <v-btn class="mt-2 bg-secondary text-black" @click="editing=!editing" :disabled="disableButtons">
                <v-icon>mdi-pencil</v-icon>
                Editar Perfil
            </v-btn>
   
        <v-btn class="mt-2 bg-secondary text-black" :disabled="disableButtons" @click="logout()" :loading="logoutLoading">Cerrar Sesión</v-btn>
                <v-btn  @click="dialogue = true" class="mt-2 bg-accent text-black">
                    <v-icon>mdi-delete</v-icon>
                    Eliminar cuenta</v-btn>
        <v-dialog elevation="20" v-model="dialogue" persistent>
          <v-card title="¿Seguro?" class="infoBox">
            <v-card-text>
              Esta acción no se puede revertir!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mt-2 bg-secondary text-black"
                text="Cancelar"
                @click="dialogue = false"
              ></v-btn>
              <v-btn class="mt-2 bg-accent text-black"
                text="Borrar"
                @click="deleteAccount()"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        </v-row>
        </v-card-actions>
        </span>
        <span v-else class="editActions">
        <v-card-actions class="editActions">
            <v-form>
                <h2>Editar información del usuario</h2>
                <v-text-field v-model="newFirstName" label="Nombre"></v-text-field>
                <v-text-field v-model="newLastName" label="Apellido"></v-text-field>
                <p>Genero:</p>
                <v-radio-group v-model="newGender" row>
                    <v-radio label="Masculino" value="male"></v-radio>
                    <v-radio label="Femenino" value="female"></v-radio>
                    <v-radio label="Otro" value="other"></v-radio>
                </v-radio-group>
                <v-text-field v-model="newBirthdate" label="Cumpleaños" type="date"></v-text-field>
                <v-text-field v-model="newPhone" label="Telefono"></v-text-field>
                <p>Ingrese la direccion url de su avatar:</p>
                <v-text-field v-model="newAvatarUrl" label="Avatar"></v-text-field>
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
const newAvatarUrl = ref(null)

const dialogue = ref(false)

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
    newAvatarUrl.value = user.value.newAvatarUrl
}

async function updateProfile(){
    editLoading.value = true
    try{
        if(newBirthdate.value){
            newBirthdate.value = new Date(newBirthdate.value.replace(/-/,'/')).getTime()
        } else{
            newBirthdate.value = user.value.birthdate
        } 
        if (!newAvatarUrl.value){
            newAvatarUrl.value = user.value.avatarUrl
        }
        await userStore.modifyCurrentUserData(new UserData( newFirstName.value || '',
                                                            newLastName.value || '',
                                                            newGender.value || 'other',
                                                            newBirthdate.value || 0,
                                                            newPhone.value || '',
                                                            newAvatarUrl.value || ''
                                                            ))
        user.value = await userStore.getCurrentUser()
        endProfileUpdate()
    } catch (e){
        if (e.code){
            alertStore.sendNotification("Ha ocurrido un error inesperado. Intentelo de nuevo mas tarde")
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
    deleteLoading.value = true
    try {
        await userStore.removeCurrentUser()
        router.push("/")
    } catch(e){
        alertStore.sendNotification("Ha ocurrido un error con los servidores. Intentelo de nuevo mas tarde")
    } finally{
        alertStore.sendNotification("Usuario eliminado con exito")
        deleteLoading.value = false
    }
}


function toImageUrl(path){
    return new URL(path, import.meta.url).href
}

function toSpanish(gender){
    if(gender == "male")
        return "Masculino"
    if(gender == "female")
        return "Femenino"
    if(gender == "other")
        return "Otro"
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
.textBox{
    text-align: center;
}
.text{
    margin: 1%;
}
.editActions{
    text-align: center;
    margin-left: 40%;
}
</style>