# PaCheckBox 多选框

### 基本用法

:::demo

```html
<template>
  <div>
    <pa-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </pa-checkbox>
    <pa-checkbox-group v-model="checkedList" @change="handleGroupChange">
      <pa-checkbox
        v-for="item in checkOptions"
        :key="item.value"
        :label="item.value"
      >
        {{ item.name }}
      </pa-checkbox>
    </pa-checkbox-group>
    <pa-checkbox v-model="disabledCheck" disabled> 禁用 </pa-checkbox>
  </div>
</template>
<script>
  export default {
    name: "PahmCheckbox",
    data() {
      return {
        checkAll: false,
        isIndeterminate: true,
        disabledCheck: false,
        checkedList: [1],
        checked: true,
        checkOptions: [
          {
            name: "a",
            value: 1,
          },
          {
            name: "b",
            value: 2,
          },
        ],
      };
    },
    methods: {
      handleCheckAllChange(val) {
        let allCode = [];
        this.checkOptions.map((item) => allCode.push(item.value));
        this.checkedList = val ? allCode : [];
        this.isIndeterminate = false;
      },
      handleGroupChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.checkOptions.length;
        this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.checkOptions.length;
      },
    },
  };
</script>
```

:::

### Checkbox Attributes

| 参数          | 说明                                                                  | 类型                      | 可选值                | 默认值 |
| ------------- | --------------------------------------------------------------------- | ------------------------- | --------------------- | ------ |
| label         | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string / number / boolean | —                     | —      |
| true-label    | 选中时的值                                                            | string / number           | —                     | —      |
| false-label   | 没有选中时的值                                                        | string / number           | —                     | —      |
| disabled      | 是否禁用                                                              | boolean                   | —                     | false  |
| border        | 是否显示边框                                                          | boolean                   | —                     | false  |
| size          | Checkbox 的尺寸，仅在 border 为真时有效                               | string                    | medium / small / mini | —      |
| name          | 原生 name 属性                                                        | string                    | —                     | —      |
| checked       | 当前是否勾选                                                          | boolean                   | —                     | false  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制                               | boolean                   | —                     | false  |

### Checkbox Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-group Attributes

| 参数       | 说明                                                             | 类型    | 可选值                | 默认值  |
| ---------- | ---------------------------------------------------------------- | ------- | --------------------- | ------- |
| size       | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string  | medium / small / mini | —       |
| disabled   | 是否禁用                                                         | boolean | —                     | false   |
| min        | 可被勾选的 checkbox 的最小数量                                   | number  | —                     | —       |
| max        | 可被勾选的 checkbox 的最大数量                                   | number  | —                     | —       |
| text-color | 按钮形式的 Checkbox 激活时的文本颜色                             | string  | —                     | #ffffff |
| fill       | 按钮形式的 Checkbox 激活时的填充色和边框色                       | string  | —                     | #409EFF |

### Checkbox-group Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-button Attributes

| 参数        | 说明                                                                  | 类型                      | 可选值 | 默认值 |
| ----------- | --------------------------------------------------------------------- | ------------------------- | ------ | ------ |
| label       | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string / number / boolean | —      | —      |
| true-label  | 选中时的值                                                            | string / number           | —      | —      |
| false-label | 没有选中时的值                                                        | string / number           | —      | —      |
| disabled    | 是否禁用                                                              | boolean                   | —      | false  |
| name        | 原生 name 属性                                                        | string                    | —      | —      |
| checked     | 当前是否勾选                                                          | boolean                   | —      | false  |
