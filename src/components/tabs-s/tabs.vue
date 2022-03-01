<template>
  <el-tabs class="pa-tabs" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-tabs>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "PaTabsS",
})
export default class PaTabsS extends Vue {}
</script>
