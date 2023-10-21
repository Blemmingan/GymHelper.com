<template>
  <div class="global" :style="`background-image: url(${background});`">
    <v-app style="background: rgba(0,0,0,0);">
     <NavigationBar/>
      <v-container fluid>
        <RouterView/>
      </v-container>
    </v-app>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { computed, onBeforeMount} from 'vue'
import { useUserStore } from '@/stores/UserStore'
import NavigationBar from './components/NavigationBar.vue'
import { RouterView} from 'vue-router'
import {useBackgroundStore} from '@/stores/BackgroundStore'

const backgroundStore = useBackgroundStore()

const background = computed(()=>{
  return backgroundStore.getBackground()
})

const noNavBar = ['login', 'register', 'verify']

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
</style>

