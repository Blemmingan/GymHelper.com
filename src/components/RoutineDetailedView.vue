<template>
    <v-card class="container">
        <v-card-title class="d-flex justify-center text-center"> 
            <h1>{{ routine.name }}</h1>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>  
            <h3><strong>Descripción: </strong> {{ routine.detail }}</h3>
            <h3><strong>Dificultad: </strong>{{ routine.difficulty }}</h3>
            <h3><strong>Categoria: </strong>{{ category.name }}</h3>
        </v-card-text>
        <v-divider></v-divider>
        <h1>Ciclos: </h1>
        <v-card-text v-if="cycles.length>0" v-for="cycle in cycles" :key="cycle.id">
            <span v-if="cycle.type=='warmup'">
                <h2>{{cycle.order}} - Ciclo de calentamiento: {{ cycle.name }}</h2>
                <h3>Descripción: {{ cycle.detail }}</h3>
                <h3>Repeticiones: {{ cycle.repetitions }}</h3>
                <h3>Ejercicios:</h3>
                    <ExMiniCard :id="cycle.id"></ExMiniCard>
            </span>
            <span v-if="cycle.type=='exercise'">
                <h2>{{cycle.order}} - Ciclo de ejercicio: {{ cycle.name }}</h2>
                <h3>Descripción: {{ cycle.detail }}</h3>
                <h3>Repeticiones: {{ cycle.repetitions }}</h3>
                <h3>Ejercicios:</h3>
                    <ExMiniCard :id="cycle.id"></ExMiniCard>
            </span>
            <span v-if="cycle.type=='cooldown'">
                <h2>{{cycle.order}} - Ciclo de enfriamiento: {{ cycle.name }}</h2>
                <h3>Descripción: {{ cycle.detail }}</h3>
                <h3>Repeticiones: {{ cycle.repetitions }}</h3>
                <h3>Ejercicios:</h3>
                    <ExMiniCard :id="cycle.id"></ExMiniCard>
            </span>
        </v-card-text>
        <div v-else>
            <v-card-text>
                <h2>La rutina no tiene ciclos asociados</h2>
            </v-card-text>
        </div>
    <v-divider></v-divider>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="mt-2 bg-secondary text-black" @click="back" :disabled="disable">
                Volver
            </v-btn>
        <v-col>
            <v-btn  @click="dialogue = true" class="mt-2 bg-accent text-black">
                    <v-icon>mdi-delete</v-icon>
                    Borrar</v-btn>
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
                @click="deleteRoutine()"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
            
        </v-col>
    </v-card-actions>
    </v-card>
    
</template>

<script setup>
import ExMiniCard from './ExMiniCard.vue';
import { useRouter } from 'vue-router';
import {ref, computed, defineProps} from 'vue'
import { useRoutineStore } from '@/stores/RoutineStore';
import { useAlertStore } from '@/stores/AlertStore';
import { useCategoryStore } from '@/stores/CategoryStore';
import { RoutineCycle } from '@/api/routineCycle';
import { useUserStore } from '@/stores/UserStore';

const {id} = defineProps(['id'])

const router = useRouter()
const routineStore = useRoutineStore()
const CategoryStore = useCategoryStore()
const userStore=useUserStore()

const dialogue = ref(false)

const alertStore = useAlertStore()

const routine = ref(await getRoutine())

const cycles = ref(await getCycles())

const disable = ref(false)

async function getCycles(){
    const result = await routineStore.getAllCycles(routine.value.id)
    return result.content.sort(function(a,b){return a.order-b.order})
}

async function getRoutine(){
        const result = await routineStore.getCurrentUserRoutines()
        const index = result.content.findIndex((e)=> e.id==id)
        return result.content[index]
}
const category = ref(await CategoryStore.get( routine.value.category.id))

function back(){
    router.go(-1);
}

async function deleteRoutine(){
    disable.value = true
    try{
        await routineStore.delete(id.value)
        router.go(-1)
    } catch(e){
        alertStore.sendNotification('Ha ocurrido un error inesperado. Intentelo de nuevo mas tarde')
    } finally {
        disable.value=false
    }
}

</script>

<style scoped>
    .container{
        background-color: whitesmoke;
        border: 3px solid #4CAF50;
        padding: 1%;
    }
    .rowCont{
        margin-bottom: 1%;
    }

    .infoBox{
        border: 3px solid #4CAF50;
        background-color: whitesmoke;
        
        
        display: block;
        margin-left: auto;
        margin-right: auto ;
    }


</style>