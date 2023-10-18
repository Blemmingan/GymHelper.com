<template>
  <div>
    <h1 class="title">GYMHELPER.COM</h1>
    <h3>Nuestra aplicacion lorem ipsum dolor sit amens</h3>
    <p>Para proceder es necesaria una cuenta.</p>
    <p>Si ya tiene una cuenta, haga clic en el boton de login.</p>
    <p>Si no, haga clic en el boton de registro.</p>
    
    <v-btn @click="goToRegister()">Registrarse</v-btn>
    <v-btn @click="goToLogin()">Login</v-btn>
    <p>DEBUG</p>
    <a href="./createExcercise">Crear Ejercicio</a>
    <a href="./profile">Perfil</a>
    <a href="./home">User Home</a>
    <a href="./excercise">AddExcercise</a>
  </div>
</template>

<script setup>
import router from '@/router';

  function goToRegister(){
    router.push('./register');
  }
  function goToLogin(){
    router.push('./login');
  }
</script>
