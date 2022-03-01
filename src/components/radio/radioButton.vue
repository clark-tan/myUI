<template>
  <el-radio-button class="pa-radio-button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-radio-button>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class PaRadioButton extends Vue {}
</script>
