<template>
  <el-option class="pa-option-s" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-option>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "PaOptionS",
})
export default class PaOptionS extends Vue {}
</script>
