## 这是select
<script setup>
    import normal from './normal.vue'
    import disabled from './disabled.vue'
    import partDisabled from './part-disabled.vue'
    import customized from './customized.vue'
    import model from './model.vue'
    import selectEvent from './select.vue'

    import preview from '@/components/preview.vue'
</script>



### 默认
<normal/>
<preview comp-name="select" demo-name="normal"></preview>

### 禁用
<disabled/>
<preview comp-name="select" demo-name="disabled"></preview>

### 选项禁用
<part-disabled/>
<preview comp-name="select" demo-name="part-disabled"></preview>

### 自定义选项键值名 
默认为：label：value

此处修改为：name:id

<customized/>
<preview comp-name="select" demo-name="customized"></preview>

### v-model绑定
<model/>
<preview comp-name="select" demo-name="model"></preview>

### 选项触发事件
<select-event/>
<preview comp-name="select" demo-name="select"></preview>