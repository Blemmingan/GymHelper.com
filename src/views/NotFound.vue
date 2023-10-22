<template>
<v-main>
    <v-card elevation="10" class="formBox" height="30%">
            <v-card-text class="d-flex flex-column justify-center text-center">
                    <div>
                    <h1>Error 404</h1>
                    <h6>No se ha encontrado la pagina</h6>
                    </div>
            </v-card-text>
            <v-card-actions class="d-flex flex-column justify-center text-center">
                <v-btn class="mt-2 bg-secondary text-black" @click="router.push('/')">Volver a la pagina principal</v-btn>
            </v-card-actions>
            </v-card>
    </v-main>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter()
</script>

<style scoped>

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    div {
        text-align: center;
    }

    h1 {
        font-weight: bolder;
        font-size: 48px;
        line-height: 36px;
        letter-spacing: 1.25px;
        text-transform: uppercase;
    }

    h6 {

        font-weight: bold;
        font-size: 15px;
        line-height: 36px;
        letter-spacing: 1.25px;
        text-transform: uppercase;
    }

    .formBox{
        border: 3px solid #4CAF50;

        background-color: whitesmoke;
        margin-top: auto;
        margin-bottom: auto;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 40%;
        overflow-y: scroll;
    }
</style>
