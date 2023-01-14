## 这是radio
<script setup>
    import normal from './normal.vue'
    import disabled from './disabled.vue'
    import inline from './inline.vue'
    import customized from './customized.vue'
    import selectEvent from './select.vue'

    import preview from '@/components/preview.vue'
</script>



### 默认
<normal/>
<preview comp-name="radio" demo-name="normal"></preview>

### 部分禁用
<disabled/>
<preview comp-name="radio" demo-name="disabled"></preview>

### 横向排列
<inline/>
<preview comp-name="radio" demo-name="inline"></preview>

### 自定义选项键值名
<customized/>
<preview comp-name="radio" demo-name="customized"></preview>

### 绑定选项事件
<select-event/>
<preview comp-name="radio" demo-name="select"></preview>