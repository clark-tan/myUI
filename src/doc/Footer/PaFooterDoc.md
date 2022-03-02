<!--
 * @Autor: clark tan
 * @Date: 2021-12-21 14:02:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-03-02 09:52:30
 * @Description: 
-->
# PaFooter 页脚/版权/copyright

### 基本用法


:::demo

```html
<template>
  <div style="text-align:center;">
    <pa-footer :img-url="logonCopyright" :copyright="'Copyright © 2022'" />
    <pa-footer :img-url="logonCopyright" />
  </div>
</template>
<script>
  export default {
    name: 'PahmFooter',
    data() {
      const logonCopyright = window.logonCopyright
      return {
        logonCopyright,
      };
    },
    methods: {},
  };
</script>
```

:::
