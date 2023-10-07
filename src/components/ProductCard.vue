<template>

    <div class="product">
        <div class="product-image">
            <img :src='image' alt="a logo">
            <!--LAS LLAVES NO FUNCIONAN EN LOS ATRIBUTOS, HAY QUE USAR :ATRIB='ALGO'-->
        </div>
        <div class="product-detail">
            <h2>{{ name }}</h2>
            <h3>{{ brand }}</h3>
            <p v-if="stock > 1"> We have {{ stock }} items in store</p>
            <p v-else-if="stock == 1">We have only one item left!</p>
            <p v-else>Out of Stock!</p>
            

            <p>Shipping: {{ shipping }}</p>

            <div class="colors">
                <div v-for="(variant, index) in variants" :key="variant.id" class="color-box" :style="{backgroundColor: variant.color}"
                @mouseover="updateVariant(index)"></div>
            </div>
            Qty: <input type="text" v-model="quantity"/>

        </div>
        Enter text: <input type="text" v-model="text"/> <!--El Vmodel usa el campo para actualizar la variable.-->
    </div>

    
    <!--
    {{ `Colors: ${colors[0]}` }}
    <ul>
        <li v-for="color in colors" :key="color">{{ color }}</li>
        
    </ul>
    <p>{{ titulo }}</p>
    -->
</template>

<script setup>
//  ref cambia todo el tiempo, computada solo hasta el siguiente calculo.
    import { computed } from 'vue';
import { ref } from 'vue';
  const name = ref("Medias Tecnicolor")
 // const stock = ref(1)
 //const colors = ref(['blue', 'green'])
  //const premium = ref(true)
  const quantity = ref(0)
  const shipping = computed(() => {
    return props.premium ? 'Free' : '$300'
  })
 /* const titulo = computed( () => {
    return `${name.value}` //   Esto solo se hace en los script, en los template se puede no hacer.
  })*/
  //const details = ref(['90% love', '10% polyester'])
  //    Como estoy en JS tengo que usar el .value!
  const variants = ref([
    {id: 23, color: 'green', image: 'favicon.ico', stock: 0},
    {id: 34, color: 'red', image: 'favicon.ico', stock: 10},
    {id: 45, color: 'black', image: 'favicon.ico', stock: 1},
    {id: 7, color:'orange', image:'robot.png', stock:70}
  ])
  const currentVariantIndex = ref(0)
  function updateVariant(index){
    
    if(index != currentVariantIndex.value){
        currentVariantIndex.value = index
        emits('variantUpdated', currentVariantIndex.value)
    }
  }
  const stock = computed( ()=>{
    return variants.value[currentVariantIndex.value].stock
  })

  const image = computed( ()=>{
    return variants.value[currentVariantIndex.value].image
  })

  const text = ref('')

  const props = defineProps(['brand', 'premium'])
  const emits = defineEmits(['variantUpdated'])
</script>

<style scoped>

img {

    height: 300px;

}


.product {

    width: 600px;

    display: flex;

    margin: 10px 0;

    justify-content: center;

    align-items: center;

    border-radius: 25px;

    border: 2px solid;

}


.product-image {

    padding-left: 20px;

}


.product-image, .product-detail {

    width: 320px;

}


.colors {

    display: flex;

}

.color-box {

    height: 28px;

    width: 28px;

    margin: 3px;

    border: 3px solid transparent;

}

.selected-box {

    border-color: white;

}

</style>