<!--
 * @Autor: clark tan
 * @Date: 2021-06-28 16:48:10
 * @LastEditors: clark tan
 * @LastEditTime: 2021-06-29 10:46:50
 * @Description: 
-->
<template>
  <div class="footer-container">
    <pa-Footer
      :img-url="logoCopyright"
      :copyright="'Copyright © 2021 中国平安医院管理集团（筹）科技赋能中心出品'"
    />
  </div>
</template>
<script>
import logoCopyright from "@/assets/img/logo-copyright.png";
export default {
  data() {
    return {
      logoCopyright,
    };
  },
};
</script>
<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
