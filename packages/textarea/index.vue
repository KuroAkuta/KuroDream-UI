<template>
    <div class="kd-textarea">
        <textarea  :cols="cols" :rows="rows" :value="modelValue" @input="input" :disabled="disabled" :readonly="readonly"
        :placeholder="placeholder"></textarea>
    </div>
    
</template>

<script lang='ts'>
export default{
name:"kdTextarea" 
}
</script>
<script setup lang='ts'>
    import { ref, reactive, computed } from 'vue'
    //接收value
    const props = defineProps({
        modelValue: {
            type: String,
            default: ''
        },
        rows:{
            type: Number,
            default: 10
        },
        cols:{
            type: Number,
            default: 50
        },
        disabled:Boolean,
        readonly :Boolean,
        placeholder: String,
    })
    //双向绑定
    const emit = defineEmits(['update:modelValue'])
    const input = (e:any) => {
        emit('update:modelValue',e.target.value);
    }

</script>

<style lang='scss' scoped>
.kd-textarea{
    width: auto;
    height: auto;
    display: inline-block;
    overflow: hidden;
    textarea{
        outline: none;
        padding: 8px 8px 10px 8px ;
        border-radius: 8px;
        font-size: 14px;
        font-family: auto;
        color: $input;
        &:focus{
            border: 1px solid $primary;
        }
    }
    textarea::placeholder{
        color: #c6c8cc;
    }
}

</style>