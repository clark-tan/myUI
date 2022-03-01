<!--
 * @Autor: clark tan
 * @Date: 2021-05-26 14:55:33
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-21 15:57:56
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
  ::v-deep * {
    box-sizing: border-box;
  }
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
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  min-width: 1366px;
  overflow: auto;
}
* {
  box-sizing: border-box;
}
pre {
  code {
    line-height: 1.8;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
    display: block;
    overflow-x: auto;
  }
}

.template-demo {
  margin-bottom: 24px;
  // border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  background: #fff !important;
  width: 100% !important;
  box-shadow: 0 0 1rem rgb(9 41 77 / 8%);
  .template-views {
    padding: 16px;
    background: #edf1f7;
  }

  > div {
    &:last-child {
      border-top: 1px solid #eaeefb;
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;

      span {
        color: #06c;

        &:last-child {
          margin-right: 16px;
        }
      }
    }
  }
}

.demo-content {
  > table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;

    th {
      text-align: left;
      white-space: nowrap;
      color: #909399;
      font-weight: 400;
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      max-width: 250px;
      padding-left: 10px;
    }

    td {
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      max-width: 250px;
      color: #606266;
      padding-left: 10px;
    }
  }
}
.el-row {
  margin-bottom: 16px;
}
.ace-tm .ace_print-margin {
  background: none !important;
}
</style>
