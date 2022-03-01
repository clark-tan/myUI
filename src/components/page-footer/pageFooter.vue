<!--
 * @Autor: clark tan
 * @Date: 2021-05-18 17:17:53
 * @LastEditors: clark tan
 * @LastEditTime: 2021-05-25 19:12:05
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
      defult: "Copyright © 2021 中国平安医院管理集团（筹）科技赋能中心出品",
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
