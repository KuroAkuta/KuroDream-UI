<template>
    <div class="kd-radio">
        <div class="kd-item-radio" v-for="(item,index) in options" :key="index" 
            :class="{'kd-item-disabled-radio':item.disabled}">
            <span :class="{active:radioIndex == index}" @click="change(item,index)" ></span>
            {{ item[filedLabel] }}
        </div>

    </div>
   
</template>

<script lang='ts'>
export default{
name:"kdRadio" 
}
</script>
<script setup lang='ts'>
    import { ref, reactive, computed, type PropType } from 'vue'
    import { OptionsType } from './type'
    const emit = defineEmits(['select'])
    const props = defineProps({
        options:{
            type:Array as unknown as PropType<[OptionsType]>,
            default:[]
        },
        inline:{
            type:Boolean,
            default:false
        },
        filedLabel:{
            type:String,
            default:"label"
        },
        filedValue:{
            type:String,
            default:"value"
        }
    })
    const radioIndex = ref(-1);
    const isInline = ref('inline-flex')
    props.inline?isInline.value = 'inline-flex' : isInline.value = 'flex'
    
    const inlineStyle = computed(()=>{
        props.inline?'inline-flex':'flex'
    })
    const change = (item:any,index:number)=>{
        if(!item.disabled){
            if(radioIndex.value != index){
                radioIndex.value = index;
                emit('select',item,1);
            }else{
                radioIndex.value = -1;
                emit('select',item,0);
            }
            
        }
        
    }

</script>

<style lang='scss' scoped>
.kd-radio {
    width: auto;
    height: auto;
    overflow: hidden;
   
    .kd-item-radio{
        width: auto;
        height:auto;
        overflow: hidden;
        display: v-bind(isInline);
        align-items:center ;
        line-height: 20px;
        
        font-size: 14px;
        margin-right: 15px;
        user-select: none;
        
        span{
            width: 14px;
            height: 14px;
            position: relative;
            display: inline-block;
            cursor: pointer;
            border-radius: 50%;
            border: 1px solid rgb(125,125,125);
            margin: 3px 8px 0 0 ;
            background: #fff;
            transition: transform 0.15s ease-in;
           
            &::after{
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -2px 0 0 -2px;
                transition: transform 0.15s ease-in;
            }
        }
        span.active{
            background: $primary;
            border: 1px solid $primary;
        }
    }
    .kd-item-disabled-radio{
        
        color:#808080;
        span{
            cursor: no-drop;
            border: 1px solid #ebebeb;
            background-color: #ebebeb;
            &::after{
                background-color: #999;
            }
        }
    }
}
</style>