<template>
  <el-time-picker
    class="pa-time-picker"
    v-bind="$attrs"
    v-on="$listeners"
    :size="size"
  >
  </el-time-picker>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class PaTimePicker extends Vue {
  @Prop({ default: "small" }) size?: string;
}
</script>
