<template>
  <el-select
    class="pa-select-s"
    v-bind="$attrs"
    v-on="$listeners"
    :size="size"
    :popper-class="`pa-select-dropdown-s ${popperClass}`"
  >
    <slot slot="prefix" name="prefix" />
    <slot />
  </el-select>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  name: "PaSelectS",
})
export default class PaSelectS extends Vue {
  @Prop({ default: "small" }) size?: string;
  @Prop({ default: "" }) popperClass?: string;
}
</script>
