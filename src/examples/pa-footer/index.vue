<!--
 * @Autor: clark tan
 * @Date: 2021-05-24 20:30:56
 * @LastEditors: clark tan
 * @LastEditTime: 2021-06-28 11:46:42
 * @Description: 
-->
<template>
  <div style="text-align: center">
    <pa-footer
      :img-url="logonCopyright"
      :copyright="'Copyright © 2021 中国平安医院管理集团（筹）科技赋能中心出品'"
    />
    <pa-footer :img-url="logonCopyright" />
  </div>
</template>
<script>
import logonCopyright from "../logo-copyright.png";
export default {
  name: "PahmFooter",
  data() {
    return {
      logonCopyright,
    };
  },
  methods: {},
};
</script>
