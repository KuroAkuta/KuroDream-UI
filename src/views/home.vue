<template>
    <div class="container">
        <div class="title">
            KuroDream UI <br>
            for Vue3 + Vite + Typesript( as any ) <br>

        </div>
        
        
    </div>
</template>

<script setup lang='ts'>
   import { ref, reactive } from 'vue' ;
</script>

<style scoped>
.container{
    margin-top: 5vh;
    widows: 100%;
    height: 100vh;
    
}
.title{
    width: 100vh;
    height: 40vh;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-weight: bold;
    line-height: 50px;
    font-size: 20px;
}
</style>