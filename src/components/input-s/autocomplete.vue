<template>
  <el-autocomplete class="pa-autocomplete" v-bind="$attrs" v-on="$listeners">
    <slot slot="suffix" name="suffix" />
    <slot :item="item" slot-scope="{ item }" />
  </el-autocomplete>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class PaAutocomplete extends Vue {}
</script>
