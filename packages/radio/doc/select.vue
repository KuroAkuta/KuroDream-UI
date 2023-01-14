<template>
    <kd-radio :options="options" @select="select"></kd-radio>


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
            value:2
        },
        {
            label:'法国',
            value:3
        },
    ]
})

const {options} = state

const select = (item:any,ifSelected:boolean)=>{
    if(ifSelected){
        alert('当前选择为：'+item.label+', 其值为：'+item.value+'。')
    }else{
        alert('取消选择：'+item.label+', 其值为：'+item.value+'。')
    }
    
}
</script>

