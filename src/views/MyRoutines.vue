<template>
        <h1>MIS RUTINAS</h1>
        <v-divider></v-divider>
            <div v-if="routines.length>0" v-for="routine in routines" :key="routine.id">
                <GenericRoutineCard :routine="routine"></GenericRoutineCard>
            </div>
            <div v-else>
                <v-card>
                    <v-card-text class="d-flex flex-column justify-center text-center">
                        Todavia no tienes rutinas propias. Cuando las crees, podras verlas aquí
                    </v-card-text>
                </v-card>
            </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, computed} from 'vue'
import { useRoutineStore } from '@/stores/RoutineStore'
import { useAlertStore } from '@/stores/AlertStore';
import GenericRoutineCard from '@/components/GenericRoutineCard.vue';

const router = useRouter()
const routineStore = useRoutineStore()
const alertStore = useAlertStore()

const routinesData = ref(await routineStore.getCurrentUserRoutines())

const routines = computed(()=>{
    return routinesData.value.content
})


function goToView(){
    alertStore.sendNotification("No implementado!")
}
function startRoutine(){
    alertStore.sendNotification("No implementado!")
}

</script>

<style scoped>

    h1{
        text-align: center;
    }

    .card-text{
        text-align: left;
    }
    .goButton{
        height: 100%;
        width: 100%;
        border-radius: 25px;
        background-color: green;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;        
    }
    .card{
        border: 3px solid green;
        border-radius: 25px;
    }
    .buttonCol{
        margin: 0%;
        padding: 0%;
        border: 6px solid black;
    }
</style>