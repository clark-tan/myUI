<!--
 * @Autor: clark tan
 * @Date: 2021-12-21 14:02:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-17 11:56:05
 * @Description: 
-->
# PaMultipleSelect 多选下拉框

### 基本用法

:::demo

```html
<template>
  <div style="width: 1000px">
    <h2>示例一：下拉框-新增</h2>
    <div style="width: 500px; margin-bottom: 20px">
      <pa-multiple-select
        v-model="result1"
        :all-options="dataList1"
        :replace-fields="{ title: 'name', key: 'id' }" 
      />
    </div>
    <h2>示例二：下拉框-编辑回显（包含被禁用的历史数据）</h2>
    <div style="width: 500px; margin-bottom: 20px">
      <pa-multiple-select
        v-model="result2"
        :all-options="dataList2"
        :replace-fields="{ title: 'name', key: 'id' }"
        :filter-fields="{ key: 'status', value: 0 }"
        @change="handleChange"
      />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PahmMultipleSelect',
    data() {
      return {
        result1: [],
        result2: [1, 2],
        text: [],
        dataList1: [
          {
            id: 1,
            name: '选项1',
          },
          {
            id: 2,
            name: '选项2',
          },
          {
            id: 3,
            name: '选项3',
          },
        ],
        dataList2: [
          {
            id: 1,
            name: '选项1',
            status: 1,
          },
          {
            id: 2,
            name: '选项2是已被禁用的历史数据',
            status: 0,
          },
          {
            id: 3,
            name: '选项3',
            status: 1,
          },
        ],
      };
    },
    methods: {
      handleChange() {},
    },
  };
</script>
```

:::

# Attributes

| 参数      | 说明               | 类型   | 可选值 | 默认值 |
| --------- | ------------------ | ------ | ------ | ------ |
| v-model | 绑定值（结果集合）| array | -      | []    |
| all-options|下拉复选框选项集合（包含被禁用数据）| array | -      | []    |
| placeholder|复选框占位符）| string | -      | 请选择   |
| search-placeholder|复选框下拉框搜索项占位符| string | -      | 请输入   |
| replace-fields|替换下拉选项中的title、key字段| object | -      | {title: "title",key: "key"}   |
| filter-fields|替换需要被过滤的key、value字段| object | -      | {key: "valid",value: "0"}   |


# Methods

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| change  | 复选下拉框model值改变回调 | -    |
