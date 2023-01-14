<template>

    <kd-select :options="options" @select="select"  ></kd-select>
    <br>
  
  
  </template>
  
  <script setup lang='ts'>
  import { ref, reactive } from 'vue'
  const value = ref('')
  const label = ref('')
  const state = reactive({
    options: [
      {
        label: '苹果',
        value: 'Apple'
      },
      {
        label: '梨子',
        value: 'Pear'
      },
      {
        label: '橙子',
        value: 'Orange'
      },
      {
        label: '葡萄',
        value: 'Grape',
      },
      {
        label: '菠萝',
        value: 'pineapple'
      }
    ]
  })
  const { options } = state;

  const select = (e:any)=>{
    alert('当前选择为：'+e.label+',其值为：'+e.value+'。')
  }
  
  </script>
  
  <style scoped>
  
  </style>