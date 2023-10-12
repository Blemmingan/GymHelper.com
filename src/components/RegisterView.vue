<template>
     <div class="globalDiv">
        <div>
        <h1 class="title">GYMHELPER.COM</h1>
        <v-sheet width="600" class="mx-auto">
            <v-form  @submit.prevent>         
                    <div>
                        <v-text-field
                        v-model="userName"
                        :rules="nameRules"
                        :counter="26"
                        label="New Username"
                        required 
                        
                        />
                    </div>
                    
                    <div>
                        <v-text-field
                        v-model="password"
                        :rules="passRules"
                        :counter="26"
                        label="New Password"
                        required
                            />
                    </div>                
                <v-btn type="submit" class="mt-2">Registrarse</v-btn>
        </v-form>
        <a href="/login">Login</a>
        </v-sheet>

        
    </div>
    </div>
</template>

<script>
    export default{
        data: ()=>({
            valid: false,
            userName: '',
            nameRules: [
                value => {
                    if(value) return true
                    return 'Username required.'
                },
                value => {
                    if(value?.length <= 26) return true
                    return 'Username must be less than 26 characters.'
                },
            ],
            password: '',
            passRules: [
                value =>{
                    if(value) return true
                    return 'Password required'
                },
                value=>{
                    if(value?.length <= 26) return true
                    return 'Password must be less than 26 characters'
                },
            ],
        }),
    }
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
    .title{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .globalDiv{
        background-image: url('background.jpg');
        height: 100vh;
        background-size: cover;
    }
    
</style>