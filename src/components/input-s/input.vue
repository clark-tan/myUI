<!--
 * @Autor: clark tan
 * @Date: 2021-12-31 11:58:46
 * @LastEditors: clark tan
 * @LastEditTime: 2022-01-06 16:00:10
 * @Description: 
-->
<template>
  <el-input class="pa-input-s" v-bind="$attrs" v-on="$listeners" :size="size">
    <slot slot="prefix" name="prefix" />
    <slot slot="suffix" name="suffix" />
    <slot slot="prepend" name="prepend" />
    <slot slot="append" name="append" />
  </el-input>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "PaInputS",
})
export default class PaInputS extends Vue {
  @Prop({ default: "small" }) size?: string;
}
</script>
