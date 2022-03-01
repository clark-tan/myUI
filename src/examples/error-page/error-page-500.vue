<!--
*   Copyright (c) 2021,xxxx.
*   All rights reserved.
*
*   Author: wanlicheng
-->
<template>
  <div style="height: 100%; padding: 0 16px; background: #edf1f7">
    <div class="errorPageDemo">
      <pa-error-page type="500" :footerShow="true" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ErrorPageDemo",
};
</script>
<style scoped lang="less">
.errorPageDemo {
  height: 100%;
  background: #fff;
}
</style>
