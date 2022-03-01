<!--
 * @Autor: clark tan
 * @Date: 2021-12-21 14:02:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-05 14:13:05
 * @Description: 
-->
# PaPopConfirm 图标

### 基本用法

:::demo

```html
<template>
  <div style="text-align:center;">
    <pa-pop-confirm :title="'我是字符串那就行'" :cancel-button-text="'否'" :confirm-button-text="'是'" @confirm="confirmHandler" @cancel="cancelHandler">
      <pa-button>删除</pa-button>
    </pa-pop-confirm>
  </div>
</template>
<script>
  export default {
    name: 'PahmPopConfirm',
    data() {
      return {};
    },
    methods: {
      confirmHandler() {
        window.console.log('confirmHandler');
      },
      cancelHandler(){
        window.console.log('cancelHandler');
      },
    },
  };
</script>
```

:::
