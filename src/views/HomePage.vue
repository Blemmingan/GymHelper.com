<template>
  <div>
    <div v-if="!userStore.isLoggedIn">
      <v-container class="notLogged">
        <h1 class="slogan">ENTRENAR NUNCA FUE TAN FACIL!</h1>
        <h3 class="texto">Registrese o inicie sesión para empezar a entrenar!</h3>
      </v-container>
    </div>

    <div v-if="userStore.isLoggedIn">
    <v-card class="background-card">
      <v-container>
        <h1 class="slogan">ENTRENAR NUNCA FUE TAN FACIL!</h1>
        <h3 class="texto">Te damos la bienvenida a GymHelper!</h3>
      </v-container>
    </v-card>

   <UserHome/>
    </div>
    
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import UserHome from '@/components/UserHome.vue'
import { useBackgroundStore } from '@/stores/BackgroundStore';

const userStore = useUserStore()
const backgroundStore = useBackgroundStore()


  function setBackground(background){
    backgroundStore.setBackground(background)
  }

  onBeforeMount(() => {
  if(userStore.isLoggedIn)
    setBackground(null);
  else
    setBackground('background.jpg')
  })


</script>

<style scoped>
.slogan {
  font-size: 2rem;
  color: #4CAF50;
  text-align: right;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-top: 50%px;
  margin-right: 2%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
}

.texto {
  font-size: 1.25rem;
  color: #000000;
  text-align: right;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-top: 50%px;
  margin-right: 2%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
}

.background-card {
  width: 100%;
  min-width: 1100px;
  height: 300px; 
  background: url('pedalling-hard.jpg') center top;
  background-size: cover;
  background-position: top;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border-radius: 25px;
  border: 3px solid #4CAF50;
}

.notLogged {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  height: 100%; 
}


</style>