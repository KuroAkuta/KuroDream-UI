<template>
    <ul>
        <li style="flex:1"><a href="#">KuroDream UI</a></li>

        <li><a href="#guide">快速开始</a></li>
        <li><a href="https://github.com/KuroAkuta/KuroDream-UI" target="_blank">Github</a></li>


    </ul>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<style scoped lang="scss">
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: $coffee;
    position: fixed;
    top: 0;
    width: 100%;
    height: 5vh;
    display: flex;


    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;

    li a {
        display: block;
        color: white;

        padding: 0px 16px;
        text-decoration: none;


    }



}



/*鼠标移动到选项上修改背景颜色 */
</style>