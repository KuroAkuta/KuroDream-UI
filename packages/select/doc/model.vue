<template>

    <kd-select :options="options"  v-model="val"></kd-select>
    <br>
  value: {{ val }}
    
  
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
  const val = ref('Apple');

  
  </script>
  
  <style scoped>
  
  </style>