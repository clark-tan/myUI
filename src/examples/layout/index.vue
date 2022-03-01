<!--
 * @Autor: clark tan
 * @Date: 2021-05-26 14:55:33
 * @LastEditors: clark tan
 * @LastEditTime: 2021-05-26 17:45:21
 * @Description:
-->
<template>
  <div class="app-wrapper">
    <navbar />
    <div class="main-container">
      <sidebar class="sidebar-container" />
      <app-main />
    </div>
  </div>
</template>
<script>
import AppMain from "./components/AppMain";
import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar/index";
export default {
  name: "Layout",
  components: {
    AppMain,
    Navbar,
    Sidebar,
  },
};
</script>
<style lang="scss" scoped>
.app-wrapper {
  clear: both;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.main-container {
  height: calc(100vh - 48px);
  transition: margin-left 0.28s;
  position: relative;
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 1280px) {
  .main-container {
    overflow-x: auto;
  }
}
.sidebar-container {
  transition: width 0.28s;
  // width:320px !important;
  height: calc(100vh - 48px);
  overflow: hidden;
  flex-shrink: 0;
}
</style>
<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
</style>
