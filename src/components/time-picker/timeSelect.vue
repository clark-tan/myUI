<template>
  <el-time-select
    class="pa-time-select"
    v-bind="$attrs"
    :size="size"
    v-on="$listeners"
  >
  </el-time-select>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class PaTimeSelect extends Vue {
  @Prop({ default: "small" }) size?: string;
}
</script>
