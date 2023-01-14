<template>
    <kd-radio :options="options"></kd-radio>


</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

const state = reactive({
    options:[
        {
            label:'中国',
            value:1
        },
        {
            label:'美国',
            value:2,
            disabled:true
        },
        {
            label:'法国',
            value:3
        },
    ]
})

const {options} = state

</script>

