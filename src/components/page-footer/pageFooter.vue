<!--
 * @Autor: clark tan
 * @Date: 2021-05-18 17:17:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-03-02 09:51:43
 * @Description: 
-->
<template>
  <div class="login-footer">
    <img v-if="imgUrl" :src="imgUrl" />
    <p>{{ copyright }}</p>
  </div>
</template>
<script>
export default {
  name: "PaFooter",
  props: {
    imgUrl: null,
    copyright: {
      type: String,
      defult: "Copyright © 2022",
    },
  },
};
</script>
<style lang="less" scoped>
.login-footer {
  padding: 35px 0 25px;
  font-size: 12px;
  color: #999;
}
</style>
