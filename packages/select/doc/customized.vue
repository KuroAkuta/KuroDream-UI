<template>

    <kd-select :options="options" filedLabel="name" filedValue="id"></kd-select>

  
  </template>
  
  <script setup lang='ts'>
  import { ref, reactive } from 'vue'

  const state = reactive({
    options: [
      {
        name: '苹果',
        id: 'Apple'
      },
      {
        name: '梨子',
        id: 'Pear'
      },
      {
        name: '橙子',
        id: 'Orange'
      },
      {
        name: '葡萄',
        id: 'Grape',
      },
      {
        name: '菠萝',
        id: 'pineapple'
      }
    ]
  })
  const { options } = state;
  </script>
  
  <style scoped>
  
  </style>