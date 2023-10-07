<template>
    <h1>My title</h1>
    <slot name="theHeader">Default value: No data was provided. ERROR.</slot>
    <span>I am between two slots! HELP</span>
    <slot name="theFooter">Default footer. ERROR.</slot>
    <slot name="lastSlot">This is a nuclear slot that will detonate in 5,4,3,2,1.</slot>
</template>

<script setup>

</script>