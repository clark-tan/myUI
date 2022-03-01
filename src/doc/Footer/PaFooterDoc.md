# PaFooter 页脚/版权/copyright

### 基本用法


:::demo

```html
<template>
  <div style="text-align:center;">
    <pa-footer :img-url="logonCopyright" :copyright="'Copyright © 2021 中国平安医院管理集团（筹）科技赋能中心出品'" />
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
