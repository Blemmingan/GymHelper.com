<template>
  <div>
    <v-card class="background-card">
      <v-container>
        <h1 class="slogan">ENTRENAR NUNCA FUE TAN FACIL!</h1>
        <h3 class="texto" v-if="!userStore.isLoggedIn">Registrese o inicie sesión para empezar a entrenar!</h3>
      </v-container>
    </v-card>

    <UserHome v-if="userStore.isLoggedIn"/>

    <p>DEBUG</p>
    <a href="./createExcercise">Crear Ejercicio </a>
    <a href="./profile">Perfil </a>
    <a href="./home">User Home </a>
    <a href="./excercise">AddExcercise </a>
    <a href="./warmup">Calentamiento </a>
    <a href="./core">Ciclos </a>
    <a href="./cooldown">Enfiramiento </a>
    <a href="./nameRoutine">Name Routine </a>
    <a href="./runRoutineWarmup">Run Warmup. </a>
    <a href="./routineCore">Run Core. </a>
    <a href="./routineCooldown">Run Cooldown</a>
    <a href="./rate">Rate</a>
    <a href="./viewRoutine">View Routine</a>

  </div>
</template>

<script setup>
import router from '@/router';
import { useUserStore } from '@/stores/UserStore'
import UserHome from '@/components/UserHome.vue';

const userStore = useUserStore()

  function goToRegister(){
    router.push('./register');
  }
  function goToLogin(){
    router.push('./login');
  }
</script>

<style scoped>
.slogan {
  font-size: 2rem;
  color: #4CAF50; /* Green color */
  text-align: right;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-top: 50%px;
  margin-right: 2%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adding a subtle shadow */
}

.texto {
  font-size: 1.25rem;
  color: #000000; /* Green color */
  text-align: right;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-top: 50%px;
  margin-right: 2%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adding a subtle shadow */
}

.background-card {
  width: 100%;
  min-width: 1100px;
  height: 300px; /* Adjust the height based on your preference */
  background: url('pedalling-hard.jpg') center top;
  background-size: cover;
  background-position: top;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>