<template>
        <h1>MIS RUTINAS</h1>
        <v-divider></v-divider>
            <div v-if="routines.length>0" v-for="routine in routines" :key="routine.id">
                <GenericRoutineCard :routine="routine" @delete="onDelete"></GenericRoutineCard>
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

const onDelete = (id) => {
    const index = routinesData.value.content.findIndex(e => e.id==id)
    console.log(id)
    console.log(index)
    if (index>=0){
        routinesData.value.content.splice(index, 1)
    }
}

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
    .card{
        border: 3px solid #4CAF50;
        border-radius: 25px;
    }
    .buttonCol{
        margin: 0%;
        padding: 0%;
        border: 6px solid black;
    }
</style>