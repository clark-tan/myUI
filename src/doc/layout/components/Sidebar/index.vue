<!--
 * @Autor: clark tan
 * @Date: 2021-12-21 14:02:53
 * @LastEditors: clark tan
 * @LastEditTime: 2021-12-21 15:13:59
 * @Description: 
-->
<template>
  <pa-menu :menu="menu" :is-tree="true" :permission="permission" />
</template>
<script>
import menuJson from "../../../component.json";
export default {
  name: "Sidebar",
  data() {
    return {
      collapse: false,
      menu: menuJson,
      permission: ["ONE"],
    };
  },
  computed: {},
  mounted() {
    // console.log(this.$route.path);
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
