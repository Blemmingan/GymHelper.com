<template>
    <v-main>
        <v-card elevation="10" class="formBox">
            <h1 class="mb-2">TODO</h1>
            
        </v-card>
    </v-main>
</template>

<script setup>

</script>

<style scoped>
div{
    margin: 20px;
    align-items: center;
    text-align: center;
}
.mt-2{
    width: 50%;
    text-align: center;
    background-color: whitesmoke;

}
.formBox{
    border: 3px solid green;
    border-radius: 25px;
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
}


</style>