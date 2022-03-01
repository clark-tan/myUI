<!--
 * @Autor: clark tan
 * @Date: 2021-12-27 13:31:18
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-11 16:44:13
 * @Description: 
-->
<template>
  <el-dropdown
    class="pa-dropdown"
    :size="size"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <slot name="dropdown" />
  </el-dropdown>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class PaDropdown extends Vue {
  @Prop({ default: "small" }) size?: string;
}
</script>
