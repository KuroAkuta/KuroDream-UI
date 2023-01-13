<template>
    <div class="kd-select" v-clickOutside>
        <input type="text" readonly :value="selectLabel">
        <div class="kd-position-box" v-if="positionShow">
            <li v-for="(item ,index) in options" :key="index" @click="select(item)">{{item.label}}</li>
        </div>
    </div>
</template>

<script lang='ts'>
export default {
    name: "kdSelect"
}
</script>
<script setup lang='ts'>
import { ref, reactive, computed, type PropType} from 'vue'
import { OptionsType } from './type'

const props = defineProps({
    options:{
        type:Array as unknown as PropType<[OptionsType]>,
        default:[],
    }
})
const positionShow = ref(false);
const selectLabel = ref('')

const vClickOutside = {
    beforeMount(el:HTMLElement) {
       
        let handler = (e:any) =>{
           
            if(el.contains(e.target)){
                positionShow.value = true;
            }else{
                positionShow.value = false;
            }
        }
        document.addEventListener('click',handler)
    },
}

const select = (item:OptionsType) =>{
    selectLabel.value = item.label;
}
</script>

<style lang='scss' scoped>
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
        height:auto;
        overflow: hidden;
        position: absolute;
        top:42px;
        border: 1px solid $border;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.2) ;
        li{
            list-style: none;
            line-height: 40px;
            padding:0 10px;
            box-sizing: border-box;
            cursor: pointer;
            font-size: 15px;
            background-color: $milk;
            &:hover{
                background-color: #f0f0f0;
            }
        }
    }
}
</style>