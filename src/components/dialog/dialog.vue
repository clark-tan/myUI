<!--
 * @Autor: clark tan
 * @Date: 2021-05-18 17:17:53
 * @LastEditors: clark tan
 * @LastEditTime: 2021-05-24 14:40:40
 * @Description: 
-->
<template>
  <el-dialog
    class="pa-dialog"
    :title="title"
    :visible.sync="dialogVisible"
    :width="width"
    :fullscreen="fullscreen"
    :top="top"
    :modal="modal"
    :modal-append-to-body="modalAppendToBody"
    :append-to-body="appendToBody"
    :lock-scroll="lockScroll"
    :custom-class="customClass"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    :before-close="beforeClose"
    :center="center"
    :destroy-on-close="destroyOnClose"
  >
    <div class="el-dialog-content">
      <slot />
    </div>
    <div v-if="footerShow" class="el-dialog-footer">
      <pa-button @click="handleCancel">
        {{ cancelButtonText }}
      </pa-button>
      <pa-button type="primary" :loading="confirmLoading" @click="handleOK">
        {{ confirmButtonText }}
      </pa-button>
    </div>
  </el-dialog>
</template>
<script>
import Vue from "vue";
import { Dialog } from "element-ui";
Vue.use(Dialog);
export default {
  name: "PaDialog",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "400px",
    },
    cancelButtonText: {
      type: String,
      default: "取消",
    },
    confirmButtonText: {
      type: String,
      default: "确认",
    },
    footerShow: {
      type: Boolean,
      default: true,
    },
    confirmLoading: {
      type: Boolean,
      default: false,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    top: {
      type: String,
      default: "15vh",
    },
    modal: {
      type: Boolean,
      default: true,
    },
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    customClass: String,
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    beforeClose: {
      type: Function,
    },
    center: {
      type: Boolean,
      default: false,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  watch: {
    visible: {
      handler(val) {
        this.dialogVisible = val;
      },
      immediate: true,
    },
    dialogVisible: {
      handler(val) {
        this.$emit("update:visible", val);
      },
      immediate: true,
    },
  },
  mounted() {
    console.warn(
      "Dialog组件将在2.0版本后停止维护，请尽快切换至新组件DialogS!!!"
    );
  },
  methods: {
    handleOK() {
      this.$emit("ok");
    },
    handleCancel() {
      this.$emit("cancel");
    },
  },
};
</script>
<style lang="scss" scoped></style>
