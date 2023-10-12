import { defineStore } from 'pinia'

export const useLoginStore = defineStore('counter', () => { //  Siempre empiza con use y termina con Store. Almacena el valor de defineStore.
  //  El primer arg es el nombre, unico, del store.
  //  El segundo es la funcion que construye el store.

  //  estado  (datos crudos) del componente. Aca van los datos del usuario, y el bool isLogged.
  let loggedIn = false

  //  getters - hacen operaciones sobre el estado
  
  
  //  actions - FUNCIONES. Administran el estado. Login/Logout/Register/Obliterate
  function logIn() {
    loggedIn = true
  }
  

  //  retorna el estado, los getters, y las funciones. 
  return { loggedIn, logIn }
})
