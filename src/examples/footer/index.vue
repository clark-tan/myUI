<!--
 * @Autor: clark tan
 * @Date: 2021-06-28 16:48:10
 * @LastEditors: clark tan
 * @LastEditTime: 2022-03-02 09:51:56
 * @Description: 
-->
<template>
  <div class="footer-container">
    <pa-Footer :img-url="logoCopyright" :copyright="'Copyright © 2021'" />
  </div>
</template>
<script>
import logoCopyright from "@/example/logo-copyright.svg";
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
