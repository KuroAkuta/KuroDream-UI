<template>

    <div class="kd-select" v-clickOutside>
        <input type="text" readonly :value="selectLabel" :disabled="disabled" :placeholder="placeholder">
        <span class="select-icon" ><i>v</i></span>
        <transition name="slide-fade">
            <div class="kd-position-box" v-if="positionShow">
                <li v-for="(item, index) in options" :key="index" @click="select(item,index)"
                    :class="{ 'item-disabled-li': item.disabled,'item-active-li':activeIndex == index}">{{ item[filedLabel] }}</li>
            </div>
        </transition>
    </div>

</template>

<script lang='ts'>
export default {
    name: "kdSelect"
}
</script>
<script setup lang='ts'>
import { ref, reactive, computed, type PropType } from 'vue'
import { OptionsType } from './type'

const emit = defineEmits(['select','update:modelValue',]);

const props = defineProps({
    options: {
        type: Array as unknown as PropType<[OptionsType]>,
        default: [],
    },
    disabled: Boolean,
    filedLabel: {
        type: String,
        default: 'label',
    },
    filedValue: {
        type: String,
        default: 'value',
    },
    placeholder:String,
    modelValue:String,
})


const positionShow = ref(false);
const selectLabel = ref(props.modelValue)
const activeIndex = ref(-1)
props.options.forEach((item,index)=>{
    if(item[props.filedValue] == props.modelValue){
        selectLabel.value = item[props.filedLabel]
        activeIndex.value = index
    }
})
//弹窗选项
const vClickOutside = {
    beforeMount(el: HTMLElement) {

        let handler = (e: any) => {
            if (!props.disabled) {
                if (el.contains(e.target)) {
                    positionShow.value = true;
                } else {
                    positionShow.value = false;
                }
            }


        }
        document.addEventListener('click', handler)
    },
}

const select = (item: OptionsType, index:number) => {
    
    if (!item.disabled) {
        activeIndex.value = index;
        selectLabel.value = item[props.filedLabel];
        emit('update:modelValue', item[props.filedValue])
        emit('select', item);
        

        setTimeout(() =>{
            positionShow.value = false;
        },0)
    }

}
</script>

<style lang='scss' scoped>
input{
    cursor: context-menu;
}
.select-icon{
    position: absolute;
    top: 6px;
    right: 15px;
       
}
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

.kd-select {
    min-width: 250px;
    display: inline-block;
    height: 40px;
    position: relative;

    input {
        border: 1px solid $border;
        padding: 8px 10px;
        outline: none;
        width: 100%;
        box-sizing: border-box;

    }

    .kd-position-box {
        width: 100%;
        height: auto;
        overflow: hidden;
        position: absolute;
        top: 42px;
        border: 1px solid $border;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
        z-index: 99;

        li {
            list-style: none;
            line-height: 40px;
            padding: 0 10px;
            box-sizing: border-box;
            cursor: pointer;
            font-size: 15px;
            background-color: white;
            border-bottom: 1px solid $border;


            &:hover {
                background-color: #f0f0f0;
            }
        }

        .item-disabled-li {
            cursor: no-drop;
            color: #808080;
            background-color: #f0f0f0;
        }

        .item-active-li{
            color: $primary;
        }
    }
}
</style>