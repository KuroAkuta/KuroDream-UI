<template>

  <div class="bg">
    <navigation></navigation>
    <router-view></router-view>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import navigation from './components/navigation.vue';

</script>

<style lang="scss">
body,
html {
  margin: 0;
  font-size: 16px;
}

.bg {
  width: 100%;
  height: 100%;
  background-color: rgba(228, 176, 64, 0.301);
}
</style>