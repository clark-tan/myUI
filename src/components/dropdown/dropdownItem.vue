<template>
  <el-dropdown-item class="pa-dropdown-item" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-dropdown-item>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class PaDropdownItem extends Vue {}
</script>
