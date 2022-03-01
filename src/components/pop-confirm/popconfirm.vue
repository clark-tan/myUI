<!--
 * @Autor: boqi wang
 * @Date: 2021-06-16 17:15:53
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-05 14:20:10
 * @Description: 
-->
<template>
  <el-popconfirm
    slot="reference"
    v-bind="$options.propsData"
    :icon="icon"
    @confirm="$emit('confirm')"
    @cancel="$emit('cancel')"
  >
    <template v-slot:reference>
      <slot />
    </template>
  </el-popconfirm>
</template>
<script>
import Vue from "vue";
import { Popconfirm } from "element-ui";
Vue.use(Popconfirm);
export default {
  name: "PaPopConfirm",
  props: {
    title: {
      type: String,
      default: "",
    },
    confirmButtonText: {
      type: String,
      default: "",
    },
    confirmButtonType: {
      type: String,
      default: "",
    },
    cancelButtonText: {
      type: String,
      default: "",
    },
    cancelButtonType: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "el-icon-warning",
    },
    iconColor: {
      type: String,
      default: "",
    },
    hideIcon: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped></style>
