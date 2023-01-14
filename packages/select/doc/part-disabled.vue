<template>

    <kd-select :options="options"></kd-select>


</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

const state = reactive({
    options: [
        {
            label: '苹果',
            value: 'Apple'
        },
        {
            label: '梨子',
            value: 'Pear',
            disabled: true
        },
        {
            label: '橙子',
            value: 'Orange'
        },
        {
            label: '葡萄',
            value: 'Grape',
            disabled: true,
        },
        {
            label: '菠萝',
            value: 'pineapple'
        }
    ]
}) 
const { options } = state;
</script>

<style scoped>

</style>