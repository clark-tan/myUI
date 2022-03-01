<template>
  <el-drawer
    class="pa-drawer-s"
    ref="paDrawer"
    v-bind="$attrs"
    v-on="$listeners"
    :withHeader="false"
  >
    <div class="pa-drawer-body">
      <div v-if="withHeader" class="drawer-header">
        <span>{{ title }}</span>
        <pa-pop-confirm
          v-if="withPopconfirm"
          title="确定关闭"
          @confirm="paDraweBeforeClose"
        >
          <pa-button type="button" class="el-drawer__close-btn">
            <i class="el-dialog__close el-icon el-icon-close" />
          </pa-button>
        </pa-pop-confirm>
        <pa-button
          v-else
          type="button"
          class="el-drawer__close-btn"
          @click="paDraweBeforeClose"
        >
          <i class="el-dialog__close el-icon el-icon-close" />
        </pa-button>
      </div>
      <slot name="header" />
      <div class="drawer-body">
        <slot />
      </div>
      <div v-if="withFooter" class="drawer-footer">
        <pa-pop-confirm
          v-if="withPopconfirm"
          :title="`确定${cancelButtonText}`"
          @confirm="paDraweBeforeClose"
        >
          <pa-button type="button">
            {{ cancelButtonText }}
          </pa-button>
        </pa-pop-confirm>
        <pa-button v-else @click="paDraweBeforeClose">
          {{ cancelButtonText }}
        </pa-button>
        <pa-button type="primary" :loading="confirmLoading" @click="paHandleOK">
          {{ confirmButtonText }}
        </pa-button>
      </div>
      <slot name="footer" />
    </div>
  </el-drawer>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  name: "PaDrawerS",
})
export default class PaDrawerS extends Vue {
  @Prop({ default: "" }) title?: string;
  @Prop({ default: "取消" }) cancelButtonText?: string;
  @Prop({ default: "确定" }) confirmButtonText?: string;
  @Prop({ default: false }) confirmLoading?: boolean;
  @Prop({ default: true }) withHeader?: boolean;
  @Prop({ default: true }) withFooter?: boolean;
  @Prop({ default: true }) withPopconfirm?: boolean;
  paHandleOK() {
    this.$emit("ok");
  }
  paDrawerClose() {
    this.$emit("update:visible", false);
  }
  paDraweBeforeClose() {
    // 关闭前看是否有beforeClose事件存在
    const props: any = (this as any).$attrs;
    const beforeClose = props.beforeClose || props["before-close"];
    if (beforeClose) {
      beforeClose(this.paDrawerClose);
    } else {
      this.paDrawerClose();
    }
  }
  closeDrawer() {
    // Drawer Methods ----- closeDrawer
    const visible = (this as any).$attrs.visible;
    if (visible) {
      (this as any).$refs.paDrawer.closeDrawer();
    }
  }
}
</script>
