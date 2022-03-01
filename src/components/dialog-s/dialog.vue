<!--
 * @Autor: clark tan
 * @Date: 2021-05-18 17:17:53
 * @LastEditors: clark tan
 * @LastEditTime: 2021-05-24 14:40:40
 * @Description: 
-->
<template>
  <el-dialog class="pa-dialog-s" v-bind="$attrs" v-on="$listeners">
    <!-- <div class="pa-dialog-body"> -->
    <slot />
    <!-- </div> -->

    <template v-if="footerShow" slot="footer">
      <pa-button @click="paDialogBeforeClose">
        {{ cancelButtonText }}
      </pa-button>
      <pa-button type="primary" :loading="confirmLoading" @click="paHandleOK">
        {{ confirmButtonText }}
      </pa-button>
    </template>
    <slot slot="footer" name="footer" />
  </el-dialog>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  name: "PaDialogS",
})
export default class PaDialogS extends Vue {
  @Prop({ default: "取消" }) cancelButtonText?: string;
  @Prop({ default: "确定" }) confirmButtonText?: string;
  @Prop({ default: false }) confirmLoading?: boolean;
  @Prop({ default: true }) footerShow?: boolean;
  paHandleOK() {
    this.$emit("ok");
  }
  paDialogClose() {
    this.$emit("update:visible", false);
  }
  paDialogBeforeClose() {
    // 关闭前看是否有beforeClose事件存在
    const props: any = (this as any).$attrs;
    const beforeClose = props.beforeClose || props["before-close"];
    if (beforeClose) {
      beforeClose(this.paDialogClose);
    } else {
      this.paDialogClose();
    }
  }
}
</script>
