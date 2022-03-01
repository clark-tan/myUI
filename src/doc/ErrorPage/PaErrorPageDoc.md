<!--
 * @Autor: clark tan
 * @Date: 2021-12-21 14:02:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-13 10:06:16
 * @Description: 
-->
# PaErrorPage 错误页面

### 基本用法

:::demo

```html
<template>
  <div>
    <pa-error-page type="404" />
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
  };
</script>
```

:::

### 带插槽的

:::demo

```html
<template>
  <div>
    <pa-error-page type="302" message="这是自定义错误">
      <pa-button slot="foot">
        返回上一页
      </pa-button>
    </pa-error-page>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
  };
</script>
```

:::

### 暂无数据

:::demo

```html
<template>
  <div>
    <pa-error-page
      type="no-data"
      message="这是暂无数据"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
  };
</script>
```

:::

# Attributes

| 参数 | 说明                   | 类型   | 可选值                         | 默认值 |
| ---- | ---------------------- | ------ | ------------------------------ | ------ |
| type | 表示错误的显示页面信息 | String | 404/403/500/200/no-data ｜ 404 |
