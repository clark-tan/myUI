<template>
  <div class="layout-container" :class="{ 'has-breadcrumbs': showBreadcrumb }">
    <div
      v-if="showBreadcrumb"
      :class="[
        'breadcrumb-content',
        'part',
        {
          'breadcrumbs-layout': breadcrumbsLayout,
        },
      ]"
    >
      <slot name="breadcrumb">
        <pa-breadcrumb :breadcrumbs.sync="breadcrumbs" />
      </slot>
    </div>
    <div class="main-container">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class LayoutBase extends Vue {
  @Prop({ type: Boolean, default: true }) showBreadcrumb?: boolean;
  @Prop({ type: Array, default: () => [] }) breadcrumbs?: Array<any>;
  @Prop({ type: Boolean, default: false }) breadcrumbsLayout?: boolean;
}
</script>

<style scoped lang="less">
@bg-color: #edf1f7; // 背景颜色
@part-bg-color: #fff; // 每块背景颜色
@breadcrumb-height: 40px; // 面包屑的高度
.layout-container {
  height: 100%;
  width: 100%;
  padding: 0 16px;
  background: @bg-color;
}
.part {
  background: @part-bg-color;
}
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.has-breadcrumbs {
  > .main-container {
    height: calc(100% - @breadcrumb-height - 8px);
  }
}
// 面包屑
.breadcrumb-content {
  height: @breadcrumb-height;
  margin-bottom: 8px;
  padding-left: 24px;
  padding-top: 12px;
  box-sizing: border-box;
}
</style>
