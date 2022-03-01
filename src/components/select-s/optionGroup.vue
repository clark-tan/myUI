<template>
  <el-option-group class="pa-option-group-s" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-option-group>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "PaOptionGroupS",
})
export default class PaOptionGroupS extends Vue {}
</script>
