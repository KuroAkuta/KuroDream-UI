<template>
    <div :class="kdClass">
        <input :type="type" class="" :value="modelValue" @input="input" :placeholder="placeholder" :disabled="disabled" :clearable="clearable">
        <span class="clear-icon" :style="clearStyle" @click="clearInput"><i>x</i></span>
    </div>

</template>
<script lang='ts'>
export default {
    name: "kdInput",
}
</script>
<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'

//外部传值双向绑定更新
const emit = defineEmits(['update:modelValue'])
const input = (e: any) => {
    emit('update:modelValue', e.target.value)
}

//接收
const props = defineProps({
    modelValue: {
        type:String,
        default:"",
    },
    placeholder: String,
    disabled: Boolean,
    clearable:Boolean,
    type:String,
})

//disable定制class
const kdClass = computed(() => {
    return [
        'kd-input',
        {
            'kd-input-disabled': props.disabled,
        }
    ]
})

//清除文本
const clearStyle = computed(() => {
    return[
        {
            'display':props.clearable?props.modelValue ? 'block' : 'none' : 'none',
            
        }
    ]
})
const clearInput = () =>{
    emit('update:modelValue', '')
    
}



</script>

<style scoped lang="scss">
//基础样式
.kd-input {
    display: inline-block;
    min-width: 250px;
    position: relative;

    input {
        outline: none;
        border: 1px solid $border;
        line-height: 1;
        padding: 10px 8px;
        width: 100%;
        font-size: 14px;
        color: $input;
        border-radius: 4px;
        transition: all .15s ease;

        &:hover,
        &:focus {
            border-color: $primary;
        }

    }

    .clear-icon {
        position: absolute;
        top: 6px;
        right: 4px;
        cursor:pointer;
    }
}

//禁用样式
.kd-input-disabled {
    input {
        cursor: no-drop;
    }

}
</style>