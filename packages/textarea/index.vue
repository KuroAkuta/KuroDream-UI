<template>

    <div class="kd-textarea">
        <textarea :cols="cols" :rows="rows" :value="modelValue" @input="input" :disabled="disabled" :readonly="readonly"
            :placeholder="placeholder" @focus="focus" @blur="blur" :style="kdStyle" :maxlength="maxlength"></textarea>
        <div class="max-lenth-inline">
            {{ showTextNum }}
        </div>
    </div>






</template>

<script lang='ts'>
export default {
    name: "kdTextarea"
}
</script>
<script setup lang='ts'>
import { Style } from 'util';
import { ref, reactive, computed } from 'vue'
//双向绑定
const emit = defineEmits(['update:modelValue', 'focus', 'blur',])

//接收value
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    rows: {
        type: Number,
        default: 10
    },
    cols: {
        type: Number,
        default: 50
    },
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    maxlength: Number,
    resize: {
        type: Boolean,
        default: true,
    }

})

//字数
const textNum = ref(0);
const showTextNum = ref('');
if (props.maxlength) {
    showTextNum.value = textNum.value.toString() + '/' + props.maxlength;
}

//input
const input = (e: any) => {
    if (props.maxlength) {
        textNum.value = e.target.value.length;
        if (props.maxlength && textNum.value > props.maxlength) {
            textNum.value = props.maxlength;
        }
        showTextNum.value = textNum.value.toString() + '/' + props.maxlength;
    }

    emit('update:modelValue', e.target.value);
    console.log(e.target.value.length);

}
//focus
const focus = (e: any) => {
    emit('focus', e);
}
//blur
const blur = (e: any) => {
    emit('blur', e);
}
//resize
const kdStyle = computed(() => {
    return [
        {
            'resize': props.resize ? 'auto' : 'none',
        },

    ]
}) as any;
</script>

<style lang='scss' scoped>
.kd-textarea {
    width: auto;
    height: auto;
    display: inline-block;
    overflow: hidden;
    position: relative;

    textarea {
        outline: none;
        padding: 8px 8px 10px 8px;
        border-radius: 8px;
        font-size: 14px;
        font-family: auto;
        color: $input;

        &:focus {
            border: 1px solid $primary;
        }
    }

    textarea::placeholder {
        color: #c6c8cc;
    }

    .max-lenth-inline {
        line-height: 20px;
        font-size: 12px;
        color: #9a9ca0;
        position: absolute;
        bottom: 10px;
        right: 5px;
        box-sizing: border-box;


    }
}
</style>