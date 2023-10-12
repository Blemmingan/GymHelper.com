<template>
    <div>
        <v-sheet width="600" class="mx-auto">
            <h1 class="title">Crear un nuevo ejercicio.   </h1>
            <v-form   @submit.prevent class="form">         
                    <div>
                        <v-text-field
                        v-model="excerciseName"
                        :rules="nameRules"
                        :counter="30"
                        label="Excercise Name: "
                        required 
                        
                        />
                    </div>
                    
                    <div>
                        <v-text-field
                        v-model="excerciseDescription"
                        :rules="descriptionRules"
                        :counter="60"
                        label="Description: "
                        required
                            />
                    </div> 
                    
                    <div>
                        <v-radio-group
                         v-model="inline"
                         inline 
                         required
                         :rules="radioRules">
                            <v-radio
                              label="Tiempo"
                              value="Tiempo"
                            ></v-radio>
                             <v-radio
                              label="Repeticiones"
                              value="Repeticiones"
                             ></v-radio>
                         </v-radio-group>
                    </div>

                    <div class="text-center">
                     <v-select v-model="icons" :items="icons" label="Icono"></v-select>
                        <v-menu :location="icons">
                        <v-list>
                           <v-list-item v-for="(icons, index) in items" :key="index">
                            <v-icon>{{ icons }}</v-icon>
                           </v-list-item>
                        </v-list>
                        </v-menu>
                    </div>
                <v-btn type="submit" class="mt-2">Crear</v-btn>
        </v-form>
        </v-sheet>

        
    </div>
</template>

<script>
    export default{
        data: ()=>({
            inline: null,
            valid: false,
            excerciseName: '',
            nameRules: [
                value => {
                    if(value) return true
                    return 'Name is required.'
                },
                value => {
                    if(value?.length <= 30) return true
                    return 'Name must be less than 30 characters.'
                },
            ],
            excerciseDescription: '',
            descriptionRules: [
                value =>{
                    if(value) return true
                    return 'Description required'
                },
                value=>{
                    if(value?.length <= 60) return true
                    return 'Description must be less than 60 characters'
                },
            ],
            radioRules: [
                value => {
                    if(value) return true
                    return 'A selection is required.'
                },
            ],

            

                icons: [
                    "image1",
                    "image2",
                    "image3"
                ]
        
        }),
    }

</script>

<style scoped>
    .title{
        text-align: center;
        margin: 10px;
    }
    div{
        align-items: center;
        text-align: center;
    }
    .mx-auto{
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
    }
    .form{
        margin: 10px;
        align-items: center;
    }
    .mt-2{
        width: 50%;
        text-align: center;
        background-color: whitesmoke;
        
    }
</style>