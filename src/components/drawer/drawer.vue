<template>
  <el-drawer
    class="pa-drawer"
    :title="title"
    :visible.sync="drawerVisible"
    :direction="direction"
    :append-to-body="appendToBody"
    :close-on-press-escape="closeOnPressEscape"
    :destroy-on-close="destroyOnClose"
    :modal="modal"
    :modal-append-to-body="modalAppendToBody"
    :show-close="showClose"
    :size="size"
    :wrapper-closable="wrapperClosable"
    :with-header="false"
    @open="open"
    @opened="opened"
    @close="close"
    @closed="closed"
  >
    <div class="drawer-box">
      <div v-if="withHeader" class="drawer-header">
        <span>{{ title }}</span>
        <pa-pop-confirm
          v-if="withPopconfirm"
          title="确定关闭"
          @confirm="confirm"
        >
          <button type="button" class="el-drawer__close-btn">
            <i class="el-dialog__close el-icon el-icon-close" />
          </button>
        </pa-pop-confirm>
        <button
          v-else
          type="button"
          class="el-drawer__close-btn"
          @click="confirm"
        >
          <i class="el-dialog__close el-icon el-icon-close" />
        </button>
      </div>
      <div class="drawer-body">
        <slot />
      </div>
      <div v-if="withFooter" class="drawer-footer">
        <pa-button @click="handleCancel">
          {{ cancelButtonText }}
        </pa-button>
        <pa-button type="primary" :loading="confirmLoading" @click="handleOK">
          {{ confirmButtonText }}
        </pa-button>
      </div>
    </div>
  </el-drawer>
</template>
<script>
import Vue from "vue";
import { Drawer } from "element-ui";
// import { Popconfirm } from 'element-ui';
Vue.use(Drawer);
// Vue.use(Popconfirm);
export default {
  name: "PaDrawer",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: "rtl",
    },
    title: {
      type: String,
      default: "标题",
    },
    withFooter: {
      type: Boolean,
      default: true,
    },
    cancelButtonText: {
      type: String,
      default: "取消",
    },
    confirmButtonText: {
      type: String,
      default: "确定",
    },
    confirmLoading: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    customClass: String,
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    size: {
      type: [Number, String],
      default: 400,
    },
    wrapperClosable: {
      type: Boolean,
      default: false,
    },
    withHeader: {
      type: Boolean,
      default: true,
    },
    withPopconfirm: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      drawerVisible: false,
    };
  },
  watch: {
    visible: {
      handler(val) {
        this.drawerVisible = val;
      },
      immediate: true,
    },
    drawerVisible: {
      handler(val) {
        this.$emit("update:visible", val);
      },
      immediate: true,
    },
  },
  mounted() {
    console.warn(
      "Drawer组件将在2.0版本后停止维护，请尽快切换至新组件DrawerS!!!"
    );
  },
  methods: {
    handleOK() {
      this.$emit("ok");
    },
    handleCancel() {
      this.$emit("cancel");
    },
    open() {
      this.$emit("open");
    },
    opened() {
      this.$emit("opened");
    },
    close() {
      this.$emit("close");
    },
    closed() {
      this.$emit("closed");
    },
    confirm() {
      this.drawerVisible = false;
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped></style>
