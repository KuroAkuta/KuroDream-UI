## 这是button
<script setup>
    import normal from './normal.vue'
    import disabled from './disabled.vue'
    import round from './round.vue'


    import preview from '@/components/preview.vue'
</script>

### 基础按钮
<normal/>
<preview comp-name="button" demo-name="normal"></preview>


### 禁用按钮
<disabled/>
<preview comp-name="button" demo-name="disabled"></preview>

### 圆角按钮
<round/>
<preview comp-name="button" demo-name="round"></preview>
