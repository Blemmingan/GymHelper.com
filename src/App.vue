<template>
  <div class="global" :style="`background-image: url(${background});`">
    <v-app style="background: rgba(0,0,0,0);">
     <NavigationBar/>
      <v-container fluid>
        <RouterView/>
      </v-container>
      <v-snackbar 
        v-model="notification.show" 
        color="black" 
        dark 
        :timeout="notification.timeout"
        elevation="10"
        class="ma-2"
        max-width="80%"
        >
        <div class="notification">{{ notification.message }}</div>
        <template v-slot:actions>
          <v-btn @click="alertStore.sendNotification(null)" icon="mdi-close" color="secondary"></v-btn>
        </template>
      </v-snackbar>
    </v-app>
  </div>
</template>

<style scoped>
</style>

<script setup>
import {computed, onBeforeMount} from 'vue'
import { useUserStore } from '@/stores/UserStore'
import NavigationBar from './components/NavigationBar.vue'
import { RouterView} from 'vue-router'
import {useBackgroundStore} from '@/stores/BackgroundStore'
import {useAlertStore} from '@/stores/AlertStore'

const backgroundStore = useBackgroundStore()
const alertStore = useAlertStore()

const background = computed(()=>{
  return backgroundStore.getBackground()
})

const notification = computed (() => {
  const result =  alertStore.getNotification()
  if (result){
    return result
  }
  return {show: false, timeout: 0, message: 'nothing to show'}
})




onBeforeMount(() => {
  const userStore = useUserStore()
  const backgroundStore = useBackgroundStore()
  userStore.initialize()
  backgroundStore.setBackground('../background.jpg')

})

</script>


<style scoped>

  .global{
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
  }

  .notification{
    font-size: large;
  }

</style>

