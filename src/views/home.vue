<template>
    <div class="navigation">
        <div class="title">KuroDream UI</div>
    </div>
    <div class="container">
       
        <div class="left-menu">
            <li v-for="(item,index) in menuList[0].children"
                :key="index" :class="{active:activeIndex == index}"
                @click="switchMenu(item,index)">{{item.name}}</li>
        </div>
        <div class="rouer-view">
            <router-view></router-view>
        </div>
        
        
    </div>
</template>

<script setup lang='ts'>
   import { ref, reactive } from 'vue'
   import  menuList from '../router/routerPage/page'
   import { useRouter } from 'vue-router';
   

  
   
   const router = useRouter();
   //根据url激活li
   const nowName =   ref(router.currentRoute.value.name);
   let nowIndex = 0;
   for(let i = 0; i < menuList[0].children.length; i++) {
    if(menuList[0].children[i].name == nowName.value) {
        nowIndex = i;
   }
}
   const activeIndex = ref(nowIndex);


   const switchMenu = (item:any, index:number) => {
        activeIndex.value = index;
        router.push({
            name: item.name
        })
        //console.log(router);
   }

</script>

<style lang="scss" scoped>
.navigation{
    width: 100%;
    height: 5%;
    display: flex;
    background-color: #473838;
    position: fixed;
    top: 0;
    z-index: 999;
    .title{
        color: rgb(247,231,201);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 30px;
        font-size: 20px;
        font-weight: bold;
    }
   
    

}
.container{
    margin-top: 5vh;
    widows: 100%;
    height: 100vh;
    display: flex;
    
   
    .left-menu{
        width: 10%;
        height: auto;
        overflow-y: auto;
        border-right: 1px solid #f0f0f0;
        position: fixed;
        height: 100vh;
        li{
            list-style: none;
            line-height: 40px;
            padding:  10px;
            box-sizing: border-box;
            cursor: pointer;
            border-bottom: 2px solid #f0f0f0;
        }
        li.active{
            border-right: 4px solid blue;
            color: rgb(0, 0, 253);
            background: #cedbfe;
        }
        
        /*滚动条*/
        &::-webkit-scrollbar {
        width: 8px;
        }
        /*滚动条本体*/
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: rgba(0,0,0,0.2);
        }
        /*滚动条外轨道*/
        &::-webkit-scrollbar-track {
            border-radius: 0;
            background: rgba(0, 0, 0, 0.1);
        }
    }
   


}

.rouer-view{
    flex:1;
    height: auto;
    overflow-y: auto;
    padding: 0 15px;
    box-sizing: border-box;
    display: fixed;
    margin-left: 10%;
}
</style>
