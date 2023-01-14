<template>
    <kd-radio :options="options" filedLabel="name" filedValue="id"></kd-radio>


</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

const state = reactive({
    options:[
        {
            name:'中国',
            id:1
        },
        {
            name:'美国',
            id:2
        },
        {
            name:'法国',
            id:3
        },
    ]
})

const {options} = state

</script>

