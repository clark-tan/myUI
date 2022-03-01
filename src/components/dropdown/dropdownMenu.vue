<template>
  <el-dropdown-menu class="pa-dropdown-menu" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-dropdown-menu>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class PaDropdownMenu extends Vue {}
</script>
