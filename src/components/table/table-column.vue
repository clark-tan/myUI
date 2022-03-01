<template>
  <div>
    <vxe-table-column
      v-bind="$attrs"
      show-overflow
      show-header-overflow
      show-footer-overflow
    >
      <template v-if="$scopedSlots['default']" #default="slotProps">
        <slot name="default" v-bind="slotProps" />
      </template>
    </vxe-table-column>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {},
})
export default class PaTableColumnOld extends Vue {}
</script>
