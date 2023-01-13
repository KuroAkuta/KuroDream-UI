<template>
    <kd-input placeholder="默认" clearable></kd-input>
    <br><br>
    <kd-input placeholder="禁用" disabled></kd-input>
    <br><br>
    <kd-input v-model="Val" placeholder="可清除(需配合v-model使用）" clearable></kd-input>
    <p>此处绑定三号输入框的值：{{Val}}</p>
    
</template>

<script setup lang='ts'>
    import { ref, reactive } from 'vue'
    const Val = ref("");
</script>

