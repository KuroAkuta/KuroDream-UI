<template>
    <button :class="kdClass" :disabled="disabled">
            <span><slot></slot></span>
    </button>
</template>

<script lang='ts'>
export default {
    name: "kdButton"
}
</script>
<script setup lang='ts'>
import { ref, reactive, computed} from 'vue'
const props = defineProps({
    type:{
        type:String,
        default:"default"
    },
    disabled:Boolean,
    plain:Boolean,
})
const kdClass = computed(()=>{
    return [
        'kd-button',
        `kd-button-${props.type}`,
        props.disabled? 'kd-button-disabled':'',
        props.plain? 'kd-button-plain':'',
       
    ]
})





</script>

<style lang="scss" scoped>
.kd-button {
    border: 0;
    padding: 12px 24px;
    outline: none;
    background: none;
    line-height: 1;
    font-size: 14px;;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    border-radius: 4px;
    
    &:hover,&:focus{
        opacity: 0.8;
    }

}
.kd-button-default {
    color:#333;
    border: 1px solid #dcdfe6;
    background: white;


}
.kd-button-primary{
    color:#fff;
    background: $primary;
    border-color: $primary;
}
.kd-button-success{
    color:#fff;
    background: $success;
    border-color: $success;
}
.kd-button-warning{
    color:#fff;
    background: $warning;
    border-color: $warning;
}
.kd-button-info{
    color:#fff;
    background: $info;
    border-color: $info;
}
.kd-button-danger{
    color:#fff;
    background: $error;
    border-color: $error;
}
.kd-button-disabled{
    opacity: 0.4;
    cursor: no-drop;
    &:hover,&:focus{
        opacity: 0.4;       
        
    }
}
.kd-button-plain{
    border-radius: 20px;
}
</style>