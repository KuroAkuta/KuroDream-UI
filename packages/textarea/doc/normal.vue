<template>

    默认<br>
    <kd-textarea  :rows="10" :cols="30" placeholder="默认"></kd-textarea>
    <br>
    禁用<br>
    <kd-textarea  :rows="10" :cols="30" disabled placeholder="禁用"></kd-textarea>
    <br>
    只读<br>
    <kd-textarea  :rows="10" :cols="30" readonly v-model="readOnlyVal" placeholder="只读"></kd-textarea>
    <br>
    限制字数<br>
    <kd-textarea  :rows="10" :cols="30"   placeholder="限制字数(需配合v-model使用）" :maxlength="30" v-model="Val" ></kd-textarea>
    <br>
    禁止缩放<br>
    <kd-textarea  :rows="10" :cols="30"   placeholder="禁止缩放）" :resize="false" ></kd-textarea>



    
</template>
<script setup lang='ts'>
    import { ref, reactive } from 'vue'
    const readOnlyVal = ref('只读信息')
    const Val = ref('')
   
</script>

