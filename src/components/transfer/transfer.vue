<template>
  <el-transfer class="pa-transfer" v-bind="$attrs" v-on="$listeners" />
</template>
<script>
import Vue from "vue";
import { Transfer } from "element-ui";
Vue.use(Transfer);
export default {
  name: "PaTransfer",
};
</script>
<style lang="scss" scoped>
$color: #0066cc;
::v-deep.pa-transfer .el-transfer__button {
  border-radius: 2px;
  padding: 0 15px;
  height: 32px;
  line-height: 1;
  font-size: 14px;
  color: #333;

  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
}
::v-deep.pa-transfer .el-transfer__button:active {
  color: $color;
  background-color: #fff;
  border-color: $color;
}
::v-deep.pa-transfer .el-transfer__button:hover {
  color: $color;
  background-color: #fff;
  border-color: $color;
}
::v-deep.pa-transfer .el-button--primary.is-disabled.el-transfer__button {
  color: #999;
  cursor: not-allowed;
  background-image: none;
  background-color: #f5f7fa;
  border-color: #d8d8d8;
}
::v-deep.pa-transfer {
  .el-transfer-panel__filter {
    .el-input__inner {
      border-radius: 2px;
      &:focus {
        border-color: $color;
      }
    }
  }
  .el-transfer-panel__list::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .el-transfer-panel__list::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #d8d8d8;
  }
  .el-transfer-panel__item:hover {
    color: $color;
  }
  .el-transfer-panel__footer {
    display: flex;
    align-items: center;
  }
  .el-transfer-panel__empty {
    width: 191px;
    height: 98px;
    background-image: url("./assets/icon-nodata.png");
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    margin: auto;
    padding-top: 103px;
  }
}
</style>
