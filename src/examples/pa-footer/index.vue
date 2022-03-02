<!--
 * @Autor: clark tan
 * @Date: 2021-05-24 20:30:56
 * @LastEditors: clark tan
 * @LastEditTime: 2022-03-02 09:40:50
 * @Description: 
-->
<template>
  <div style="text-align: center">
    <pa-footer :img-url="logonCopyright" :copyright="'Copyright © 2022'" />
    <pa-footer :img-url="logonCopyright" />
  </div>
</template>
<script>
import logonCopyright from "../logo-copyright.svg";
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
