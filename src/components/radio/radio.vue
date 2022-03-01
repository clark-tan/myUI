<template>
  <el-radio class="pa-radio" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-radio>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class PaRadio extends Vue {}
</script>
