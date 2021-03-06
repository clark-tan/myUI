# PaInputNumber 数字输入框

### 基本用法


:::demo

```html
<template>
  <div>
    <pa-input-number v-model="value" :min="1" :max="10" label="描述文字" style="width: 150px" />
    <pa-input-number :value.sync="value" :precision="2" :step="0.1" :max="10" />
    <pa-input-number :value.sync="value" controls-position="right" :min="1" :max="10" />
  </div>
</template>
<script>
  export default {
    name: 'PahmInputNumber',
    data() {
      return {
        value: 1,
      };
    },
    methods: {},
  };
</script>
```

:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| value    | 绑定值         | number | — | — |
| min      | 设置计数器允许的最小值 | number | — | -Infinity |
| max      | 设置计数器允许的最大值 | number | — | Infinity |
| step     | 计数器步长           | number   | — | 1 |
| precision| 数值精度             | number   | — | — |
| size     | 计数器尺寸           | string   | large, small | — |
| disabled | 是否禁用计数器        | boolean | — | false |
| controls | 是否使用控制按钮        | boolean | — | true |
| controls-position | 控制按钮位置 | string | right | - |
| name | 原生属性 | string | — | — |
| label | 输入框关联的label文字 | string | — | — |
### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 绑定值被改变时触发 | 最后变更的值 |
| blur | 在组件 Input 失去焦点时触发 | (event: Event) |
| focus | 在组件 Input 获得焦点时触发 | (event: Event) |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
