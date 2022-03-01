<template>
  <el-switch
    class="pa-switch"
    :class="[className]"
    v-bind="$attrs"
    v-on="$listeners"
  >
  </el-switch>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class PaSwitch extends Vue {
  @Prop({ default: "normal" }) textShowType?: string;
  get className() {
    let className = "";
    switch (this.textShowType) {
      case "inner":
        className = "pa-switch-inner-text";
        break;
      case "aside":
        className = "pa-switch-aside-text";
        break;
    }
    return className;
  }
}
</script>
